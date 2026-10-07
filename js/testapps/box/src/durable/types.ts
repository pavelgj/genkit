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

// Data model of the durable agent engine (prototype). Everything here is plain
// JSON: the run document is the single source of truth for a session and is
// committed atomically (CAS on `version`). See durable-agents-design.local.md.

import type { MessageData, ToolRequestPart, ToolResponsePart } from 'genkit';
import type { AgentFinishReason, Artifact } from 'genkit/beta';

export interface RuntimeErrorData {
  status?: string;
  message: string;
}

/**
 * A model call, as data: the first `messageCount` transcript messages (the
 * transcript is append-only while the call is pending, so the prefix is
 * stable; storing a count avoids copying the transcript into every effect).
 * The executor renders the agent's prompt (system, tools, config) around it
 * at execution time, so prompt rendering never runs inside the reducer.
 */
export interface ModelCall {
  messageCount: number;
}

export interface ModelOutput {
  message: MessageData;
  finishReason?: string;
  finishMessage?: string;
  model?: string;
}

export type Effect =
  | { kind: 'model'; id: string; call: ModelCall }
  | {
      kind: 'tool';
      id: string;
      request: ToolRequestPart;
      /** `resumed` metadata for `resume.restart`. */
      resumed?: unknown;
    };

/**
 * How an effect completes. Only 'run' is implemented; the other modes are in
 * the schema so adding them later needs no migration (see "Completion modes").
 */
export type EffectWait =
  | { mode: 'run' }
  | { mode: 'poll'; handle: unknown; nextPollAt: string; intervalMs: number }
  | { mode: 'at'; time: string; value?: unknown }
  | { mode: 'signal'; key: string; deadline?: string };

export type EffectStatus =
  | 'ready'
  | 'leased'
  | 'done'
  | 'failed'
  | 'interrupt'
  | 'abandoned'
  | 'cancelled'
  | 'waiting';

export interface EffectRecord {
  effect: Effect;
  status: EffectStatus;
  wait: EffectWait;
  lease?: { owner: string; until: number };
  attempt: number;
  output?: unknown;
  error?: RuntimeErrorData;
  /** Interrupt metadata (ToolInterruptError) for status 'interrupt'. */
  interrupt?: Record<string, unknown> | true;
}

export type InboxItem =
  | {
      type: 'input';
      message: MessageData;
      requestId?: string;
      /** 'steer' joins a running turn after its current tool calls. */
      whenBusy?: 'queue' | 'steer';
      /** Facade bookkeeping: the user-visible snapshot this turn finalizes. */
      snapshotId?: string;
      parentSnapshotId?: string;
    }
  | {
      type: 'resume';
      respond?: ToolResponsePart[];
      restart?: ToolRequestPart[];
      requestId?: string;
      snapshotId?: string;
      parentSnapshotId?: string;
    }
  | { type: 'abort' };

export interface TurnState {
  id: string;
  iteration: number;
  phase: 'model' | 'tools';
  /** Effect ids the current phase waits on. */
  pending: string[];
  requestIds: string[];
  snapshotId?: string;
  parentSnapshotId?: string;
  startedAt: number;
  /** Tool responses carried over from an interrupted turn (resume). */
  carried?: ToolResponsePart[];
}

export interface EffectSummary {
  id: string;
  kind: Effect['kind'];
  name: string;
  status: EffectStatus;
  attempt: number;
}

export interface TurnEnd {
  turnId: string;
  /** The request that started the turn, plus steering inputs it absorbed. */
  requestIds: string[];
  snapshotId?: string;
  parentSnapshotId?: string;
  finishReason: AgentFinishReason;
  error?: RuntimeErrorData;
  /** Transcript length at turn end (a later turn may already have started). */
  messageCount: number;
  endedAt: number;
  effects: EffectSummary[];
}

/** The run document: transcript, business state and work queue, together. */
export interface DurableRun {
  kind: 'durable-run';
  version: number;
  sessionId: string;
  messages: MessageData[];
  custom?: unknown;
  artifacts: Artifact[];
  inbox: InboxItem[];
  turn?: TurnState;
  effects: Record<string, EffectRecord>;
  turnCount: number;
  /** Most recent turn ends, newest last (bounded). */
  recentTurns: TurnEnd[];
  /** Recently seen requestIds, for exactly-once submission. */
  seenRequests: string[];
}

export function isDurableRun(value: unknown): value is DurableRun {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value as { kind?: unknown }).kind === 'durable-run'
  );
}

export function newRun(sessionId: string, messages: MessageData[]): DurableRun {
  return {
    kind: 'durable-run',
    version: 0,
    sessionId,
    messages,
    artifacts: [],
    inbox: [],
    effects: {},
    turnCount: 0,
    recentTurns: [],
    seenRequests: [],
  };
}

/** Status values after which an effect will not change again. */
export function isTerminal(status: EffectStatus): boolean {
  return (
    status === 'done' ||
    status === 'failed' ||
    status === 'interrupt' ||
    status === 'abandoned' ||
    status === 'cancelled'
  );
}

export function effectName(effect: Effect): string {
  return effect.kind === 'model' ? 'model' : effect.request.toolRequest.name;
}
