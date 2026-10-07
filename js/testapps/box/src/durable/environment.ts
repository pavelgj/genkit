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

// Environments: physical state. A session-scoped GiaB box whose tools run
// inside it. The engine tells the environment what comes next, instead of a
// timer guessing:
//
//   idle('short')  tools done, waiting on the model  -> pause (cheap)
//   idle('long')   turn over, waiting on a human     -> suspend (durable)
//
// Built on top of @genkit-ai/box with no changes to it: routing by the
// `durable.sessionId` the engine puts in every effect's context, and the
// runner's existing `suspend`/`release`. The mapping per runner lives in
// `lifecycle` so a substrate runner can do pause vs suspend properly.

import { box, type Box, type BoxRunner } from '@genkit-ai/box';
import type { Genkit, ToolAction } from 'genkit';
import type { EnvironmentHooks } from './engine.js';

export type IdleAction = 'keep' | 'suspend' | 'release';

export interface EnvironmentConfig {
  name: string;
  runner: BoxRunner;
  /** Real tool implementations; their bodies run inside the box. */
  tools: ToolAction[];
  /**
   * What to do on each hint. Defaults: short = keep, long = suspend. Override
   * per runner (e.g. exec has no suspend: long = release after a while).
   */
  lifecycle?: { short?: IdleAction; long?: IdleAction };
  log?: (msg: string) => void;
}

export interface DurableEnvironment {
  readonly name: string;
  readonly box: Box;
  /** Boxed proxies of `tools`, same names. Resolved by name at execution. */
  readonly tools: ToolAction[];
  readonly toolNames: string[];
  readonly hooks: EnvironmentHooks;
  /** Recent lifecycle decisions, for demos. */
  readonly history: {
    sessionId: string;
    hint: string;
    action: string;
    at: number;
  }[];
}

export function defineEnvironment(
  ai: Genkit,
  config: EnvironmentConfig
): DurableEnvironment {
  const log = config.log ?? (() => {});
  const envBox = box(ai, {
    name: `env:${config.name}`,
    runner: config.runner,
    // One box per session. Calls outside a durable effect share one box.
    route: (_req, ctx) => {
      const durable = (ctx as { durable?: { sessionId?: unknown } } | undefined)
        ?.durable;
      return typeof durable?.sessionId === 'string'
        ? durable.sessionId
        : '__shared__';
    },
    retention: {}, // never reclaimed by idle timers; the engine decides
  });
  const tools = config.tools.map((t) => envBox.fromTool(t));
  const history: DurableEnvironment['history'] = [];
  const short = config.lifecycle?.short ?? 'keep';
  const long = config.lifecycle?.long ?? 'suspend';

  const hooks: EnvironmentHooks = {
    name: config.name,
    async idle(sessionId, expect) {
      const action = expect === 'short' ? short : long;
      history.push({ sessionId, hint: expect, action, at: Date.now() });
      if (history.length > 100) history.shift();
      log(`env ${config.name}: ${sessionId} idle(${expect}) -> ${action}`);
      if (action === 'suspend') await config.runner.suspend?.(sessionId);
      else if (action === 'release') await config.runner.release(sessionId);
    },
  };

  return {
    name: config.name,
    box: envBox,
    tools,
    toolNames: tools.map((t) => t.__action.name),
    hooks,
    history,
  };
}
