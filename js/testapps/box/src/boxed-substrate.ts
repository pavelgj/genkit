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

// The boxed side of the substrate demo: the whole agent. This file is bundled
// into the actor image (see substrate/setup.sh) and runs inside a gVisor
// sandbox as a substrate Actor, one actor per chat session. The ActorTemplate
// sets GENKIT_ENV=dev and pins the V1 reflection server to 0.0.0.0:80, which
// atenet-router routes to.
//
// Conversation history lives in this process (InMemorySessionStore). The
// template snapshots memory on suspend/pause, so history survives the actor
// being snapshotted and resumed on whichever worker is free.
//
// No API key here: models are called through the model gateway
// (MODEL_GATEWAY_URL, the only host this box may reach). The host passes a
// caller token in the action context of each turn; genkit propagates it to
// the model calls.

import { retry } from '@genkit-ai/middleware';
import { z } from 'genkit';
import {
  genkit,
  InMemorySessionStore,
  type SessionSnapshot,
  type SessionStore,
} from 'genkit/beta';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { modelGateway } from './model-gateway/client.js';

const run = promisify(exec);

const MODEL_GATEWAY_URL = process.env.MODEL_GATEWAY_URL;
if (!MODEL_GATEWAY_URL) throw new Error('MODEL_GATEWAY_URL is not set');

const ai = genkit({
  plugins: [modelGateway({ url: MODEL_GATEWAY_URL }), retry.plugin()],
});

const runShell = ai.defineTool(
  {
    name: 'runShell',
    description:
      'Run a shell command in a persistent Linux sandbox and return its ' +
      'output. Files and the working directory persist between calls.',
    inputSchema: z.object({ cmd: z.string() }),
    outputSchema: z.object({
      stdout: z.string().optional(),
      error: z.string().optional(),
    }),
  },
  async ({ cmd }) => {
    try {
      const { stdout, stderr } = await run(cmd, {
        timeout: 10_000,
        cwd: '/tmp',
      });
      return { stdout: stdout + stderr };
    } catch (e) {
      return { error: `${e}` };
    }
  }
);

// Process memory, not disk: proves suspend/resume restores the live process,
// not just the filesystem.
const bootedAt = new Date().toISOString();
let calls = 0;

const boxInfo = ai.defineTool(
  {
    name: 'boxInfo',
    description:
      'Report the sandbox process uptime and how many times this tool has ' +
      'been called in this sandbox.',
    inputSchema: z.object({}),
    outputSchema: z.object({ bootedAt: z.string(), calls: z.number() }),
  },
  async () => ({ bootedAt, calls: ++calls })
);

ai.defineAgent({
  name: 'sandboxAgent',
  system:
    'You are a helpful assistant with a persistent Linux sandbox. Use ' +
    'runShell to run commands there; files you create persist across turns. ' +
    'Keep answers concise.',
  // Set by the template. `fake/agent` is a deterministic stand-in the
  // gateway serves for benchmarks (see model-gateway/fake-model.ts).
  model: `gateway/${process.env.AGENT_MODEL ?? 'googleai/gemini-3.6-flash'}`,
  tools: [runShell, boxInfo],
  maxTurns: 20,
  use: [retry()],
  // Server-managed state, keyed by the sessionId the host sends in `init`.
  store: freshHeartbeatOnRead(new InMemorySessionStore()),
});

/**
 * A pending (background) task's heartbeat stops while the actor is paused,
 * and a read after a long pause would report it `expired`. But in this
 * store, a read is proof of life: the store lives in this process, so if it
 * can answer, the process is alive (a dead box can't serve reads at all). So
 * reads report pending snapshots with a fresh heartbeat.
 *
 * TODO: with an external session store (see index-substrate.ts), reads no
 * longer prove anything; there the store (or the host) must know the actor
 * is paused waiting on the model and hold off expiry while it is.
 */
function freshHeartbeatOnRead<S>(store: SessionStore<S>): SessionStore<S> {
  return {
    async getSnapshot(opts) {
      const snap: SessionSnapshot<S> | undefined =
        await store.getSnapshot(opts);
      return snap?.status === 'pending'
        ? { ...snap, heartbeatAt: new Date().toISOString() }
        : snap;
    },
    saveSnapshot: (id, mutator, options) =>
      store.saveSnapshot(id, mutator, options),
    onSnapshotStateChange: store.onSnapshotStateChange?.bind(store),
  };
}

// Small flows used by the box plugin's substrate e2e test
// (js/plugins/box/tests/substrate-e2e_test.ts), which runs against this image.
let echoes = 0;
ai.defineFlow(
  {
    name: 'echo',
    inputSchema: z.object({ text: z.string() }),
    outputSchema: z.object({ echoed: z.string(), calls: z.number() }),
  },
  async ({ text }) => ({ echoed: `boxed:${text}`, calls: ++echoes })
);

ai.defineFlow(
  {
    name: 'countTo',
    inputSchema: z.object({ n: z.number() }),
    outputSchema: z.object({ total: z.number() }),
    streamSchema: z.object({ i: z.number() }),
  },
  async ({ n }, { sendChunk }) => {
    for (let i = 1; i <= n; i++) sendChunk({ i });
    return { total: n };
  }
);

// Keeps the reflection server alive; the template's wakeup probe hits
// /api/__health before the actor counts as running.
setInterval(() => {}, 1 << 30);
