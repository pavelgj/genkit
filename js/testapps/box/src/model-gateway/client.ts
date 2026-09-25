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

// The boxed side of the model gateway: a Genkit plugin whose models forward
// to the gateway. `gateway/googleai/gemini-flash-latest` calls
// `googleai/gemini-flash-latest` on the gateway, which holds the API key.
//
//   const ai = genkit({ plugins: [modelGateway({ url })] });
//   ai.defineAgent({ model: 'gateway/googleai/gemini-flash-latest', ... });
//
// Per call, the host-supplied action context decides the mode (see
// ModelGatewayContext): background turns use parked calls (start, then
// long-poll; the gateway may pause this actor meanwhile), everything else
// streams.
//
// Parked calls assume any connection can die at any moment: a pause severs
// all of the actor's sockets (in-flight requests fail with "socket hang up"
// or "other side closed"; pooled keep-alive sockets happen to survive, but
// nothing relies on that). So every request uses a fresh connection, has a
// timeout, and is retried on network errors. The gateway is idempotent
// (client-chosen call ids), so a retry never starts a second model call.

import {
  GenkitError,
  type ActionContext,
  type GenerateResponseChunkData,
  type GenerateResponseData,
  type StatusName,
} from 'genkit';
import { genkitPluginV2, model } from 'genkit/plugin';
import { randomUUID } from 'node:crypto';
import http from 'node:http';
import https from 'node:https';
import {
  MODEL_GATEWAY_CONTEXT_KEY,
  type CallStatus,
  type GenerateBody,
  type GenerateLine,
  type ModelGatewayContext,
  type StartCallBody,
} from './protocol.js';

export interface ModelGatewayOptions {
  /** Gateway base URL, e.g. `http://model-gateway.genkit-box.svc`. */
  url: string;
  /** Plugin (and model name) prefix. Default `gateway`. */
  name?: string;
  /** Long-poll window per status request. Default 15s. */
  pollWaitMs?: number;
}

export function modelGateway(options: ModelGatewayOptions) {
  const prefix = options.name ?? 'gateway';
  const base = options.url.replace(/\/$/, '');
  const pollWaitMs = options.pollWaitMs ?? 15_000;

  return genkitPluginV2({
    name: prefix,
    resolve: (actionType, name) => {
      if (actionType !== 'model') return undefined;
      const target = name.startsWith(`${prefix}/`)
        ? name.slice(prefix.length + 1)
        : name;
      return model(
        {
          name: target,
          supports: {
            multiturn: true,
            tools: true,
            media: true,
            systemRole: true,
            output: ['text', 'json'],
          },
        },
        async (
          request,
          { context, sendChunk, streamingRequested, abortSignal }
        ) => {
          const gw = gatewayContext(context);
          if (gw.park) {
            return parkedCall(
              base,
              gw.token,
              { model: target, request, park: true },
              pollWaitMs,
              abortSignal
            );
          }
          return streamingCall(
            base,
            gw.token,
            { model: target, request },
            streamingRequested ? sendChunk : undefined,
            abortSignal
          );
        }
      );
    },
  });
}

/** The host-supplied gateway settings, from the (propagated) action context. */
function gatewayContext(context?: ActionContext): ModelGatewayContext {
  const gw = context?.[MODEL_GATEWAY_CONTEXT_KEY] as
    | Partial<ModelGatewayContext>
    | undefined;
  if (!gw?.token) {
    throw new GenkitError({
      status: 'UNAUTHENTICATED',
      message:
        `model gateway: no caller token in the action context ` +
        `('${MODEL_GATEWAY_CONTEXT_KEY}.token'); the host must pass one.`,
    });
  }
  return { token: gw.token, park: gw.park === true };
}

// ---------------------------------------------------------------------------
// Parked calls
// ---------------------------------------------------------------------------

async function parkedCall(
  base: string,
  token: string,
  body: StartCallBody,
  pollWaitMs: number,
  signal: AbortSignal
): Promise<GenerateResponseData> {
  // disableEntropyCache: Node pre-generates random bytes for UUIDs, and that
  // cache is part of the golden snapshot every actor is restored from, so
  // cloned actors would otherwise produce the same "random" ids.
  const url = `${base}/v1/calls/${randomUUID({ disableEntropyCache: true })}`;
  // Start (idempotent), then long-poll until settled. Both retry through
  // dropped connections: that is what a pause looks like from in here.
  let status = await retrying(signal, () =>
    request<CallStatus>('PUT', url, token, body, 10_000, signal)
  );
  while (status.status === 'pending') {
    status = await retrying(signal, () =>
      request<CallStatus>(
        'GET',
        `${url}?waitMs=${pollWaitMs}`,
        token,
        undefined,
        pollWaitMs + 10_000,
        signal
      )
    );
  }
  if (status.status === 'error') {
    throw new GenkitError({
      status: asStatus(status.error.status),
      message: status.error.message,
    });
  }
  return status.response;
}

