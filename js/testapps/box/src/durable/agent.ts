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

// `defineDurableAgent` / `defineDurablePromptAgent`: a regular genkit agent
// (agent protocol, chat/detach/getSnapshot/abort, Dev UI) whose handler does
// not run the loop. It submits inputs to the durable engine and waits for the
// turn to end; the engine runs the loop as committed steps. The user-visible
// snapshots are a projection of the run document, written at turn ends.

import type {
  ExecutablePrompt,
  GenerateResponseChunkData,
  MessageData,
  PromptConfig,
  z,
} from 'genkit';
import type {
  Agent,
  AgentFinishReason,
  GenkitBeta,
  SessionSnapshot,
  SessionStore,
} from 'genkit/beta';
import { randomUUID } from 'node:crypto';
import { EventEmitter } from 'node:events';
import {
  DurableEngine,
  type DurableEngineOptions,
  type EnvironmentHooks,
} from './engine.js';
import type { DurableEnvironment } from './environment.js';
import { promptRuntime } from './runtime.js';
import { sessionStoreDurability, type DurableStore } from './store.js';
import type { DurableRun, TurnEnd } from './types.js';

export interface DurablePromptAgentConfig {
  /** Registered prompt to render for every model call. */
  promptName: string;
  description?: string;
  promptInput?: unknown;
  /** Genkit session store; the run document and snapshots both live here. */
  store: SessionStore;
  /** Per-tool replay policy after a crash. Unlisted tools are 'unsafe'. */
  replay?: Record<string, 'safe' | 'unsafe'>;
  environments?: DurableEnvironment[];
  maxTurns?: number;
  leaseMs?: number;
  concurrency?: { model?: number; tool?: number };
  log?: (msg: string) => void;
}

export interface DurableAgentConfig<I extends z.ZodTypeAny = z.ZodTypeAny>
  extends PromptConfig<I>,
    Omit<DurablePromptAgentConfig, 'promptName' | 'description'> {}

/** A durable agent: a normal Agent plus a handle on its engine. */
export type DurableAgent = Agent & {
  readonly durable: DurableHandle;
};

export interface DurableHandle {
  /** The engine currently serving this agent (replaced by `restart`). */
  readonly engine: DurableEngine;
  /** Kills the engine without settling in-flight work (demo: process death). */
  crash(): void;
  /** Starts a fresh engine on the same store; it recovers active sessions. */
  restart(): Promise<DurableEngine>;
  /** Queues a message into a running turn ('steer') or the next one. */
  steer(
    sessionId: string,
    text: string,
    opts?: { whenBusy?: 'steer' | 'queue'; requestId?: string }
  ): Promise<boolean>;
  /** Aborts the session's running turn (an inbox item, so one writer). */
  abort(sessionId: string): Promise<void>;
  /** The raw run document (transcript, business state, queue). */
  inspect(sessionId: string): Promise<DurableRun | undefined>;
}

/** Shorthand: definePrompt + defineDurablePromptAgent. */
export function defineDurableAgent<I extends z.ZodTypeAny = z.ZodTypeAny>(
  ai: GenkitBeta,
  config: DurableAgentConfig<I>
): DurableAgent {
  const {
    store,
    replay,
    environments,
    maxTurns,
    leaseMs,
    concurrency,
    log,
    promptInput,
    ...promptConfig
  } = config;
  // Environment tools are executed through the environment (box) proxies,
  // but the model must see them: add their names to the prompt's tools.
  const envToolNames = (environments ?? []).flatMap((e) => e.toolNames);
  ai.definePrompt({
    ...promptConfig,
    tools: [...(promptConfig.tools ?? []), ...envToolNames],
  });
  return defineDurablePromptAgent(ai, {
    promptName: promptConfig.name,
    description: promptConfig.description,
    promptInput,
    store,
    replay,
    environments,
    maxTurns,
    leaseMs,
    concurrency,
    log,
  });
}

