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

// Pauses an actor while its model calls run, and wakes it when they finish.
//
//   call starts --(pauseAfterMs, still pending)--> PauseActor   worker freed
//   last call settles ---------------------------> ResumeActor  actor polls, gets result
//
// Per actor, operations are serialized, so a call that finishes mid-pause
// resumes the actor as soon as the pause lands. An actor with several parked
// calls in flight is resumed only when the last one settles.
//
// A paused actor can only resume on the node holding its local snapshot. If
// no worker frees up there within `resumeTimeoutMs`, the actor is suspended
// (uploading the snapshot, dropping the node pin) and resumed anywhere.
//
// Actors are never paused within `minAwakeMs` of coming up (resumed by us,
// or first seen: resumed by its host). On kind, pausing a gVisor actor
// ~100ms after its restore sometimes left it dead on the next resume (its
// wakeup probe never passed; 5 of 89 such pauses, none of 84 later ones).

import {
  isSubstrateError,
  type SubstrateControl,
  type SubstrateRef,
} from '@genkit-ai/box/substrate';

export interface ParkerOptions {
  control: SubstrateControl;
  /** Only pause for calls still running after this long. Default 1500ms. */
  pauseAfterMs?: number;
  /** Give up waiting for a worker on the snapshot's node after this. Default 20s. */
  resumeTimeoutMs?: number;
  /** Never pause an actor sooner than this after it came up. Default 500ms. */
  minAwakeMs?: number;
  log?: (msg: string) => void;
}

export type ParkState = 'awake' | 'pausing' | 'paused' | 'resuming';

interface ActorParking {
  ref: SubstrateRef;
  /** Parked calls in flight for this actor. */
  pending: number;
  state: ParkState;
  since: number;
  /** When the actor last came up (first seen, or woken by us). */
  upSince: number;
  /** When a parked call for it last started or settled. */
  lastActivity: number;
  pauseTimer?: ReturnType<typeof setTimeout>;
  /** Tail of this actor's operation queue; never rejects. */
  lock: Promise<void>;
}

/** What the parker is doing with one actor, for dashboards. */
export interface ParkedActorInfo {
  actor: SubstrateRef;
  state: ParkState;
  pendingCalls: number;
  since: number;
}

export class Parker {
  private readonly control: SubstrateControl;
  private readonly pauseAfterMs: number;
  private readonly resumeTimeoutMs: number;
  private readonly minAwakeMs: number;
  private readonly log: (msg: string) => void;
  private readonly actors = new Map<string, ActorParking>();

  constructor(options: ParkerOptions) {
    this.control = options.control;
    this.pauseAfterMs = options.pauseAfterMs ?? 1_500;
    this.resumeTimeoutMs = options.resumeTimeoutMs ?? 20_000;
    this.minAwakeMs = options.minAwakeMs ?? 500;
    this.log = options.log ?? (() => {});
  }

  /**
   * Tracks `work` (a model call) made on behalf of `actor`, pausing the actor
   * while it runs and waking it once the actor's last parked call settles.
   * Returns `work` unchanged: the result never waits for the resume.
   */
  track<T>(actor: SubstrateRef, work: Promise<T>): Promise<T> {
    const p = this.entry(actor);
    p.pending++;
    if (p.pending === 1 && p.state === 'awake') {
      clearTimeout(p.pauseTimer);
      const delay = Math.max(
        this.pauseAfterMs,
        p.upSince + this.minAwakeMs - Date.now()
      );
      p.pauseTimer = setTimeout(() => {
        p.pauseTimer = undefined;
        if (p.pending > 0) this.enqueue(p, () => this.pause(p));
      }, delay);
    }
    const done = () => {
      p.lastActivity = Date.now();
      p.pending--;
      if (p.pending > 0) return;
      clearTimeout(p.pauseTimer);
      p.pauseTimer = undefined;
      this.enqueue(p, () => this.wake(p));
    };
    work.then(done, done);
    return work;
  }

