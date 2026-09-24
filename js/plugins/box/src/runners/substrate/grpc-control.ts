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

import * as grpc from '@grpc/grpc-js';
import protobuf from 'protobufjs';
import { ATEAPI_PROTO, CONTROL_SERVICE } from './ateapi-proto.js';
import {
  SUBSTRATE_STATUS_CODES,
  SubstrateApiError,
  type SubstrateActor,
  type SubstrateCallOptions,
  type SubstrateControl,
  type SubstrateEgressRule,
  type SubstrateRef,
  type SubstrateStatusCode,
  type SubstrateWorker,
} from './control.js';

/** A bearer token, or a function returning one (called per RPC). */
export type SubstrateToken = string | (() => string | Promise<string>);

/** How to reach and authenticate to substrate's `ate-api`. */
export interface SubstrateApiOptions {
  /** gRPC target, e.g. `localhost:8443` or `dns:///api.example.com:443`. */
  endpoint: string;
  /**
   * PEM trust bundle for ate-api's serving certificate: the
   * `servicedns.podcert.ate.dev/identity` ClusterTrustBundle.
   */
  ca: string | Buffer;
  /**
   * TLS server name to verify, needed when `endpoint` is a port-forward or a
   * load balancer. Defaults to `api.ate-system.svc`.
   */
  serverName?: string;
  /**
   * Bearer token (JWT) ate-api accepts: a Kubernetes service account token for
   * `ate-client` with audience `api.ate-system.svc`, or a token from any
   * configured OIDC provider. A function is re-invoked per RPC, so it can
   * re-read a rotated token file.
   */
  token: SubstrateToken;
  /** Per-RPC deadline. Defaults to 60s (resume can include a cold boot). */
  timeoutMs?: number;
}

const DEFAULT_SERVER_NAME = 'api.ate-system.svc';
const DEFAULT_TIMEOUT_MS = 60_000;

/** Loose shape of a decoded message; narrowed by the caller. */
type Msg = Record<string, unknown>;

interface Codec {
  serialize(value: Msg): Buffer;
  deserialize(buf: Buffer): Msg;
}

let root: protobuf.Root | undefined;
const codecs = new Map<string, Codec>();

function codec(typeName: string): Codec {
  let c = codecs.get(typeName);
  if (c) return c;
  root ??= protobuf.parse(ATEAPI_PROTO, { keepCase: false }).root;
  const type = root.lookupType(`ateapi.${typeName}`);
  c = {
    serialize: (value) =>
      Buffer.from(type.encode(type.fromObject(value)).finish()),
    // enums: String keeps ActorState readable; longs: String avoids a Long dep.
    deserialize: (buf) =>
      type.toObject(type.decode(buf), { enums: String, longs: String }),
  };
  codecs.set(typeName, c);
  return c;
}

const statusNames = new Map<number, SubstrateStatusCode>(
  SUBSTRATE_STATUS_CODES.map((name) => [grpc.status[name], name])
);

function toApiError(err: grpc.ServiceError): SubstrateApiError {
  const code = statusNames.get(err.code) ?? 'UNKNOWN';
  return new SubstrateApiError(code, err.details || err.message);
}

function objectRef(ref: SubstrateRef): Msg {
  return { atespace: ref.atespace, name: ref.name };
}

function egressRule(rule: SubstrateEgressRule): Msg {
  if ('all' in rule) return { all: {} };
  if ('cidrs' in rule) return { cidrs: { cidrs: rule.cidrs } };
  return { hostnames: { patterns: rule.hostnames } };
}

function bearerCredentials(token: SubstrateToken): grpc.CallCredentials {
  return grpc.credentials.createFromMetadataGenerator((_params, callback) => {
    Promise.resolve(typeof token === 'function' ? token() : token)
      .then((t) => {
        const md = new grpc.Metadata();
        md.set('authorization', `Bearer ${t.trim()}`);
        callback(null, md);
      })
      .catch((e: unknown) =>
        callback(e instanceof Error ? e : new Error(String(e)))
      );
  });
}

/**
 * The stock {@link SubstrateControl}: gRPC over TLS 1.3 with a bearer token,
 * the same way `kubectl ate --endpoint` talks to ate-api.
 */
export class GrpcSubstrateControl implements SubstrateControl {
  private readonly client: grpc.Client;
  private readonly timeoutMs: number;

  constructor(options: SubstrateApiOptions) {
    const ca =
      typeof options.ca === 'string' ? Buffer.from(options.ca) : options.ca;
    // Call credentials only ever ride a verified TLS channel, so the token is
    // never sent to an unauthenticated server.
    const creds = grpc.credentials.combineChannelCredentials(
      grpc.credentials.createSsl(ca),
      bearerCredentials(options.token)
    );
    const serverName = options.serverName ?? DEFAULT_SERVER_NAME;
    this.client = new grpc.Client(options.endpoint, creds, {
      'grpc.ssl_target_name_override': serverName,
      'grpc.default_authority': serverName,
    });
    this.timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  }

