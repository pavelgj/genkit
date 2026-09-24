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
import { z } from 'genkit';
import { genkit } from 'genkit/beta';
import { describe, it } from 'node:test';
import { box } from '../src/box.js';
import { createProxyAction } from '../src/proxy.js';
import { execRunner } from '../src/runners/exec-runner.js';
import type { BoxRunner, RunActionRequest } from '../src/types.js';

const dispatcher = {
  acquire: async () => {
    throw new Error('not used in these tests');
  },
};

describe('proxy actions', () => {
  it('carries actionType so the registry accepts it', () => {
    // The registry compares `__action.actionType` against the type it is
    // registered under; without it, `define*` throws INVALID_ARGUMENT.
    const proxy = createProxyAction(dispatcher, 'tool', 'runShell');
    assert.strictEqual(proxy.__action.actionType, 'tool');
    assert.strictEqual(proxy.__action.metadata?.type, 'tool');
    assert.strictEqual(proxy.__action.metadata?.box, true);
  });

  it('registers a spec-defined tool proxy in the Dev UI registry', async () => {
    const ai = genkit({});
    const myBox = box(ai, { runner: execRunner({ cmd: 'node noop.js' }) });
    myBox.defineTool({
      name: 'runShell',
      inputSchema: z.object({ cmd: z.string() }),
      outputSchema: z.object({ stdout: z.string().optional() }),
    });
    const actions = await ai.registry.listActions();
    assert.ok(actions['/tool/runShell'], 'proxy should be registered');
    await myBox.close();
  });

  it('routes agent calls by the proxy context', async () => {
    // Records which key each call was routed to, and the context it carried.
    const calls: Array<{ key: string; action: string; context: unknown }> = [];
    const runner: BoxRunner = {
      name: 'recording',
      async acquire(key) {
        return {
          async runAction<O>(req: RunActionRequest) {
            calls.push({ key, action: req.key, context: req.context });
            const result = req.key.startsWith('/agent/')
              ? { message: { role: 'model', content: [{ text: 'ok' }] } }
              : { snapshotId: 's1', status: 'done' };
            return { result: result as O };
          },
          async listActions() {
            return {};
          },
        };
      },
      async release() {},
      async close() {},
    };
    const ai = genkit({});
    const myBox = box(ai, {
      runner,
      route: (_req, ctx) => String(ctx?.sessionId ?? 'default'),
    });

    await myBox
      .agent({ name: 'a', context: { sessionId: 's-1' } })
      .chat()
      .send('hi');
    await myBox
      .agent({ name: 'a', context: { sessionId: 's-2' } })
      .chat()
      .send('hi');
    await myBox.agent({ name: 'a' }).getSnapshot('snap');

    assert.deepStrictEqual(
      calls.map((c) => [c.key, c.action]),
      [
        ['s-1', '/agent/a'],
        ['s-2', '/agent/a'],
        ['default', '/agent-snapshot/a'],
      ]
    );
    // The boxed agent sees the same context.
    assert.deepStrictEqual(calls[0].context, { sessionId: 's-1' });
  });
});
