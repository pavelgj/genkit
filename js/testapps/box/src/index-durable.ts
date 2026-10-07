/**
 * Copyright 2026 Google LLC
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

// Durable agents on GiaB (prototype). A coding agent whose loop runs as
// committed steps: every model call and tool call is an effect in a run
// document, so the agent survives the process dying mid-turn.
//
// - `runShell` runs in a per-session sandbox environment (a GiaB box, local
//   OS sandbox). The engine tells it when to rest: between tool rounds
//   ("short") and at turn end ("long").
// - `readFile` is marked replay-safe; `runShell` is not, so after a crash a
//   cut-off shell command is not repeated, the model is told instead.
// - State lives in a FileSessionStore under .durable/, so you can kill this
//   process (Ctrl-C) mid-turn, restart it, and watch the turn finish.
//
// Run it:
//   GEMINI_API_KEY=... pnpm genkit:dev:durable
// No key? `DURABLE_MODEL=durable/script` uses a scripted model, e.g. send
//   "plan: runShell(cmd=sleep 5 && echo hi), readFile(path=/etc/hosts) | done"
//
// Dev UI:
// - chat with `durableCoder`, or start a background turn with `startTask`;
// - `crashEngine` kills the engine mid-turn (in-flight work is dropped, as in
//   a real crash), `restartEngine` starts a fresh one that recovers;
// - `steer` adds a note to a running turn; `inspectRun` shows the run
//   document (transcript, queue, effects, recent turns).

import { execRunner, localSandbox } from '@genkit-ai/box';
import { googleAI } from '@genkit-ai/google-genai';
import { retry } from '@genkit-ai/middleware';
import { z } from 'genkit';
import { FileSessionStore, genkit } from 'genkit/beta';
import { exec } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { promisify } from 'node:util';
import {
  defineDurableAgent,
  defineEnvironment,
  transcriptText,
} from './durable/index.js';
import { defineScriptModel } from './durable/script-model.js';

const run = promisify(exec);

const MODEL = process.env.DURABLE_MODEL ?? 'googleai/gemini-flash-latest';
// The scripted model needs no key, so only load the Google AI plugin when it
// is actually used.
const ai = genkit({
  plugins: [
    ...(MODEL.startsWith('googleai/') ? [googleAI()] : []),
    retry.plugin(),
  ],
});
defineScriptModel(ai, { latencyMs: 800 });
const store = new FileSessionStore('.durable');
const log = (msg: string) => console.log(`[durable] ${msg}`);

// Physical state: the shell runs in a per-session sandbox box. The real
// implementation; its body runs inside the box.
const runShell = ai.defineTool(
  {
    name: 'runShell',
    description:
      'Run a shell command in your sandbox and return its output. ' +
      'Writes are only allowed under /tmp.',
    inputSchema: z.object({ cmd: z.string() }),
    outputSchema: z.object({
      stdout: z.string().optional(),
      error: z.string().optional(),
    }),
  },
  async ({ cmd }) => {
    try {
      const { stdout, stderr } = await run(cmd, { timeout: 60_000 });
      return { stdout: stdout + stderr };
    } catch (e) {
      return { error: `${e}` };
    }
  }
);

const sandbox = defineEnvironment(ai, {
  name: 'sandbox',
  runner: execRunner({ self: true, isolate: localSandbox() }),
  tools: [runShell],
  // exec boxes can't pause; keep them between tool rounds, and release them
  // when the turn ends (a substrate runner would suspend instead).
  lifecycle: { short: 'keep', long: 'release' },
  log,
});

// A read-only tool on the host: safe to rerun after a crash.
const readFileTool = ai.defineTool(
  {
    name: 'readFile',
    description: 'Read a text file from the host (first 4KB).',
    inputSchema: z.object({ path: z.string() }),
    outputSchema: z.object({ text: z.string() }),
  },
  async ({ path }) => ({ text: (await readFile(path, 'utf8')).slice(0, 4096) })
);

export const durableCoder = defineDurableAgent(ai, {
  name: 'durableCoder',
  description: 'A coding agent that survives crashes (durable prototype).',
  model: MODEL,
  system:
    'You are a helpful coding assistant with a sandbox. Use runShell to ' +
    'run commands and readFile to read host files. Keep answers concise.',
  tools: [readFileTool],
  environments: [sandbox],
  replay: { readFile: 'safe' },
  // Model middleware still applies: it wraps each model effect.
  use: [retry()],
  store,
  leaseMs: 5_000,
  maxTurns: 20,
  log,
});

// ---------------------------------------------------------------------------
// Demo controls (Dev UI flows)

const SessionIdSchema = z.object({ sessionId: z.string() });

/** Starts a background (detached) turn and returns its ids right away. */
export const startTask = ai.defineFlow(
  {
    name: 'startTask',
    inputSchema: z.object({
      message: z.string(),
      sessionId: z.string().optional(),
    }),
    outputSchema: z.object({ sessionId: z.string(), snapshotId: z.string() }),
  },
  async ({ message, sessionId }) => {
    const sid = sessionId ?? randomUUID();
    const task = await durableCoder.chat({ sessionId: sid }).detach(message);
    return { sessionId: sid, snapshotId: task.snapshotId };
  }
);

/** Kills the engine without settling in-flight work (simulated crash). */
export const crashEngine = ai.defineFlow(
  {
    name: 'crashEngine',
    outputSchema: z.object({ owner: z.string(), droppedEffects: z.number() }),
  },
  async () => {
    const engine = durableCoder.durable.engine;
    const dropped = engine.inflightEffects().length;
    durableCoder.durable.crash();
    return { owner: engine.owner, droppedEffects: dropped };
  }
);

/** Starts a fresh engine; it recovers active sessions from the store. */
export const restartEngine = ai.defineFlow(
  { name: 'restartEngine', outputSchema: z.object({ owner: z.string() }) },
  async () => ({ owner: (await durableCoder.durable.restart()).owner })
);

/** Adds a note to a running turn (joins after the current tool calls). */
export const steer = ai.defineFlow(
  {
    name: 'steer',
    inputSchema: SessionIdSchema.extend({
      text: z.string(),
      whenBusy: z.enum(['steer', 'queue']).optional(),
    }),
    outputSchema: z.object({ accepted: z.boolean() }),
  },
  async ({ sessionId, text, whenBusy }) => ({
    accepted: await durableCoder.durable.steer(sessionId, text, { whenBusy }),
  })
);

/** Shows the run document: transcript, queue, effects, recent turns. */
export const inspectRun = ai.defineFlow(
  {
    name: 'inspectRun',
    inputSchema: SessionIdSchema,
    outputSchema: z.any(),
  },
  async ({ sessionId }) => {
    const run = await durableCoder.durable.inspect(sessionId);
    if (!run) return { found: false };
    return {
      version: run.version,
      engine: durableCoder.durable.engine.owner,
      turn: run.turn ?? null,
      inbox: run.inbox,
      effects: Object.values(run.effects).map((r) => ({
        id: r.effect.id,
        status: r.status,
        attempt: r.attempt,
        lease: r.lease?.owner,
      })),
      recentTurns: run.recentTurns.map((t) => ({
        finishReason: t.finishReason,
        effects: t.effects.map((e) => `${e.name}:${e.status}#${e.attempt}`),
      })),
      transcript: transcriptText(run.messages),
      sandbox: sandbox.history.filter((h) => h.sessionId === sessionId),
    };
  }
);
