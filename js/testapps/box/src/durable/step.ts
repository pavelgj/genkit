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

// The agent loop as a reducer. `step` never waits on a model or a tool: it
// folds settled effects into the transcript, emits the next effects, and
// returns. It mutates the run it's given (the caller passes a fresh copy
// inside a CAS commit) and is synchronous on purpose: anything slow is an
// effect.

import type {
  MessageData,
  Part,
  ToolRequestPart,
  ToolResponsePart,
} from 'genkit';
import type { AgentFinishReason } from 'genkit/beta';
import {
  effectName,
  isTerminal,
  type DurableRun,
  type Effect,
  type EffectRecord,
  type InboxItem,
  type ModelOutput,
  type RuntimeErrorData,
  type TurnEnd,
} from './types.js';

export interface StepConfig {
  maxTurns: number;
  /** Clock, injectable for tests. */
  now: () => number;
  /** Id generator for turns. */
  newId: () => string;
}

export interface StepResult {
  /** Effects that became ready in this tick. */
  emitted: Effect[];
  /** Turns that ended in this tick (a tick can end one and start another). */
  turnEnds: TurnEnd[];
  /** Whether anything changed (if not, the commit can be skipped). */
  changed: boolean;
}

const MAX_RECENT_TURNS = 20;
const MAX_SEEN_REQUESTS = 200;

/**
 * Advances the run as far as possible without waiting. Loops internally:
 * e.g. a turn end followed by a queued input starts the next turn in the
 * same tick.
 */
export function step(run: DurableRun, cfg: StepConfig): StepResult {
  const result: StepResult = { emitted: [], turnEnds: [], changed: false };
  // Bounded: each iteration either changes phase or returns.
  for (let guard = 0; guard < 100; guard++) {
    if (!run.turn) {
      if (!startNextTurn(run, cfg, result)) return result;
      continue;
    }
    if (handleAbort(run, cfg, result)) continue;
    const pending = run.turn.pending.map((id) => run.effects[id]);
    if (pending.some((r) => !r || !isTerminal(r.status))) return result;
    if (run.turn.phase === 'model') foldModel(run, cfg, result, pending[0]);
    else foldTools(run, cfg, result, pending);
  }
  throw new Error('durable step: no progress after 100 iterations');
}

// ---------------------------------------------------------------------------
// Turn start

function startNextTurn(
  run: DurableRun,
  cfg: StepConfig,
  result: StepResult
): boolean {
  // An abort with no running turn has nothing to stop.
  while (run.inbox[0]?.type === 'abort') {
    run.inbox.shift();
    result.changed = true;
  }
  const item = run.inbox.shift();
  if (!item || item.type === 'abort') return false;
  result.changed = true;

  const turnId = cfg.newId();
  const base = {
    id: turnId,
    iteration: 0,
    pending: [] as string[],
    startedAt: cfg.now(),
    requestIds: item.requestId ? [item.requestId] : [],
    snapshotId: item.snapshotId,
    parentSnapshotId: item.parentSnapshotId,
  };

  if (item.type === 'input') {
    run.messages.push(item.message);
    run.turn = { ...base, phase: 'model' };
    emitModel(run, result);
    return true;
  }

  // resume: answer interrupted tool requests (respond) and/or rerun them
  // (restart), then continue the loop with a model call.
  const err = validateResume(run.messages, item);
  if (err) {
    run.turn = { ...base, phase: 'model' };
    endTurn(run, cfg, result, 'failed', err);
    return true;
  }
  const completed = takeCompletedCalls(run.messages);
  const respond = [
    ...completed,
    ...(item.respond ?? []).map(
      (p): ToolResponsePart => ({ toolResponse: p.toolResponse })
    ),
  ];
  const restart = item.restart ?? [];
  if (!restart.length) {
    run.messages.push({ role: 'tool', content: respond });
    run.turn = { ...base, phase: 'model' };
    emitModel(run, result);
    return true;
  }
  run.turn = { ...base, phase: 'tools', carried: respond };
  restart.forEach((part, i) => {
    addEffect(run, result, {
      kind: 'tool',
      id: `${turnId}:0:tool:${i}`,
      request: { toolRequest: part.toolRequest },
      resumed: part.metadata?.resumed ?? true,
    });
  });
  return true;
}

