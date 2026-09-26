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

import * as assert from 'assert';
import { genkit, type GenerateRequestData, type MessageData } from 'genkit';
import { describe, it } from 'node:test';
import {
  defineFakeAgentModel,
  nextResponse,
  parseScript,
} from '../src/model-gateway/fake-model.js';

const user = (text: string): MessageData => ({
  role: 'user',
  content: [{ text }],
});
const toolTurn = (n: number): MessageData[] => [
  {
    role: 'model',
    content: [
      { toolRequest: { name: 'runShell', ref: `step-${n}`, input: {} } },
    ],
  },
  {
    role: 'tool',
    content: [
      { toolResponse: { name: 'runShell', ref: `step-${n}`, output: 'ok' } },
    ],
  },
];
const request = (messages: MessageData[]): GenerateRequestData => ({
  messages,
  tools: [
    {
      name: 'runShell',
      description: 'shell',
      inputSchema: {},
      outputSchema: {},
    },
  ],
});

describe('fake agent model', () => {
  it('reads its script from the first user message, with defaults', () => {
    assert.deepStrictEqual(
      parseScript([user('bench steps=5 modelMs=100 toolMs=20')]),
      { steps: 5, modelMs: 100, toolMs: 20 }
    );
    assert.deepStrictEqual(parseScript([user('hello')]), {
      steps: 3,
      modelMs: 5_000,
      toolMs: 300,
    });
  });

  it('asks for one tool call per step, then answers', () => {
    const first = [user('bench steps=2 toolMs=250')];
    const step1 = nextResponse(request(first)).message?.content[0];
    assert.deepStrictEqual(step1?.toolRequest, {
      name: 'runShell',
      ref: 'step-1',
      input: { cmd: 'sleep 0.250 && echo step 1' },
    });
    const step2 = nextResponse(request([...first, ...toolTurn(1)])).message
      ?.content[0];
    assert.strictEqual(step2?.toolRequest?.ref, 'step-2');
    const final = nextResponse(
      request([...first, ...toolTurn(1), ...toolTurn(2)])
    ).message?.content[0];
    assert.strictEqual(final?.text, 'Done: 2 of 2 steps.');
  });

  it('answers right away when runShell is not offered', () => {
    const res = nextResponse({ messages: [user('bench steps=2')] });
    assert.strictEqual(res.message?.content[0]?.text, 'Done: 0 of 2 steps.');
  });

  it('takes modelMs per call', async () => {
    const ai = genkit({});
    const model = defineFakeAgentModel(ai);
    const started = Date.now();
    const { result } = await model.run(request([user('bench modelMs=80')]));
    assert.ok(Date.now() - started >= 75);
    assert.strictEqual(result.message?.content[0]?.toolRequest?.ref, 'step-1');
  });
});
