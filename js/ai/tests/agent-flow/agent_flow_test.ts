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

import { initNodeFeatures } from '@genkit-ai/core/node';
import { Registry } from '@genkit-ai/core/registry';
import assert from 'assert';
import { beforeEach, describe, it } from 'node:test';
import { defineAgentFlow } from '../../src/agent-flow';
import { inMemorySessionStore } from '../../src/session';
import { defineEchoModel } from '../helpers';

initNodeFeatures();

describe('AgentFlow', () => {
  let registry: Registry;
  beforeEach(() => {
    registry = new Registry();
    registry.registerValue('defaultModel', 'defaultModel', 'echoModel');
    defineEchoModel(registry);
  });

  describe('client-managed', () => {
    it('can send to a new agent flow', async () => {
      const testFlow = defineAgentFlow(registry, { name: 'testFlow' });
      const response = await testFlow({
        send: {
          prompt: [{ text: 'hi' }],
        },
      });

      assert.ok(response.sessionId);
      delete (response as any).sessionId;
      assert.deepStrictEqual(response, {
        messages: [
          {
            content: [{ text: 'hi' }],
            role: 'user',
          },
          {
            content: [{ text: 'Echo: hi' }, { text: '; config: {}' }],
            role: 'model',
          },
        ],
        state: undefined,
      });
    });

    it('can send to agent flow with history', async () => {
      const testFlow = defineAgentFlow(registry, { name: 'testFlow' });
      const response = await testFlow({
        send: {
          prompt: [{ text: 'hi again' }],
          clientState: {
            history: [
              { role: 'user', content: [{ text: 'hi' }] },
              { role: 'model', content: [{ text: 'bye' }] },
            ],
          },
        },
      });

      assert.ok(response.sessionId);
      delete (response as any).sessionId;
      assert.deepStrictEqual(response, {
        messages: [
          {
            content: [{ text: 'hi' }],
            role: 'user',
          },
          {
            content: [{ text: 'bye' }],
            role: 'model',
          },
          {
            content: [
              {
                text: 'hi again',
              },
            ],
            role: 'user',
          },
          {
            content: [
              { text: 'Echo: hi,bye,hi again' },
              { text: '; config: {}' },
            ],
            role: 'model',
          },
        ],
        state: undefined,
      });
    });
  });

  describe('server-managed', () => {
    it('can send to a basic in memory agent flow', async () => {
      const testFlow = defineAgentFlow(registry, {
        name: 'testFlow',
        store: inMemorySessionStore(),
      });
      const response = await testFlow({
        send: {
          prompt: [{ text: 'hi' }],
        },
      });

      assert.ok(response.sessionId);
      delete (response as any).sessionId;
      assert.deepStrictEqual(response, {
        state: undefined,
        messages: [
          {
            content: [{ text: 'hi' }],
            role: 'user',
          },
          {
            content: [{ text: 'Echo: hi' }, { text: '; config: {}' }],
            role: 'model',
          },
        ],
      });
    });
  });
});
