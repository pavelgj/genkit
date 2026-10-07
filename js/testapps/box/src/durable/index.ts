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

// Durable agents on GiaB (prototype). See
// js/plugins/box/durable-agents-design.local.md.

export {
  defineDurableAgent,
  defineDurablePromptAgent,
  transcriptText,
  type DurableAgent,
  type DurableAgentConfig,
  type DurableHandle,
  type DurablePromptAgentConfig,
} from './agent.js';
export {
  DurableEngine,
  type DurableEngineOptions,
  type EffectRuntime,
  type EnvironmentHooks,
  type ToolOutcome,
} from './engine.js';
export {
  defineEnvironment,
  type DurableEnvironment,
  type EnvironmentConfig,
} from './environment.js';
export { promptRuntime } from './runtime.js';
export { step } from './step.js';
export {
  isActive,
  sessionStoreDurability,
  type DurableStore,
} from './store.js';
export * from './types.js';
