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

import { runFlow, streamFlow } from 'genkit/beta/client';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { shortPod, type SessionStyle } from './WorkerPool';
import {
  displayPhase,
  type ChatOutput,
  type DisplayPhase,
  type SessionView,
} from './types';

interface Message {
  role: 'user' | 'model' | 'error' | 'task';
  text: string;
}

export interface SessionColumnHandle {
  /** A foreground (streamed) turn. */
  send(text: string): void;
  /** A background task: the model calls may park the agent. */
  startTask(text: string): void;
}

const PHASE_LABEL: Record<DisplayPhase, string> = {
  starting: 'starting',
  'waiting-for-worker': 'waiting for a worker',
  running: 'running',
  parked: 'parked on the model',
  suspending: 'suspending',
  pausing: 'parking',
  suspended: 'suspended',
  paused: 'paused',
  unknown: 'idle',
};

const seconds = (ms: number) => `${(ms / 1000).toFixed(1)}s`;

/**
 * Renders the two bits of markdown the agent actually uses (`**bold**` and
 * `code`) without pulling in a markdown library.
 */
function Inline({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
        .map((part, i) =>
          part.startsWith('**') && part.endsWith('**') && part.length > 4 ? (
            <strong key={i}>{part.slice(2, -2)}</strong>
          ) : part.startsWith('`') && part.endsWith('`') && part.length > 2 ? (
            <code key={i}>{part.slice(1, -1)}</code>
          ) : (
            part
          )
        )}
    </>
  );
}

export const SessionColumn = forwardRef<
  SessionColumnHandle,
  {
    sessionId: string;
    style: SessionStyle;
    view?: SessionView;
    onClose(): void;
  }
>(function SessionColumn({ sessionId, style, view, onClose }, ref) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [streaming, setStreaming] = useState<string>();
  const [draft, setDraft] = useState('');
  const busyRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, streaming]);

  const send = useCallback(
    async (text: string) => {
      if (!text.trim() || busyRef.current) return;
      busyRef.current = true;
      setMessages((m) => [...m, { role: 'user', text }]);
      setStreaming('');
      try {
        // The synthetic session id routes the turn to this session's actor,
        // and keys the boxed agent's history.
        const turn = streamFlow<ChatOutput, string>({
          url: '/api/chatWithAgent',
          input: { sessionId, message: text },
        });
        let acc = '';
        for await (const chunk of turn.stream) {
          acc += chunk;
          setStreaming(acc);
        }
        const out = await turn.output;
        setMessages((m) => [...m, { role: 'model', text: out.text }]);
      } catch (e) {
        setMessages((m) => [...m, { role: 'error', text: String(e) }]);
      } finally {
        setStreaming(undefined);
        busyRef.current = false;
      }
    },
    [sessionId]
  );

  const [taskStarting, setTaskStarting] = useState(false);
  const startTask = useCallback(
    async (text: string) => {
      if (!text.trim() || busyRef.current) return;
      setMessages((m) => [
        ...m,
        { role: 'user', text: `[background] ${text}` },
      ]);
      setTaskStarting(true);
      try {
        // Returns once the turn is detached; progress comes via /api/state.
        await runFlow({
          url: '/api/startTask',
          input: { sessionId, message: text },
        });
      } catch (e) {
        setMessages((m) => [...m, { role: 'error', text: String(e) }]);
      } finally {
        setTaskStarting(false);
      }
    },
    [sessionId]
  );

  // Background task results arrive through the polled state.
  const task = view?.task;
  const taskRunning = taskStarting || task?.status === 'pending';
  const reported = useRef<string | undefined>(undefined);
  useEffect(() => {
    if (!task || task.status === 'pending') return;
    const key = `${task.status}:${task.elapsedMs}`;
    if (reported.current === key) return;
    reported.current = key;
    setMessages((m) => [
      ...m,
      task.status === 'completed'
        ? { role: 'model', text: task.text ?? '' }
        : { role: 'error', text: `task ${task.status}: ${task.error ?? ''}` },
      {
        role: 'task',
        text: `background task ${task.status} in ${seconds(task.elapsedMs)}`,
      },
    ]);
  }, [task]);

  useImperativeHandle(ref, () => ({ send, startTask }), [send, startTask]);

  const phase: DisplayPhase = displayPhase(view) ?? 'unknown';
  return (
    <section className="session" style={{ borderTopColor: style.color }}>
      <header className="session-header">
        <span className="session-chip" style={{ background: style.color }}>
          {style.label}
        </span>
        <span className={`phase phase-${phase}`}>
          {view ? PHASE_LABEL[phase] : 'new'}
          {phase === 'running' && view?.workerPod
            ? ` on ${shortPod(view.workerPod)}`
            : ''}
        </span>
        <button className="icon-button" onClick={onClose} title="Close">
          x
        </button>
      </header>
      <div className="session-id" title={sessionId}>
        session <code>{sessionId.slice(0, 8)}</code>
      </div>

      <div className="messages" ref={scrollRef}>
        {messages.length === 0 && streaming === undefined && (
          <p className="muted hint">
            Try: "Save my favorite color, teal, to color.txt", then ask about it
            in a later turn.
          </p>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.role}`}>
            <Inline text={m.text} />
          </div>
        ))}
        {streaming !== undefined && (
          <div className="message model streaming">
            {streaming ? (
              <Inline text={streaming} />
            ) : (
              <span className="muted">...</span>
            )}
          </div>
        )}
        {taskRunning && (
          <div className="message model streaming">
            <span className="muted">
              working in the background
              {task ? ` (${seconds(task.elapsedMs)})` : ''}...
            </span>
          </div>
        )}
      </div>

      <form
        className="composer"
        onSubmit={(e) => {
          e.preventDefault();
          send(draft);
          setDraft('');
        }}>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Message this session's agent"
          disabled={streaming !== undefined || taskRunning}
        />
        <button
          type="submit"
          disabled={streaming !== undefined || taskRunning}
          title="Foreground turn: streams the reply">
          Send
        </button>
        <button
          type="button"
          disabled={streaming !== undefined || taskRunning || !draft.trim()}
          title="Background task: the agent is parked (no worker held) while the model works"
          onClick={() => {
            startTask(draft);
            setDraft('');
          }}>
          Background
        </button>
      </form>
    </section>
  );
});
