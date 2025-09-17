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

import { z } from '@genkit-ai/core';
import {
  GenerateResponseChunkSchema,
  MessageData,
  MessageSchema,
  PartSchema,
} from '../model-types.js';

export const ClientStateSchema = z.object({
  messages: z.array(MessageSchema).optional(),
  state: z.record(z.string(), z.any()).optional(),
});

export interface ClientState<State> {
  messages?: MessageData[];
  state?: State;
}

export const AgentFlowStatus = z.object({
  running: z.boolean().optional(),
});

// This schema matches SessionEvent interface.
export const AgentFlowEventSchema = z.object({
  status: AgentFlowStatus.optional(),
  statePatch: z.record(z.string(), z.any()).optional(),
  chunk: GenerateResponseChunkSchema.optional(),
  messages: z.array(MessageSchema).optional(),
});
export type AgentFlowEvent = z.infer<typeof AgentFlowEventSchema>;

export const AgentFlowInputSchema = z.object({
  send: z
    .object({
      sessionId: z.string().optional(),
      clientState: ClientStateSchema.optional(),
      prompt: z.array(PartSchema),
    })
    .optional(),
  state: z.object({ sessionId: z.string() }).optional(),
  abort: z.object({ sessionId: z.string() }).optional(),
  reconnect: z
    .object({ sessionId: z.string(), after: z.string().optional() })
    .optional(),
});

export type AgentFlowInput = z.infer<typeof AgentFlowInputSchema>;

export const AgentFlowOutputSchema = z.object({
  sessionId: z.string(),
  state: z.record(z.string(), z.any()).optional(),
  messages: z.array(MessageSchema).optional(),
  status: AgentFlowStatus.optional(),
});
export type AgentFlowOutput = z.infer<typeof AgentFlowOutputSchema>;
