/**
 * Copyright 2025 Google LLC
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
import { describe, it } from 'node:test';
import { AsyncLazyTaskQueue } from '../../src/agent-flow/utils';

describe('AsyncLazyTaskQueue', () => {
  it('processes tasks one by one in order', async () => {
    const q = new AsyncLazyTaskQueue();

    const result = [] as number[];

    function makeSimpleTask(value: number, timeout: number = 10) {
      return () =>
        new Promise((r) => {
          setTimeout(() => {
            result.push(value);
            r(undefined);
          }, timeout);
        });
    }

    await q.merge();
    assert.deepStrictEqual(result, []);

    q.enqueueLazy(makeSimpleTask(1, 10));
    q.enqueueLazy(makeSimpleTask(2, 5));

    // enqueuing should trigger processing
    await new Promise((resolve) => setTimeout(resolve, 20));
    assert.deepStrictEqual(result, [1, 2]);

    q.enqueueLazy(makeSimpleTask(3, 5));
    q.enqueueLazy(makeSimpleTask(4, 7));

    assert.deepStrictEqual(result, [1, 2]);

    await q.merge();
    assert.deepStrictEqual(result, [1, 2, 3, 4]);

    await q.merge();
    assert.deepStrictEqual(result, [1, 2, 3, 4]);
  });
});
