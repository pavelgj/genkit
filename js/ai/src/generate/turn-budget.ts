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

import { GenkitError } from '@genkit-ai/core';

export const DEFAULT_MAX_TURNS = 5;

/**
 * Validates and resolves the maximum tool-call turn budget for `generate()`.
 */
export function resolveMaxTurns(maxTurns?: number): number {
  if (maxTurns === undefined) {
    return DEFAULT_MAX_TURNS;
  }
  if (!Number.isInteger(maxTurns) || maxTurns < 0) {
    throw new GenkitError({
      status: 'INVALID_ARGUMENT',
      message: `maxTurns must be a non-negative integer, got ${maxTurns}`,
    });
  }
  return maxTurns;
}
