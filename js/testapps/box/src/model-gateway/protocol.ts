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

// Wire protocol between boxed agents (client.ts) and the model gateway
// (server.ts). Two ways to call a model:
//
//   Parked call (background turns; the actor may be paused meanwhile):
//     PUT /v1/calls/{callId}            { model, request, park }
//       -> 202 CallStatus               the gateway starts the call
//     GET /v1/calls/{callId}?waitMs=N   long-poll
//       -> 200 CallStatus               pending | done | error
//
//   The client picks the callId, so a PUT retried after a dropped connection
//   finds the same call instead of starting a second one. Connections are
//   expected to drop: a pause severs every socket the actor has open.
//
//   Streaming call (foreground turns; never paused):
//     POST /v1/generate                 { model, request }
//       -> 200 NDJSON                   { chunk } ... then { response } | { error }
//
// Every request carries `Authorization: Bearer <caller token>`, which names
// the actor making the call (see token.ts).

import type {
  GenerateRequestData,
  GenerateResponseChunkData,
  GenerateResponseData,
} from 'genkit';

export interface StartCallBody {
  /** Model to call, e.g. `googleai/gemini-flash-latest`. */
  model: string;
  request: GenerateRequestData;
  /**
   * Allow the gateway to pause the calling actor while the call runs. Only
   * safe when nothing else in the actor needs a live connection meanwhile
   * (no inbound request being served, no other outbound call).
   */
  park?: boolean;
}

export type CallStatus =
  | { status: 'pending' }
  | { status: 'done'; response: GenerateResponseData }
  | { status: 'error'; error: { status: string; message: string } };

export interface GenerateBody {
  model: string;
  request: GenerateRequestData;
}

export type GenerateLine =
  | { chunk: GenerateResponseChunkData }
  | { response: GenerateResponseData }
  | { error: { status: string; message: string } };

/**
 * What the host puts in the action context of a boxed call, for the boxed
 * model client to forward. Genkit propagates action context into nested
 * actions, so the agent's model calls see it without any agent changes.
 */
export interface ModelGatewayContext {
  /** Caller token minted by the host for this box's actor. */
  token: string;
  /** Background turn: the gateway may pause the actor during model calls. */
  park?: boolean;
}

/** Key of {@link ModelGatewayContext} in the action context. */
export const MODEL_GATEWAY_CONTEXT_KEY = 'modelGateway';
