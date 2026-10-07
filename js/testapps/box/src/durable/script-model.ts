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

// A deterministic model for durable-agent demos and tests (no API key).
// It reads a plan from the latest user message and plays it:
//
//   "plan: slowStep(a), slowStep(b) | runShell(cmd=ls -la) | done"
//
// `tool(x)` passes `{ arg: 'x' }`, `tool(key=x)` passes `{ key: 'x' }`.
//
// Groups are separated by `|`; each group is one model response. A group
// with calls asks for those tools (in parallel); `done` (or running out of
// groups) answers with a summary of the tool results it has seen. Lines like
// "note: ..." in later user messages (steering) are echoed in the answer.

import type { GenerateRequestData, Genkit, MessageData, Part } from 'genkit';

export interface ScriptModelOptions {
  name?: string;
  /** Simulated thinking time per call (ms). */
  latencyMs?: number;
}

export function defineScriptModel(ai: Genkit, opts: ScriptModelOptions = {}) {
  const latency = opts.latencyMs ?? 200;
  return ai.defineModel(
    {
      apiVersion: 'v2',
      name: opts.name ?? 'durable/script',
      label: 'Scripted agent (durable demos)',
      supports: { multiturn: true, tools: true, systemRole: true },
    },
    async (request, { sendChunk, abortSignal }) => {
      await sleep(latency, abortSignal);
      const content = scriptResponse(request);
      const text = content.find((p) => p.text)?.text;
      if (text) {
        for (const word of text.split(/(?<= )/)) {
          sendChunk({ content: [{ text: word }] });
        }
      }
      return { message: { role: 'model', content }, finishReason: 'stop' };
    }
  );
}

export function scriptResponse(request: GenerateRequestData): Part[] {
  const msgs = request.messages;
  // The plan comes from the user message that started the current exchange.
  const planIdx = findLastIndex(
    msgs,
    (m) => m.role === 'user' && /plan:/.test(textOf(m))
  );
  const plan = planIdx >= 0 ? textOf(msgs[planIdx]).split('plan:')[1] : '';
  const groups = plan
    .split('|')
    .map((g) => g.trim())
    .filter(Boolean);
  const after = msgs.slice(planIdx + 1);
  const done = after.filter((m) => m.role === 'model').length;
  const group = groups[done];
  if (group && group !== 'done') {
    const calls = group.split(/\s*,\s*/).map(parseCall);
    return calls.map((c, i) => ({
      toolRequest: { name: c.name, ref: `${done}-${i}`, input: c.input },
    }));
  }
  const results = after
    .filter((m) => m.role === 'tool')
    .flatMap((m) => m.content)
    .filter((p) => p.toolResponse)
    .map(
      (p) => `${p.toolResponse!.name}=${JSON.stringify(p.toolResponse!.output)}`
    );
  const notes = after
    .filter((m) => m.role === 'user')
    .map(textOf)
    .filter((t) => t.startsWith('note:'));
  return [
    {
      text:
        `Done after ${results.length} tool call(s). ` +
        (results.length ? `Results: ${results.join('; ')}. ` : '') +
        (notes.length ? `Noted: ${notes.join(' / ')}.` : ''),
    },
  ];
}

/** `tool(x)` -> `{ arg: 'x' }`; `tool(cmd=x)` -> `{ cmd: 'x' }`. */
function parseCall(s: string): { name: string; input: Record<string, string> } {
  const m = /^(\w+)\((.*)\)$/.exec(s.trim());
  if (!m) return { name: s.trim(), input: {} };
  if (!m[2]) return { name: m[1], input: {} };
  const kv = /^(\w+)=(.*)$/.exec(m[2]);
  return { name: m[1], input: kv ? { [kv[1]]: kv[2] } : { arg: m[2] } };
}

function textOf(m: MessageData): string {
  return m.content.map((p) => p.text ?? '').join('');
}

function findLastIndex<T>(arr: T[], pred: (v: T) => boolean): number {
  for (let i = arr.length - 1; i >= 0; i--) if (pred(arr[i])) return i;
  return -1;
}

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(resolve, ms);
    signal?.addEventListener('abort', () => {
      clearTimeout(t);
      reject(signal.reason ?? new Error('aborted'));
    });
  });
}