  private call(
    method: string,
    types: [request: string, response: string],
    request: Msg,
    opts?: SubstrateCallOptions
  ): Promise<Msg> {
    const req = codec(types[0]);
    const res = codec(types[1]);
    return new Promise((resolve, reject) => {
      const signal = opts?.signal;
      if (signal?.aborted) {
        reject(new SubstrateApiError('CANCELLED', `${method} aborted`));
        return;
      }
      const onAbort = () => call.cancel();
      const call = this.client.makeUnaryRequest<Msg, Msg>(
        `/${CONTROL_SERVICE}/${method}`,
        req.serialize,
        res.deserialize,
        request,
        new grpc.Metadata(),
        { deadline: Date.now() + this.timeoutMs },
        (err, value) => {
          signal?.removeEventListener('abort', onAbort);
          if (err) reject(toApiError(err));
          else resolve(value ?? {});
        }
      );
      signal?.addEventListener('abort', onAbort, { once: true });
    });
  }

  async getActor(ref: SubstrateRef, opts?: SubstrateCallOptions) {
    const actor = await this.call(
      'GetActor',
      ['GetActorRequest', 'Actor'],
      { actor: objectRef(ref) },
      opts
    );
    return actor as SubstrateActor;
  }

  async createActor(
    ref: SubstrateRef,
    template: SubstrateRef,
    opts?: SubstrateCallOptions
  ) {
    const actor = await this.call(
      'CreateActor',
      ['CreateActorRequest', 'Actor'],
      {
        actor: {
          metadata: { atespace: ref.atespace, name: ref.name },
          actorTemplate: objectRef(template),
        },
      },
      opts
    );
    return actor as SubstrateActor;
  }

  async createEgressPolicy(
    ref: SubstrateRef,
    rules: SubstrateEgressRule[],
    opts?: SubstrateCallOptions
  ): Promise<void> {
    await this.call(
      'CreateActorEgressPolicy',
      ['CreateActorEgressPolicyRequest', 'EgressPolicy'],
      {
        actor: objectRef(ref),
        egressPolicy: {
          metadata: { atespace: ref.atespace, name: 'default' },
          rules: rules.map(egressRule),
        },
      },
      opts
    );
  }

  private async lifecycle(
    verb: 'Resume' | 'Suspend' | 'Pause' | 'Revert',
    ref: SubstrateRef,
    opts?: SubstrateCallOptions
  ): Promise<SubstrateActor> {
    const res = await this.call(
      `${verb}Actor`,
      [`${verb}ActorRequest`, `${verb}ActorResponse`],
      { actor: objectRef(ref) },
      opts
    );
    return (res.actor ?? {}) as SubstrateActor;
  }

  resumeActor(ref: SubstrateRef, opts?: SubstrateCallOptions) {
    return this.lifecycle('Resume', ref, opts);
  }

  suspendActor(ref: SubstrateRef, opts?: SubstrateCallOptions) {
    return this.lifecycle('Suspend', ref, opts);
  }

  pauseActor(ref: SubstrateRef, opts?: SubstrateCallOptions) {
    return this.lifecycle('Pause', ref, opts);
  }

  revertActor(ref: SubstrateRef, opts?: SubstrateCallOptions) {
    return this.lifecycle('Revert', ref, opts);
  }

  async deleteActor(
    ref: SubstrateRef,
    opts?: SubstrateCallOptions & { anyState?: boolean }
  ): Promise<void> {
    await this.call(
      'DeleteActor',
      ['DeleteActorRequest', 'Actor'],
      { actor: objectRef(ref), anyState: opts?.anyState ?? false },
      opts
    );
  }

  async listActors(
    atespace: string,
    opts?: SubstrateCallOptions
  ): Promise<SubstrateActor[]> {
    const actors: SubstrateActor[] = [];
    let pageToken = '';
    do {
      const page = await this.call(
        'ListActors',
        ['ListActorsRequest', 'ListActorsResponse'],
        { atespace, pageSize: 500, pageToken },
        opts
      );
      actors.push(...((page.actors ?? []) as SubstrateActor[]));
      pageToken =
        typeof page.nextPageToken === 'string' ? page.nextPageToken : '';
    } while (pageToken);
    return actors;
  }

  async listWorkers(opts?: SubstrateCallOptions): Promise<SubstrateWorker[]> {
    const workers: SubstrateWorker[] = [];
    let pageToken = '';
    do {
      const page = await this.call(
        'ListWorkers',
        ['ListWorkersRequest', 'ListWorkersResponse'],
        { pageSize: 500, pageToken },
        opts
      );
      workers.push(...((page.workers ?? []) as SubstrateWorker[]));
      pageToken =
        typeof page.nextPageToken === 'string' ? page.nextPageToken : '';
    } while (pageToken);
    return workers;
  }

  close(): void {
    this.client.close();
  }
}

/** Creates the stock gRPC {@link SubstrateControl}. */
export function grpcSubstrateControl(
  options: SubstrateApiOptions
): GrpcSubstrateControl {
  return new GrpcSubstrateControl(options);
}
