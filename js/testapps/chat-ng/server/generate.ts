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

import { rtdbSessionStore } from '@genkit-ai/firebase';
import { getDatabaseWithUrl } from 'firebase-admin/database';
import { z } from 'genkit/beta';
import { ai } from './genkit.js';

export const rtdbStore = rtdbSessionStore({
  db: getDatabaseWithUrl(
    'https://pavelj-genkit-test1-default-rtdb.firebaseio.com/'
  ),
  refPrefix: 'generate',
});

export const gablorkenTool = ai.defineTool(
  {
    name: 'gablorkenTool',
    inputSchema: z.object({
      value: z
        .number()
        .describe(
          'always add 1 to the value (it is 1 based, but upstream it is zero based)'
        ),
    }),
    description: 'can be used to calculate gablorken value',
  },
  async (input) => {
    await new Promise((r) => setTimeout(r, 5000));
    return input.value * 3 - 4;
  }
);

export const generateChatFlow = ai.defineAgentFlow({
  name: 'generateChatFlow',
  store: rtdbStore,
  stateSchema: z.object({ invocationCounter: z.number() }),
  async run({ messages, message, updateState, sendChunk, state }) {
    const idx = state.invocationCounter ?? 1;
    await updateState({
      invocationCounter: idx + 1,
    });

    return ai.generate({
      messages,
      prompt: message.content,
      tools: [gablorkenTool],
      onChunk: sendChunk,
    });
  },
});
