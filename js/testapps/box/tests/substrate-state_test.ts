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
import { describe, it } from 'node:test';
import { buildDemoState } from '../src/substrate-state.js';

const worker = (name: string, pod: string, pool = 'genkit-box') => ({
  metadata: { name },
  workerPool: pool,
  workerPod: pod,
  status: { state: 'WORKER_STATE_ACTIVE' as const, capacity: { actors: 1 } },
});

describe('buildDemoState', () => {
  const now = 10_000;
  const state = buildDemoState({
    pool: 'genkit-box',
    now,
    workers: [
      worker('w-b', 'genkit-box-x-bbbbb'),
      worker('w-a', 'genkit-box-x-aaaaa'),
      worker('w-other', 'counter-x-ccccc', 'counter'),
    ],
    actors: [
      {
        metadata: { name: 'box-1' },
        status: {
          state: 'ACTOR_STATE_RUNNING',
          workerAssignment: {
            worker: { name: 'w-b' },
            workerPod: 'genkit-box-x-bbbbb',
          },
        },
      },
      {
        metadata: { name: 'box-2' },
        status: { state: 'ACTOR_STATE_SUSPENDED' },
      },
      {
        metadata: { name: 'leftover' },
        status: {
          state: 'ACTOR_STATE_RUNNING',
          workerAssignment: {
            worker: { name: 'w-a' },
            workerPod: 'genkit-box-x-aaaaa',
          },
        },
      },
    ],
    boxes: [
      {
        key: 'session-1',
        actor: { atespace: 'genkit-box', name: 'box-1' },
        phase: 'running',
        inFlight: 1,
        since: 7_000,
      },
      {
        key: 'session-2',
        actor: { atespace: 'genkit-box', name: 'box-2' },
        phase: 'waiting-for-worker',
        inFlight: 1,
        since: 9_500,
      },
    ],
    tasks: new Map([
      ['session-1', { status: 'pending', startedAt: 6_000 }],
      [
        'session-2',
        {
          status: 'completed',
          text: 'done',
          startedAt: 1_000,
          finishedAt: 4_000,
        },
      ],
    ]),
  });

  it('lists only the pool workers, in a stable order', () => {
    assert.deepStrictEqual(
      state.workers.map((w) => w.name),
      ['w-a', 'w-b']
    );
  });

  it('shows which session each worker is serving', () => {
    const b = state.workers.find((w) => w.name === 'w-b');
    assert.deepStrictEqual(b?.running, [
      { actor: 'box-1', sessionId: 'session-1' },
    ]);
    // An actor this process doesn't track still occupies its worker.
    const a = state.workers.find((w) => w.name === 'w-a');
    assert.deepStrictEqual(a?.running, [
      { actor: 'leftover', sessionId: undefined },
    ]);
  });

  it('reports session phases, substrate state, worker and task', () => {
    assert.deepStrictEqual(state.sessions, [
      {
        sessionId: 'session-1',
        actor: 'box-1',
        phase: 'running',
        phaseMs: 3_000,
        inFlight: 1,
        actorState: 'RUNNING',
        workerPod: 'genkit-box-x-bbbbb',
        task: {
          status: 'pending',
          text: undefined,
          error: undefined,
          elapsedMs: 4_000,
        },
      },
      {
        sessionId: 'session-2',
        actor: 'box-2',
        phase: 'waiting-for-worker',
        phaseMs: 500,
        inFlight: 1,
        actorState: 'SUSPENDED',
        workerPod: undefined,
        task: {
          status: 'completed',
          text: 'done',
          error: undefined,
          elapsedMs: 3_000,
        },
      },
    ]);
  });

  it('lists untracked actors separately', () => {
    assert.deepStrictEqual(state.otherActors, [
      { actor: 'leftover', state: 'RUNNING', workerPod: 'genkit-box-x-aaaaa' },
    ]);
  });
});
