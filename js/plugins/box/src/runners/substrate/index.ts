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

// `@genkit-ai/box/substrate`: a separate entry point so the gRPC dependencies
// (`@grpc/grpc-js`, `protobufjs`, optional peers) are only loaded by apps that
// use substrate.

export {
  SubstrateApiError,
  isSubstrateError,
  type SubstrateActor,
  type SubstrateActorState,
  type SubstrateCallOptions,
  type SubstrateControl,
  type SubstrateEgressRule,
  type SubstrateRef,
  type SubstrateStatusCode,
} from './control.js';
export {
  GrpcSubstrateControl,
  grpcSubstrateControl,
  type SubstrateApiOptions,
  type SubstrateToken,
} from './grpc-control.js';
export {
  SubstrateRunner,
  substrateActorName,
  type SubstrateBoxCloseAction,
  type SubstrateIdleAction,
  type SubstrateRunnerOptions,
} from './runner.js';

import { SubstrateRunner, type SubstrateRunnerOptions } from './runner.js';

/** Creates a {@link SubstrateRunner}. */
export function substrateRunner(
  options: SubstrateRunnerOptions
): SubstrateRunner {
  return new SubstrateRunner(options);
}
