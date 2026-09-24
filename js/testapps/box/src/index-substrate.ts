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
// The whole agent (model calls, tools, conversation history) runs in the box
// (src/boxed-substrate.ts), one substrate Actor per chat session. This process
// only routes: it holds no model, no tools, and no state.
//
// With `whenIdle: 'suspend'`, a session's actor holds a worker only while a
// turn runs. Between turns it is snapshotted (memory + disk) and the worker is
// free for other sessions, so many chats share a small pool, taking turns. If
// every worker is busy, a turn waits (up to readyTimeoutMs) for one to free.
//
// Setup (once, against a local kind cluster; see README):
//   GEMINI_API_KEY=... ./substrate/setup.sh
// Run:
//   source substrate/.env && pnpm genkit:dev:substrate

import { box } from '@genkit-ai/box';
import {
  grpcSubstrateControl,
  substrateRunner,
} from '@genkit-ai/box/substrate';
import { expressHandler } from '@genkit-ai/express';
import express from 'express';
import { z } from 'genkit';
import { genkit } from 'genkit/beta';
import { randomUUID } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
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
  // The agent calls Gemini from inside the box. Demo shortcut; see the
  // README for locking this down to the model endpoint.
  egress: [{ all: true }],
});

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
    const agent = sandbox.agent({
      name: 'sandboxAgent',
      context: { sessionId },
    });
    const turn = agent.chat({ sessionId }).sendStream(message);
    for await (const chunk of turn.stream) {
      if (chunk.text) sendChunk(chunk.text);
    }
    return { sessionId, text: (await turn.response).text };
  }
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
