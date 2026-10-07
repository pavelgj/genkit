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

// The scheduler. Every event (a submission, a finished effect, a recovery
// sweep) is one CAS commit that applies the event, runs `step`, and leases
// whatever became ready. Leased effects then run outside the commit; their
// results come back as the next event. Nothing here waits on a model or a
// tool while holding state, so any engine instance sharing the store can
// pick a session up (leases expire if an engine dies).

import type {
  GenerateResponseChunkData,
  MessageData,
  ToolRequestPart,
} from 'genkit';
import { randomUUID } from 'node:crypto';
import { EventEmitter } from 'node:events';
import { step, type StepConfig } from './step.js';
import type { DurableStore } from './store.js';
import {
  isTerminal,
  newRun,
  type DurableRun,
  type Effect,
  type EffectRecord,
  type InboxItem,
  type ModelOutput,
  type RuntimeErrorData,
  type TurnEnd,
} from './types.js';

/** What the engine knows about the session's agent: how to run effects. */
export interface EffectRuntime {
  runModel(
    messages: MessageData[],
    opts: EffectRunOptions & {
      onChunk: (chunk: GenerateResponseChunkData) => void;
    }
  ): Promise<ModelOutput>;
  runTool(
    request: ToolRequestPart,
    opts: EffectRunOptions & { resumed?: unknown }
  ): Promise<ToolOutcome>;
  /** Whether a tool may be rerun after a crash cut it off. */
  replay(toolName: string): 'safe' | 'unsafe';
}

export interface EffectRunOptions {
  /** Carries `durable: { sessionId, effectId, attempt }` (box routes use it). */
  context: DurableContext;
  abortSignal: AbortSignal;
}

export interface DurableContext {
  durable: { sessionId: string; effectId: string; attempt: number };
  [key: string]: unknown;
}

export type ToolOutcome =
  | { status: 'done'; output: unknown }
  | { status: 'interrupt'; interrupt: Record<string, unknown> | true };

/** Physical state: told what's coming next for a session (see design doc). */
export interface EnvironmentHooks {
  readonly name: string;
  idle(sessionId: string, expect: 'short' | 'long'): Promise<void>;
}

export interface DurableEngineOptions {
  store: DurableStore;
  runtime: EffectRuntime;
  maxTurns?: number;
  /** Lease length; a dead engine's effects are reclaimed after this. */
  leaseMs?: number;
  /** How often to look for expired leases on active sessions. */
  sweepMs?: number;
  concurrency?: { model?: number; tool?: number };
  environments?: EnvironmentHooks[];
  /** Called after each committed turn end (e.g. to write the user snapshot). */
  onTurnEnd?: (run: DurableRun, end: TurnEnd) => Promise<void>;
  /** Called after every commit (progress, heartbeats). Must not throw. */
  onCommit?: (run: DurableRun) => void;
  /**
   * Event bus. Shared across engine instances so that facades waiting on a
   * turn keep hearing about it after an engine restart (in-process demo).
   */
  events?: EventEmitter;
  log?: (msg: string) => void;
}

/** Events on `engine.events` (a plain EventEmitter; listed for reference). */
export interface EngineEvents {
  chunk: (
    sessionId: string,
    chunk: GenerateResponseChunkData,
    effectId: string
  ) => void;
  /** After every commit while a turn is running. */
  turn: (sessionId: string, turnId: string, requestIds: string[]) => void;
  turnEnd: (sessionId: string, end: TurnEnd) => void;
  /** An effect started executing on this engine. */
  effect: (sessionId: string, rec: EffectRecord) => void;
}

interface Inflight {
  sessionId: string;
  kind: Effect['kind'];
  controller: AbortController;
  heartbeat: ReturnType<typeof setInterval>;
}

interface PumpResult {
  run: DurableRun;
  leased: EffectRecord[];
  turnEnds: TurnEnd[];
  starved: boolean;
  /** The turn moved from tools back to the model (environments can rest). */
  toolsSettled: boolean;
}

