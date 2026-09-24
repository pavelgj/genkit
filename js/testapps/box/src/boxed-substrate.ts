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
// template snapshots memory on suspend, so history survives the actor being
// suspended between turns and resumed on whichever worker is free.
//
// Demo shortcut: GEMINI_API_KEY comes from the template env and the actor has
// open egress, so a prompt-injected runShell could read and exfiltrate it. See
// the testapp README ("Keeping the API key out of the box") for the proper
// setup.

import { googleAI } from '@genkit-ai/google-genai';
import { retry } from '@genkit-ai/middleware';
import { z } from 'genkit';
import { genkit, InMemorySessionStore } from 'genkit/beta';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(exec);

const ai = genkit({ plugins: [googleAI(), retry.plugin()] });

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
  model: googleAI.model('gemini-flash-latest'),
  tools: [runShell, boxInfo],
  maxTurns: 20,
  use: [retry()],
  // Server-managed state, keyed by the sessionId the host sends in `init`.
  store: new InMemorySessionStore(),
});

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
