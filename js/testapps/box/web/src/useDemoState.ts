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

import { useEffect, useState } from 'react';
import type { DemoState } from './types';

/** Polls GET /api/state. Substrate has no watch API, so polling it is. */
export function useDemoState(intervalMs = 700): {
  state?: DemoState;
  error?: string;
} {
  const [state, setState] = useState<DemoState>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    let stopped = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const poll = async () => {
      try {
        const res = await fetch('/api/state');
        const body = await res.json();
        if (!res.ok) throw new Error(body.error ?? `HTTP ${res.status}`);
        if (!stopped) {
          setState(body as DemoState);
          setError(undefined);
        }
      } catch (e) {
        if (!stopped) setError(String(e));
      } finally {
        if (!stopped) timer = setTimeout(poll, intervalMs);
      }
    };
    poll();
    return () => {
      stopped = true;
      clearTimeout(timer);
    };
  }, [intervalMs]);

  return { state, error };
}
