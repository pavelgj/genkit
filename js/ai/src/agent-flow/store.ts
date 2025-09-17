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

import { GenerateResponseChunkData, MessageData } from '../model-types.js';
import { SessionData, SessionEvent, SessionStore } from '../session.js';

export interface AgentFlowStatus {
  running: boolean;
}

export interface AgentFlowSessionData<S = any> extends SessionData<S> {
  status?: AgentFlowStatus;
}

export interface AgentFlowStoreEvent<S = any> extends SessionEvent<S> {
  chunk?: GenerateResponseChunkData;
  status?: AgentFlowStatus;
}

export type AgentFlowStoreUnsubscribe = () => void;

/** Session store persists session data such as state and chat messages. */
export interface AgentFlowStore<S = any> extends SessionStore {
  get(sessionId: string): Promise<AgentFlowSessionData<S> | undefined>;

  resetStream(sessionId: string): Promise<void>;

  setStatus(sessionId: string, data: AgentFlowStatus): Promise<void>;

  appendEvent(sessionId: string, update: AgentFlowStoreEvent<S>): Promise<void>;

  subscribe(
    sessionId: string,
    callback: (update: AgentFlowStoreEvent<S>) => void,
    opts?: {
      after?: string;
    }
  ): AgentFlowStoreUnsubscribe;

  delete(sessionId: string): Promise<void>;
}

export type SessionStoreSubscription<S> = (
  update: AgentFlowStoreEvent<S>
) => void;

export class InMemoryAgentFlowStore<S = any> implements AgentFlowStore<S> {
  private __subscriptions: Record<string, SessionStoreSubscription<S>[]> = {};
  private __data: Record<string, AgentFlowSessionData<S>> = {};

  async get(sessionId: string): Promise<AgentFlowSessionData<S> | undefined> {
    return this.__data[sessionId];
  }

  async setStatus(sessionId: string, data: AgentFlowStatus): Promise<void> {
    this.maybeInitSession(sessionId);
    this.__data[sessionId].status = data;
  }

  async patchState(sessionId: string, data: Partial<S>): Promise<void> {
    this.maybeInitSession(sessionId);
    this.__data[sessionId].state = {
      ...this.__data[sessionId].state,
      ...data,
    };
  }

  async setMessages(
    sessionId: string,
    thread: string,
    messsages: MessageData[]
  ): Promise<void> {
    this.maybeInitSession(sessionId);
    this.__data[sessionId].threads[thread] = messsages;
  }

  private maybeInitSession(sessionId: string) {
    if (!this.__data[sessionId]) {
      this.__data[sessionId] = {
        state: {} as S,
        threads: {},
        status: {
          running: false,
        },
      };
    }
  }

  async appendEvent(
    sessionId: string,
    event: AgentFlowStoreEvent
  ): Promise<void> {
    if (this.__subscriptions[sessionId]) {
      for (const subscr of this.__subscriptions[sessionId]) {
        subscr(event);
      }
    }
  }

  subscribe(
    sessionId: string,
    callback: SessionStoreSubscription<S>,
    opts?: {
      after?: string;
    }
  ): AgentFlowStoreUnsubscribe {
    if (!this.__subscriptions[sessionId]) {
      this.__subscriptions[sessionId] = [];
    }
    const index = this.__subscriptions[sessionId].length;

    this.__subscriptions[sessionId].push(callback);
    return () => {
      if (this.__subscriptions[sessionId]) {
        this.__subscriptions[sessionId].splice(index, 1);
      }
    };
  }

  async delete(sessionId: string): Promise<void> {
    delete this.__data[sessionId];
    delete this.__subscriptions[sessionId];
  }

  async resetStream(sessionId: string): Promise<void> {
    // no op
  }
}