/** Retries `fn` on network errors (not on HTTP errors), with backoff. */
async function retrying<T>(
  signal: AbortSignal,
  fn: () => Promise<T>
): Promise<T> {
  let delay = 200;
  for (let attempt = 1; ; attempt++) {
    try {
      return await fn();
    } catch (e) {
      if (signal.aborted || !(e instanceof NetworkError) || attempt >= 30) {
        throw e;
      }
      await new Promise((r) => setTimeout(r, delay));
      delay = Math.min(delay * 2, 2_000);
    }
  }
}

/** A dropped/timed-out connection: safe to retry (requests are idempotent). */
class NetworkError extends Error {}

/** One request on a fresh connection (`agent: false`: no socket reuse). */
function request<T>(
  method: string,
  url: string,
  token: string,
  body: unknown,
  timeoutMs: number,
  signal: AbortSignal
): Promise<T> {
  const u = new URL(url);
  const lib = u.protocol === 'https:' ? https : http;
  const payload = body === undefined ? undefined : JSON.stringify(body);
  return new Promise<T>((resolve, reject) => {
    const req = lib.request(
      u,
      {
        method,
        agent: false,
        signal,
        timeout: timeoutMs,
        headers: {
          authorization: `Bearer ${token}`,
          ...(payload !== undefined && {
            'content-type': 'application/json',
            'content-length': Buffer.byteLength(payload),
          }),
        },
      },
      (res) => {
        let text = '';
        res.setEncoding('utf8');
        res.on('data', (d: string) => (text += d));
        res.on('error', (e) => reject(new NetworkError(e.message)));
        res.on('end', () => {
          const code = res.statusCode ?? 500;
          if (!res.complete) {
            reject(new NetworkError('response cut short'));
          } else if (code >= 400) {
            reject(httpError(code, text));
          } else {
            try {
              resolve(JSON.parse(text) as T);
            } catch {
              reject(
                new NetworkError(`unparseable response: ${text.slice(0, 200)}`)
              );
            }
          }
        });
      }
    );
    req.on('timeout', () => req.destroy(new NetworkError('request timed out')));
    req.on('error', (e) =>
      reject(
        signal.aborted || e instanceof NetworkError
          ? e
          : new NetworkError(e.message)
      )
    );
    req.end(payload);
  });
}

// ---------------------------------------------------------------------------
// Streaming calls (foreground turns)
// ---------------------------------------------------------------------------

async function streamingCall(
  base: string,
  token: string,
  body: GenerateBody,
  sendChunk: ((chunk: GenerateResponseChunkData) => void) | undefined,
  signal: AbortSignal
): Promise<GenerateResponseData> {
  const res = await fetch(`${base}/v1/generate`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
    signal,
  });
  if (!res.ok || !res.body) {
    throw httpError(res.status, await res.text());
  }
  const decoder = new TextDecoder();
  const reader = res.body.getReader();
  let buffered = '';
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffered += decoder.decode(value, { stream: true });
    let nl: number;
    while ((nl = buffered.indexOf('\n')) >= 0) {
      const line = buffered.slice(0, nl).trim();
      buffered = buffered.slice(nl + 1);
      if (!line) continue;
      const msg = JSON.parse(line) as GenerateLine;
      if ('chunk' in msg) {
        sendChunk?.(msg.chunk);
      } else if ('response' in msg) {
        return msg.response;
      } else {
        throw new GenkitError({
          status: asStatus(msg.error.status),
          message: msg.error.message,
        });
      }
    }
  }
  throw new GenkitError({
    status: 'UNAVAILABLE',
    message: 'model gateway: stream ended without a response',
  });
}

// ---------------------------------------------------------------------------

function httpError(code: number, body: string): GenkitError {
  let message = body.slice(0, 500);
  let status: StatusName =
    code === 401 || code === 403
      ? 'PERMISSION_DENIED'
      : code === 404
        ? 'NOT_FOUND'
        : code === 429
          ? 'RESOURCE_EXHAUSTED'
          : code >= 500
            ? 'UNAVAILABLE'
            : 'INVALID_ARGUMENT';
  try {
    const parsed = JSON.parse(body) as {
      error?: { status?: string; message?: string };
    };
    if (parsed.error?.message) message = parsed.error.message;
    if (parsed.error?.status) status = asStatus(parsed.error.status);
  } catch {
    // Not JSON: keep the raw body.
  }
  return new GenkitError({ status, message: `model gateway: ${message}` });
}

const STATUSES: ReadonlySet<string> = new Set<StatusName>([
  'CANCELLED',
  'UNKNOWN',
  'INVALID_ARGUMENT',
  'DEADLINE_EXCEEDED',
  'NOT_FOUND',
  'ALREADY_EXISTS',
  'PERMISSION_DENIED',
  'UNAUTHENTICATED',
  'RESOURCE_EXHAUSTED',
  'FAILED_PRECONDITION',
  'ABORTED',
  'OUT_OF_RANGE',
  'UNIMPLEMENTED',
  'INTERNAL',
  'UNAVAILABLE',
  'DATA_LOSS',
]);

function isStatus(s: string): s is StatusName {
  return STATUSES.has(s);
}

function asStatus(s: string): StatusName {
  return isStatus(s) ? s : 'UNKNOWN';
}
