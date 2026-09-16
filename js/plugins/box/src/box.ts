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

import type {
  Action,
  ActionMetadata,
  Flow,
  Genkit,
  ToolAction,
  z,
} from 'genkit';
import type { AgentAPI } from 'genkit/beta';
import { createAgentProxy } from './agent-proxy.js';
import { createProxyAction, type ProxyDispatcher } from './proxy.js';
import { resolveRetention, singleton } from './route.js';
import { BOX_SELF_ID_ENV } from './runners/exec-runner.js';
import type {
  BoxConnection,
  BoxOptions,
  BoxRunner,
  Retention,
  RouteFn,
} from './types.js';

/** Ordinal counter for auto-naming boxes when no `name` is given. */
let boxOrdinal = 0;

/** Options for creating a box, with the self-nesting `name` override. */
export interface BoxCreateOptions extends BoxOptions {
  /**
   * Stable id for this box. Required for reliable self-mode nesting; defaults
   * to a construction-order ordinal (`box:0`, `box:1`, ...), which is stable as
   * long as boxes are constructed deterministically.
   */
  name?: string;
}

/** A tool/flow spec used when there is no local action to hand over. */
export interface ProxySpec<
  I extends z.ZodTypeAny = z.ZodTypeAny,
  O extends z.ZodTypeAny = z.ZodTypeAny,
  S extends z.ZodTypeAny = z.ZodTypeAny,
> {
  name: string;
  description?: string;
  inputSchema?: I;
  outputSchema?: O;
  /** Stream chunk schema, for flows that stream. */
  streamSchema?: S;
}

function metaFromAction<
  I extends z.ZodTypeAny = z.ZodTypeAny,
  O extends z.ZodTypeAny = z.ZodTypeAny,
  S extends z.ZodTypeAny = z.ZodTypeAny,
>(action: Action<I, O, S>): Partial<ActionMetadata<I, O, S>> {
  return {
    actionType: action.__action.actionType,
    description: action.__action.description,
    inputSchema: action.__action.inputSchema,
    outputSchema: action.__action.outputSchema,
    streamSchema: action.__action.streamSchema,
    metadata: action.__action.metadata,
    key: action.__action.key,
    name: action.__action.name,
  };
}

/**
 * A box: runs Genkit actions somewhere else (a subprocess, sandbox, ...) and
 * hands you proxies that call them as if they were local.
 */
export class Box {
  readonly id: string;
  private readonly route: RouteFn;
  private readonly retention: Retention;
  /** True when this process is itself the runtime for this box (self-mode). */
  readonly isSelfRuntime: boolean;

  constructor(
    private readonly ai: Genkit,
    private readonly options: BoxCreateOptions
  ) {
    this.id = options.name ?? `box:${boxOrdinal++}`;
    this.route = options.route ?? singleton;
    this.retention = resolveRetention(this.route, options.retention);
    this.isSelfRuntime = process.env[BOX_SELF_ID_ENV] === this.id;

    // Let the runner tag spawned children with this box's id (for nesting).
    const runner = options.runner as BoxRunner & { boxId?: string };
    runner.boxId = this.id;
  }

  /** The underlying runner. */
  get runner(): BoxRunner {
    return this.options.runner;
  }

  /**
   * Builds the dispatcher a proxy uses: runs the route fn to get a key, then
   * acquires the box for it. `retention.idle === 0` (per-request) releases the
   * box after the call.
   */
  private dispatcher(): ProxyDispatcher {
    return {
      boxId: this.id,
      acquire: async (context, signal) => {
        if (this.isSelfRuntime) {
          throw new Error(
            `Box '${this.id}': called a boxed proxy from within the box's own ` +
              `runtime. Use the real (local) action here, or run the box from ` +
              `a separate entry point.`
          );
        }
        const key = this.route(undefined, context);
        const conn = await this.runner.acquire(key, signal);
        if (this.retention.idle === 0) {
          return this.releasingConnection(conn, key);
        }
        return conn;
      },
    };
  }

  /** Wraps a connection so the box is released once the call settles. */
  private releasingConnection(conn: BoxConnection, key: string): BoxConnection {
    return {
      listActions: () => conn.listActions(),
      runAction: async (req, opts) => {
        try {
          return await conn.runAction(req, opts);
        } finally {
          await this.runner.release(key).catch(() => {});
        }
      },
    };
  }

  /** Unregistered tool proxy from a spec (cross-language / remote box). */
  tool<
    I extends z.ZodTypeAny = z.ZodTypeAny,
    O extends z.ZodTypeAny = z.ZodTypeAny,
  >(spec: ProxySpec<I, O>): ToolAction<I, O> {
    return createProxyAction<I, O>(this.dispatcher(), 'tool', spec.name, {
      description: spec.description,
      inputSchema: spec.inputSchema,
      outputSchema: spec.outputSchema,
    }) as ToolAction<I, O>;
  }

  /** Unregistered tool proxy from a real action (same-language sugar). */
  fromTool<
    I extends z.ZodTypeAny = z.ZodTypeAny,
    O extends z.ZodTypeAny = z.ZodTypeAny,
  >(action: ToolAction<I, O>): ToolAction<I, O> {
    const meta = metaFromAction(action);
    return createProxyAction<I, O>(
      this.dispatcher(),
      'tool',
      action.__action.name,
      { ...meta, metadata: { ...meta.metadata, dynamic: true } }
    ) as ToolAction<I, O>;
  }

  /** Registered tool proxy from a spec. Visible/runnable in the Dev UI. */
  defineTool<
    I extends z.ZodTypeAny = z.ZodTypeAny,
    O extends z.ZodTypeAny = z.ZodTypeAny,
  >(spec: ProxySpec<I, O>): ToolAction<I, O> {
    const proxy = this.tool<I, O>(spec);
    this.register(proxy);
    return proxy;
  }

