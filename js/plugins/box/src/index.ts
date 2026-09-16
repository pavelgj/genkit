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

export {
  Box,
  box,
  type BoxCreateOptions,
  type ProxySpec,
} from './box.js';
export { createAgentProxy } from './agent-proxy.js';
export {
  BOX_SELF_ID_ENV,
  ExecRunner,
  execRunner,
  type ExecRunnerOptions,
} from './runners/exec-runner.js';
export {
  BubblewrapProvider,
  SandboxExecProvider,
  SubprocessProvider,
  bubblewrap,
  localSandbox,
  sandboxExec,
  type BubblewrapOptions,
  type SandboxExecOptions,
} from './providers/index.js';
export {
  actionKeyFor,
  createProxyAction,
  indexActionsByName,
  type ProxyDispatcher,
  type ProxyKind,
} from './proxy.js';
export {
  perRequest,
  resolveRetention,
  singleton,
  SINGLETON_KEY,
} from './route.js';
export {
  BoxRuntimeError,
  HostEvent,
  ReflectionHost,
  type ConnectedRuntimeInfo,
} from './reflection-host.js';
export type {
  BoxConnection,
  BoxOptions,
  BoxRunner,
  PreparedSpawn,
  ReflectHost,
  Retention,
  RouteFn,
  RunActionRequest,
  RunActionResult,
  RunOptions,
  SandboxProvider,
  SpawnHandle,
  SpawnSpec,
} from './types.js';
