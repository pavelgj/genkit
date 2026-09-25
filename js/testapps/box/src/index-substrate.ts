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

// Genkit in a Box, substrate edition: boxed agents taking turns on shared
// workers.
//
// The whole agent (tools, conversation history, the generate loop) runs in
// the box (src/boxed-substrate.ts), one substrate Actor per chat session. This
// process only routes: it holds no model, no tools, and no state. Model calls
// go from the box to the model gateway (src/gateway-main.ts, in-cluster),
// which holds the API key.
//
// Workers are freed two ways:
// - between turns: `whenIdle: 'suspend'` snapshots a session's actor once its
//   turn ends, so many chats share a small pool, taking turns.
// - during model calls, for background tasks: the gateway pauses the actor
//   while the model works (seconds, usually) and resumes it when the answer
//   is in. A paused agent holds no worker, so other agents run meanwhile.
//
// If every worker is busy, a turn waits (up to readyTimeoutMs) for one.
//
// Setup (once, against a local kind cluster; see README):
//   GEMINI_API_KEY=... ./substrate/setup.sh
// Run:
//   source substrate/.env && pnpm start:substrate

import { box } from '@genkit-ai/box';
import {
  grpcSubstrateControl,
  substrateRunner,
  type SubstrateRef,
} from '@genkit-ai/box/substrate';
import { expressHandler } from '@genkit-ai/express';
import express from 'express';
import { z } from 'genkit';
import { genkit, type SessionSnapshot } from 'genkit/beta';
import { randomUUID } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import {
  MODEL_GATEWAY_CONTEXT_KEY,
  type ModelGatewayContext,
} from './model-gateway/protocol.js';
import { mintCallerToken } from './model-gateway/token.js';
import { buildDemoState } from './substrate-state.js';

const ai = genkit({});

function env(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `${name} is not set; run substrate/setup.sh and source substrate/.env`
    );
  }
  return value;
}

const TEMPLATE = env('SUBSTRATE_TEMPLATE');
const ATESPACE = TEMPLATE.split('/')[0];

// Created here (not by the runner) so the dashboard can query ate-api with
// the same connection.
const control = grpcSubstrateControl({
  endpoint: env('SUBSTRATE_API'),
  ca: readFileSync(env('SUBSTRATE_CA')),
  // Re-read per call, so a refreshed token file is picked up.
  token: () => readFileSync(env('SUBSTRATE_TOKEN'), 'utf8'),
});

const runner = substrateRunner({
  control,
  routerUrl: env('SUBSTRATE_ROUTER'),
  template: TEMPLATE,
  // Free the worker as soon as a turn ends. The short grace covers
  // back-to-back calls on the same session.
  whenIdle: 'suspend',
  idleGraceMs: 1_000,
  // The box may talk to the model gateway, and nothing else: no API key in
  // the box, and a prompt-injected runShell can't reach the internet.
  egress: [{ hostnames: [new URL(env('MODEL_GATEWAY_URL')).hostname] }],
});

// Caller tokens tell the gateway which actor a model call comes from (so it
// knows what to pause). Minted here, where the actor ref is known.
const GATEWAY_SECRET = readFileSync(env('MODEL_GATEWAY_SECRET'), 'utf8').trim();

function gatewayContext(sessionId: string, park: boolean) {
  const gw: ModelGatewayContext = {
    token: mintCallerToken(GATEWAY_SECRET, runner.actorFor(sessionId)),
    park,
  };
  return { sessionId, [MODEL_GATEWAY_CONTEXT_KEY]: gw };
}

const sandbox = box(ai, {
  name: 'substrate-agents',
  runner,
  // One actor per session. The session id is ours (synthetic), passed in the
  // call context by the flows below.
  route: (_req, ctx) => String(ctx?.sessionId ?? 'default'),
  // The runner does the idling; box core should never reclaim the actor.
  retention: {},
});

// Declared from a spec: the implementation lives in the box. Lets you poke a
// session's sandbox directly, without going through the model.
const runShell = sandbox.tool({
  name: 'runShell',
  inputSchema: z.object({ cmd: z.string() }),
  outputSchema: z.object({
    stdout: z.string().optional(),
    error: z.string().optional(),
  }),
});

const SessionInput = z.object({
  sessionId: z
    .string()
    .optional()
    .describe('Omit to start a new session; pass the returned id to continue.'),
});