  /**
   * Registered tool proxy from a real action. MUST be renamed, because the
   * original already occupies its name in the registry.
   */
  defineFromTool<
    I extends z.ZodTypeAny = z.ZodTypeAny,
    O extends z.ZodTypeAny = z.ZodTypeAny,
  >(action: ToolAction<I, O>, opts: { name: string }): ToolAction<I, O> {
    if (opts.name === action.__action.name) {
      throw new Error(
        `defineFromTool: the proxy must be renamed (got '${opts.name}', same ` +
          `as the original). The original already occupies that name in the ` +
          `registry.`
      );
    }
    const proxy = createProxyAction<I, O>(
      this.dispatcher(),
      'tool',
      opts.name,
      {
        ...metaFromAction(action),
        name: opts.name,
        key: `/tool/${opts.name}`,
      }
    ) as ToolAction<I, O>;
    this.register(proxy);
    return proxy;
  }

  /** Unregistered flow proxy from a spec. */
  flow<
    I extends z.ZodTypeAny = z.ZodTypeAny,
    O extends z.ZodTypeAny = z.ZodTypeAny,
    S extends z.ZodTypeAny = z.ZodTypeAny,
    Init extends z.ZodTypeAny = z.ZodTypeAny,
  >(spec: ProxySpec<I, O, S>): Flow<I, O, S, Init> {
    return createProxyAction<I, O, S, Init>(
      this.dispatcher(),
      'flow',
      spec.name,
      {
        description: spec.description,
        inputSchema: spec.inputSchema,
        outputSchema: spec.outputSchema,
        streamSchema: spec.streamSchema,
      }
    ) as Flow<I, O, S, Init>;
  }

  /** Unregistered flow proxy from a real action (same-language sugar). */
  fromFlow<
    I extends z.ZodTypeAny = z.ZodTypeAny,
    O extends z.ZodTypeAny = z.ZodTypeAny,
    S extends z.ZodTypeAny = z.ZodTypeAny,
    Init extends z.ZodTypeAny = z.ZodTypeAny,
  >(action: Flow<I, O, S, Init>): Flow<I, O, S, Init> {
    return createProxyAction<I, O, S, Init>(
      this.dispatcher(),
      'flow',
      action.__action.name,
      metaFromAction(action)
    ) as Flow<I, O, S, Init>;
  }

  /** Registered flow proxy from a spec. Visible/runnable in the Dev UI. */
  defineFlow<
    I extends z.ZodTypeAny = z.ZodTypeAny,
    O extends z.ZodTypeAny = z.ZodTypeAny,
    S extends z.ZodTypeAny = z.ZodTypeAny,
    Init extends z.ZodTypeAny = z.ZodTypeAny,
  >(spec: ProxySpec<I, O, S>): Flow<I, O, S, Init> {
    const proxy = this.flow<I, O, S, Init>(spec);
    this.ai.registry.registerAction('flow', proxy);
    return proxy;
  }

  /**
   * Registered flow proxy from a real action. MUST be renamed (see
   * {@link defineFromTool}).
   */
  defineFromFlow<
    I extends z.ZodTypeAny = z.ZodTypeAny,
    O extends z.ZodTypeAny = z.ZodTypeAny,
    S extends z.ZodTypeAny = z.ZodTypeAny,
    Init extends z.ZodTypeAny = z.ZodTypeAny,
  >(action: Flow<I, O, S, Init>, opts: { name: string }): Flow<I, O, S, Init> {
    if (opts.name === action.__action.name) {
      throw new Error(
        `defineFromFlow: the proxy must be renamed (got '${opts.name}', same ` +
          `as the original).`
      );
    }
    const proxy = createProxyAction<I, O, S, Init>(
      this.dispatcher(),
      'flow',
      opts.name,
      {
        ...metaFromAction(action),
        name: opts.name,
        key: `/flow/${opts.name}`,
      }
    ) as Flow<I, O, S, Init>;
    this.ai.registry.registerAction('flow', proxy);
    return proxy;
  }

  /**
   * A boxed {@link AgentAPI} for the agent named `spec.name`. Calls surface the
   * self-runtime guard lazily on first turn (via the dispatcher), matching the
   * tool/flow behavior.
   */
  agent<State = unknown>(spec: { name: string }): AgentAPI<State> {
    return createAgentProxy<State>(this.dispatcher(), spec.name);
  }

  /** A boxed {@link AgentAPI} from a real agent (same-language sugar). */
  fromAgent<State = unknown>(agent: {
    __action?: { name: string };
  }): AgentAPI<State> {
    const name = agent.__action?.name;
    if (!name) {
      throw new Error('fromAgent: could not determine the agent name.');
    }
    return createAgentProxy<State>(this.dispatcher(), name);
  }

  /** Registers a proxy in the Genkit registry so the Dev UI can see it. */
  private register<
    I extends z.ZodTypeAny = z.ZodTypeAny,
    O extends z.ZodTypeAny = z.ZodTypeAny,
  >(proxy: Action<I, O>): void {
    // The proxy satisfies the callable Action surface at runtime; the registry
    // types expect a full Action, so we bridge with an unknown cast.
    this.ai.registry.registerAction('tool', proxy);
  }

  /** Tears down the box and its runner. */
  async close(): Promise<void> {
    await this.runner.close();
  }
}

/** Creates a {@link Box}. */
export function box(ai: Genkit, options: BoxCreateOptions): Box {
  return new Box(ai, options);
}
