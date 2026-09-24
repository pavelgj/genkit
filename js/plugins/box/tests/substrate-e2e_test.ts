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

// Runs the substrate runner against a real cluster. Skipped unless
// BOX_SUBSTRATE_E2E=1. Uses the testapp's image, which has `echo` / `countTo`
// flows for this test; its setup script creates the template, credentials and
// port-forwards, and writes the env this test reads:
//
//   js/testapps/box/substrate/setup.sh
//   source js/testapps/box/substrate/.env
//   BOX_SUBSTRATE_E2E=1 pnpm test

import * as assert from 'assert';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  grpcSubstrateControl,
  substrateRunner,
} from '../src/runners/substrate/index.js';

const enabled = process.env.BOX_SUBSTRATE_E2E === '1';
const env = (name: string) => {
  const v = process.env[name];
  if (!v) throw new Error(`${name} is required for the substrate e2e test`);
  return v;
};

describe('substrateRunner (e2e)', { skip: !enabled }, () => {
  const api = () => ({
    endpoint: env('SUBSTRATE_API'),
    ca: readFileSync(env('SUBSTRATE_CA')),
    token: () => readFileSync(env('SUBSTRATE_TOKEN'), 'utf8'),
  });

  it('runs actions, auto-suspends between calls, keeps memory across', async () => {
    const control = grpcSubstrateControl(api());
    const runner = substrateRunner({
      control,
      routerUrl: env('SUBSTRATE_ROUTER'),
      template: env('SUBSTRATE_TEMPLATE'),
      namePrefix: 'box-e2e',
      whenIdle: 'suspend',
    });
    const key = `e2e-${Date.now()}`;
    const ref = runner.actorFor(key);
    try {
      const conn = await runner.acquire(key);
      const first = await conn.runAction<{ calls: number }>({
        key: '/flow/echo',
        input: { text: 'a' },
      });

      // Streaming makes it through the router chunk by chunk.
      const chunks: unknown[] = [];
      const counted = await conn.runAction<{ total: number }>(
        { key: '/flow/countTo', input: { n: 3 } },
        { onChunk: (c) => chunks.push(c) }
      );
      assert.strictEqual(counted.result?.total, 3);
      assert.strictEqual(chunks.length, 3);

      // Idle: the worker was released.
      await new Promise((r) => setTimeout(r, 1_500));
      const idle = await control.getActor(ref);
      assert.strictEqual(idle.status?.state, 'ACTOR_STATE_SUSPENDED');

      // Next call resumes from the snapshot: in-memory counter continued.
      const again = await conn.runAction<{ calls: number }>({
        key: '/flow/echo',
        input: { text: 'b' },
      });
      assert.strictEqual(again.result?.calls, (first.result?.calls ?? 0) + 1);

      // onBoxClose defaults to delete.
      await runner.close();
      await assert.rejects(control.getActor(ref), /not found/i);
    } finally {
      await runner.close();
      control.close();
    }
  });
});
