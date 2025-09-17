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

import type {
  AgentFlowEvent,
  AgentFlowInput,
  AgentFlowOutput,
} from '@genkit-ai/ai/agent-flow';
import type {
  GenerateResponseChunkData,
  GenerateResponseData,
  MessageData,
  Part,
} from '@genkit-ai/ai/model';
import { runFlow, streamFlow, type StreamResponse } from './client.js';

export interface SessionClientOptions {
  url: string;
}

export function defineSessionClient(opts: SessionClientOptions): SessionClient {
  return new SessionClient(opts);
}

export class SessionClient {
  readonly url: string;

  constructor(opts: SessionClientOptions) {
    this.url = opts.url;
  }

  async loadSession(sessionId: string): Promise<Session> {
    const response = await runFlow<AgentFlowOutput>({
      url: this.url,
      input: {
        state: { sessionId },
      },
    });
    return new Session({
      client: this,
      sessionId: response.sessionId,
      initialState: response.state,
      messages: response.messages,
      isRunning: response.status?.running === true,
    });
  }
}

export class Session<S = any> {
  readonly sessionId: string;
  readonly client: SessionClient;
  state: S;
  messages: MessageData[];
  isRunning: boolean = false;

  constructor(opts: {
    sessionId: string;
    client: SessionClient;
    initialState?: S;
    messages?: MessageData[];
    isRunning: boolean;
  }) {
    this.sessionId = opts.sessionId;
    this.client = opts.client;
    this.state = (opts.initialState as S) ?? ({} as S);
    this.isRunning = opts.isRunning;
    this.messages = opts.messages ?? [];
  }

  async send(opts: { prompt: Part[] }): Promise<GenerateResponseData> {
    const response = await runFlow<AgentFlowOutput>({
      url: this.client.url,
      input: {
        send: {
          sessionId: this.sessionId,
          prompt: opts.prompt,
        },
      },
    });
    if (response.messages) {
      this.messages = response.messages;
    }
    if (response.state) {
      this.state = response.state as S;
    }
    return {
      message: this.messages.at(-1),
    };
  }

  sendStream(opts: {
    prompt: Part[];
  }): StreamResponse<GenerateResponseData, GenerateResponseChunkData> {
    const { output, stream } = streamFlow<AgentFlowOutput, AgentFlowEvent>({
      url: this.client.url,
      input: {
        send: {
          sessionId: this.sessionId,
          prompt: opts.prompt,
        },
      } as AgentFlowInput,
    });
    return {
      output: output.then((response) => {
        if (response.messages) {
          this.messages = response.messages;
        }
        if (response.state) {
          this.state = response.state as S;
        }
        return {
          message: this.messages.at(-1),
        };
      }),
      stream: this.extractChunks(stream),
    };
  }

  reconnect(): StreamResponse<GenerateResponseData, GenerateResponseChunkData> {
    const { output, stream } = streamFlow<AgentFlowOutput, AgentFlowEvent>({
      url: this.client.url,
      input: {
        reconnect: {
          sessionId: this.sessionId,
        },
      } as AgentFlowInput,
    });
    return {
      output: output.then((response) => {
        if (response.messages) {
          this.messages = response.messages;
        }
        if (response.state) {
          this.state = response.state as S;
        }
        return {
          message: this.messages.at(-1),
        };
      }),
      stream: this.extractChunks(stream),
    };
  }

  private async *extractChunks(eventStream: AsyncIterable<AgentFlowEvent>) {
    for await (const event of eventStream) {
      if (event.chunk) yield event.chunk;
      if (event.status) {
        this.isRunning = event.status.running === true;
      }
      if (event.statePatch) {
        this.state = {
          ...this.state,
          ...event.statePatch,
        };
      }
      if (event.messages) {
        this.messages = event.messages;
      }
    }
  }
}