  /** Actors with parked calls or a pause in progress, for dashboards. */
  parked(): ParkedActorInfo[] {
    return [...this.actors.values()]
      .filter((p) => p.state !== 'awake' || p.pending > 0)
      .map((p) => ({
        actor: p.ref,
        state: p.state,
        pendingCalls: p.pending,
        since: p.since,
      }));
  }

  /** Resolves once every queued pause/resume has settled (tests, shutdown). */
  async idle(): Promise<void> {
    let before: Promise<void>[];
    do {
      before = [...this.actors.values()].map((p) => p.lock);
      await Promise.all(before);
    } while ([...this.actors.values()].some((p, i) => p.lock !== before[i]));
  }

  private entry(ref: SubstrateRef): ActorParking {
    const key = `${ref.atespace}/${ref.name}`;
    const now = Date.now();
    let p = this.actors.get(key);
    if (!p) {
      p = {
        ref,
        pending: 0,
        state: 'awake',
        since: now,
        upSince: now,
        lastActivity: now,
        lock: Promise.resolve(),
      };
      this.actors.set(key, p);
    } else if (
      p.pending === 0 &&
      p.state === 'awake' &&
      now - p.lastActivity > 5_000
    ) {
      // Quiet for a while: its host may have suspended and resumed it since
      // (between turns), which the gateway doesn't see. Treat it as fresh.
      p.upSince = now;
    }
    p.lastActivity = now;
    return p;
  }

  private set(p: ActorParking, state: ParkState): void {
    if (p.state !== state) p.since = Date.now();
    p.state = state;
  }

  private enqueue(p: ActorParking, op: () => Promise<void>): void {
    p.lock = p.lock.then(op).catch((e) => {
      this.log(`parker: ${p.ref.atespace}/${p.ref.name}: ${e}`);
    });
  }

  private async pause(p: ActorParking): Promise<void> {
    if (p.pending === 0 || p.state !== 'awake') return;
    this.set(p, 'pausing');
    try {
      await this.control.pauseActor(p.ref);
      this.set(p, 'paused');
      this.log(`paused ${p.ref.name} (${p.pending} call(s) pending)`);
    } catch (e) {
      // Not running (snapshotted by its host, crashed, mid-transition): leave
      // it alone, the host's runner owns those transitions.
      this.set(p, 'awake');
      if (!isSubstrateError(e, 'FAILED_PRECONDITION', 'ABORTED', 'NOT_FOUND')) {
        throw e;
      }
    }
  }

  private async wake(p: ActorParking): Promise<void> {
    if (p.pending > 0 || p.state !== 'paused') return;
    this.set(p, 'resuming');
    const started = Date.now();
    try {
      try {
        await this.resumeWithin(p.ref, this.resumeTimeoutMs);
      } catch (e) {
        if (!isSubstrateError(e, 'RESOURCE_EXHAUSTED')) throw e;
        // No worker on the snapshot's node: upload it and resume anywhere.
        this.log(`${p.ref.name}: no worker on its node; suspending to move it`);
        await this.control.suspendActor(p.ref);
        await this.resumeWithin(p.ref, 5 * 60_000);
      }
      this.log(`woke ${p.ref.name} in ${Date.now() - started}ms`);
    } finally {
      this.set(p, 'awake');
      p.upSince = Date.now();
    }
  }

  /** ResumeActor, retrying while the pool is full, until `budgetMs`. */
  private async resumeWithin(
    ref: SubstrateRef,
    budgetMs: number
  ): Promise<void> {
    const deadline = Date.now() + budgetMs;
    let delay = 100;
    for (;;) {
      try {
        await this.control.resumeActor(ref);
        return;
      } catch (e) {
        const transient = isSubstrateError(
          e,
          'RESOURCE_EXHAUSTED',
          'ABORTED',
          'UNAVAILABLE'
        );
        if (!transient || Date.now() + delay > deadline) throw e;
      }
      await new Promise((r) => setTimeout(r, delay));
      delay = Math.min(delay * 2, 1_000);
    }
  }
}
