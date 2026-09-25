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

import { logger } from 'genkit/logging';
import { createHash } from 'node:crypto';
import { ReflectionClientV1 } from '../../reflection-client-v1.js';
import type { BoxConnection, BoxRunner } from '../../types.js';
import {
  isSubstrateError,
  type SubstrateActorState,
  type SubstrateControl,
  type SubstrateEgressRule,
  type SubstrateRef,
} from './control.js';
import {
  grpcSubstrateControl,
  type SubstrateApiOptions,
} from './grpc-control.js';

/**
 * What happens to an actor once no calls are in flight on it.
 *
 * - `keep`: stays running (holds its worker) until released or closed.
 * - `suspend`: durable snapshot to object storage; the worker is freed and the
 *   actor can resume on any node.
 * - `pause`: node-local snapshot; the worker is freed and the next resume
 *   prefers the same node. Slightly cheaper than `suspend`, not durable.
 *
 * Either snapshot captures memory and filesystem (with a FULL-scope template),
 * so the box resumes exactly where it left off.
 */
export type SubstrateIdleAction = 'keep' | 'suspend' | 'pause';

/** What {@link SubstrateRunner.close} does to the actors it tracks. */
export type SubstrateBoxCloseAction = 'delete' | 'suspend' | 'leave';

interface SubstrateRunnerBaseOptions {
  /**
   * atenet-router's HTTP ingress, e.g. `http://localhost:8000` for a
   * port-forward of `svc/atenet-router`. Box calls are sent here, addressed
   * with the `ate-target-actor` header.
   */
  routerUrl: string;
  /**
   * The ActorTemplate boxes are created from, as `{ atespace, name }` or
   * `'<atespace>/<name>'`. The template is operator-owned: it pins the image,
   * env (`GENKIT_ENV=dev`, `GENKIT_REFLECTION_HOST=0.0.0.0`,
   * `GENKIT_REFLECTION_PORT=80`) and a wakeup probe on `/api/__health`.
   */
  template: SubstrateRef | string;
  /** Atespace actors are created in. Defaults to the template's. */
  atespace?: string;
  /**
   * Actor name prefix. Names are `<prefix>-<hash of template + route key>`,
   * so a restarted host finds the same actor for the same key. Must be a DNS
   * label of at most 42 characters. Defaults to `genkit-box`.
   */
  namePrefix?: string;
  /**
   * Egress policy for newly created actors. Substrate denies all actor egress
   * without one, which is the default here.
   */
  egress?: SubstrateEgressRule[];
  /** What to do once no calls are in flight. Defaults to `keep`. */
  whenIdle?: SubstrateIdleAction;
  /**
   * How long (ms) an actor must stay idle before `whenIdle` applies. A small
   * grace avoids a snapshot/restore cycle between back-to-back calls, e.g. an
   * agent calling a boxed tool several times in one turn. Defaults to 0.
   */
  idleGraceMs?: number;
  /** What `close()` does to tracked actors. Defaults to `delete`. */
  onBoxClose?: SubstrateBoxCloseAction;
  /**
   * On first use, apply `whenIdle` (or `suspend`, if that is `keep`) to
   * actors with this runner's name prefix that are still RUNNING. These are
   * left over from a host that exited without `close()` (crash, Ctrl-C, a
   * watch-mode restart), and each one pins a worker. Actors are only
   * snapshotted, never deleted, so sessions survive. Defaults to true; turn
   * it off when several live hosts share one prefix.
   */
  reclaimStale?: boolean;
  /** Budget (ms) for bringing an actor up, retries included. Defaults to 60s. */
  readyTimeoutMs?: number;
}

/** Options for {@link substrateRunner}. */
export type SubstrateRunnerOptions = SubstrateRunnerBaseOptions &
  (
    | {
        /** Connection to substrate's ate-api (gRPC). */
        api: SubstrateApiOptions;
        control?: undefined;
      }
    | {
        /** A custom control-plane client (tests, custom auth). Not closed by the runner. */
        control: SubstrateControl;
        api?: undefined;
      }
  );

interface ActorInstance {
  ref: SubstrateRef;
  client: ReflectionClientV1;
  /** Calls keeping the actor awake: started and not yet settled. */
  holds: number;
  /**
   * What we believe the actor's state is. Only `running` is trusted without
   * asking ate-api (it lets calls skip the resume RPC); anything that could
   * make it stale (a failed call) resets it to `unknown`.
   */
  state: 'running' | 'suspended' | 'paused' | 'unknown';
  /** A lifecycle operation in progress, for {@link SubstrateRunner.boxes}. */
  activity?: 'starting' | 'waiting-for-worker' | 'suspending' | 'pausing';
  /** When `state` or `activity` last changed (ms epoch). */
  since: number;
  idleTimer?: ReturnType<typeof setTimeout>;
  /** Tail of the lifecycle-operation queue; never rejects. */
  lock: Promise<void>;
}

