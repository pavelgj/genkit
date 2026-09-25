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

import { displayPhase, type DemoState, type SessionView } from './types';

export interface SessionStyle {
  label: string;
  color: string;
}

/** Short, readable pod names: `genkit-box-96dbb8448-fxhdj` -> `fxhdj`. */
export const shortPod = (pod?: string) => pod?.split('-').pop() ?? '';

const seconds = (ms: number) => `${(ms / 1000).toFixed(1)}s`;

export function WorkerPool({
  state,
  styleFor,
}: {
  state: DemoState;
  styleFor: (sessionId: string) => SessionStyle | undefined;
}) {
  const sessionsById = new Map(state.sessions.map((s) => [s.sessionId, s]));
  const waiting = state.sessions.filter(
    (s) => s.phase === 'waiting-for-worker'
  );
  // Parked: paused by the model gateway during a model call. No worker held.
  const parked = state.sessions.filter((s) => displayPhase(s) === 'parked');
  const busy = state.workers.filter((w) => w.running.length > 0).length;

  return (
    <section className="pool">
      <header className="pool-header">
        <h2>
          Worker pool <code>{state.pool}</code>
        </h2>
        <span className="pool-summary">
          {busy} of {state.workers.length} busy
        </span>
      </header>

      <div className="workers">
        {state.workers.map((w) => {
          const run = w.running[0];
          const session: SessionView | undefined = run?.sessionId
            ? sessionsById.get(run.sessionId)
            : undefined;
          const style = run?.sessionId ? styleFor(run.sessionId) : undefined;
          return (
            <div
              key={w.name}
              className={`worker ${run ? 'busy' : 'free'}`}
              style={style ? { borderColor: style.color } : undefined}>
              <div className="worker-name">
                worker <code>{shortPod(w.pod)}</code>
              </div>
              {run ? (
                <div className="worker-body">
                  <span
                    className="session-chip"
                    style={{ background: style?.color ?? '#52525b' }}>
                    {style?.label ?? 'other'}
                  </span>
                  <span className="worker-detail">
                    {session
                      ? session.task?.status === 'pending'
                        ? 'background task'
                        : `${session.phase} ${seconds(session.phaseMs)}`
                      : run.actor}
                  </span>
                </div>
              ) : (
                <div className="worker-body free-label">free</div>
              )}
            </div>
          );
        })}
      </div>

      <ChipRow
        label="Parked on the model (no worker held):"
        empty="No agent is parked."
        sessions={parked}
        styleFor={styleFor}
      />
      <ChipRow
        label="Waiting for a worker:"
        empty="No session is waiting for a worker."
        sessions={waiting}
        styleFor={styleFor}
        showTime
      />
    </section>
  );
}

function ChipRow({
  label,
  empty,
  sessions,
  styleFor,
  showTime,
}: {
  label: string;
  empty: string;
  sessions: SessionView[];
  styleFor: (sessionId: string) => SessionStyle | undefined;
  showTime?: boolean;
}) {
  return (
    <div className="chip-row">
      {sessions.length === 0 ? (
        <span className="muted">{empty}</span>
      ) : (
        <>
          <span>{label}</span>
          {sessions.map((s) => {
            const style = styleFor(s.sessionId);
            return (
              <span
                key={s.sessionId}
                className="session-chip"
                style={{ background: style?.color ?? '#52525b' }}>
                {style?.label ?? s.sessionId.slice(0, 8)}
                {showTime ? ` ${seconds(s.phaseMs)}` : ''}
              </span>
            );
          })}
        </>
      )}
    </div>
  );
}
