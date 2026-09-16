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

import { createAgentAPI, type AgentAPI, type AgentTransport } from 'genkit/beta';
import { Channel } from './channel.js';
import type { ProxyDispatcher } from './proxy.js';

/**
 * Builds a boxed {@link AgentAPI} for the agent named `name`.
 *
 * Mirrors `remoteAgent` (which drives an agent over HTTP): we implement an
 * {@link AgentTransport} whose operations dispatch to the box over a
 * {@link ProxyDispatcher}/{@link BoxConnection}, then hand it to the shared
 * `createAgentAPI` core so callers get the full `chat()` / `loadChat()` /
 * `getSnapshot()` / `abort()` surface, identical to an in-process agent.
 *
 * Wire mapping (matches the actions `defineAgent` registers):
 * - a turn  -> `runAction('/agent/<name>', input, init, stream)`
 * - snapshot -> `runAction('/agent-snapshot/<name>', lookup)`
 * - abort    -> `runAction('/agent-abort/<name>', { snapshotId })`
 */
export function createAgentProxy<State = unknown>(
  dispatcher: ProxyDispatcher,
  name: string
): AgentAPI<State> {
  const agentKey = `/agent/${name}`;
  const snapshotKey = `/agent-snapshot/${name}`;
  const abortKey = `/agent-abort/${name}`;

  const transport: AgentTransport = {
    runTurn(input, init, opts) {
      const chunks = new Channel<unknown>();
      const output = dispatcher
        .acquire(undefined, opts.abortSignal)
        .then((conn) =>
          conn.runAction(
            { key: agentKey, input, init },
            {
              onChunk: (chunk) => chunks.send(chunk),
              abortSignal: opts.abortSignal,
            }
          )
        )
        .then((res) => {
          chunks.close();
          return res.result;
        })
        .catch((err) => {
          chunks.error(err);
          throw err;
        });
      // Avoid unhandled rejection when the caller only reads the stream.
      output.catch(() => {});
      return {
        stream: chunks as AsyncIterable<never>,
        output: output as ReturnType<AgentTransport['runTurn']>['output'],
      };
    },

    async getSnapshot(lookup) {
      const conn = await dispatcher.acquire(undefined);
      const res = await conn.runAction({ key: snapshotKey, input: lookup });
      return res.result as Awaited<ReturnType<AgentTransport['getSnapshot']>>;
    },

    async abort(snapshotId: string) {
      const conn = await dispatcher.acquire(undefined);
      const res = await conn.runAction<{ status?: unknown }>({
        key: abortKey,
        input: { snapshotId },
      });
      return res.result?.status as Awaited<
        ReturnType<AgentTransport['abort']>
      >;
    },
  };

  return createAgentAPI<State>(transport);
}