export class DurableEngine {
  readonly owner = `engine-${randomUUID().slice(0, 8)}`;
  readonly events: EventEmitter;
  private readonly store: DurableStore;
  private readonly runtime: EffectRuntime;
  private readonly stepCfg: StepConfig;
  private readonly leaseMs: number;
  private readonly limits: { model: number; tool: number };
  private readonly environments: EnvironmentHooks[];
  private readonly inflight = new Map<string, Inflight>();
  private readonly starved = new Set<string>();
  private sweepTimer?: ReturnType<typeof setInterval>;
  private stopped = false;
  private readonly log: (msg: string) => void;

  constructor(private readonly options: DurableEngineOptions) {
    this.store = options.store;
    this.runtime = options.runtime;
    this.leaseMs = options.leaseMs ?? 30_000;
    this.limits = {
      model: options.concurrency?.model ?? 8,
      tool: options.concurrency?.tool ?? 16,
    };
    this.environments = options.environments ?? [];
    this.log = options.log ?? (() => {});
    this.stepCfg = {
      maxTurns: options.maxTurns ?? 20,
      now: () => Date.now(),
      newId: () => randomUUID().slice(0, 8),
    };
    this.events = options.events ?? new EventEmitter();
    this.events.setMaxListeners(0);
  }

  // -------------------------------------------------------------------------
  // Public API

  /**
   * Queues an input and kicks the session. Exactly-once by `requestId`: a
   * retried submission with a known id is not queued again. Returns false if
   * it was a duplicate.
   */
  async submit(
    sessionId: string,
    item: Exclude<InboxItem, { type: 'abort' }>,
    seed?: { messages: MessageData[]; custom?: unknown }
  ): Promise<boolean> {
    const accepted = await this.pump(sessionId, (run) => {
      const r = run ?? newRun(sessionId, structuredClone(seed?.messages ?? []));
      if (!run && seed?.custom !== undefined) r.custom = seed.custom;
      const id = item.requestId;
      if (id && isKnownRequest(r, id)) return { run: r, accepted: false };
      r.inbox.push(item);
      return { run: r, accepted: true };
    });
    return accepted ?? false;
  }

  /** Requests an abort of the running turn (one writer: the run document). */
  async abort(sessionId: string): Promise<void> {
    await this.pump(sessionId, (run) => {
      if (!run?.turn) return null;
      run.inbox.push({ type: 'abort' });
      return { run, accepted: true };
    });
    // Stop local executors right away; their late results are ignored because
    // the records are no longer leased.
    for (const [id, f] of this.inflight) {
      if (f.sessionId !== sessionId) continue;
      f.controller.abort();
      clearInterval(f.heartbeat);
      this.inflight.delete(id);
    }
  }

  load(sessionId: string): Promise<DurableRun | undefined> {
    return this.store.load(sessionId);
  }

  /**
   * Starts the background sweep and recovers active sessions (expired leases
   * are reclaimed, safe tools rerun, unsafe ones abandoned).
   */
  async start(): Promise<void> {
    this.stopped = false;
    const sweepMs = this.options.sweepMs ?? Math.max(1_000, this.leaseMs / 3);
    this.sweepTimer = setInterval(() => void this.sweep(), sweepMs);
    this.sweepTimer.unref?.();
    await this.sweep();
  }

  /** One recovery pass over sessions the store reports as active. */
  async sweep(): Promise<void> {
    if (this.stopped) return;
    const ids = new Set([...(await this.store.listActive()), ...this.starved]);
    this.starved.clear();
    await Promise.all(
      [...ids].map((id) =>
        this.kick(id).catch((e) => this.log(`sweep ${id}: ${e}`))
      )
    );
  }

  /** Applies no event; just steps and leases (recovery, starvation). */
  kick(sessionId: string): Promise<unknown> {
    return this.pump(sessionId, (run) =>
      run ? { run, accepted: true } : null
    );
  }

  /**
   * Simulates a crash: stops the sweep, abandons in-flight work without
   * settling it (their leases expire in the store), and drops listeners.
   */
  crash(): void {
    this.stopped = true;
    clearInterval(this.sweepTimer);
    for (const f of this.inflight.values()) {
      clearInterval(f.heartbeat);
      f.controller.abort(new Error('engine crashed'));
    }
    this.inflight.clear();
  }

  stop(): void {
    this.crash();
  }

  get isStopped(): boolean {
    return this.stopped;
  }

