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

// Wire types for GET /api/state. Mirrors src/substrate-state.ts on the server
// (kept as a copy so the browser bundle doesn't pull in server code).

export type BoxPhase =
  | 'starting'
  | 'waiting-for-worker'
  | 'running'
  | 'suspending'
  | 'pausing'
  | 'suspended'
  | 'paused'
  | 'unknown';

export interface WorkerView {
  name: string;
  pod: string;
  state: string;
  capacity: number;
  running: Array<{ actor: string; sessionId?: string }>;
}

export interface SessionView {
  sessionId: string;
  actor: string;
  /** What the host's runner is doing with the actor. */
  phase: BoxPhase;
  phaseMs: number;
  inFlight: number;
  /** Substrate's view (RUNNING, PAUSED, SUSPENDED, ...). */
  actorState?: string;
  workerPod?: string;
  task?: TaskSummary;
}

export interface TaskSummary {
  status: string;
  text?: string;
  error?: string;
  elapsedMs: number;
}

export interface DemoState {
  pool: string;
  workers: WorkerView[];
  sessions: SessionView[];
  otherActors: Array<{ actor: string; state: string; workerPod?: string }>;
}

/** Output of the chatWithAgent flow. */
export interface ChatOutput {
  sessionId: string;
  text: string;
}

/**
 * The one-word status shown for a session. Substrate's PAUSED wins over the
 * runner's phase: the runner doesn't know the gateway parked the actor.
 */
export type DisplayPhase = BoxPhase | 'parked';

export function displayPhase(view?: SessionView): DisplayPhase | undefined {
  if (!view) return undefined;
  if (view.actorState === 'PAUSED') return 'parked';
  // Snapshot in progress: still on its worker, about to be parked.
  if (view.actorState === 'PAUSING') return 'pausing';
  return view.phase;
}