/** What a box is doing, as seen by this runner. */
export type SubstrateBoxPhase =
  | 'starting'
  | 'waiting-for-worker'
  | 'running'
  | 'suspending'
  | 'pausing'
  | 'suspended'
  | 'paused'
  | 'unknown';

/** A box this runner tracks, for dashboards ({@link SubstrateRunner.boxes}). */
export interface SubstrateBoxInfo {
  /** The route key, e.g. a session id. */
  key: string;
  actor: SubstrateRef;
  phase: SubstrateBoxPhase;
  /** Calls currently keeping the box awake. */
  inFlight: number;
  /** When the phase started (ms epoch). */
  since: number;
}

const DNS_LABEL = /^[a-z]([-a-z0-9]*[a-z0-9])?$/;
const TRANSIENT_STATES: SubstrateActorState[] = [
  'ACTOR_STATE_RESUMING',
  'ACTOR_STATE_SUSPENDING',
  'ACTOR_STATE_PAUSING',
  'ACTOR_STATE_REVERTING',
];

function parseRef(ref: SubstrateRef | string, what: string): SubstrateRef {
  if (typeof ref !== 'string') return ref;
  const [atespace, name, ...rest] = ref.split('/');
  if (!atespace || !name || rest.length) {
    throw new Error(
      `substrateRunner: ${what} must be '<atespace>/<name>', got '${ref}'.`
    );
  }
  return { atespace, name };
}

/**
 * The actor name used for a route key: a DNS label derived from the template
 * and the key, so it is stable across host restarts and changes when the
 * template does (a new image never resumes an old box).
 */
export function substrateActorName(
  prefix: string,
  template: SubstrateRef,
  key: string
): string {
  const hash = createHash('sha256')
    .update(`${template.atespace}/${template.name}\0${key}`)
    .digest('hex')
    .slice(0, 20);
  return `${prefix}-${hash}`;
}

const fmt = (ref: SubstrateRef) => `${ref.atespace}/${ref.name}`;

function sleep(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    const done = () => {
      clearTimeout(timer);
      signal.removeEventListener('abort', done);
      resolve();
    };
    const timer = setTimeout(done, ms);
    signal.addEventListener('abort', done, { once: true });
  });
}

/**
 * A {@link BoxRunner} that runs each box as a substrate Actor.
 *
 * A box is an actor created from an operator-owned ActorTemplate. Calls go
 * through atenet-router as plain reflection V1 HTTP (the same client the
 * podman runner uses), addressed with `ate-target-actor`. Lifecycle goes
 * through ate-api: create on first use, resume on demand, and, with
 * `whenIdle`, suspend or pause as soon as no calls are in flight, freeing the
 * worker until the next call restores the box from its snapshot.
 *
 * Every connection operation re-checks the actor, so a connection held across
 * an idle suspend still works: the call just resumes the box first.
 */
export class SubstrateRunner implements BoxRunner {
  readonly name = 'substrate';
  /** Set by `box()`; mixed into actor names so boxes sharing a template don't collide. */
  boxId?: string;

  private readonly control: SubstrateControl;
  private readonly ownsControl: boolean;
  private readonly template: SubstrateRef;
  private readonly atespace: string;
  private readonly prefix: string;
  private readonly routerUrl: string;
  private readonly whenIdle: SubstrateIdleAction;
  private readonly idleGraceMs: number;
  private readonly onBoxClose: SubstrateBoxCloseAction;
  private readonly readyTimeoutMs: number;
  private readonly egress: SubstrateEgressRule[];
  private readonly reclaimStale: boolean;
  private readonly instances = new Map<string, ActorInstance>();
  private reclaimed?: Promise<void>;
  private closed = false;

  constructor(options: SubstrateRunnerOptions) {
    this.template = parseRef(options.template, 'template');
    this.atespace = options.atespace ?? this.template.atespace;
    this.prefix = options.namePrefix ?? 'genkit-box';
    if (!DNS_LABEL.test(this.prefix) || this.prefix.length > 42) {
      throw new Error(
        `substrateRunner: namePrefix '${this.prefix}' must be a lowercase DNS label of at most 42 characters.`
      );
    }
    this.routerUrl = options.routerUrl.replace(/\/+$/, '');
    this.whenIdle = options.whenIdle ?? 'keep';
    this.idleGraceMs = options.idleGraceMs ?? 0;
    this.onBoxClose = options.onBoxClose ?? 'delete';
    this.readyTimeoutMs = options.readyTimeoutMs ?? 60_000;
    this.egress = options.egress ?? [];
    this.reclaimStale = options.reclaimStale ?? true;
    if (options.control) {
      this.control = options.control;
      this.ownsControl = false;
    } else {
      this.control = grpcSubstrateControl(options.api);
      this.ownsControl = true;
    }
  }