  /** Effects this engine instance is currently executing. */
  inflightEffects(): { effectId: string; sessionId: string; kind: string }[] {
    return [...this.inflight].map(([effectId, f]) => ({
      effectId,
      sessionId: f.sessionId,
      kind: f.kind,
    }));
  }

  // -------------------------------------------------------------------------
  // The pump: apply an event, step, lease, all in one commit

  private async pump<T>(
    sessionId: string,
    apply: (
      run: DurableRun | undefined
    ) => { run: DurableRun; accepted: T } | null
  ): Promise<T | null> {
    if (this.stopped) throw new Error(`${this.owner} is stopped`);
    // Free slots are read before the commit; the commit fn stays pure so a
    // store may retry it.
    const free = {
      model: this.limits.model - this.countInflight('model'),
      tool: this.limits.tool - this.countInflight('tool'),
    };
    const now = Date.now();
    const inflightIds = new Set(this.inflight.keys());
    const out = await this.store.commit(sessionId, (current) => {
      const applied = apply(current);
      if (!applied) return null;
      const { run } = applied;
      const before = run.turn && { id: run.turn.id, phase: run.turn.phase };
      reclaimExpired(
        run,
        now,
        (name) => this.runtime.replay(name),
        // Our own leases are alive as long as we are: the work is running
        // here (the heartbeat may just be late). Only a dead owner expires.
        (effectId) => inflightIds.has(effectId),
        this.log
      );
      const stepped = step(run, this.stepCfg);
      const leased: EffectRecord[] = [];
      let starved = false;
      for (const rec of Object.values(run.effects)) {
        if (rec.status !== 'ready') continue;
        if (free[rec.effect.kind] <= 0) {
          starved = true;
          continue;
        }
        free[rec.effect.kind]--;
        rec.status = 'leased';
        rec.attempt++;
        rec.lease = { owner: this.owner, until: now + this.leaseMs };
        leased.push(structuredClone(rec));
      }
      const toolsSettled =
        !!before &&
        before.phase === 'tools' &&
        run.turn?.id === before.id &&
        run.turn.phase === 'model';
      const result: PumpResult = {
        run: structuredClone(run),
        leased,
        turnEnds: stepped.turnEnds,
        starved,
        toolsSettled,
      };
      return { run, result: { pump: result, accepted: applied.accepted } };
    });
    if (!out) return null;
    await this.afterCommit(sessionId, out.pump);
    return out.accepted;
  }

  private async afterCommit(sessionId: string, p: PumpResult): Promise<void> {
    if (p.starved) this.starved.add(sessionId);
    if (p.run.turn) {
      this.events.emit('turn', sessionId, p.run.turn.id, p.run.turn.requestIds);
    }
    try {
      this.options.onCommit?.(p.run);
    } catch (e) {
      this.log(`onCommit ${sessionId}: ${e}`);
    }
    for (const rec of p.leased) this.execute(sessionId, p.run, rec);
    for (const end of p.turnEnds) {
      try {
        await this.options.onTurnEnd?.(p.run, end);
      } catch (e) {
        this.log(`onTurnEnd ${sessionId}: ${e}`);
      }
      this.events.emit('turnEnd', sessionId, end);
    }
    // Environment hints: the engine knows what comes next.
    const hint: 'short' | 'long' | undefined =
      p.turnEnds.length && !p.run.turn
        ? 'long' // waiting on a human
        : p.toolsSettled
          ? 'short' // waiting on the model
          : undefined;
    if (hint) {
      for (const env of this.environments) {
        env
          .idle(sessionId, hint)
          .catch((e) => this.log(`env ${env.name} idle: ${e}`));
      }
    }
  }

  private countInflight(kind: Effect['kind']): number {
    let n = 0;
    for (const f of this.inflight.values()) if (f.kind === kind) n++;
    return n;
  }

  // -------------------------------------------------------------------------
  // Executing leased effects