function validateResume(
  messages: MessageData[],
  item: Extract<InboxItem, { type: 'resume' }>
): RuntimeErrorData | undefined {
  const last = messages.at(-1);
  const requests = (last?.role === 'model' ? last.content : []).filter(
    (p): p is ToolRequestPart => !!p.toolRequest
  );
  const open = (name: string, ref?: string) =>
    requests.some(
      (r) => r.toolRequest.name === name && r.toolRequest.ref === ref
    );
  const bad = [
    ...(item.respond ?? []).map((r) => r.toolResponse),
    ...(item.restart ?? []).map((r) => r.toolRequest),
  ].find((t) => !open(t.name, t.ref));
  if (bad) {
    return {
      status: 'INVALID_ARGUMENT',
      message: `resume references tool '${bad.name}' which is not an open tool request.`,
    };
  }
  if (!item.respond?.length && !item.restart?.length) {
    return { status: 'INVALID_ARGUMENT', message: 'empty resume' };
  }
  return undefined;
}

/**
 * On resume, calls that completed before the interrupt (`pendingOutput`)
 * become responses, and interrupt markers are removed so the model sees a
 * plain request/response pair.
 */
function takeCompletedCalls(messages: MessageData[]): ToolResponsePart[] {
  const last = messages.at(-1);
  if (last?.role !== 'model') return [];
  const completed: ToolResponsePart[] = [];
  last.content = last.content.map((part) => {
    if (!part.toolRequest || !part.metadata) return part;
    const { interrupt, pendingOutput, ...rest } = part.metadata;
    if (pendingOutput !== undefined) {
      const { name, ref } = part.toolRequest;
      completed.push({ toolResponse: { name, ref, output: pendingOutput } });
    }
    return {
      toolRequest: part.toolRequest,
      ...(Object.keys(rest).length && { metadata: rest }),
    };
  });
  return completed;
}

// ---------------------------------------------------------------------------
// Folding results

function foldModel(
  run: DurableRun,
  cfg: StepConfig,
  result: StepResult,
  rec: EffectRecord
): void {
  const turn = run.turn!;
  result.changed = true;
  if (rec.status !== 'done') {
    if (rec.status === 'cancelled') return endTurn(run, cfg, result, 'aborted');
    return endTurn(
      run,
      cfg,
      result,
      'failed',
      rec.error ?? { message: `model call ${rec.status}` }
    );
  }
  const out = rec.output as ModelOutput;
  run.messages.push(out.message);
  const requests = out.message.content.filter(
    (p): p is ToolRequestPart => !!p.toolRequest
  );
  if (!requests.length) {
    return endTurn(run, cfg, result, toAgentFinishReason(out.finishReason));
  }
  if (turn.iteration + 1 >= cfg.maxTurns) {
    return endTurn(run, cfg, result, 'failed', {
      status: 'ABORTED',
      message: `Exceeded maximum tool call iterations (${cfg.maxTurns})`,
    });
  }
  turn.phase = 'tools';
  turn.pending = [];
  requests.forEach((part, i) => {
    addEffect(run, result, {
      kind: 'tool',
      id: `${turn.id}:${turn.iteration}:tool:${i}`,
      request: { toolRequest: part.toolRequest },
    });
  });
}

function foldTools(
  run: DurableRun,
  cfg: StepConfig,
  result: StepResult,
  records: EffectRecord[]
): void {
  const turn = run.turn!;
  result.changed = true;

  if (records.some((r) => r.status === 'cancelled')) {
    return endTurn(run, cfg, result, 'aborted');
  }

  // Interrupts end the turn like `generate` does: the model message's tool
  // requests get `interrupt` metadata (completed ones carry `pendingOutput`),
  // and the client resumes with respond/restart.
  if (records.some((r) => r.status === 'interrupt')) {
    markInterrupts(run, records, turn.carried ?? []);
    return endTurn(run, cfg, result, 'interrupted');
  }

  const responses: Part[] = [...(turn.carried ?? [])];
  for (const r of records) {
    if (r.effect.kind !== 'tool') continue;
    const { name, ref } = r.effect.request.toolRequest;
    responses.push({ toolResponse: { name, ref, output: toolOutput(r) } });
  }
  turn.carried = undefined;
  run.messages.push({ role: 'tool', content: responses });

  // Steering: inputs marked 'steer' join the running turn here, after the
  // current tool calls and before the next model call.
  const steer: Extract<InboxItem, { type: 'input' }>[] = [];
  run.inbox = run.inbox.filter((item) => {
    if (item.type === 'input' && item.whenBusy === 'steer') {
      steer.push(item);
      return false;
    }
    return true;
  });
  for (const s of steer) {
    run.messages.push(s.message);
    if (s.requestId) turn.requestIds.push(s.requestId);
  }

  turn.iteration++;
  turn.phase = 'model';
  emitModel(run, result);
}

