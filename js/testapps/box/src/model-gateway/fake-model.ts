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

// A deterministic stand-in for an LLM, for benchmarking the pause/resume
// machinery without depending on a real model's latency or availability.
//
// It plays a fixed agent script, configured in the first user message:
//
//   "bench steps=3 modelMs=5000 toolMs=300"
//
// Each call waits `modelMs` (the "model is thinking" time the gateway can
// park the caller for), then asks for one `runShell` call that takes
// `toolMs` on the worker (the actual compute). After `steps` tool calls it
// answers. So one task is `steps + 1` model calls and `steps` tool runs.

import type {
  GenerateRequestData,
  GenerateResponseData,
  Genkit,
  MessageData,
} from 'genkit';

export interface FakeAgentScript {
  steps: number;
  modelMs: number;
  toolMs: number;
}

const DEFAULTS: FakeAgentScript = { steps: 3, modelMs: 5_000, toolMs: 300 };

/** Reads `steps=`, `modelMs=`, `toolMs=` from the first user message. */
export function parseScript(messages: MessageData[]): FakeAgentScript {
  const text =
    messages
      .find((m) => m.role === 'user')
      ?.content.map((p) => p.text ?? '')
      .join(' ') ?? '';
  const num = (key: keyof FakeAgentScript) => {
    const m = new RegExp(`${key}=(\\d+)`).exec(text);
    return m ? Number(m[1]) : DEFAULTS[key];
  };
  return {
    steps: num('steps'),
    modelMs: num('modelMs'),
    toolMs: num('toolMs'),
  };
}

/** The response the script calls for, given the conversation so far. */
export function nextResponse(
  request: GenerateRequestData
): GenerateResponseData {
  const script = parseScript(request.messages);
  const done = request.messages.filter((m) => m.role === 'tool').length;
  const canCallTool = request.tools?.some((t) => t.name === 'runShell');
  if (done < script.steps && canCallTool) {
    const seconds = (script.toolMs / 1000).toFixed(3);
    return {
      message: {
        role: 'model',
        content: [
          {
            toolRequest: {
              name: 'runShell',
              ref: `step-${done + 1}`,
              input: { cmd: `sleep ${seconds} && echo step ${done + 1}` },
            },
          },
        ],
      },
      finishReason: 'stop',
    };
  }
  return {
    message: {
      role: 'model',
      content: [{ text: `Done: ${done} of ${script.steps} steps.` }],
    },
    finishReason: 'stop',
  };
}

/** Registers the fake model as `fake/agent` (or `name`). */
export function defineFakeAgentModel(ai: Genkit, name = 'fake/agent') {
  return ai.defineModel(
    {
      apiVersion: 'v2',
      name,
      label: 'Deterministic agent script (benchmarks)',
      supports: { multiturn: true, tools: true, systemRole: true },
    },
    async (request, { sendChunk, abortSignal }) => {
      const { modelMs } = parseScript(request.messages);
      await new Promise<void>((resolve, reject) => {
        const timer = setTimeout(resolve, modelMs);
        abortSignal.addEventListener('abort', () => {
          clearTimeout(timer);
          reject(abortSignal.reason);
        });
      });
      const response = nextResponse(request);
      const text = response.message?.content[0]?.text;
      if (text) sendChunk({ content: [{ text }] });
      return response;
    }
  );
}