/**
 * One chat turn with the boxed agent. The session id routes the turn to the
 * session's actor, and the boxed agent keys its history by the same id.
 */
export const chatWithAgent = ai.defineFlow(
  {
    name: 'chatWithAgent',
    inputSchema: SessionInput.extend({
      message: z
        .string()
        .default('Write a haiku to notes.txt, then show me the file.'),
    }),
    outputSchema: z.object({ sessionId: z.string(), text: z.string() }),
    streamSchema: z.string(),
  },
  async ({ sessionId = randomUUID(), message }, { sendChunk }) => {
    // TODO: pass the context per call once AgentChat.send accepts it. Until
    // then routing context is fixed per proxy, and proxies are cheap.
    // Foreground turns stream, so the gateway never pauses them.
    const agent = sandbox.agent({
      name: 'sandboxAgent',
      context: gatewayContext(sessionId, false),
    });
    const turn = agent.chat({ sessionId }).sendStream(message);
    for await (const chunk of turn.stream) {
      if (chunk.text) sendChunk(chunk.text);
    }
    return { sessionId, text: (await turn.response).text };
  }
);

// ---------------------------------------------------------------------------
// Background tasks: detached agent turns. The call that starts one returns as
// soon as the turn is queued, so no inbound connection is open while the
// agent works, and the gateway can pause the actor during model calls.
// ---------------------------------------------------------------------------

type TaskStatus = NonNullable<SessionSnapshot['status']> | 'unknown';

interface TaskView {
  sessionId: string;
  snapshotId: string;
  status: TaskStatus;
  /** The agent's final reply, once completed. */
  text?: string;
  error?: string;
  startedAt: number;
  finishedAt?: number;
}

/** Latest known state of each task, by session (one task per session at a time). */
const tasks = new Map<string, TaskView>();

const TERMINAL: ReadonlySet<TaskStatus> = new Set([
  'completed',
  'failed',
  'aborted',
  'expired',
]);

/**
 * Follows a task to the end, then lets the box be suspended.
 *
 * Status lives in the box (InMemorySessionStore), and any request through the
 * router resumes a paused actor. So each poll first asks substrate whether
 * the actor is PAUSED; if it is, the agent is waiting on the model and the
 * poll is skipped rather than waking it up.
 *
 * TODO: keep sessions in an external store (e.g. Firestore/Postgres) shared by
 * host and box. Status reads then never touch the actor, the PAUSED check
 * goes away, and heartbeats keep working while the box is paused.
 */
async function watchTask(task: TaskView, release: () => void): Promise<void> {
  const actor = runner.actorFor(task.sessionId);
  const agent = sandbox.agent({
    name: 'sandboxAgent',
    context: { sessionId: task.sessionId },
  });
  // A failed poll is not a failed task. The PAUSED check races the gateway
  // (it can pause the actor right after), and the poll then fails: cut off
  // mid-pause, or the router can't resume the actor while the pool is full.
  // The runner resumes it properly (waiting for a worker) on the next try.
  let pollErrors = 0;
  try {
    while (!TERMINAL.has(task.status)) {
      await new Promise((r) => setTimeout(r, 1_000));
      if (await isPaused(actor)) continue;
      let snap: SessionSnapshot | undefined;
      try {
        snap = await agent.getSnapshot(task.snapshotId);
        pollErrors = 0;
      } catch (e) {
        if (++pollErrors >= 10) throw e;
        continue;
      }
      task.status = snap?.status ?? 'unknown';
      if (snap?.status === 'completed') {
        const last = snap.state?.messages?.at(-1);
        task.text = last?.content.map((p) => p.text ?? '').join('');
      } else if (snap?.status === 'failed') {
        task.error = snap.error?.message ?? 'failed';
      } else if (!snap) {
        task.status = 'failed';
        task.error = 'snapshot not found (box restarted?)';
      }
    }
  } catch (e) {
    task.status = 'failed';
    task.error = String(e);
  } finally {
    task.finishedAt = Date.now();
    release(); // whenIdle may suspend the box now
  }
}

async function isPaused(actor: SubstrateRef): Promise<boolean> {
  const state = (await control.getActor(actor)).status?.state;
  return state === 'ACTOR_STATE_PAUSED' || state === 'ACTOR_STATE_PAUSING';
}

