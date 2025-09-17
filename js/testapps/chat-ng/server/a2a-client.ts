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

// client.ts
import { Message, MessageSendParams } from '@a2a-js/sdk';
import { A2AClient } from '@a2a-js/sdk/client';
import { v4 as uuidv4 } from 'uuid';

async function run() {
  // Create a client pointing to the agent's Agent Card URL.
  const client = await A2AClient.fromCardUrl(
    'http://localhost:4000/.well-known/agent-card.json'
  );

  const sendParams: MessageSendParams = {
    message: {
      messageId: uuidv4(),
      role: 'user',
      parts: [{ kind: 'text', text: 'Hi there!' }],
      kind: 'message',
    },
  };

  const response = await client.sendMessage(sendParams);

  if ('error' in response) {
    console.error('Error:', response.error.message);
  } else {
    const result = response.result as Message;
    console.log(
      'Agent response:',
      result.parts
        .map((part) => (part.kind === 'text' ? part.text : ''))
        .join('')
    );
  }
}

run();
