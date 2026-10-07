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

// Headless crash demo for durable agents:
//
//   1. start a background turn that needs a slow shell command,
//   2. "crash" the engine while the command runs in the sandbox,
//   3. start a fresh engine on the same store,
//   4. watch the turn finish anyway.
//
// runShell is not replay-safe, so the cut-off command is NOT repeated; the
// model is told it was interrupted and decides what to do (usually: run it
// again or check the state). readFile is replay-safe and would just rerun.
//
//   GEMINI_API_KEY=... pnpm durable:crash-demo
//   DURABLE_MODEL=durable/script pnpm durable:crash-demo   # no key needed

import { randomUUID } from 'node:crypto';
import { transcriptText } from './durable/index.js';
import { durableCoder } from './index-durable.js';

const scripted = process.env.DURABLE_MODEL === 'durable/script';
const MESSAGE = scripted
  ? 'plan: runShell(cmd=sleep 4 && echo slow-done), readFile(path=/etc/hosts) | done'
  : 'Use runShell to run exactly `sleep 4 && echo slow-done` and, in ' +
    'parallel, use readFile to read /etc/hosts. Then tell me what happened, ' +
    'in two short sentences.';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  // Self-mode boxes re-run this file as the sandbox runtime; it just serves.
  if (process.env.GENKIT_BOX_SELF_ID) return;

  const sessionId = randomUUID();
  console.log(`session ${sessionId}`);
  const task = await durableCoder.chat({ sessionId }).detach(MESSAGE);
  console.log(`detached, snapshot ${task.snapshotId}`);

  // Wait until the shell command is actually running in the sandbox.
  for (let i = 0; i < 600; i++) {
    const inflight = durableCoder.durable.engine.inflightEffects();
    const run = await durableCoder.durable.inspect(sessionId);
    const shell = Object.values(run?.effects ?? {}).find(
      (r) =>
        r.effect.kind === 'tool' &&
        r.effect.request.toolRequest.name === 'runShell' &&
        r.status === 'leased'
    );
    if (shell && inflight.some((f) => f.effectId === shell.effect.id)) break;
    await sleep(100);
  }
  await sleep(1_000);
  console.log('\n*** crash: engine dies with runShell in flight ***');
  durableCoder.durable.crash();

  await sleep(500);
  console.log('*** restart: a fresh engine opens the same store ***\n');
  await durableCoder.durable.restart();

  const snap = await task.wait({ intervalMs: 250 });
  const run = await durableCoder.durable.inspect(sessionId);
  console.log(`\nturn finished: ${snap.status} (${snap.finishReason})`);
  console.log('\neffects of the turn:');
  for (const e of run?.recentTurns.at(-1)?.effects ?? []) {
    console.log(
      `  ${e.name.padEnd(9)} ${e.status.padEnd(10)} attempts=${e.attempt}`
    );
  }
  console.log('\ntranscript:');
  for (const line of transcriptText(snap.state?.messages ?? [])) {
    console.log(`  ${line.slice(0, 220)}`);
  }
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