function toolOutput(r: EffectRecord): unknown {
  switch (r.status) {
    case 'done':
      return r.output;
    case 'failed':
      return { error: r.error?.message ?? 'tool failed' };
    case 'abandoned':
      return {
        error:
          'This tool call was interrupted (the agent process restarted) and ' +
          'is not safe to rerun automatically. Its effects, if any, are ' +
          'unknown. Check the current state before retrying.',
      };
    default:
      return { error: `tool ${r.status}` };
  }
}

function markInterrupts(
  run: DurableRun,
  records: EffectRecord[],
  carried: ToolResponsePart[]
): void {
  const key = (name: string, ref?: string) => `${name}#${ref ?? ''}`;
  const extras = new Map<string, Record<string, unknown>>();
  // Responses carried over from a resume keep their answers as pendingOutput,
  // so a second interrupt during a restart doesn't lose them.
  for (const c of carried) {
    extras.set(key(c.toolResponse.name, c.toolResponse.ref), {
      pendingOutput: c.toolResponse.output,
    });
  }
  for (const r of records) {
    if (r.effect.kind !== 'tool') continue;
    const { name, ref } = r.effect.request.toolRequest;
    extras.set(
      key(name, ref),
      r.status === 'interrupt'
        ? { interrupt: r.interrupt ?? true }
        : { pendingOutput: toolOutput(r) }
    );
  }
  const last = run.messages.at(-1);
  if (last?.role !== 'model') return;
  last.content = last.content.map((part) => {
    if (!part.toolRequest) return part;
    const extra = extras.get(key(part.toolRequest.name, part.toolRequest.ref));
    return extra ? { ...part, metadata: { ...part.metadata, ...extra } } : part;
  });
}

// ---------------------------------------------------------------------------
// Abort

function handleAbort(
  run: DurableRun,
  cfg: StepConfig,
  result: StepResult
): boolean {
  const idx = run.inbox.findIndex((i) => i.type === 'abort');
  if (idx < 0) return false;
  run.inbox.splice(idx, 1);
  result.changed = true;
  // Leased effects keep running until their executor notices (the scheduler
  // fires their abort signal); late results are ignored because the record is
  // gone or no longer leased.
  for (const id of run.turn!.pending) {
    const rec = run.effects[id];
    if (rec && !isTerminal(rec.status)) {
      rec.status = 'cancelled';
      rec.lease = undefined;
    }
  }
  endTurn(run, cfg, result, 'aborted');
  return true;
}

// ---------------------------------------------------------------------------
// Helpers

function emitModel(run: DurableRun, result: StepResult): void {
  const turn = run.turn!;
  turn.pending = [];
  addEffect(run, result, {
    kind: 'model',
    id: `${turn.id}:${turn.iteration}:model`,
    call: { messageCount: run.messages.length },
  });
}

function addEffect(run: DurableRun, result: StepResult, effect: Effect): void {
  // Deterministic ids make re-emission a no-op.
  if (!run.effects[effect.id]) {
    run.effects[effect.id] = {
      effect,
      status: 'ready',
      wait: { mode: 'run' },
      attempt: 0,
    };
    result.emitted.push(effect);
  }
  run.turn!.pending.push(effect.id);
}

function endTurn(
  run: DurableRun,
  cfg: StepConfig,
  result: StepResult,
  finishReason: AgentFinishReason,
  error?: RuntimeErrorData
): void {
  const turn = run.turn!;
  const turnEffects = Object.values(run.effects).filter((r) =>
    r.effect.id.startsWith(`${turn.id}:`)
  );
  const end: TurnEnd = {
    turnId: turn.id,
    requestIds: turn.requestIds,
    snapshotId: turn.snapshotId,
    parentSnapshotId: turn.parentSnapshotId,
    finishReason,
    ...(error && { error }),
    messageCount: run.messages.length,
    endedAt: cfg.now(),
    effects: turnEffects.map((r) => ({
      id: r.effect.id,
      kind: r.effect.kind,
      name: effectName(r.effect),
      status: r.status,
      attempt: r.attempt,
    })),
  };
  // The turn's effects are summarized in `end`; drop the records so the run
  // document doesn't grow without bound.
  for (const r of turnEffects) delete run.effects[r.effect.id];
  run.turn = undefined;
  run.turnCount++;
  run.recentTurns = [...run.recentTurns, end].slice(-MAX_RECENT_TURNS);
  run.seenRequests = [...run.seenRequests, ...turn.requestIds].slice(
    -MAX_SEEN_REQUESTS
  );
  result.turnEnds.push(end);
  result.changed = true;
}

function toAgentFinishReason(reason: string | undefined): AgentFinishReason {
  switch (reason) {
    case 'stop':
    case 'length':
    case 'blocked':
    case 'interrupted':
    case 'other':
      return reason;
    default:
      return 'stop';
  }
}
