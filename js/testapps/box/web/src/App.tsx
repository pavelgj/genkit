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

import { useCallback, useEffect, useRef, useState } from 'react';
import { SessionColumn, type SessionColumnHandle } from './SessionColumn';
import { WorkerPool, type SessionStyle } from './WorkerPool';
import { useDemoState } from './useDemoState';

const PALETTE = [
  '#14b8a6',
  '#f97316',
  '#8b5cf6',
  '#ec4899',
  '#eab308',
  '#3b82f6',
];
const NAMES = ['teal', 'orange', 'violet', 'pink', 'amber', 'blue'];

interface Session extends SessionStyle {
  id: string;
}

let created = 0;
function newSession(): Session {
  const i = created++;
  return {
    // Synthetic session id: routes to this session's actor, keys its history.
    id: crypto.randomUUID(),
    label: NAMES[i % NAMES.length] + (i >= NAMES.length ? `-${i}` : ''),
    color: PALETTE[i % PALETTE.length],
  };
}

/** `[{state: 'SUSPENDED'}, {state: 'SUSPENDED'}]` -> `2 suspended`. */
function countByState(actors: Array<{ state: string }>): string {
  const counts = new Map<string, number>();
  for (const a of actors) {
    const s = a.state.toLowerCase();
    counts.set(s, (counts.get(s) ?? 0) + 1);
  }
  return [...counts].map(([s, n]) => `${n} ${s}`).join(', ');
}

const BROADCAST =
  'Pick a random animal, write it to animal.txt, then tell me which one.';

// Long model calls, so the agents spend most of the task parked.
const BACKGROUND_TASK =
  'Write a detailed 600-word essay on the history of process isolation ' +
  '(chroot, jails, containers, gVisor) to essay.txt, then run wc -w ' +
  'essay.txt and report the count.';
const BACKGROUND_SESSIONS = 6;

export default function App() {
  const [sessions, setSessions] = useState<Session[]>(() => [
    newSession(),
    newSession(),
    newSession(),
  ]);
  const handles = useRef(new Map<string, SessionColumnHandle>());
  const { state, error } = useDemoState();
  // Set when more columns are needed first; runs once they have mounted.
  const [pendingBackground, setPendingBackground] = useState(false);

  const styleFor = useCallback(
    (sessionId: string) => sessions.find((s) => s.id === sessionId),
    [sessions]
  );

  useEffect(() => {
    if (!pendingBackground) return;
    setPendingBackground(false);
    sessions.forEach((s) =>
      handles.current.get(s.id)?.startTask(BACKGROUND_TASK)
    );
  }, [pendingBackground, sessions]);

  return (
    <div className="app">
      <header className="top">
        <div>
          <h1>Agents in a Box, on Substrate</h1>
          <p className="muted">
            Each session is a boxed agent (tools, history) in its own gVisor
            actor. It holds a worker only while it has work to do: between turns
            it is suspended, and during a background task's model calls the
            model gateway parks it (paused, no worker held), so more agents than
            workers make progress at once.
          </p>
        </div>
        <div className="top-actions">
          <button
            onClick={() =>
              sessions.forEach((s) =>
                handles.current.get(s.id)?.send(BROADCAST)
              )
            }
            title={BROADCAST}>
            Send to all sessions
          </button>
          <button
            onClick={() => {
              setSessions((s) => [
                ...s,
                ...Array.from(
                  { length: Math.max(0, BACKGROUND_SESSIONS - s.length) },
                  newSession
                ),
              ]);
              setPendingBackground(true);
            }}
            title={BACKGROUND_TASK}>
            Start {BACKGROUND_SESSIONS} background tasks
          </button>
          <button onClick={() => setSessions((s) => [...s, newSession()])}>
            + New session
          </button>
        </div>
      </header>

      {error && <div className="banner">Can't read pool state: {error}</div>}
      {state && <WorkerPool state={state} styleFor={styleFor} />}

      <main className="sessions">
        {sessions.map((s) => (
          <SessionColumn
            key={s.id}
            ref={(h) => {
              if (h) handles.current.set(s.id, h);
              else handles.current.delete(s.id);
            }}
            sessionId={s.id}
            style={s}
            view={state?.sessions.find((v) => v.sessionId === s.id)}
            onClose={() =>
              setSessions((all) => all.filter((x) => x.id !== s.id))
            }
          />
        ))}
      </main>

      {state && state.otherActors.length > 0 && (
        <footer className="muted footer">
          Other actors in <code>{state.pool}</code> (earlier runs, other hosts):{' '}
          {countByState(state.otherActors)}
        </footer>
      )}
    </div>
  );
}
