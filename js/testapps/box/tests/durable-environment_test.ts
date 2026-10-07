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

import type {
  BoxConnection,
  BoxRunner,
  RunActionRequest,
  RunActionResult,
} from '@genkit-ai/box';
import * as assert from 'assert';
import { z } from 'genkit';
import { InMemorySessionStore, genkit } from 'genkit/beta';
import { randomUUID } from 'node:crypto';
import { describe, it } from 'node:test';
import { defineDurableAgent, defineEnvironment } from '../src/durable/index.js';
import { defineScriptModel } from '../src/durable/script-model.js';

/** Records which box (routing key) ran what, and lifecycle calls. */
class FakeRunner implements BoxRunner {
  readonly name = 'fake';
  readonly log: string[] = [];
  async acquire(key: string): Promise<BoxConnection> {
    return {
      runAction: async <O>(
        req: RunActionRequest
      ): Promise<RunActionResult<O>> => {
        this.log.push(`run ${key} ${req.key}`);
        // The script model passes its call argument as `arg`.
        const { arg } = req.input as { arg?: string };
        return { result: { stdout: `[${key.slice(0, 4)}] ${arg}` } as O };
      },
      listActions: async () => ({}),
    };
  }
  async suspend(key: string) {
    this.log.push(`suspend ${key}`);
  }
  async release(key: string) {
    this.log.push(`release ${key}`);
  }
  async close() {}
}

describe('durable environments', () => {
  it('routes tools to a per-session box and suspends it at turn end', async () => {
    const ai = genkit({});
    defineScriptModel(ai, { latencyMs: 5 });
    const runShell = ai.defineTool(
      {
        name: 'runShell',
        description: 'shell',
        inputSchema: z.object({ cmd: z.string() }),
        outputSchema: z.object({ stdout: z.string() }),
      },
      async () => {
        throw new Error('the real body must only run inside the box');
      }
    );
    const runner = new FakeRunner();
    const sandbox = defineEnvironment(ai, {
      name: 'sandbox',
      runner,
      tools: [runShell],
    });
    const agent = defineDurableAgent(ai, {
      name: 'envAgent',
      model: 'durable/script',
      store: new InMemorySessionStore(),
      environments: [sandbox],
    });
    try {
      const sid = randomUUID();
      const res = await agent
        .chat({ sessionId: sid })
        .send('plan: runShell(ls) | runShell(pwd) | done');
      assert.strictEqual(res.finishReason, 'stop');
      assert.match(res.text, new RegExp(`\\[${sid.slice(0, 4)}\\] ls`));
      assert.deepStrictEqual(runner.log, [
        `run ${sid} /tool/runShell`,
        `run ${sid} /tool/runShell`,
        `suspend ${sid}`,
      ]);
      // Between tool rounds the engine said "short" (keep by default); at
      // turn end it said "long" (suspend).
      assert.deepStrictEqual(
        sandbox.history.map((h) => `${h.hint}:${h.action}`),
        ['short:keep', 'short:keep', 'long:suspend']
      );
    } finally {
      agent.durable.engine.stop();
    }
  });
});
