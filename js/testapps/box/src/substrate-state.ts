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

// Builds the dashboard view of the substrate demo: which session each worker
// is serving. Three sources, joined on the actor name:
//
//   ListWorkers      every worker in the pool, and its capacity
//   ListActors       which worker each actor is assigned to
//   runner.boxes()   which session (route key) each actor belongs to, and
//                    what the runner is doing with it (e.g. waiting for a
//                    worker, which substrate does not record)
//
// Shared with the web UI as plain JSON (web/src/types.ts mirrors these types).

import type {
  SubstrateActor,
  SubstrateBoxInfo,
  SubstrateBoxPhase,
  SubstrateWorker,
} from '@genkit-ai/box/substrate';

export interface WorkerView {
  name: string;
  pod: string;
  state: string;
  capacity: number;
  /** Sessions this worker is running right now (usually 0 or 1). */
  running: Array<{ actor: string; sessionId?: string }>;
}

export interface SessionView {
  sessionId: string;
  actor: string;
  /** What this host's runner is doing with the actor. */
  phase: SubstrateBoxPhase;
  /** ms since `phase` started. */
  phaseMs: number;
  inFlight: number;
  /**
   * The actor's state according to substrate (RUNNING, PAUSED, ...). Differs
   * from `phase` when someone else acted on it: PAUSED while `phase` says
   * running means the model gateway parked it during a model call.
   */
  actorState?: string;
  /** Pod of the worker hosting it, when running. */
  workerPod?: string;
  /** The session's latest background task, if any. */
  task?: TaskSummary;
}

/** A background task, as tracked by the host. */
export interface TaskSummary {
  status: string;
  text?: string;
  error?: string;
  /** Run time so far, or total once finished. */
  elapsedMs: number;
}

export interface DemoState {
  pool: string;
  workers: WorkerView[];
  sessions: SessionView[];
  /** Actors in the atespace that this process isn't tracking (other hosts, leftovers). */
  otherActors: Array<{ actor: string; state: string; workerPod?: string }>;
}

export function buildDemoState(input: {
  pool: string;
  workers: SubstrateWorker[];
  actors: SubstrateActor[];
  boxes: SubstrateBoxInfo[];
  /** Background tasks by session id. */
  tasks?: Map<
    string,
    {
      status: string;
      text?: string;
      error?: string;
      startedAt: number;
      finishedAt?: number;
    }
  >;
  now: number;
}): DemoState {
  const sessionByActor = new Map(input.boxes.map((b) => [b.actor.name, b.key]));

  const runningOn = new Map<string, WorkerView['running']>();
  const podByActor = new Map<string, string>();
  const stateByActor = new Map<string, string>();
  for (const a of input.actors) {
    const name = a.metadata?.name;
    if (name && a.status?.state) {
      stateByActor.set(name, a.status.state.replace('ACTOR_STATE_', ''));
    }
    const assignment = a.status?.workerAssignment;
    const worker = assignment?.worker?.name;
    if (!name || !worker) continue;
    podByActor.set(name, assignment?.workerPod ?? '');
    const list = runningOn.get(worker) ?? [];
    list.push({ actor: name, sessionId: sessionByActor.get(name) });
    runningOn.set(worker, list);
  }

  const workers: WorkerView[] = input.workers
    .filter((w) => w.workerPool === input.pool)
    .map((w) => ({
      name: w.metadata?.name ?? '',
      pod: w.workerPod ?? '',
      state: w.status?.state ?? 'WORKER_STATE_UNSPECIFIED',
      capacity: w.status?.capacity?.actors ?? 0,
      running: runningOn.get(w.metadata?.name ?? '') ?? [],
    }))
    .sort((a, b) => a.pod.localeCompare(b.pod));

  const sessions: SessionView[] = input.boxes.map((b) => {
    const task = input.tasks?.get(b.key);
    return {
      sessionId: b.key,
      actor: b.actor.name,
      phase: b.phase,
      phaseMs: Math.max(0, input.now - b.since),
      inFlight: b.inFlight,
      actorState: stateByActor.get(b.actor.name),
      workerPod: podByActor.get(b.actor.name) || undefined,
      task: task && {
        status: task.status,
        text: task.text,
        error: task.error,
        elapsedMs: (task.finishedAt ?? input.now) - task.startedAt,
      },
    };
  });

  const otherActors = input.actors
    .filter((a) => a.metadata?.name && !sessionByActor.has(a.metadata.name))
    .map((a) => ({
      actor: a.metadata?.name ?? '',
      state: (a.status?.state ?? 'ACTOR_STATE_UNSPECIFIED').replace(
        'ACTOR_STATE_',
        ''
      ),
      workerPod: a.status?.workerAssignment?.workerPod || undefined,
    }));

  return { pool: input.pool, workers, sessions, otherActors };
}
