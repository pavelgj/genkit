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

import { SubstrateApiError } from '@genkit-ai/box/substrate';
import * as assert from 'assert';
import { beforeEach, describe, it } from 'node:test';
import { Parker } from '../src/model-gateway/parker.js';
import {
  ACTOR,
  FakeControl,
  deferred,
  poolFull,
  tick,
} from './model-gateway-fakes.js';

describe('Parker', () => {
  let control: FakeControl;
  let parker: Parker;
  beforeEach(() => {
    control = new FakeControl();
    parker = new Parker({ control, pauseAfterMs: 20, resumeTimeoutMs: 150 });
  });

  /** Lets queued pause/resume operations run to completion. */
  const settle = async () => {
    await tick();
    await parker.idle();
  };

  it('never pauses for calls that finish within pauseAfterMs', async () => {
    await parker.track(ACTOR, tick(5));
    await tick(40);
    await settle();
    assert.deepStrictEqual(control.calls, []);
  });

  it('pauses a slow call and wakes the actor once it settles', async () => {
    const call = deferred<string>();
    const tracked = parker.track(ACTOR, call.promise);
    await tick(40);
    await settle();
    assert.deepStrictEqual(control.calls, ['pause box-1']);
    assert.strictEqual(parker.parked()[0]?.state, 'paused');
    call.resolve('ok');
    assert.strictEqual(await tracked, 'ok');
    await settle();
    assert.deepStrictEqual(control.calls, ['pause box-1', 'resume box-1']);
    assert.deepStrictEqual(parker.parked(), []);
  });

  it('wakes only after the last of several concurrent calls', async () => {
    const a = deferred();
    const b = deferred();
    parker.track(ACTOR, a.promise);
    parker.track(ACTOR, b.promise);
    await tick(40);
    a.resolve();
    await settle();
    assert.deepStrictEqual(control.calls, ['pause box-1']);
    b.resolve();
    await settle();
    assert.deepStrictEqual(control.calls, ['pause box-1', 'resume box-1']);
  });

  it('a call settling mid-pause wakes the actor right after the pause', async () => {
    control.delayMs = 30;
    const call = deferred();
    parker.track(ACTOR, call.promise);
    await tick(30); // the pause RPC is in flight
    call.resolve();
    await settle();
    assert.deepStrictEqual(control.calls, ['pause box-1', 'resume box-1']);
  });

  it('retries resume while the pool is full', async () => {
    parker = new Parker({ control, pauseAfterMs: 20, resumeTimeoutMs: 2_000 });
    control.resumeErrors.push(poolFull(), poolFull());
    const call = deferred();
    parker.track(ACTOR, call.promise);
    await tick(40);
    call.resolve();
    await settle();
    assert.deepStrictEqual(control.calls, [
      'pause box-1',
      'resume box-1 -> RESOURCE_EXHAUSTED',
      'resume box-1 -> RESOURCE_EXHAUSTED',
      'resume box-1',
    ]);
  });

  it('moves the actor (suspend, resume anywhere) if its node stays full', async () => {
    // More "pool full" answers than fit in the 150ms node-pinned budget.
    control.resumeErrors.push(...Array.from({ length: 4 }, poolFull));
    const call = deferred();
    parker.track(ACTOR, call.promise);
    await tick(40);
    call.resolve();
    await settle();
    const suspendAt = control.calls.indexOf('suspend box-1');
    assert.ok(suspendAt > 0, control.calls.join(', '));
    assert.strictEqual(control.calls.at(-1), 'resume box-1');
  });

  it('leaves an actor alone if it cannot be paused', async () => {
    control.pauseErrors.push(
      new SubstrateApiError('FAILED_PRECONDITION', 'actor is not running')
    );
    const call = deferred();
    parker.track(ACTOR, call.promise);
    await tick(40);
    call.resolve();
    await settle();
    assert.deepStrictEqual(control.calls, [
      'pause box-1 -> FAILED_PRECONDITION',
    ]);
  });
});
