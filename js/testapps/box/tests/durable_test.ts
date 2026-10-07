/**
 * Copyright 2026 Google LLC
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
import { z } from 'genkit';
import {
  FileSessionStore,
  InMemorySessionStore,
  genkit,
  type GenkitBeta,
} from 'genkit/beta';
import { randomUUID } from 'node:crypto';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, it } from 'node:test';
import {
  defineDurableAgent,
  type DurableAgent,
  type DurableRun,
} from '../src/durable/index.js';
import { defineScriptModel } from '../src/durable/script-model.js';

const tick = (ms = 0) => new Promise((r) => setTimeout(r, ms));

async function until<T>(
  fn: () => Promise<T | undefined | false> | T | undefined | false,
  timeoutMs = 5_000
): Promise<T> {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const v = await fn();
    if (v) return v;
    if (Date.now() > deadline) throw new Error('until: timed out');
    await tick(10);
  }
}

/** A tool body that blocks on args starting with "gate" until released. */
function gated(
  name: string,
  result: (arg?: string) => string,
  calls: string[],
  gates: Map<string, () => void>
) {
  return async (
    { arg }: { arg?: string },
    { abortSignal }: { abortSignal?: AbortSignal }
  ) => {
    calls.push(`${name}:${arg}`);
    if (arg?.startsWith('gate')) {
      await new Promise<void>((resolve, reject) => {
        gates.set(arg, resolve);
        abortSignal?.addEventListener('abort', () =>
          reject(new Error('aborted'))
        );
      });
    }
    return result(arg);
  };
}

