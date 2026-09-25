/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// The model gateway: runs model calls for boxed agents, so the API key lives
// here and never in a box. Parked calls pause the calling actor while the
// model works (see parker.ts), freeing its worker for other agents.
//
//   const gateway = modelGatewayServer(ai, { secret, parker, allowModels });
//   app.use(gateway.router);
//
// Requests run the model action directly with the box's GenerateRequest: the
// generate loop (tools, retries, history) stays in the box.

import type { SubstrateRef } from '@genkit-ai/box/substrate';
import express, { type Request, type Response } from 'express';
import {
  GenkitError,
  type GenerateRequestData,
  type GenerateResponseData,
  type Genkit,
} from 'genkit';
import type { ModelAction } from 'genkit/model';
import type { Parker } from './parker.js';
import type {
  CallStatus,
  GenerateBody,
  GenerateLine,
  StartCallBody,
} from './protocol.js';
import { verifyCallerToken } from './token.js';

export interface ModelGatewayServerOptions {
  /** HMAC secret shared with the host that mints caller tokens. */
  secret: string;
  /** Pauses/wakes callers of parked calls. Omit to never pause. */
  parker?: Parker;
  /** Models callers may use, e.g. `['googleai/gemini-flash-latest']`. */
  allowModels: string[];
  /** How long a settled call's result is kept for the caller. Default 10min. */
  retainMs?: number;
  log?: (msg: string) => void;
}

interface Call {
  owner: SubstrateRef;
  status: CallStatus;
  settled: Promise<void>;
  expiresAt?: number;
}

const MAX_WAIT_MS = 30_000;

