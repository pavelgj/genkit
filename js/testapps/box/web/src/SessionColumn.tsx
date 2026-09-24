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

import { streamFlow } from 'genkit/beta/client';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { shortPod, type SessionStyle } from './WorkerPool';
import type { ChatOutput, SessionView } from './types';

interface Message {
  role: 'user' | 'model' | 'error';
  text: string;
}

export interface SessionColumnHandle {
  send(text: string): void;
}

const PHASE_LABEL: Record<string, string> = {
  starting: 'starting',
  'waiting-for-worker': 'waiting for a worker',
  running: 'running',
  suspending: 'suspending',
  pausing: 'pausing',
  suspended: 'suspended',
  paused: 'paused',
  unknown: 'idle',
};

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

  useImperativeHandle(ref, () => ({ send }), [send]);

  const phase = view?.phase ?? 'unknown';
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
          disabled={streaming !== undefined}
        />
        <button type="submit" disabled={streaming !== undefined}>
          Send
        </button>
      </form>
    </section>
  );
});