export function defineDurablePromptAgent(
  ai: GenkitBeta,
  config: DurablePromptAgentConfig
): DurableAgent {
  const log = config.log ?? (() => {});
  const durableStore: DurableStore = sessionStoreDurability(config.store);
  // Shared across engine restarts so waiting facades keep hearing events.
  const events = new EventEmitter();
  const environments = config.environments ?? [];
  const runtime = promptRuntime({
    ai,
    prompt: ai.prompt(config.promptName) as ExecutablePrompt,
    promptInput: config.promptInput,
    replay: config.replay,
    tools: environments.flatMap((e) => e.tools),
  });

  const engineOptions: DurableEngineOptions = {
    store: durableStore,
    runtime,
    maxTurns: config.maxTurns,
    leaseMs: config.leaseMs,
    concurrency: config.concurrency,
    environments: environments.map((e): EnvironmentHooks => e.hooks),
    onTurnEnd: (run, end) => writeProjection(config.store, run, end),
    events,
    log,
  };
  let engine = new DurableEngine(engineOptions);
  // A self-mode box re-runs this entry file as the box runtime; only the
  // host runs the engine.
  if (!process.env.GENKIT_BOX_SELF_ID) {
    engine.start().catch((e) => log(`engine start: ${e}`));
  }

  const handle: DurableHandle = {
    get engine() {
      return engine;
    },
    crash() {
      log(
        `crash: ${engine.owner} (in-flight: ${engine.inflightEffects().length})`
      );
      engine.crash();
    },
    async restart() {
      if (!engine.isStopped) engine.crash();
      engine = new DurableEngine(engineOptions);
      log(`restart: ${engine.owner}`);
      await engine.start();
      return engine;
    },
    steer(sessionId, text, opts) {
      return engine.submit(sessionId, {
        type: 'input',
        message: { role: 'user', content: [{ text }] },
        whenBusy: opts?.whenBusy ?? 'steer',
        requestId: opts?.requestId,
      });
    },
    abort(sessionId) {
      return engine.abort(sessionId);
    },
    inspect(sessionId) {
      return durableStore.load(sessionId);
    },
  };

  const agent = ai.defineCustomAgent(
    {
      name: config.promptName,
      description: config.description,
      store: config.store,
    },
    async (sess, { sendChunk, abortSignal, context }) => {
      await sess.run(async (input, turn) => {
        const sessionId = sess.session.sessionId;
        const requestId = randomUUID();
        const common = {
          requestId,
          snapshotId: turn.snapshotId,
          parentSnapshotId: turn.parentSnapshotId,
        };
        const item = input.resume
          ? { type: 'resume' as const, ...input.resume, ...common }
          : {
              type: 'input' as const,
              message: input.message ?? { role: 'user', content: [] },
              ...common,
            };
        // SessionRunner already appended the input message to the session;
        // the seed (used only for a brand-new run) is the history before it.
        const history = sess.getMessages();
        const seed = {
          messages: input.message ? history.slice(0, -1) : history,
          custom: sess.getCustom(),
        };

        const end = await waitForTurn(events, sessionId, requestId, {
          onChunk: (chunk) => sendChunk({ modelChunk: chunk }),
          start: () => handle.engine.submit(sessionId, item, seed),
          abortSignal,
          onAbort: () => handle.engine.abort(sessionId),
        });

        const run = await durableStore.load(sessionId);
        if (run) {
          sess.setMessages(run.messages.slice(0, end.messageCount));
          if (run.custom !== undefined) sess.updateCustom(() => run.custom);
          if (run.artifacts.length) sess.addArtifacts(run.artifacts);
        }
        if (end.finishReason === 'interrupted') {
          const last = sess.getMessages().at(-1);
          const parts = last?.content.filter((p) => !!p.toolRequest) ?? [];
          if (parts.length) {
            sendChunk({ modelChunk: { role: 'tool', content: parts } });
          }
        }
        if (end.finishReason === 'failed') {
          throw Object.assign(new Error(end.error?.message ?? 'turn failed'), {
            status: end.error?.status ?? 'INTERNAL',
          });
        }
        return { finishReason: end.finishReason };
      });
      const msgs = sess.getMessages();
      return {
        artifacts: sess.getArtifacts(),
        message: msgs.at(-1),
        ...(sess.lastTurnFinishReason && {
          finishReason: sess.lastTurnFinishReason,
        }),
      };
    }
  );

  return Object.assign(agent, { durable: handle }) as DurableAgent;
}