/** Starts a background task in a session's box. */
export const startTask = ai.defineFlow(
  {
    name: 'startTask',
    inputSchema: SessionInput.extend({
      message: z
        .string()
        .default(
          'Write a limerick about sandboxes to limerick.txt, then count its words with wc.'
        ),
    }),
    outputSchema: z.object({ sessionId: z.string(), snapshotId: z.string() }),
  },
  async ({ sessionId = randomUUID(), message }) => {
    // Held until the watcher sees the task end: the detach call below
    // returns right away, and whenIdle must not suspend a working agent.
    const release = runner.hold(sessionId);
    try {
      const agent = sandbox.agent({
        name: 'sandboxAgent',
        // park: the gateway may pause the actor during model calls.
        // PARK=0 turns that off, to compare against.
        context: gatewayContext(sessionId, process.env.PARK !== '0'),
      });
      const detached = await agent.chat({ sessionId }).detach(message);
      const task: TaskView = {
        sessionId,
        snapshotId: detached.snapshotId,
        status: 'pending',
        startedAt: Date.now(),
      };
      tasks.set(sessionId, task);
      void watchTask(task, release);
      return { sessionId, snapshotId: task.snapshotId };
    } catch (e) {
      release();
      throw e;
    }
  }
);

/** A session's latest background task, as last seen by its watcher. */
export const getTask = ai.defineFlow(
  {
    name: 'getTask',
    inputSchema: z.object({ sessionId: z.string() }),
    outputSchema: z
      .object({
        sessionId: z.string(),
        snapshotId: z.string(),
        status: z.string(),
        text: z.string().optional(),
        error: z.string().optional(),
        startedAt: z.number(),
        finishedAt: z.number().optional(),
      })
      .nullable(),
  },
  async ({ sessionId }) => tasks.get(sessionId) ?? null
);

/** Runs a command in a session's sandbox directly, no model involved. */
export const runInSandbox = ai.defineFlow(
  {
    name: 'runInSandbox',
    inputSchema: SessionInput.extend({
      cmd: z.string().default('ls -la /tmp && cat /tmp/notes.txt'),
    }),
    outputSchema: z.object({
      sessionId: z.string(),
      stdout: z.string().optional(),
      error: z.string().optional(),
    }),
  },
  async ({ sessionId = randomUUID(), cmd }) => ({
    sessionId,
    ...(await runShell({ cmd }, { context: { sessionId } })),
  })
);

// ---------------------------------------------------------------------------
// Web UI server: the flows, a pool/session state endpoint, and the built UI
// (web/dist). Also runs under `genkit start`, next to the Dev UI.
// ---------------------------------------------------------------------------

const app = express();
app.use(express.json());
app.post('/api/chatWithAgent', expressHandler(chatWithAgent));
app.post('/api/runInSandbox', expressHandler(runInSandbox));
app.post('/api/startTask', expressHandler(startTask));
app.post('/api/getTask', expressHandler(getTask));

app.get('/api/state', async (_req, res) => {
  try {
    const [workers, actors] = await Promise.all([
      control.listWorkers(),
      control.listActors(ATESPACE),
    ]);
    res.json(
      buildDemoState({
        pool: ATESPACE,
        workers,
        actors,
        boxes: runner.boxes(),
        tasks,
        now: Date.now(),
      })
    );
  } catch (e) {
    res.status(502).json({ error: `substrate: ${e}` });
  }
});

// Cwd-relative (like the podman variant) so this compiles to CommonJS as-is.
const webDist = path.resolve(process.cwd(), 'web', 'dist');
if (existsSync(webDist)) {
  app.use(express.static(webDist));
}

const PORT = Number(process.env.PORT ?? 8080);
app.listen(PORT, () => {
  console.log(
    existsSync(webDist)
      ? `Demo UI: http://localhost:${PORT}`
      : `API on http://localhost:${PORT} (UI not built: pnpm build:web, or pnpm web:dev)`
  );
});

// No shutdown hook on purpose: between turns every session's actor is already
// suspended, so a killed dev server leaves only snapshots behind, not busy
// workers. Anything caught mid-turn is snapshotted on the next start
// (reclaimStale). Sessions are kept, so a restarted server continues them;
// delete them with:
//   kubectl ate get actors -a genkit-box
//   kubectl ate delete actor <name> -a genkit-box