  /** The actor a route key maps to. */
  actorFor(key: string): SubstrateRef {
    const scope = this.boxId ? `${this.boxId}\0${key}` : key;
    return {
      atespace: this.atespace,
      name: substrateActorName(this.prefix, this.template, scope),
    };
  }

  /**
   * The boxes this runner tracks and what each is doing, from this runner's
   * point of view (substrate is not queried). For dashboards: join with
   * `listWorkers`/`listActors` on the actor name to see which route key a
   * worker is serving.
   */
  boxes(): SubstrateBoxInfo[] {
    return [...this.instances.entries()].map(([key, inst]) => ({
      key,
      actor: inst.ref,
      phase: inst.activity ?? inst.state,
      inFlight: inst.holds,
      since: inst.since,
    }));
  }

  async acquire(key: string, signal?: AbortSignal): Promise<BoxConnection> {
    if (this.closed) throw new Error('substrateRunner is closed.');
    if (this.reclaimStale) {
      this.reclaimed ??= this.reclaimStaleActors();
      await this.reclaimed;
    }
    const inst = this.instanceFor(key);
    // Bring the actor up now so errors surface at acquire; the hold ends when
    // this returns. The caller's first call lands in a microtask, before any
    // idle timer (a macrotask) can fire, and re-checks the actor regardless.
    await this.withHold(inst, signal, async () => {});
    return {
      runAction: (req, opts) =>
        this.withHold(inst, opts?.abortSignal, () =>
          inst.client.runAction(req, opts)
        ),
      listActions: () =>
        this.withHold(inst, undefined, () => inst.client.listActions()),
    };
  }

  /**
   * Keeps `whenIdle` away from the box for `key` until the returned function
   * is called (idempotent). For work that outlives the calls into the box,
   * such as a detached (background) agent turn: the call that starts it
   * returns right away, but the box must not be suspended mid-task.
   *
   * Something else (e.g. a model gateway) may still pause the box meanwhile.
   * The runner is not told, so it keeps believing the box is running; its
   * next call reaches the router, which resumes a paused actor on its own.
   */
  hold(key: string): () => void {
    const inst = this.instanceFor(key);
    inst.holds++;
    clearTimeout(inst.idleTimer);
    inst.idleTimer = undefined;
    let released = false;
    return () => {
      if (released) return;
      released = true;
      inst.holds--;
      if (inst.holds === 0) this.scheduleIdle(inst);
    };
  }

  /** Durably suspends the actor for `key` (box core's retention hook). */
  async suspend(key: string): Promise<void> {
    const inst = this.instances.get(key);
    if (!inst) return;
    await this.withLock(inst, () => this.idleOut(inst, 'suspend'));
  }

  /** Deletes the actor for `key`. */
  async release(key: string): Promise<void> {
    const inst = this.instances.get(key);
    if (!inst) return;
    this.instances.delete(key);
    clearTimeout(inst.idleTimer);
    await this.withLock(inst, () => this.deleteActor(inst.ref));
  }

  async close(): Promise<void> {
    if (this.closed) return;
    this.closed = true;
    const all = [...this.instances.values()];
    this.instances.clear();
    await Promise.all(
      all.map((inst) => {
        clearTimeout(inst.idleTimer);
        return this.withLock(inst, async () => {
          if (this.onBoxClose === 'delete') await this.deleteActor(inst.ref);
          else if (this.onBoxClose === 'suspend') {
            await this.idleOut(inst, 'suspend');
          }
        }).catch((e) =>
          logger.warn(`substrateRunner: closing ${fmt(inst.ref)}: ${e}`)
        );
      })
    );
    if (this.ownsControl) this.control.close();
  }

