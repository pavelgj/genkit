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
import { gablorkenTool } from './generate.js';
import { ai } from './genkit.js';

export const rtdbStore = rtdbSessionStore({
  db: getDatabaseWithUrl(
    'https://pavelj-genkit-test1-default-rtdb.firebaseio.com/'
  ),
  refPrefix: 'simpleChatFlow',
});

export const slowChatFlow = ai.defineAgentFlow({
  name: 'slowChatFlow',
  store: rtdbStore,
  async run({ session, message, sendChunk }) {
    const maxSeconds = 10;
    for (let i = 0; i < maxSeconds; i++) {
      await session.updateState({
        status: `step 1/2... eta ${maxSeconds - i}`,
      });
      await new Promise((r) => setTimeout(r, 1000));
    }
    await session.updateState({
      status: `done`,
    });
    session.chat().send({
      prompt: [
        {
          text: 'analyze the following request. Do NOT response, just analyze, see how it can be answered:\n\n',
        },
        ...message.content,
      ],
      tools: [gablorkenTool],
      onChunk: sendChunk,
    });
    for (let i = 0; i < maxSeconds; i++) {
      await session.updateState({
        status: `step 2/2... eta ${maxSeconds - i}`,
      });
      await new Promise((r) => setTimeout(r, 1000));
    }
    await session.updateState({
      status: `done`,
    });
    return session.chat().send({
      prompt: 'now reppond',
      tools: [gablorkenTool],
      onChunk: sendChunk,
    });
  },
});
