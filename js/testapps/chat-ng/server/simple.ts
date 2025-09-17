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
import { ai } from './genkit.js';

export const rtdbStore = rtdbSessionStore({
  db: getDatabaseWithUrl(
    'https://pavelj-genkit-test1-default-rtdb.firebaseio.com/'
  ),
  refPrefix: 'simpleChatFlow',
});

let idx = 1;

export const simpleChatFlow = ai.defineAgentFlow({
  name: 'simpleChatFlow',
  store: rtdbStore,
  async run({ session, message, state }) {
    await session.updateState({
      [`foo-${++idx}`]: `bar - ${idx}`,
      invocationCounter: state.invocationCounter ?? 0 + 1,
    });
    return session.chat().send(message.content);
  },
});