  /**
   * Snapshots RUNNING actors with this runner's prefix (see `reclaimStale`).
   * Best effort: a failure here is logged and never blocks the caller.
   */
  private async reclaimStaleActors(): Promise<void> {
    const action = this.whenIdle === 'pause' ? 'pause' : 'suspend';
    const mine = new RegExp(`^${this.prefix}-[0-9a-f]{20}$`);
    try {
      const stale = (await this.control.listActors(this.atespace)).filter(
        (a) =>
          a.status?.state === 'ACTOR_STATE_RUNNING' &&
          mine.test(a.metadata?.name ?? '')
      );
      await Promise.all(
        stale.map(async (a) => {
          const ref = { atespace: this.atespace, name: a.metadata?.name ?? '' };
          try {
            if (action === 'pause') await this.control.pauseActor(ref);
            else await this.control.suspendActor(ref);
            logger.info(`substrateRunner: ${action}ed stale box ${fmt(ref)}`);
          } catch (e) {
            if (
              !isSubstrateError(
                e,
                'FAILED_PRECONDITION',
                'NOT_FOUND',
                'ABORTED'
              )
            ) {
              throw e;
            }
          }
        })
      );
    } catch (e) {
      logger.warn(`substrateRunner: reclaiming stale boxes failed: ${e}`);
    }
  }

  private instanceFor(key: string): ActorInstance {
    let inst = this.instances.get(key);
    if (!inst) {
      const ref = this.actorFor(key);
      inst = {
        ref,
        client: new ReflectionClientV1(this.routerUrl, {
          headers: { 'ate-target-actor': fmt(ref) },
        }),
        holds: 0,
        state: 'unknown',
        since: Date.now(),
        lock: Promise.resolve(),
      };
      this.instances.set(key, inst);
    }
    return inst;
  }

  /** Records a state/activity change (and when it happened, for `boxes()`). */
  private mark(
    inst: ActorInstance,
    state: ActorInstance['state'],
    activity?: ActorInstance['activity']
  ): void {
    if (inst.state !== state || inst.activity !== activity) {
      inst.since = Date.now();
    }
    inst.state = state;
    inst.activity = activity;
  }

  /** Runs `op` after every earlier lifecycle operation on `inst` settles. */
  private withLock<T>(inst: ActorInstance, op: () => Promise<T>): Promise<T> {
    const result = inst.lock.then(op);
    inst.lock = result.then(
      () => undefined,
      () => undefined
    );
    return result;
  }

  /**
   * Keeps the actor awake for the duration of `fn`: ensures it is running
   * first, and applies `whenIdle` once the last concurrent hold ends.
   */
  private async withHold<T>(
    inst: ActorInstance,
    signal: AbortSignal | undefined,
    fn: () => Promise<T>
  ): Promise<T> {
    inst.holds++;
    clearTimeout(inst.idleTimer);
    inst.idleTimer = undefined;
    try {
      if (inst.state !== 'running') {
        await this.withLock(inst, () => this.ensureRunning(inst, signal));
      }
      return await fn();
    } catch (e) {
      // A failed call may mean the actor crashed or was moved; re-check next time.
      this.mark(inst, 'unknown');
      throw e;
    } finally {
      inst.holds--;
      if (inst.holds === 0) this.scheduleIdle(inst);
    }
  }

  private scheduleIdle(inst: ActorInstance): void {
    if (this.whenIdle === 'keep' || this.closed) return;
    const action = this.whenIdle;
    const fire = () => {
      inst.idleTimer = undefined;
      if (inst.holds > 0 || this.closed) return;
      this.withLock(inst, () => this.idleOut(inst, action)).catch((e) =>
        logger.warn(`substrateRunner: ${action} ${fmt(inst.ref)} failed: ${e}`)
      );
    };
    inst.idleTimer = setTimeout(fire, this.idleGraceMs);
  }

  /**
   * Suspends or pauses the actor (under the lock). Skips if a call started
   * meanwhile. A call arriving mid-snapshot queues behind the lock and then
   * resumes the box, so it never races the snapshot.
   */
  private async idleOut(
    inst: ActorInstance,
    action: 'suspend' | 'pause'
  ): Promise<void> {
    if (inst.holds > 0 && !this.closed) return;
    if (
      action === 'suspend'
        ? inst.state === 'suspended'
        : inst.state !== 'running'
    ) {
      return;
    }
    // Stop trusting `running` before the snapshot starts, so a call arriving
    // now queues behind the lock instead of reaching a box mid-checkpoint.
    this.mark(inst, 'unknown', action === 'pause' ? 'pausing' : 'suspending');
    try {
      if (action === 'pause') await this.control.pauseActor(inst.ref);
      else await this.control.suspendActor(inst.ref);
      this.mark(inst, action === 'pause' ? 'paused' : 'suspended');
      logger.debug(`substrateRunner: ${action}ed ${fmt(inst.ref)}`);
    } catch (e) {
      this.mark(inst, 'unknown');
      // Not running (never started, crashed, already snapshotted): nothing to free.
      if (isSubstrateError(e, 'FAILED_PRECONDITION', 'NOT_FOUND')) return;
      throw e;
    }
  }

