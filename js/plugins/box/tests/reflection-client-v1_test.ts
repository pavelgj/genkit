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

import * as assert from 'assert';
import { spawn, type ChildProcess } from 'node:child_process';
import { createServer } from 'node:net';
import path from 'node:path';
import { after, before, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { ReflectionClientV1 } from '../src/reflection-client-v1.js';

const here = path.dirname(fileURLToPath(import.meta.url));

async function freePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const srv = createServer();
    srv.once('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const addr = srv.address();
      const port = typeof addr === 'object' && addr ? addr.port : 0;
      srv.close(() => resolve(port));
    });
  });
}

/**
 * Drives the V1 client against a *real* Genkit reflection server (run as a
 * plain subprocess rather than a container, so this stays portable). Covers the
 * protocol details the podman runner depends on: GENKIT_REFLECTION_PORT being
 * honored, chunk framing, trace headers, and error envelopes.
 */
describe('ReflectionClientV1 against a real runtime', () => {
  let child: ChildProcess;
  let client: ReflectionClientV1;

  before(async () => {
    const port = await freePort();
    child = spawn(
      process.execPath,
      ['--import', 'tsx', path.join(here, 'fixtures', 'container-entry.ts')],
      {
        env: {
          ...process.env,
          GENKIT_ENV: 'dev',
          // The runner relies on this being honored exactly.
          GENKIT_REFLECTION_PORT: String(port),
          GENKIT_REFLECTION_HOST: '127.0.0.1',
        },
        stdio: ['ignore', 'inherit', 'inherit'],
      }
    );
    client = new ReflectionClientV1(`http://127.0.0.1:${port}`);
    await client.waitForReady(30_000);
  });

  after(async () => {
    await client?.quit().catch(() => {});
    child?.kill('SIGTERM');
  });

  it('honors GENKIT_REFLECTION_PORT (waitForReady proved the pinned port)', async () => {
    // Reaching here at all means the runtime bound the exact port we assigned,
    // which is the assumption the container publish depends on.
    assert.ok(true);
  });

  it('lists actions', async () => {
    const actions = await client.listActions();
    assert.ok(Object.keys(actions).some((k) => k.includes('echo')));
  });

  it('runs a non-streaming action and returns a trace id', async () => {
    let traceId: string | undefined;
    const res = await client.runAction<{ echoed: string }>(
      { key: '/flow/echo', input: { text: 'hi' } },
      { onTraceId: (t) => (traceId = t) }
    );
    assert.deepStrictEqual(res.result, { echoed: 'boxed:hi' });
    assert.ok(traceId, 'expected a trace id from the response header');
    assert.strictEqual(res.telemetry?.traceId, traceId);
  });

  it('streams chunks and still returns the final result', async () => {
    const chunks: { i: number }[] = [];
    const res = await client.runAction<{ total: number }>(
      { key: '/flow/countTo', input: { n: 5 } },
      { onChunk: (c) => chunks.push(c as { i: number }) }
    );
    // The last line is the result envelope, not a chunk: it must not leak
    // into onChunk, and the chunks must all arrive.
    assert.deepStrictEqual(res.result, { total: 5 });
    assert.deepStrictEqual(
      chunks.map((c) => c.i),
      [1, 2, 3, 4, 5]
    );
  });

  it('surfaces a missing action as an error', async () => {
    await assert.rejects(() =>
      client.runAction({ key: '/flow/nope', input: {} })
    );
  });
});