describe('durable agent', () => {
  let ai: GenkitBeta;
  let agent: DurableAgent;
  let calls: string[];
  let gates: Map<string, () => void>;
  const argSchema = z.object({ arg: z.string().optional() });

  beforeEach(() => {
    ai = genkit({});
    calls = [];
    gates = new Map();
    defineScriptModel(ai, { latencyMs: 5 });
    ai.defineTool(
      {
        name: 'slowStep',
        description: 'A step that may take a while (replay-safe).',
        inputSchema: argSchema,
        outputSchema: z.string(),
      },
      gated('slowStep', (a) => `ok:${a}`, calls, gates)
    );
    ai.defineTool(
      {
        name: 'sendEmail',
        description: 'Not safe to repeat.',
        inputSchema: argSchema,
        outputSchema: z.string(),
      },
      gated('sendEmail', (a) => `sent:${a}`, calls, gates)
    );
    ai.defineTool(
      {
        name: 'approve',
        description: 'Needs human approval.',
        inputSchema: argSchema,
        outputSchema: z.string(),
      },
      async ({ arg }, { resumed, interrupt }) => {
        if (!resumed) interrupt({ question: `approve ${arg}?` });
        return `approved:${arg}`;
      }
    );
    agent = defineDurableAgent(ai, {
      name: 'durableTest',
      model: 'durable/script',
      tools: ['slowStep', 'sendEmail', 'approve'],
      store: new InMemorySessionStore(),
      replay: { slowStep: 'safe' },
      leaseMs: 300,
    });
  });

  afterEach(() => agent.durable.engine.stop());

  const inspect = (sessionId: string) => agent.durable.inspect(sessionId);

  it('runs a turn with parallel tool calls as separate effects', async () => {
    const chat = agent.chat();
    const res = await chat.send('plan: slowStep(a), slowStep(b) | slowStep(c)');
    assert.strictEqual(res.finishReason, 'stop');
    assert.match(res.text, /Done after 3 tool call\(s\)/);
    assert.deepStrictEqual(calls.sort(), [
      'slowStep:a',
      'slowStep:b',
      'slowStep:c',
    ]);
    const run = (await inspect(chat.sessionId!)) as DurableRun;
    const names = run.recentTurns.at(-1)!.effects.map((e) => e.name);
    assert.deepStrictEqual(names.sort(), [
      'model',
      'model',
      'model',
      'slowStep',
      'slowStep',
      'slowStep',
    ]);
    // user, model(2 calls), tool, model(1 call), tool, model(answer)
    assert.strictEqual(run.messages.length, 6);
  });

  it('keeps multi-turn history and normal snapshots', async () => {
    const chat = agent.chat();
    await chat.send('plan: slowStep(one)');
    const res = await chat.send('plan: done');
    assert.strictEqual(res.finishReason, 'stop');
    const snap = await agent.getSnapshot({ sessionId: chat.sessionId! });
    assert.strictEqual(snap?.status, 'completed');
    assert.strictEqual(snap?.state?.messages?.length, 6);
  });

  it('streams model chunks', async () => {
    const turn = agent.chat().sendStream('plan: done');
    let text = '';
    for await (const c of turn.stream) text += c.text;
    await turn.response;
    assert.match(text, /Done after 0 tool call/);
  });

  it('steers a running turn: the note joins after the current tools', async () => {
    const sid = randomUUID();
    const chat = agent.chat({ sessionId: sid });
    const pending = chat.send('plan: slowStep(gate1) | done');
    await until(() => gates.get('gate1'));
    await agent.durable.steer(sid, 'note: check staging first');
    gates.get('gate1')!();
    const res = await pending;
    assert.match(res.text, /Noted: note: check staging first/);
    const run = (await inspect(sid)) as DurableRun;
    assert.deepStrictEqual(
      run.messages.map((m) => m.role),
      ['user', 'model', 'tool', 'user', 'model']
    );
  });

  it('interrupts and resumes with restart', async () => {
    const chat = agent.chat();
    const res = await chat.send('plan: approve(deploy), slowStep(x) | done');
    assert.strictEqual(res.finishReason, 'interrupted');
    assert.strictEqual(res.interrupts.length, 1);
    const resumed = await chat.resume({
      restart: [res.interrupts[0].restart()],
    });
    assert.strictEqual(resumed.finishReason, 'stop');
    assert.match(resumed.text, /approve="approved:deploy"/);
    assert.match(resumed.text, /slowStep="ok:x"/);
  });

  it('survives an engine crash: safe tools rerun', async () => {
    const chat = agent.chat();
    const task = await chat.detach('plan: slowStep(gate-crash) | done');
    await until(() => gates.get('gate-crash'));
    agent.durable.crash();
    gates.delete('gate-crash');
    await agent.durable.restart();
    // The restarted engine reclaims the expired lease and reruns slowStep.
    await until(() => gates.get('gate-crash'));
    gates.get('gate-crash')!();
    const snap = await task.wait({ intervalMs: 20 });
    assert.strictEqual(snap.status, 'completed');
    assert.strictEqual(
      calls.filter((c) => c === 'slowStep:gate-crash').length,
      2
    );
    const last = snap.state?.messages?.at(-1);
    assert.match(last?.content[0].text ?? '', /ok:gate-crash/);
  });

  it('survives an engine crash: unsafe tools are abandoned, model is told', async () => {
    const chat = agent.chat();
    const task = await chat.detach('plan: sendEmail(gate-email) | done');
    await until(() => gates.get('gate-email'));
    agent.durable.crash();
    await agent.durable.restart();
    const snap = await task.wait({ intervalMs: 20 });
    assert.strictEqual(snap.status, 'completed');
    // Sent once (before the crash), never repeated.
    assert.deepStrictEqual(
      calls.filter((c) => c.startsWith('sendEmail')),
      ['sendEmail:gate-email']
    );
    const text = snap.state?.messages?.at(-1)?.content[0].text ?? '';
    assert.match(text, /not safe to rerun/);
  });

  it('submissions are exactly-once by requestId', async () => {
    const chat = agent.chat();
    await chat.send('plan: done');
    const sid = chat.sessionId!;
    const opts = { whenBusy: 'queue' as const, requestId: 'job-42' };
    assert.strictEqual(
      await agent.durable.steer(sid, 'plan: slowStep(q)', opts),
      true
    );
    assert.strictEqual(
      await agent.durable.steer(sid, 'plan: slowStep(q)', opts),
      false
    );
    await until(async () => {
      const r = await inspect(sid);
      return !!r && !r.turn && !r.inbox.length && r.turnCount === 2;
    });
    assert.deepStrictEqual(calls, ['slowStep:q']);
    // The queued turn had no facade; the engine wrote its snapshot itself.
    const snap = await until(async () => {
      const s = await agent.getSnapshot({ sessionId: sid });
      return s?.state?.messages?.length === 6 ? s : undefined;
    });
    assert.strictEqual(snap.status, 'completed');
  });

  it('aborts a running turn (foreground)', async () => {
    const sid = randomUUID();
    const chat = agent.chat({ sessionId: sid });
    const pending = chat.send('plan: slowStep(gate-abort) | done');
    await until(() => gates.get('gate-abort'));
    await agent.durable.abort(sid);
    const res = await pending;
    assert.strictEqual(res.finishReason, 'aborted');
    const run = (await inspect(sid)) as DurableRun;
    assert.strictEqual(run.turn, undefined);
    assert.strictEqual(run.recentTurns.at(-1)!.finishReason, 'aborted');
  });

  it('aborts a detached turn through the agent protocol', async () => {
    const chat = agent.chat();
    const task = await chat.detach('plan: slowStep(gate-detached) | done');
    await until(() => gates.get('gate-detached'));
    await task.abort();
    const snap = await task.wait({ intervalMs: 20 });
    assert.strictEqual(snap.status, 'aborted');
    const sid = snap.sessionId!;
    await until(async () => {
      const r = await inspect(sid);
      return r && !r.turn && r.recentTurns.at(-1)?.finishReason === 'aborted';
    });
  });

  it('renews leases: a call longer than the lease is not re-sent', async () => {
    const slow = genkit({});
    defineScriptModel(slow, { name: 'durable/slow', latencyMs: 1_200 });
    const log: string[] = [];
    const a = defineDurableAgent(slow, {
      name: 'slowAgent',
      model: 'durable/slow',
      store: new FileSessionStore(mkdtempSync(join(tmpdir(), 'durable-'))),
      leaseMs: 300,
      log: (m) => log.push(m),
    });
    try {
      const res = await a.chat().send('plan: done');
      assert.strictEqual(res.finishReason, 'stop');
      const run = (await a.durable.inspect(res.sessionId!)) as DurableRun;
      const model = run.recentTurns
        .at(-1)!
        .effects.find((e) => e.kind === 'model');
      assert.strictEqual(model?.attempt, 1);
      assert.deepStrictEqual(
        log.filter((l) => l.startsWith('reclaim')),
        []
      );
    } finally {
      a.durable.engine.stop();
    }
  });

  it('enforces maxTurns', async () => {
    const plan = Array.from({ length: 25 }, (_, i) => `slowStep(${i})`);
    const res = await agent
      .chat()
      .send(`plan: ${plan.join(' | ')}`)
      .catch((e: unknown) => e);
    const message = res instanceof Error ? res.message : String(res);
    assert.match(message, /maximum tool call iterations/);
  });
});
