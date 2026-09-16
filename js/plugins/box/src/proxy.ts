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

import type { Action, ActionMetadata, z } from 'genkit';
import { runInNewSpan, SPAN_TYPE_ATTR } from 'genkit/tracing';
import { Channel } from './channel.js';
import type { BoxConnection, RunActionResult } from './types.js';

/** The kind of primitive being proxied; determines the action key prefix. */
export type ProxyKind = 'flow' | 'tool';

/** Builds the action key for a named primitive, e.g. `/tool/runShell`. */
export function actionKeyFor(kind: ProxyKind, name: string): string {
  return `/${kind}/${name}`;
}

/**
 * The RunOptions an {@link Action} accepts by default, parameterized by the
 * stream schema `S`. Derived from `Action` itself so we never import
 * Genkit-internal option types. This resolves to `ActionRunOptions<infer S, any>`
 * (Action's own default), so `onChunk` is typed by `S` and `init` is accepted.
 */
type RunOpts<S extends z.ZodTypeAny> = NonNullable<
  Parameters<Action<z.ZodTypeAny, z.ZodTypeAny, S>>[1]
>;

/** The fully-parameterized proxy Action type, including stream `S` and `Init`. */
type ProxyOf<
  I extends z.ZodTypeAny,
  O extends z.ZodTypeAny,
  S extends z.ZodTypeAny,
  Init extends z.ZodTypeAny,
> = Action<I, O, S, RunOpts<S>, Init>;

/** What a proxy Action's `run()` resolves to (its `ActionResult`). */
type ActionRun<
  I extends z.ZodTypeAny,
  O extends z.ZodTypeAny,
  S extends z.ZodTypeAny,
  Init extends z.ZodTypeAny,
> = Awaited<ReturnType<ProxyOf<I, O, S, Init>['run']>>;

/**
 * How a proxy reaches its box. `acquire` is called per invocation with the
 * routing context so the runner can (re)spawn/route as needed; the returned
 * connection is then used for the single call.
 */
export interface ProxyDispatcher {
  acquire(
    context: Record<string, unknown> | undefined,
    signal?: AbortSignal
  ): Promise<BoxConnection>;
  /** Id of the box these proxies belong to; stamped onto proxy spans. */
  readonly boxId?: string;
}

/**
 * Creates a callable proxy that forwards to a boxed action over a
 * {@link ProxyDispatcher}. `meta` supplies eager metadata (schemas, etc.) when
 * available (the `fromTool` path); otherwise the proxy is name-only until the
 * box hydrates it. The result is a real {@link Action}, so it composes into
 * `tools: [...]` and the registry.
 */
export function createProxyAction<
  I extends z.ZodTypeAny = z.ZodTypeAny,
  O extends z.ZodTypeAny = z.ZodTypeAny,
  S extends z.ZodTypeAny = z.ZodTypeAny,
  Init extends z.ZodTypeAny = z.ZodTypeAny,
>(
  dispatcher: ProxyDispatcher,
  kind: ProxyKind,
  name: string,
  meta?: Partial<ActionMetadata<I, O, S>>
): ProxyOf<I, O, S, Init> {
  type Opts = RunOpts<S>;
  const key = meta?.key ?? actionKeyFor(kind, name);

  // Wrap each invocation in a manager-side Genkit span so a boxed call is
  // visible (and marked) in the caller's trace, rather than an invisible gap.
  // The span covers the whole call, including streaming (dispatch resolves at
  // the final result). The box runs its own action span in its own trace; we
  // record its traceId here to correlate the two.
  const dispatch = (
    input: z.infer<I> | undefined,
    options: Opts | undefined,
    onChunk?: (chunk: unknown) => void
  ): Promise<RunActionResult<z.infer<O>>> =>
    runInNewSpan(
      {
        metadata: { name },
        labels: {
          [SPAN_TYPE_ATTR]: 'action',
          'genkit:metadata:subtype': kind,
          'genkit:key': key,
          // The mark: this span is a boxed proxy, and which box it targets.
          'genkit:metadata:box': dispatcher.boxId ?? 'true',
        },
      },
      async (spanMeta) => {
        spanMeta.input = input;
        const context = options?.context as
          | Record<string, unknown>
          | undefined;
        const conn = await dispatcher.acquire(context, options?.abortSignal);
        const res = await conn.runAction<z.infer<O>>(
          { key, input, init: options?.init, context },
          { onChunk, abortSignal: options?.abortSignal }
        );
        spanMeta.output = res.result;
        // Correlate to the box-side trace.
        if (res.telemetry?.traceId) {
          spanMeta.metadata = {
            ...spanMeta.metadata,
            'box:traceId': res.telemetry.traceId,
          };
        }
        return res;
      }
    );

  const callable = (async (input?: z.infer<I>, options?: Opts) => {
    const res = await dispatch(input, options, options?.onChunk);
    return res.result;
  }) as ProxyOf<I, O, S, Init>;

  callable.__action = {
    name,
    ...(meta ?? {}),
    metadata: {
      ...(meta?.metadata ?? {}),
      ...(kind === 'tool' ? { type: 'tool' } : {}),
      box: true,
    },
  } as ProxyOf<I, O, S, Init>['__action'];

  callable.run = async (input?: z.infer<I>, options?: Opts) => {
    const res = await dispatch(input, options, options?.onChunk);
    // The box only returns a traceId over reflection; spanId is not available.
    return {
      result: res.result,
      telemetry: { traceId: res.telemetry?.traceId ?? '', spanId: '' },
    } as ActionRun<I, O, S, Init>;
  };

  callable.stream = ((input?: z.infer<I>, options?: Opts) => {
    const channel = new Channel<z.infer<S>>();
    const output = dispatch(input, options, (chunk) =>
      channel.send(chunk as z.infer<S>)
    )
      .then((res) => {
        channel.close();
        return res.result;
      })
      .catch((err) => {
        channel.error(err);
        throw err;
      });
    // Avoid unhandled rejection when the caller only reads the stream.
    output.catch(() => {});
    // The channel is an async-iterable; the framework only iterates `stream`.
    return { stream: channel, output } as unknown as ReturnType<
      ProxyOf<I, O, S, Init>['stream']
    >;
  }) as ProxyOf<I, O, S, Init>['stream'];

  return callable;
}

/**
 * Converts the raw action map from `listActions` into hydrated metadata keyed by
 * short name for a given kind.
 */
export function indexActionsByName(
  actions: Record<string, ActionMetadata>,
  kind: ProxyKind
): Map<string, ActionMetadata> {
  const prefix = `/${kind}/`;
  const byName = new Map<string, ActionMetadata>();
  for (const [key, action] of Object.entries(actions)) {
    if (!key.startsWith(prefix)) continue;
    const name = key.slice(prefix.length);
    byName.set(name, { ...action, name });
  }
  return byName;
}