/**
 * Waits for the turn that contains `requestId` to end, streaming its model
 * chunks meanwhile. Events come from a bus shared across engine restarts, so
 * a facade waiting through a crash hears the recovered turn end.
 *
 * Prototype limitation: this is in-process. A facade in another process
 * would watch the run document instead (store `watch` / polling).
 */
function waitForTurn(
  events: EventEmitter,
  sessionId: string,
  requestId: string,
  opts: {
    start: () => Promise<boolean>;
    onChunk: (chunk: GenerateResponseChunkData) => void;
    abortSignal?: AbortSignal;
    onAbort: () => Promise<void>;
  }
): Promise<TurnEnd> {
  return new Promise<TurnEnd>((resolve, reject) => {
    let activeTurn: string | undefined;
    const onTurn = (sid: string, turnId: string, ids: string[]) => {
      if (sid === sessionId && ids.includes(requestId)) activeTurn = turnId;
    };
    const onChunk = (
      sid: string,
      chunk: GenerateResponseChunkData,
      effectId: string
    ) => {
      const mine =
        sid === sessionId &&
        !!activeTurn &&
        effectId.startsWith(`${activeTurn}:`);
      if (mine) opts.onChunk(chunk);
    };
    const onEnd = (sid: string, end: TurnEnd) => {
      if (sid !== sessionId || !end.requestIds.includes(requestId)) return;
      cleanup();
      resolve(end);
    };
    const onAbort = () => {
      opts.onAbort().catch(() => {});
    };
    const cleanup = () => {
      events.off('turn', onTurn);
      events.off('chunk', onChunk);
      events.off('turnEnd', onEnd);
      opts.abortSignal?.removeEventListener('abort', onAbort);
    };
    events.on('turn', onTurn);
    events.on('chunk', onChunk);
    events.on('turnEnd', onEnd);
    opts.abortSignal?.addEventListener('abort', onAbort);
    opts.start().catch((e) => {
      cleanup();
      reject(e);
    });
  });
}

/**
 * Writes the user-visible snapshot for a finished turn from the run document
 * (the projection). Idempotent per snapshot id, and never overwrites a
 * terminal snapshot the facade already wrote. Covers turns whose facade died
 * (detached turns across a crash) and turns started by `steer(..., 'queue')`,
 * which have no facade at all.
 */
async function writeProjection(
  store: SessionStore,
  run: DurableRun,
  end: TurnEnd
): Promise<void> {
  let parentId = end.parentSnapshotId;
  if (!end.snapshotId) {
    const leaf = await store.getSnapshot({ sessionId: run.sessionId });
    parentId = leaf?.snapshotId;
  }
  const snapshotId = end.snapshotId ?? `durable-${run.sessionId}-${end.turnId}`;
  const status: SessionSnapshot['status'] =
    end.finishReason === 'failed'
      ? 'failed'
      : end.finishReason === 'aborted'
        ? 'aborted'
        : 'completed';
  const now = new Date().toISOString();
  await store.saveSnapshot(snapshotId, (cur) => {
    if (cur && cur.status !== 'pending') return null;
    return {
      ...(cur ?? {}),
      snapshotId,
      sessionId: run.sessionId,
      parentId: cur?.parentId ?? parentId,
      createdAt: cur?.createdAt ?? now,
      updatedAt: now,
      status,
      finishReason: end.finishReason as AgentFinishReason,
      ...(end.error && { error: end.error }),
      state: {
        sessionId: run.sessionId,
        messages: run.messages.slice(0, end.messageCount),
        custom: run.custom,
        artifacts: run.artifacts,
      },
    };
  });
}

/** Convenience for demos: the transcript as plain text lines. */
export function transcriptText(messages: MessageData[]): string[] {
  return messages.map((m) => {
    const parts = m.content.map((p) =>
      p.text
        ? p.text
        : p.toolRequest
          ? `-> ${p.toolRequest.name}(${JSON.stringify(p.toolRequest.input)})`
          : p.toolResponse
            ? `<- ${p.toolResponse.name}: ${JSON.stringify(p.toolResponse.output)}`
            : '[part]'
    );
    return `${m.role}: ${parts.join(' | ')}`;
  });
}