  private execute(sessionId: string, run: DurableRun, rec: EffectRecord): void {
    const effect = rec.effect;
    const controller = new AbortController();
    // Renew the lease while the effect runs; a dead engine stops renewing and
    // its effects become reclaimable once the lease expires.
    const heartbeat = setInterval(
      () => void this.renew(sessionId, effect.id).catch(() => {}),
      Math.max(50, this.leaseMs / 3)
    );
    heartbeat.unref?.();
    this.inflight.set(effect.id, {
      sessionId,
      kind: effect.kind,
      controller,
      heartbeat,
    });
    this.events.emit('effect', sessionId, rec);
    const context: DurableContext = {
      durable: { sessionId, effectId: effect.id, attempt: rec.attempt },
    };
    const opts = { context, abortSignal: controller.signal };

    const work: Promise<Settlement> =
      effect.kind === 'model'
        ? this.runtime
            .runModel(run.messages.slice(0, effect.call.messageCount), {
              ...opts,
              onChunk: (chunk) =>
                this.events.emit('chunk', sessionId, chunk, effect.id),
            })
            .then((output) => ({ status: 'done', output }))
        : this.runtime
            .runTool(effect.request, { ...opts, resumed: effect.resumed })
            .then(
              (o): Settlement =>
                o.status === 'done'
                  ? { status: 'done', output: o.output }
                  : { status: 'interrupt', interrupt: o.interrupt }
            );

    work
      .catch((e): Settlement => ({ status: 'failed', error: toErrorData(e) }))
      .then(async (s) => {
        const mine = this.inflight.get(effect.id);
        clearInterval(heartbeat);
        // Crashed or aborted meanwhile: the result is dropped on the floor,
        // exactly what a real crash would do.
        if (!mine || mine.controller !== controller || this.stopped) return;
        this.inflight.delete(effect.id);
        await this.pump(sessionId, (cur) => {
          if (!cur) return null;
          const r = cur.effects[effect.id];
          if (r?.status !== 'leased' || r.lease?.owner !== this.owner) {
            return null; // lease lost (reclaimed, aborted): ignore
          }
          Object.assign(r, s);
          r.lease = undefined;
          return { run: cur, accepted: true };
        });
      })
      .catch((e) => this.log(`settle ${effect.id}: ${e}`));
  }

  private async renew(sessionId: string, effectId: string): Promise<void> {
    if (this.stopped) return;
    await this.store.commit(sessionId, (cur) => {
      const r = cur?.effects[effectId];
      if (!cur || r?.status !== 'leased' || r.lease?.owner !== this.owner) {
        return null;
      }
      r.lease = { owner: this.owner, until: Date.now() + this.leaseMs };
      return { run: cur, result: true };
    });
  }
}

type Settlement =
  | { status: 'done'; output: unknown }
  | { status: 'interrupt'; interrupt: Record<string, unknown> | true }
  | { status: 'failed'; error: RuntimeErrorData };

/**
 * Recovery: effects whose lease expired were cut off by a dead engine. Model
 * calls are always safe to resend; tools rerun only when marked replay-safe,
 * otherwise they're abandoned and the model is told.
 */
function reclaimExpired(
  run: DurableRun,
  now: number,
  replay: (toolName: string) => 'safe' | 'unsafe',
  runningHere: (effectId: string) => boolean,
  log: (msg: string) => void
): void {
  for (const rec of Object.values(run.effects)) {
    if (rec.status !== 'leased' || !rec.lease || rec.lease.until > now)
      continue;
    if (runningHere(rec.effect.id)) continue;
    const safe =
      rec.effect.kind === 'model' ||
      replay(rec.effect.request.toolRequest.name) === 'safe';
    log(
      `reclaim ${rec.effect.id} (lease of ${rec.lease.owner} expired): ` +
        (safe ? 'rerun' : 'abandon')
    );
    rec.lease = undefined;
    rec.status = safe ? 'ready' : 'abandoned';
  }
}

function isKnownRequest(run: DurableRun, id: string): boolean {
  return (
    run.seenRequests.includes(id) ||
    !!run.turn?.requestIds.includes(id) ||
    run.inbox.some((i) => i.type !== 'abort' && i.requestId === id)
  );
}

function toErrorData(e: unknown): RuntimeErrorData {
  if (e instanceof Error) {
    const status = (e as { status?: unknown }).status;
    return {
      message: e.message,
      ...(typeof status === 'string' && { status }),
    };
  }
  return { message: String(e) };
}

export { isTerminal };
