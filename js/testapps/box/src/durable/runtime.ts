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

// Runs effects for a prompt-backed agent: model effects render the prompt and
// make one `generate` round with `returnToolRequests: true` (so format
// handling, toolChoice, and model middleware all still apply); tool effects
// look the tool up by name and call it.

import {
  ToolInterruptError,
  type Action,
  type ExecutablePrompt,
  type Genkit,
  type MessageData,
  type ToolAction,
  type ToolRequestPart,
} from 'genkit';
import type { EffectRuntime, ToolOutcome } from './engine.js';

export interface PromptRuntimeOptions {
  ai: Genkit;
  prompt: ExecutablePrompt;
  promptInput?: unknown;
  /** Per-tool replay policy. Unlisted tools are 'unsafe'. */
  replay?: Record<string, 'safe' | 'unsafe'>;
  /**
   * Tool actions to resolve by name before the registry. Needed for
   * unregistered tools such as environment (box) proxies, which share their
   * name with the real (local) tool.
   */
  tools?: ToolAction[];
}

const HISTORY = '_durable_history';

export function promptRuntime(opts: PromptRuntimeOptions): EffectRuntime {
  const { ai, prompt } = opts;
  const extra = new Map(
    (opts.tools ?? []).map((t) => [t.__action.name, t] as const)
  );

  const findTool = async (name: string): Promise<Action> => {
    const local = extra.get(name);
    if (local) return local;
    const found =
      (await ai.registry.lookupAction(`/tool/${name}`)) ??
      (await ai.registry.lookupAction(name));
    if (!found) throw new Error(`Tool '${name}' not found`);
    return found;
  };

  return {
    async runModel(history, { context, abortSignal, onChunk }) {
      const tagged: MessageData[] = history.map((m) => ({
        ...m,
        metadata: { ...m.metadata, [HISTORY]: true },
      }));
      const rendered = await prompt.render(opts.promptInput as never, {
        messages: tagged,
        context,
      });
      // Strip the history tag again; anything else rendered by the prompt
      // (system, preamble) stays in the request only, never in the transcript.
      rendered.messages = rendered.messages?.map((m) => {
        if (!m.metadata?.[HISTORY]) return m;
        const { [HISTORY]: _, ...meta } = m.metadata;
        return {
          ...m,
          metadata: Object.keys(meta).length ? meta : undefined,
        };
      });
      const res = await ai.generate({
        ...rendered,
        returnToolRequests: true,
        context,
        abortSignal,
        onChunk: (chunk) => onChunk(chunk.toJSON()),
      });
      if (!res.message) {
        throw new Error(
          `model returned no message (${res.finishReason}: ${res.finishMessage})`
        );
      }
      return {
        message: res.message.toJSON(),
        finishReason: res.finishReason,
        finishMessage: res.finishMessage,
      };
    },

    async runTool(
      request: ToolRequestPart,
      { context, abortSignal, resumed }
    ): Promise<ToolOutcome> {
      const tool = await findTool(request.toolRequest.name);
      try {
        const output = await tool(request.toolRequest.input, {
          context,
          abortSignal,
          ...(resumed !== undefined && {
            resumed: resumed as boolean | Record<string, unknown>,
            metadata: { resumed },
          }),
        } as Parameters<ToolAction>[1]);
        return { status: 'done', output };
      } catch (e) {
        if (
          e instanceof ToolInterruptError ||
          (e as Error)?.name === 'ToolInterruptError'
        ) {
          const meta = (e as ToolInterruptError).metadata;
          return { status: 'interrupt', interrupt: meta ?? true };
        }
        throw e;
      }
    },

    replay(toolName) {
      return opts.replay?.[toolName] ?? 'unsafe';
    },
  };
}
