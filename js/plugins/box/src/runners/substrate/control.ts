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

// The slice of substrate's `ateapi.Control` service the runner uses, as plain
// TypeScript. The runner only ever talks to this interface, so tests (and
// callers with their own transport or auth) can supply an implementation
// without touching gRPC. `grpcSubstrateControl` is the stock implementation.

/** Identifies an actor or template: `<atespace>/<name>`. */
export interface SubstrateRef {
  atespace: string;
  name: string;
}

/** Mirrors `ateapi.ActorState`. */
export type SubstrateActorState =
  | 'ACTOR_STATE_UNSPECIFIED'
  | 'ACTOR_STATE_RESUMING'
  | 'ACTOR_STATE_RUNNING'
  | 'ACTOR_STATE_SUSPENDING'
  | 'ACTOR_STATE_SUSPENDED'
  | 'ACTOR_STATE_PAUSING'
  | 'ACTOR_STATE_PAUSED'
  | 'ACTOR_STATE_CRASHED'
  | 'ACTOR_STATE_DELETING'
  | 'ACTOR_STATE_REVERTING';

/**
 * The fields of `ateapi.Actor` the runner reads. Everything is optional
 * because proto3 omits unset fields on the wire.
 */
export interface SubstrateActor {
  metadata?: { atespace?: string; name?: string; uid?: string };
  actorTemplate?: SubstrateRef;
  status?: {
    state?: SubstrateActorState;
    workerAssignment?: { workerPod?: string; workerPodIp?: string };
  };
}

/**
 * One egress rule. The first matching rule authorizes a request; with no rules
 * (or no policy at all) substrate denies all actor egress.
 *
 * Hostname rules only match traffic the egress gateway can read. On a gateway
 * that does not terminate TLS, HTTPS is matched by destination address only,
 * so use `cidrs` or `all` for it.
 */
export type SubstrateEgressRule =
  | { all: true }
  | { cidrs: string[] }
  | { hostnames: string[] };

/** gRPC error status names (everything but `OK`). */
export const SUBSTRATE_STATUS_CODES = [
  'CANCELLED',
  'UNKNOWN',
  'INVALID_ARGUMENT',
  'DEADLINE_EXCEEDED',
  'NOT_FOUND',
  'ALREADY_EXISTS',
  'PERMISSION_DENIED',
  'RESOURCE_EXHAUSTED',
  'FAILED_PRECONDITION',
  'ABORTED',
  'OUT_OF_RANGE',
  'UNIMPLEMENTED',
  'INTERNAL',
  'UNAVAILABLE',
  'DATA_LOSS',
  'UNAUTHENTICATED',
] as const;

/** A gRPC error status name, as carried by {@link SubstrateApiError}. */
export type SubstrateStatusCode = (typeof SUBSTRATE_STATUS_CODES)[number];

/** An error returned by the substrate control plane. */
export class SubstrateApiError extends Error {
  constructor(
    readonly code: SubstrateStatusCode,
    message: string
  ) {
    super(message);
    this.name = 'SubstrateApiError';
  }
}

/** Returns true if `err` is a {@link SubstrateApiError} with one of `codes`. */
export function isSubstrateError(
  err: unknown,
  ...codes: SubstrateStatusCode[]
): err is SubstrateApiError {
  return err instanceof SubstrateApiError && codes.includes(err.code);
}

/** Per-call options for {@link SubstrateControl} methods. */
export interface SubstrateCallOptions {
  signal?: AbortSignal;
}

/** The actor lifecycle operations the substrate runner needs. */
export interface SubstrateControl {
  getActor(
    ref: SubstrateRef,
    opts?: SubstrateCallOptions
  ): Promise<SubstrateActor>;
  createActor(
    ref: SubstrateRef,
    template: SubstrateRef,
    opts?: SubstrateCallOptions
  ): Promise<SubstrateActor>;
  /** Creates the actor's egress policy. Actors start with none (deny all). */
  createEgressPolicy(
    ref: SubstrateRef,
    rules: SubstrateEgressRule[],
    opts?: SubstrateCallOptions
  ): Promise<void>;
  /** Idempotent: returns immediately for an actor that is already running. */
  resumeActor(
    ref: SubstrateRef,
    opts?: SubstrateCallOptions
  ): Promise<SubstrateActor>;
  /** Durable snapshot to object storage; frees the worker. */
  suspendActor(
    ref: SubstrateRef,
    opts?: SubstrateCallOptions
  ): Promise<SubstrateActor>;
  /** Node-local snapshot; frees the worker, next resume prefers that node. */
  pauseActor(
    ref: SubstrateRef,
    opts?: SubstrateCallOptions
  ): Promise<SubstrateActor>;
  /** Moves a crashed/running/paused actor back to its last durable snapshot. */
  revertActor(
    ref: SubstrateRef,
    opts?: SubstrateCallOptions
  ): Promise<SubstrateActor>;
  deleteActor(
    ref: SubstrateRef,
    opts?: SubstrateCallOptions & { anyState?: boolean }
  ): Promise<void>;
  /** Lists every actor in an atespace (all pages). */
  listActors(
    atespace: string,
    opts?: SubstrateCallOptions
  ): Promise<SubstrateActor[]>;
  /** Releases the underlying connection. */
  close(): void;
}
