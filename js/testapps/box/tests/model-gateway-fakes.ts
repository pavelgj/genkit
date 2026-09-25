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

// Shared fakes for the model gateway tests.

import {
  SubstrateApiError,
  type SubstrateActor,
  type SubstrateControl,
  type SubstrateRef,
} from '@genkit-ai/box/substrate';

export const ACTOR: SubstrateRef = { atespace: 'demo', name: 'box-1' };
export const SECRET = 'test-secret';
export const tick = (ms = 0) => new Promise((r) => setTimeout(r, ms));

export const poolFull = () =>
  new SubstrateApiError('RESOURCE_EXHAUSTED', 'no free workers available');

/** Records pause/resume/suspend; the rest of SubstrateControl is inert. */
export class FakeControl implements SubstrateControl {
  readonly calls: string[] = [];
  /** Errors thrown by the next resume calls, in order. */
  readonly resumeErrors: SubstrateApiError[] = [];
  /** Errors thrown by the next pause calls, in order. */
  readonly pauseErrors: SubstrateApiError[] = [];
  delayMs = 0;

  private async op(name: string, ref: SubstrateRef): Promise<SubstrateActor> {
    this.calls.push(`${name} ${ref.name}`);
    if (this.delayMs) await tick(this.delayMs);
    return { metadata: ref };
  }

  private failNext(name: string, ref: SubstrateRef, errs: SubstrateApiError[]) {
    const err = errs.shift();
    if (!err) return;
    this.calls.push(`${name} ${ref.name} -> ${err.code}`);
    throw err;
  }

  async pauseActor(ref: SubstrateRef) {
    this.failNext('pause', ref, this.pauseErrors);
    return this.op('pause', ref);
  }
  async resumeActor(ref: SubstrateRef) {
    this.failNext('resume', ref, this.resumeErrors);
    return this.op('resume', ref);
  }
  suspendActor(ref: SubstrateRef) {
    return this.op('suspend', ref);
  }
  getActor(ref: SubstrateRef) {
    return this.op('get', ref);
  }
  createActor(ref: SubstrateRef) {
    return this.op('create', ref);
  }
  revertActor(ref: SubstrateRef) {
    return this.op('revert', ref);
  }
  async createEgressPolicy() {}
  async deleteActor() {}
  async listActors() {
    return [];
  }
  close() {}
}

/** A promise settled from the outside (e.g. a model call in flight). */
export function deferred<T = void>() {
  let resolve!: (v: T) => void;
  const promise = new Promise<T>((r) => (resolve = r));
  return { promise, resolve };
}
