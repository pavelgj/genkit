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

// Persistence for run documents. `sessionStoreDurability` adapts any genkit
// SessionStore: its `saveSnapshot(id, mutator)` is an atomic read-modify-write
// of one document, and the whole run (transcript, business state, queue) is
// one document, so every commit is consistent.
//
// Prototype caveats: FileSessionStore's lock is per-process, so two live
// processes on one directory can race (fine for crash/restart demos, where
// only one is alive). The active-session index is a separate document and
// only a hint (a superset) for recovery.

import type { SessionSnapshotInput, SessionStore } from 'genkit/beta';
import { isDurableRun, type DurableRun } from './types.js';

export interface DurableStore {
  load(sessionId: string): Promise<DurableRun | undefined>;
  /**
   * Atomically reads the run, applies `fn`, and writes the result. `fn` must
   * be synchronous and may be retried. Return null to skip the write.
   */
  commit<T>(
    sessionId: string,
    fn: (run: DurableRun | undefined) => { run: DurableRun; result: T } | null
  ): Promise<T | null>;
  /** Sessions that may have unfinished work (for recovery on startup). */
  listActive(): Promise<string[]>;
}

const RUN_PREFIX = 'durable-run-';
const INDEX_ID = 'durable-index';

/** A run with work to do: a turn in flight or queued inputs. */
export function isActive(run: DurableRun): boolean {
  return !!run.turn || run.inbox.length > 0;
}

/**
 * Adapts a genkit SessionStore. The run is saved as its own snapshot
 * (`durable-run-<sessionId>`) with no `sessionId` field anywhere, so the
 * agent's "latest snapshot of this session" lookups never return it.
 */
export function sessionStoreDurability(store: SessionStore): DurableStore {
  const runId = (sessionId: string) => `${RUN_PREFIX}${sessionId}`;

  const updateIndex = async (sessionId: string, active: boolean) => {
    await store.saveSnapshot(INDEX_ID, (cur) => {
      const ids = new Set(asStringArray(cur?.state?.custom));
      if (ids.has(sessionId) === active) return null;
      if (active) ids.add(sessionId);
      else ids.delete(sessionId);
      return snapshotOf(INDEX_ID, [...ids]);
    });
  };

  return {
    async load(sessionId) {
      const snap = await store.getSnapshot({ snapshotId: runId(sessionId) });
      const custom = snap?.state?.custom;
      return isDurableRun(custom) ? custom : undefined;
    },

    async commit(sessionId, fn) {
      let out: { result: unknown; wasActive: boolean; active: boolean } | null =
        null;
      await store.saveSnapshot(runId(sessionId), (cur) => {
        const before = cur?.state?.custom;
        const run = isDurableRun(before) ? structuredClone(before) : undefined;
        const res = fn(run);
        if (!res) {
          out = null;
          return null;
        }
        res.run.version = (run?.version ?? 0) + 1;
        out = {
          result: res.result,
          wasActive: run ? isActive(run) : false,
          active: isActive(res.run),
        };
        return snapshotOf(runId(sessionId), res.run);
      });
      const done = out as {
        result: unknown;
        wasActive: boolean;
        active: boolean;
      } | null;
      if (!done) return null;
      if (done.wasActive !== done.active) {
        await updateIndex(sessionId, done.active);
      }
      return done.result as never;
    },

    async listActive() {
      const snap = await store.getSnapshot({ snapshotId: INDEX_ID });
      return asStringArray(snap?.state?.custom);
    },
  };
}

function snapshotOf(id: string, custom: unknown): SessionSnapshotInput {
  const now = new Date().toISOString();
  return {
    snapshotId: id,
    createdAt: now,
    updatedAt: now,
    status: 'completed',
    state: { custom },
  };
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((v): v is string => typeof v === 'string')
    : [];
}