  /**
   * Makes the actor RUNNING (under the lock): resume, creating it on first
   * use. ResumeActor returns only after the template's wakeup probe passes,
   * so the box is serving when this resolves.
   *
   * Belief can go stale (another host or `kubectl ate` suspends the actor).
   * That's harmless: the router resumes a non-running actor on its own before
   * routing, this explicit resume just gives clearer errors and a longer
   * budget than the router's request parking.
   */
  private async ensureRunning(
    inst: ActorInstance,
    signal: AbortSignal | undefined
  ): Promise<void> {
    if (inst.state === 'running') return;
    const ref = inst.ref;
    const abort = signal ?? new AbortController().signal;
    const deadline = Date.now() + this.readyTimeoutMs;
    let delay = 100;
    let lastErr: unknown;
    this.mark(inst, inst.state, 'starting');
    try {
      while (!abort.aborted) {
        try {
          await this.control.resumeActor(ref, { signal });
          this.mark(inst, 'running');
          return;
        } catch (e) {
          lastErr = e;
          if (isSubstrateError(e, 'RESOURCE_EXHAUSTED')) {
            this.mark(inst, inst.state, 'waiting-for-worker');
          }
          const next = await this.handleStartError(ref, e, signal);
          if (next === 'running') {
            this.mark(inst, 'running');
            return;
          }
          if (next === 'retry-now') continue;
        }
        if (Date.now() + delay > deadline) break;
        await sleep(delay, abort);
        delay = Math.min(delay * 2, 2_000);
      }
    } finally {
      if (inst.activity) this.mark(inst, inst.state);
    }
    if (abort.aborted)
      throw new Error(`Aborted while starting box ${fmt(ref)}.`);
    throw new Error(
      `Timed out after ${this.readyTimeoutMs}ms starting box ${fmt(ref)}: ${lastErr}`
    );
  }

  /**
   * Decides what a failed ResumeActor means: fixes what it can (create,
   * revert) and asks for an immediate retry, asks for a backoff on transient
   * conditions, and throws for anything else.
   */
  private async handleStartError(
    ref: SubstrateRef,
    e: unknown,
    signal: AbortSignal | undefined
  ): Promise<'running' | 'retry-now' | 'backoff'> {
    if (isSubstrateError(e, 'NOT_FOUND')) {
      await this.createActor(ref, signal);
      return 'retry-now';
    }
    if (isSubstrateError(e, 'FAILED_PRECONDITION')) {
      const state = (await this.control.getActor(ref, { signal })).status
        ?.state;
      if (state === 'ACTOR_STATE_RUNNING') return 'running';
      if (state === 'ACTOR_STATE_CRASHED') {
        // Back to the last durable snapshot, then resume from it.
        logger.warn(`substrateRunner: ${fmt(ref)} crashed; reverting.`);
        await this.control.revertActor(ref, { signal });
        return 'retry-now';
      }
      // Mid-transition (e.g. an idle suspend from another host): wait it out.
      if (state && TRANSIENT_STATES.includes(state)) return 'backoff';
      throw e;
    }
    // Lease held by a concurrent operation, pool saturated, or a control-plane
    // blip: all transient. A connection that never came up (nothing
    // listening, TLS rejected) is not: fail fast.
    if (
      isSubstrateError(e, 'ABORTED', 'RESOURCE_EXHAUSTED', 'UNAVAILABLE') &&
      !/No connection established/.test(e.message)
    ) {
      return 'backoff';
    }
    throw e;
  }

  private async createActor(
    ref: SubstrateRef,
    signal: AbortSignal | undefined
  ): Promise<void> {
    try {
      await this.control.createActor(ref, this.template, { signal });
    } catch (e) {
      // Lost a create race (another call or host): the winner set it up.
      if (isSubstrateError(e, 'ALREADY_EXISTS')) return;
      throw e;
    }
    logger.debug(`substrateRunner: created ${fmt(ref)}`);
    if (this.egress.length === 0) return;
    try {
      await this.control.createEgressPolicy(ref, this.egress, { signal });
    } catch (e) {
      if (!isSubstrateError(e, 'ALREADY_EXISTS')) {
        // Don't leave a box behind whose egress isn't what the caller asked for.
        await this.deleteActor(ref).catch(() => {});
        throw e;
      }
    }
  }

  private async deleteActor(ref: SubstrateRef): Promise<void> {
    try {
      await this.control.deleteActor(ref, { anyState: true });
    } catch (e) {
      if (!isSubstrateError(e, 'NOT_FOUND')) throw e;
    }
  }
}
