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

// End to end in one process: a gateway (fake model) and a "boxed" genkit
// using the modelGateway plugin, talking over real HTTP.

import * as assert from 'assert';
import express from 'express';
import { genkit, type GenerateRequestData } from 'genkit';
import type { Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { after, before, beforeEach, describe, it } from 'node:test';
import { modelGateway } from '../src/model-gateway/client.js';
import { Parker } from '../src/model-gateway/parker.js';
import { MODEL_GATEWAY_CONTEXT_KEY } from '../src/model-gateway/protocol.js';
import { modelGatewayServer } from '../src/model-gateway/server.js';
import {
  mintCallerToken,
  verifyCallerToken,
} from '../src/model-gateway/token.js';
import { ACTOR, FakeControl, SECRET, tick } from './model-gateway-fakes.js';

describe('caller tokens', () => {
  it('round-trips the actor ref', () => {
    const claims = verifyCallerToken(SECRET, mintCallerToken(SECRET, ACTOR));
    assert.deepStrictEqual(
      { atespace: claims?.atespace, name: claims?.name },
      ACTOR
    );
  });

  it('rejects forged, tampered, truncated and expired tokens', () => {
    const token = mintCallerToken(SECRET, ACTOR);
    const [body, sig] = token.split('.');
    const otherBody = Buffer.from(
      JSON.stringify({ ...ACTOR, name: 'box-2', exp: Date.now() + 1e6 })
    ).toString('base64url');
    for (const bad of [
      mintCallerToken('other-secret', ACTOR),
      `${otherBody}.${sig}`,
      body,
      mintCallerToken(SECRET, ACTOR, -1),
    ]) {
      assert.strictEqual(verifyCallerToken(SECRET, bad), undefined, bad);
    }
  });
});

describe('model gateway (client + server)', () => {
  let server: Server;
  let control: FakeControl;
  let modelDelayMs = 0;
  let modelCalls = 0;
  /** Drops the next N status polls mid-request, as a pause would. */
  let dropPolls = 0;
  let gatewayUrl = '';

  before(async () => {
    // Gateway side: the "real" model.
    const gwAi = genkit({});
    gwAi.defineModel(
      { apiVersion: 'v2', name: 'fake/echo', supports: { multiturn: true } },
      async (req: GenerateRequestData, { sendChunk }) => {
        modelCalls++;
        await tick(modelDelayMs);
        const text = `echo: ${req.messages.at(-1)?.content[0]?.text ?? ''}`;
        sendChunk({ content: [{ text: 'echo: ' }] });
        return {
          message: { role: 'model', content: [{ text }] },
          finishReason: 'stop',
        };
      }
    );
    control = new FakeControl();
    const gateway = modelGatewayServer(gwAi, {
      secret: SECRET,
      parker: new Parker({ control, pauseAfterMs: 50 }),
      allowModels: ['fake/echo'],
    });
    const app = express();
    app.use((req, res, next) => {
      if (req.method === 'GET' && dropPolls > 0) {
        dropPolls--;
        req.socket.destroy();
        return;
      }
      next();
    });
    app.use(gateway.router);
    server = app.listen(0);
    await new Promise((r) => server.once('listening', r));
    gatewayUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  });

  after(() => new Promise((r) => server.close(r)));

  beforeEach(() => {
    control.calls.length = 0;
    modelDelayMs = 0;
    modelCalls = 0;
    dropPolls = 0;
  });

  const boxedAi = () =>
    genkit({ plugins: [modelGateway({ url: gatewayUrl, pollWaitMs: 200 })] });

  /**
   * Calls the gateway model from inside a flow run with `gw` in its context,
   * the way the boxed agent is: the host passes the context with the call,
   * and genkit propagates it into nested model calls.
   */
  function boxed(gw: { token?: string; park?: boolean }) {
    const ai = boxedAi();
    const flow = ai.defineFlow('turn', async (prompt: string) =>
      ai.generate({ model: 'gateway/fake/echo', prompt })
    );
    return (prompt: string) =>
      flow(prompt, { context: { [MODEL_GATEWAY_CONTEXT_KEY]: gw } });
  }

  const token = () => mintCallerToken(SECRET, ACTOR);

  it('streams foreground calls, and never pauses', async () => {
    const ai = boxedAi();
    const { stream, response } = ai.generateStream({
      model: 'gateway/fake/echo',
      prompt: 'hi',
      context: { [MODEL_GATEWAY_CONTEXT_KEY]: { token: token() } },
    });
    const chunks: string[] = [];
    for await (const c of stream) chunks.push(c.text);
    assert.deepStrictEqual(chunks, ['echo: ']);
    assert.strictEqual((await response).text, 'echo: hi');
    assert.deepStrictEqual(control.calls, []);
  });

  it('parked calls pause the caller while the model runs', async () => {
    modelDelayMs = 300;
    const res = await boxed({ token: token(), park: true })('slow');
    assert.strictEqual(res.text, 'echo: slow');
    await tick(20);
    assert.deepStrictEqual(control.calls, ['pause box-1', 'resume box-1']);
  });

  it('parked calls survive dropped connections without a second model call', async () => {
    modelDelayMs = 300;
    dropPolls = 2;
    const res = await boxed({ token: token(), park: true })('again');
    assert.strictEqual(res.text, 'echo: again');
    assert.strictEqual(modelCalls, 1);
  });

  it('scopes call ids per caller (cloned actors can reuse ids)', async () => {
    modelDelayMs = 50;
    const other = mintCallerToken(SECRET, { atespace: 'demo', name: 'box-2' });
    const put = (tok: string, text: string) =>
      fetch(`${gatewayUrl}/v1/calls/same-id`, {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${tok}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          model: 'fake/echo',
          request: { messages: [{ role: 'user', content: [{ text }] }] },
        }),
      });
    assert.strictEqual((await put(token(), 'from 1')).status, 202);
    assert.strictEqual((await put(other, 'from 2')).status, 202);
    const result = async (tok: string) =>
      (await fetch(`${gatewayUrl}/v1/calls/same-id?waitMs=2000`, {
        headers: { authorization: `Bearer ${tok}` },
      }).then((r) => r.json())) as {
        response?: { message?: { content: Array<{ text?: string }> } };
      };
    assert.strictEqual(
      (await result(token())).response?.message?.content[0]?.text,
      'echo: from 1'
    );
    assert.strictEqual(
      (await result(other)).response?.message?.content[0]?.text,
      'echo: from 2'
    );
  });

  it('rejects calls without a valid caller token', async () => {
    await assert.rejects(boxed({})('x'), /no caller token/);
    await assert.rejects(
      boxed({ token: mintCallerToken('wrong', ACTOR), park: true })('x'),
      /invalid caller token/
    );
    assert.strictEqual(modelCalls, 0);
  });
});
