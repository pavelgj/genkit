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

import type { ActionMetadata } from 'genkit';


/** A single `runAction` request dispatched to a box. */
export interface RunActionRequest {
  /** Action key, e.g. `/tool/runShell`, `/flow/myFlow`, `/agent/codingAgent`. */
  key: string;
  input?: unknown;
  /** Initialization data for bidi actions such as agents. */
  init?: unknown;
  context?: unknown;
  telemetryLabels?: Record<string, string>;
}

/** Streaming/cancellation/trace options threaded through a `runAction`. */
export interface RunOptions {
  /** Server streaming: receives each chunk as the box emits it. */
  onChunk?: (chunk: unknown) => void;
  /** Early trace id, delivered before the final result (for telemetry). */
  onTraceId?: (traceId: string) => void;
  /** Cancels the in-flight action. */
  abortSignal?: AbortSignal;
}

/** Result of a (terminal) `runAction`. */
export interface RunActionResult<O = unknown> {
  result?: O;
  telemetry?: { traceId?: string };
}

/**
 * What the box core calls once it has a box. Deliberately narrow: runners never
 * touch reflection directly, the shared manager provides this and picks the
 * protocol version internally.
 */
export interface BoxConnection {
  runAction<O = unknown>(
    req: RunActionRequest,
    opts?: RunOptions
  ): Promise<RunActionResult<O>>;
  listActions(): Promise<Record<string, ActionMetadata>>;
}

/**
 * Owns box process lifecycle and the routing-key -> instance mapping. Does NOT
 * reimplement reflection; the shared manager hands it a {@link BoxConnection}.
 */
export interface BoxRunner {
  readonly name: string;

  /**
   * Gets (or lazily creates) a box for a routing key, ready to accept calls.
   * The runner owns the key -> instance mapping.
   */
  acquire(key: string, signal?: AbortSignal): Promise<BoxConnection>;

  /**
   * Frees resources while a box waits on user input. Optional: runners that
   * can't suspend simply don't implement it.
   */
  suspend?(key: string): Promise<void>;

  /** Reclaims the box for this key. */
  release(key: string): Promise<void>;

  /** Tears down all boxes and underlying resources. */
  close(): Promise<void>;
}

/**
 * Decides which box a call is routed to. Returns a routing key; the core then
 * asks the runner to `acquire(key)`. Presets like {@link singleton} and
 * {@link perRequest} are just pre-packaged route functions.
 */
export type RouteFn = (
  req: unknown,
  ctx: Record<string, unknown> | undefined
) => string;

/** Controls how long a box lives and what happens on suspend. */
export interface Retention {
  /**
   * How long (ms) a box may sit idle before it is reclaimed. `0` reclaims as
   * soon as the call returns. Omit for "never".
   */
  idle?: number;
  /** What a suspend-capable runner does while waiting on user input. */
  onSuspend?: 'snapshot' | 'kill';
}

/** Options accepted by {@link box}. */
export interface BoxOptions {
  runner: BoxRunner;
  /** Which box a call goes to. Defaults to {@link singleton}. */
  route?: RouteFn;
  /** How long boxes live. Presets supply sensible defaults. */
  retention?: Retention;
}

/** A handle to a spawned box subprocess. */
export interface SpawnHandle {
  readonly pid?: number;
  /** Terminates the subprocess. Resolves once it has exited. */
  kill(): Promise<void>;
  /** Registers a callback invoked when the subprocess exits. */
  onExit(cb: (code: number | null) => void): void;
}

/** The base spawn a provider transforms. */
export interface SpawnSpec {
  cmd: string;
  args: string[];
  env: Record<string, string>;
  cwd?: string;
}

/** Where the reflection host is listening (what the box should dial). */
export interface ReflectHost {
  url: string;
  port: number;
}

/** The isolated spawn a provider produces. `reflectUrl` is what the box dials. */
export interface PreparedSpawn extends SpawnSpec {
  reflectUrl: string;
}

/**
 * Pluggable isolation strategy passed to `execRunner` as `isolate:`. Transforms
 * the base spawn into the isolated spawn. A provider MUST punch the loopback
 * hole so the box can reach the reflection host, and return the URL the box
 * should actually dial.
 */
export interface SandboxProvider {
  readonly name: string;
  /** Platforms this provider supports; used by {@link localSandbox}. */
  readonly platforms?: NodeJS.Platform[];
  prepare(spec: SpawnSpec, reflect: ReflectHost): PreparedSpawn;
}
