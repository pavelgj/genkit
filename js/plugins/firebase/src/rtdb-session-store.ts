/**
 * Copyright 2025 Google LLC
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

import { type App } from 'firebase-admin/app';
import { Database, getDatabase } from 'firebase-admin/database';
import { type AgentFlowStoreUnsubscribe } from 'genkit/beta';

import { MessageData } from 'genkit';
import {
  type AgentFlowSessionData,
  type AgentFlowStatus,
  type AgentFlowStore,
  type AgentFlowStoreEvent,
} from 'genkit/beta';

export interface RtdbSessionStoreOptions {
  firebaseApp?: App;
  db?: Database;
  refPrefix?: string;
}

export function rtdbSessionStore(
  opts: RtdbSessionStoreOptions
): AgentFlowStore<any> {
  return new RtdbSessionStore(opts);
}

export class RtdbSessionStore<S = any> implements AgentFlowStore<S> {
  private db: Database;
  private refRoot: string;

  constructor(opts: RtdbSessionStoreOptions) {
    this.refRoot = opts.refPrefix ?? '';
    // refRoot should have a trailing slash for simplicity.
    if (this.refRoot && !this.refRoot.endsWith('/')) {
      this.refRoot += '/';
    }
    this.db =
      opts.db ??
      (opts.firebaseApp ? getDatabase(opts.firebaseApp) : getDatabase());
  }

  async patchState(sessionId: string, data: Partial<S>): Promise<void> {
    await this.db.ref(this.refRoot + sessionId + '/state').update(data);
  }

  async setStatus(sessionId: string, data: AgentFlowStatus): Promise<void> {
    await this.db.ref(this.refRoot + sessionId + '/status').set(data);
  }

  async get(sessionId: string): Promise<AgentFlowSessionData<S> | undefined> {
    const snapshot = await this.db.ref(this.refRoot + sessionId).get();
    if (!snapshot.exists) {
      return undefined;
    }
    const data = snapshot.val();
    return {
      state: data?.state ?? {},
      threads: data?.threads ?? {},
      status: data?.status,
    };
  }

  subscribe(
    sessionId: string,
    callback: (update: AgentFlowStoreEvent<S>) => void
  ): AgentFlowStoreUnsubscribe {
    const streamRef = this.db.ref(this.refRoot + sessionId + '/stream');
    const streamChildAdded = (snapshot) => {
      const event = JSON.parse(snapshot.val()) as AgentFlowStoreEvent<S>;
      callback(event);
    };
    streamRef.on('child_added', streamChildAdded);

    return () => {
      streamRef.off('child_added', streamChildAdded);
    };
  }

  async setMessages(
    sessionId: string,
    thread: string,
    messsages: MessageData[]
  ): Promise<void> {
    await this.db.ref(this.refRoot + sessionId + '/threads').update({
      [thread]: messsages.map((m) => stripUndefinedOptions(m)),
    });
  }

  async appendEvent(
    sessionId: string,
    event: AgentFlowStoreEvent
  ): Promise<void> {
    const streamRef = this.db.ref(this.refRoot + sessionId + '/stream');
    await streamRef.update({
      [Date.now()]: JSON.stringify(event),
    });
  }

  async delete(sessionId: string): Promise<void> {
    await this.db.ref(this.refRoot + sessionId).remove();
  }

  async resetStream(sessionId: string): Promise<void> {
    const streamRef = this.db.ref(this.refRoot + sessionId + '/stream');
    await streamRef.remove();
  }
}

function stripUndefinedOptions(input?: any): any {
  if (!input) return input;
  const copy = { ...input };
  Object.keys(input).forEach((key) => {
    if (copy[key] === undefined) {
      delete copy[key];
    }
  });
  return copy;
}