export function modelGatewayServer(
  ai: Genkit,
  options: ModelGatewayServerOptions
) {
  const retainMs = options.retainMs ?? 10 * 60_000;
  const log = options.log ?? (() => {});
  const allowed = new Set(options.allowModels);
  const calls = new Map<string, Call>();

  const gc = setInterval(() => {
    const now = Date.now();
    for (const [id, call] of calls) {
      if (call.expiresAt !== undefined && call.expiresAt < now)
        calls.delete(id);
    }
  }, 60_000);
  gc.unref();

  async function lookupModel(name: string): Promise<ModelAction> {
    if (!allowed.has(name)) {
      throw new GenkitError({
        status: 'PERMISSION_DENIED',
        message: `model '${name}' is not allowed by this gateway`,
      });
    }
    const action = await ai.registry.lookupAction(`/model/${name}`);
    if (!isModelAction(action)) {
      throw new GenkitError({
        status: 'NOT_FOUND',
        message: `no model '${name}'`,
      });
    }
    return action;
  }

  async function generate(
    name: string,
    request: GenerateRequestData,
    onChunk?: (chunk: GenerateLine) => void
  ): Promise<GenerateResponseData> {
    const model = await lookupModel(name);
    const started = Date.now();
    try {
      const { result } = await model.run(request, {
        onChunk: onChunk && ((chunk) => onChunk({ chunk })),
      });
      log(
        `model ${name}: ${Date.now() - started}ms${onChunk ? ' (streamed)' : ''}`
      );
      return result;
    } catch (e) {
      log(`model ${name}: failed after ${Date.now() - started}ms: ${e}`);
      throw e;
    }
  }

  /** The caller's actor, from its bearer token; responds 401 if invalid. */
  function caller(req: Request, res: Response): SubstrateRef | undefined {
    const token = /^Bearer (.+)$/.exec(req.get('authorization') ?? '')?.[1];
    const claims = token && verifyCallerToken(options.secret, token);
    if (!claims) {
      res
        .status(401)
        .json(errorBody('UNAUTHENTICATED', 'invalid caller token'));
      return undefined;
    }
    return { atespace: claims.atespace, name: claims.name };
  }

  /** Starts a call; the caller's actor is paused while it runs if `park`. */
  function start(owner: SubstrateRef, body: StartCallBody): Call {
    const call: Call = {
      owner,
      status: { status: 'pending' },
      settled: Promise.resolve(),
    };
    const work = generate(body.model, body.request).then(
      (response) => {
        call.status = { status: 'done', response };
      },
      (e: unknown) => {
        call.status = { status: 'error', error: toError(e) };
      }
    );
    call.settled = (
      body.park && options.parker ? options.parker.track(owner, work) : work
    ).finally(() => {
      call.expiresAt = Date.now() + retainMs;
    });
    return call;
  }

  const router = express.Router();
  router.use(express.json({ limit: '20mb' }));

  // Start a parked call. Idempotent: retrying the same id returns that call.
  router.put('/v1/calls/:id', (req, res) => {
    const owner = caller(req, res);
    if (!owner) return;
    const body = req.body as Partial<StartCallBody>;
    if (typeof body.model !== 'string' || typeof body.request !== 'object') {
      res
        .status(400)
        .json(errorBody('INVALID_ARGUMENT', 'model and request are required'));
      return;
    }
    const key = callKey(owner, req.params.id);
    let call = calls.get(key);
    if (!call) {
      if (!allowed.has(body.model)) {
        res
          .status(403)
          .json(
            errorBody(
              'PERMISSION_DENIED',
              `model '${body.model}' is not allowed`
            )
          );
        return;
      }
      call = start(owner, body as StartCallBody);
      calls.set(key, call);
      log(
        `call ${req.params.id.slice(0, 8)} from ${owner.name}: ${body.model}${body.park ? ' (parked)' : ''}`
      );
    }
    res.status(202).json(call.status);
  });

  // Long-poll a call's status.
  router.get('/v1/calls/:id', async (req, res) => {
    const owner = caller(req, res);
    if (!owner) return;
    const call = calls.get(callKey(owner, req.params.id));
    if (!call) {
      res.status(404).json(errorBody('NOT_FOUND', 'no such call'));
      return;
    }
    const waitMs = Math.min(Number(req.query.waitMs ?? 0) || 0, MAX_WAIT_MS);
    if (call.status.status === 'pending' && waitMs > 0) {
      await Promise.race([
        call.settled,
        new Promise((r) => setTimeout(r, waitMs)),
      ]);
    }
    res.json(call.status);
  });

  // Streaming call (foreground turns): NDJSON chunks, then the response.
  router.post('/v1/generate', async (req, res) => {
    const owner = caller(req, res);
    if (!owner) return;
    const body = req.body as Partial<GenerateBody>;
    if (typeof body.model !== 'string' || typeof body.request !== 'object') {
      res
        .status(400)
        .json(errorBody('INVALID_ARGUMENT', 'model and request are required'));
      return;
    }
    res.setHeader('content-type', 'application/x-ndjson');
    const write = (line: GenerateLine) =>
      res.write(JSON.stringify(line) + '\n');
    try {
      write({ response: await generate(body.model, body.request, write) });
    } catch (e) {
      write({ error: toError(e) });
    }
    res.end();
  });

  router.get('/healthz', (_req, res) => {
    res.json({ ok: true });
  });

  return {
    router,
    /** Calls still running, per caller actor (for dashboards). */
    pendingCalls(): Array<{ actor: SubstrateRef; calls: number }> {
      const byActor = new Map<string, { actor: SubstrateRef; calls: number }>();
      for (const call of calls.values()) {
        if (call.status.status !== 'pending') continue;
        const key = `${call.owner.atespace}/${call.owner.name}`;
        const entry = byActor.get(key) ?? { actor: call.owner, calls: 0 };
        entry.calls++;
        byActor.set(key, entry);
      }
      return [...byActor.values()];
    },
    close() {
      clearInterval(gc);
    },
  };
}

/** Registry lookups are untyped; model actions are the ones of type `model`. */
function isModelAction(action: unknown): action is ModelAction {
  return (
    typeof action === 'function' &&
    (action as Partial<ModelAction>).__action?.actionType === 'model'
  );
}

/**
 * Calls are scoped to their caller: a caller can only see its own, and ids
 * only need to be unique per caller. That matters here: actors are restored
 * from a shared golden snapshot, so cloned processes can generate identical
 * "random" ids (see the client).
 */
function callKey(owner: SubstrateRef, id: string): string {
  return `${owner.atespace}/${owner.name}/${id}`;
}

function toError(e: unknown): { status: string; message: string } {
  if (e instanceof GenkitError) return { status: e.status, message: e.message };
  return {
    status: 'INTERNAL',
    message: e instanceof Error ? e.message : String(e),
  };
}

function errorBody(status: string, message: string) {
  return { error: { status, message } };
}
