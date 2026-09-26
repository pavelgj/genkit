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
import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { after, before, beforeEach, describe, it } from 'node:test';
import {
  SubstrateApiError,
  substrateActorName,
  substrateRunner,
  type SubstrateActor,
  type SubstrateActorState,
  type SubstrateControl,
  type SubstrateEgressRule,
  type SubstrateRef,
} from '../src/runners/substrate/index.js';

const TEMPLATE = { atespace: 'genkit-box', name: 'tools' };
const key = (r: SubstrateRef) => `${r.atespace}/${r.name}`;

/**
 * An in-memory ate-api with substrate's state machine: resume is idempotent
 * for RUNNING, suspend for SUSPENDED, pause requires RUNNING, delete needs
 * anyState unless suspended. Every call is logged for assertions.
 */
class FakeControl implements SubstrateControl {
  readonly actors = new Map<string, SubstrateActorState>();
  readonly egress = new Map<string, SubstrateEgressRule[]>();
  readonly calls: string[] = [];
  /** Errors to throw from the next call(s) of a method, in order. */
  readonly failNext = new Map<string, SubstrateApiError[]>();
  /** Artificial latency for lifecycle RPCs. */
  delayMs = 0;

  private async step(method: string, ref: SubstrateRef) {
    this.calls.push(`${method} ${ref.name}`);
    if (this.delayMs) await new Promise((r) => setTimeout(r, this.delayMs));
    const queued = this.failNext.get(method);
    const err = queued?.shift();
    if (err) throw err;
  }

  private actor(ref: SubstrateRef): SubstrateActor {
    return {
      metadata: { atespace: ref.atespace, name: ref.name },
      actorTemplate: TEMPLATE,
      status: { state: this.actors.get(key(ref)) },
    };
  }

  private must(ref: SubstrateRef): SubstrateActorState {
    const state = this.actors.get(key(ref));
    if (!state)
      throw new SubstrateApiError('NOT_FOUND', `${key(ref)} not found`);
    return state;
  }

  async getActor(ref: SubstrateRef) {
    await this.step('get', ref);
    this.must(ref);
    return this.actor(ref);
  }

  async createActor(ref: SubstrateRef, template: SubstrateRef) {
    await this.step('create', ref);
    assert.deepStrictEqual(template, TEMPLATE);
    if (this.actors.has(key(ref))) {
      throw new SubstrateApiError('ALREADY_EXISTS', 'exists');
    }
    this.actors.set(key(ref), 'ACTOR_STATE_SUSPENDED');
    return this.actor(ref);
  }

  async createEgressPolicy(ref: SubstrateRef, rules: SubstrateEgressRule[]) {
    await this.step('egress', ref);
    this.egress.set(key(ref), rules);
  }

  async resumeActor(ref: SubstrateRef) {
    await this.step('resume', ref);
    const s = this.must(ref);
    if (s === 'ACTOR_STATE_CRASHED') {
      throw new SubstrateApiError('FAILED_PRECONDITION', 'crashed');
    }
    this.actors.set(key(ref), 'ACTOR_STATE_RUNNING');
    return this.actor(ref);
  }

  async suspendActor(ref: SubstrateRef) {
    await this.step('suspend', ref);
    const s = this.must(ref);
    if (
      s !== 'ACTOR_STATE_SUSPENDED' &&
      s !== 'ACTOR_STATE_RUNNING' &&
      s !== 'ACTOR_STATE_PAUSED'
    ) {
      throw new SubstrateApiError('FAILED_PRECONDITION', `suspend from ${s}`);
    }
    this.actors.set(key(ref), 'ACTOR_STATE_SUSPENDED');
    return this.actor(ref);
  }

  async pauseActor(ref: SubstrateRef) {
    await this.step('pause', ref);
    if (this.must(ref) !== 'ACTOR_STATE_RUNNING') {
      throw new SubstrateApiError('FAILED_PRECONDITION', 'not running');
    }
    this.actors.set(key(ref), 'ACTOR_STATE_PAUSED');
    return this.actor(ref);
  }

  async revertActor(ref: SubstrateRef) {
    await this.step('revert', ref);
    this.must(ref);
    this.actors.set(key(ref), 'ACTOR_STATE_SUSPENDED');
    return this.actor(ref);
  }

  async deleteActor(ref: SubstrateRef, opts?: { anyState?: boolean }) {
    await this.step('delete', ref);
    const s = this.must(ref);
    if (s !== 'ACTOR_STATE_SUSPENDED' && !opts?.anyState) {
      throw new SubstrateApiError('FAILED_PRECONDITION', 'not suspended');
    }
    this.actors.delete(key(ref));
  }

  async listActors(atespace: string) {
    this.calls.push(`list ${atespace}`);
    return [...this.actors.keys()]
      .filter((k) => k.startsWith(`${atespace}/`))
      .map((k) => this.actor({ atespace, name: k.slice(atespace.length + 1) }));
  }

  closed = false;
  close() {
    this.closed = true;
  }

  count(prefix: string): number {
    return this.calls.filter((c) => c.startsWith(`${prefix} `)).length;
  }
}

/**
 * Stands in for atenet-router + a boxed reflection server. Requests must name
 * a RUNNING actor in `ate-target-actor` (the runner's job is to guarantee
 * that); `/api/runAction` echoes which actor served it. A `hold` flow blocks
 * until released, to test in-flight tracking.
 */
class FakeRouter {
  private server!: Server;
  url = '';
  readonly served: string[] = [];
  private releaseHold?: () => void;

  constructor(private readonly control: FakeControl) {}

  async start() {
    this.server = createServer((req, res) => {
      const target = String(req.headers['ate-target-actor'] ?? '');
      if (this.control.actors.get(target) !== 'ACTOR_STATE_RUNNING') {
        res.writeHead(503).end(`actor ${target} not running`);
        return;
      }
      let body = '';
      req.on('data', (d) => (body += d));
      req.on('end', async () => {
        if (req.url?.startsWith('/api/__health')) return res.end('OK');
        if (req.url?.startsWith('/api/actions')) {
          return res.end(JSON.stringify({ '/tool/t': { name: 't' } }));
        }
        const { key: actionKey } = JSON.parse(body) as { key: string };
        this.served.push(target);
        if (actionKey === '/flow/hold') {
          await new Promise<void>((r) => (this.releaseHold = r));
        }
        res.setHeader('x-genkit-trace-id', 'trace-1');
        res.end(JSON.stringify({ result: { servedBy: target } }));
      });
    });
    await new Promise<void>((r) => this.server.listen(0, '127.0.0.1', r));
    this.url = `http://127.0.0.1:${(this.server.address() as AddressInfo).port}`;
  }

  release() {
    this.releaseHold?.();
  }

  async stop() {
    await new Promise<void>((r) => this.server.close(() => r()));
  }
}

const tick = (ms = 20) => new Promise((r) => setTimeout(r, ms));

describe('substrateRunner', () => {
  let control: FakeControl;
  let router: FakeRouter;

  before(async () => {
    control = new FakeControl();
    router = new FakeRouter(control);
    await router.start();
  });

  after(async () => {
    await router.stop();
  });

  beforeEach(() => {
    control.actors.clear();
    control.egress.clear();
    control.calls.length = 0;
    control.failNext.clear();
    control.delayMs = 0;
    router.served.length = 0;
  });

  type Opts = Omit<Parameters<typeof substrateRunner>[0], 'control' | 'api'>;
  const make = (opts: Partial<Opts> = {}) =>
    substrateRunner({
      control,
      routerUrl: router.url,
      template: 'genkit-box/tools',
      // Covered by its own test; keeps call logs short elsewhere.
      reclaimStale: false,
      ...opts,
    });

  it('derives stable, template-scoped DNS-label actor names', () => {
    const a = substrateActorName('genkit-box', TEMPLATE, 'session-1');
    assert.match(a, /^genkit-box-[0-9a-f]{20}$/);
    assert.strictEqual(
      a,
      substrateActorName('genkit-box', TEMPLATE, 'session-1')
    );
    assert.notStrictEqual(
      a,
      substrateActorName('genkit-box', TEMPLATE, 'session-2')
    );
    assert.notStrictEqual(
      a,
      substrateActorName(
        'genkit-box',
        { ...TEMPLATE, name: 'tools-v2' },
        'session-1'
      )
    );
  });

  it('validates options', () => {
    assert.throws(() => make({ template: 'no-slash' }), /<atespace>\/<name>/);
    assert.throws(() => make({ namePrefix: 'Bad_Prefix' }), /DNS label/);
  });

  it('creates the actor on first use, then routes calls to it', async () => {
    const runner = make();
    const conn = await runner.acquire('k1');
    const name = runner.actorFor('k1').name;
    assert.deepStrictEqual(control.calls, [
      `resume ${name}`,
      `create ${name}`,
      `resume ${name}`,
    ]);
    const res = await conn.runAction<{ servedBy: string }>({ key: '/tool/t' });
    assert.strictEqual(res.result?.servedBy, `genkit-box/${name}`);
    assert.strictEqual(res.telemetry?.traceId, 'trace-1');
    assert.ok((await conn.listActions())['/tool/t']);
    // Known running: no further lifecycle RPCs.
    assert.strictEqual(control.count('resume'), 2);
    await runner.close();
  });

  it('applies the egress policy to newly created actors only', async () => {
    const egress: SubstrateEgressRule[] = [{ hostnames: ['api.example.com'] }];
    const runner = make({ egress });
    await runner.acquire('k1');
    const ref = runner.actorFor('k1');
    assert.deepStrictEqual(control.egress.get(key(ref)), egress);
    await runner.close();

    // An existing actor keeps whatever policy it has.
    control.actors.set(key(ref), 'ACTOR_STATE_SUSPENDED');
    control.egress.clear();
    const again = make({ egress, onBoxClose: 'leave' });
    await again.acquire('k1');
    assert.strictEqual(control.egress.size, 0);
    await again.close();
  });

  it('maps route keys to distinct actors, and boxId scopes them', async () => {
    const runner = make();
    assert.notStrictEqual(runner.actorFor('a').name, runner.actorFor('b').name);
    const scoped = make();
    scoped.boxId = 'box:1';
    assert.notStrictEqual(scoped.actorFor('a').name, runner.actorFor('a').name);
  });

  describe('whenIdle', () => {
    const stateOf = (r: SubstrateRef) => control.actors.get(key(r));

    it("'keep' leaves the actor running between calls", async () => {
      const runner = make();
      const conn = await runner.acquire('k');
      await conn.runAction({ key: '/tool/t' });
      await tick();
      assert.strictEqual(stateOf(runner.actorFor('k')), 'ACTOR_STATE_RUNNING');
      assert.strictEqual(control.count('suspend'), 0);
      await runner.close();
    });

    it("'suspend' frees the worker when the call ends, resumes on the next", async () => {
      const runner = make({ whenIdle: 'suspend' });
      const ref = runner.actorFor('k');
      const conn = await runner.acquire('k');
      await conn.runAction({ key: '/tool/t' });
      await tick();
      assert.strictEqual(stateOf(ref), 'ACTOR_STATE_SUSPENDED');

      // Same connection, next turn: resumes transparently.
      const res = await conn.runAction<{ servedBy: string }>({
        key: '/tool/t',
      });
      assert.strictEqual(res.result?.servedBy, key(ref));
      await tick();
      assert.strictEqual(stateOf(ref), 'ACTOR_STATE_SUSPENDED');
      assert.strictEqual(control.count('suspend'), 2);
      await runner.close();
    });

    it("'pause' takes a node-local snapshot instead", async () => {
      const runner = make({ whenIdle: 'pause' });
      const conn = await runner.acquire('k');
      await conn.runAction({ key: '/tool/t' });
      await tick();
      assert.strictEqual(stateOf(runner.actorFor('k')), 'ACTOR_STATE_PAUSED');
      assert.strictEqual(control.count('suspend'), 0);
      await runner.close();
    });

    it('waits for every concurrent call to finish', async () => {
      const runner = make({ whenIdle: 'suspend' });
      const ref = runner.actorFor('k');
      const conn = await runner.acquire('k');
      const long = conn.runAction({ key: '/flow/hold' });
      await tick();
      await conn.runAction({ key: '/tool/t' });
      await tick();
      // The short call ended, but the long one still holds the actor.
      assert.strictEqual(stateOf(ref), 'ACTOR_STATE_RUNNING');
      router.release();
      await long;
      await tick();
      assert.strictEqual(stateOf(ref), 'ACTOR_STATE_SUSPENDED');
      assert.strictEqual(control.count('suspend'), 1);
      await runner.close();
    });

    it('idleGraceMs absorbs back-to-back calls', async () => {
      const runner = make({ whenIdle: 'suspend', idleGraceMs: 80 });
      const conn = await runner.acquire('k');
      for (let i = 0; i < 3; i++) {
        await conn.runAction({ key: '/tool/t' });
        await tick(10);
      }
      assert.strictEqual(control.count('suspend'), 0);
      await tick(150);
      assert.strictEqual(
        stateOf(runner.actorFor('k')),
        'ACTOR_STATE_SUSPENDED'
      );
      assert.strictEqual(control.count('suspend'), 1);
      await runner.close();
    });

    it('a call arriving mid-snapshot waits for it, then resumes', async () => {
      const runner = make({ whenIdle: 'suspend' });
      const ref = runner.actorFor('k');
      const conn = await runner.acquire('k');
      control.delayMs = 50;
      await conn.runAction({ key: '/tool/t' });
      await tick(5); // the idle suspend is now in flight
      const res = await conn.runAction<{ servedBy: string }>({
        key: '/tool/t',
      });
      assert.strictEqual(res.result?.servedBy, key(ref));
      const s = control.calls.lastIndexOf(`suspend ${ref.name}`);
      assert.ok(
        s >= 0 && control.calls.indexOf(`resume ${ref.name}`, s) > s,
        `expected resume after suspend: ${control.calls.join(', ')}`
      );
      await runner.close();
    });

    it('treats a failed-precondition snapshot as nothing to free', async () => {
      const runner = make({ whenIdle: 'suspend' });
      const ref = runner.actorFor('k');
      const conn = await runner.acquire('k');
      control.failNext.set('suspend', [
        new SubstrateApiError('FAILED_PRECONDITION', 'crashed meanwhile'),
      ]);
      await conn.runAction({ key: '/tool/t' });
      await tick();
      // No unhandled rejection; the next call re-checks and resumes.
      const res = await conn.runAction<{ servedBy: string }>({
        key: '/tool/t',
      });
      assert.strictEqual(res.result?.servedBy, key(ref));
      await runner.close();
    });
  });

  describe('resilience', () => {
    it('retries transient control-plane errors while starting', async () => {
      const runner = make();
      control.actors.set(key(runner.actorFor('k')), 'ACTOR_STATE_SUSPENDED');
      control.failNext.set('resume', [
        new SubstrateApiError('RESOURCE_EXHAUSTED', 'no free workers'),
        new SubstrateApiError('ABORTED', 'another operation is in progress'),
      ]);
      const conn = await runner.acquire('k');
      await conn.runAction({ key: '/tool/t' });
      assert.strictEqual(control.count('resume'), 3);
      await runner.close();
    });

    it('names the template when it does not exist', async () => {
      const runner = make();
      control.failNext.set('create', [
        new SubstrateApiError(
          'FAILED_PRECONDITION',
          'actor template not found'
        ),
      ]);
      await assert.rejects(runner.acquire('k'), (e: Error) => {
        assert.match(e.message, /actor template .* does not exist/);
        assert.ok(e.message.includes(`${TEMPLATE.atespace}/${TEMPLATE.name}`));
        return true;
      });
      await runner.close();
    });

    it('reverts a crashed actor to its last snapshot', async () => {
      const runner = make();
      const ref = runner.actorFor('k');
      control.actors.set(key(ref), 'ACTOR_STATE_CRASHED');
      const conn = await runner.acquire('k');
      await conn.runAction({ key: '/tool/t' });
      assert.ok(control.calls.includes(`revert ${ref.name}`));
      await runner.close();
    });

    it('re-checks the actor after a failed call', async () => {
      const runner = make();
      const ref = runner.actorFor('k');
      const conn = await runner.acquire('k');
      // Suspended behind the runner's back (another host, kubectl ate, ...).
      control.actors.set(key(ref), 'ACTOR_STATE_SUSPENDED');
      await assert.rejects(conn.runAction({ key: '/tool/t' }), /503/);
      const res = await conn.runAction<{ servedBy: string }>({
        key: '/tool/t',
      });
      assert.strictEqual(res.result?.servedBy, key(ref));
      await runner.close();
    });

    it('fails fast when ate-api is unreachable', async () => {
      const runner = make();
      control.failNext.set('resume', [
        new SubstrateApiError(
          'UNAVAILABLE',
          'No connection established. Last error: connect ECONNREFUSED 127.0.0.1:8443'
        ),
      ]);
      await assert.rejects(runner.acquire('k'), /ECONNREFUSED/);
      assert.strictEqual(control.count('resume'), 1);
      await runner.close();
    });

    it('gives up on non-retryable errors', async () => {
      const runner = make();
      control.failNext.set('resume', [
        new SubstrateApiError('PERMISSION_DENIED', 'nope'),
      ]);
      await assert.rejects(runner.acquire('k'), /nope/);
      await runner.close();
    });

    it('honors the caller abort signal while starting', async () => {
      const runner = make({ readyTimeoutMs: 10_000 });
      control.actors.set(key(runner.actorFor('k')), 'ACTOR_STATE_SUSPENDED');
      control.failNext.set(
        'resume',
        Array.from(
          { length: 50 },
          () => new SubstrateApiError('UNAVAILABLE', 'blip')
        )
      );
      const ac = new AbortController();
      setTimeout(() => ac.abort(), 150);
      await assert.rejects(runner.acquire('k', ac.signal), /Aborted/);
      await runner.close();
    });

    it('times out with the last error when the actor never comes up', async () => {
      const runner = make({ readyTimeoutMs: 300 });
      control.actors.set(key(runner.actorFor('k')), 'ACTOR_STATE_SUSPENDED');
      control.failNext.set(
        'resume',
        Array.from(
          { length: 50 },
          () => new SubstrateApiError('RESOURCE_EXHAUSTED', 'no free workers')
        )
      );
      await assert.rejects(runner.acquire('k'), /Timed out.*no free workers/);
      await runner.close();
    });

    it('reclaims stale RUNNING actors with its prefix on first use', async () => {
      const stale = `genkit-box-${'a'.repeat(20)}`;
      const foreign = `other-app-${'b'.repeat(20)}`;
      const unrelated = 'my-counter-1';
      for (const name of [stale, foreign, unrelated]) {
        control.actors.set(`genkit-box/${name}`, 'ACTOR_STATE_RUNNING');
      }
      const runner = make({ reclaimStale: true });
      await Promise.all([runner.acquire('k1'), runner.acquire('k2')]);
      assert.strictEqual(
        control.actors.get(`genkit-box/${stale}`),
        'ACTOR_STATE_SUSPENDED'
      );
      assert.strictEqual(
        control.actors.get(`genkit-box/${foreign}`),
        'ACTOR_STATE_RUNNING'
      );
      assert.strictEqual(
        control.actors.get(`genkit-box/${unrelated}`),
        'ACTOR_STATE_RUNNING'
      );
      // Only once per runner, not per acquire.
      assert.strictEqual(control.count('list'), 1);
      await runner.close();
    });

    it('serializes concurrent first acquires into one create', async () => {
      const runner = make();
      control.delayMs = 10;
      await Promise.all([
        runner.acquire('k'),
        runner.acquire('k'),
        runner.acquire('k'),
      ]);
      assert.strictEqual(control.count('create'), 1);
      await runner.close();
    });
  });

  describe('hold()', () => {
    it('keeps whenIdle off the box until released', async () => {
      const runner = make({ whenIdle: 'suspend' });
      const conn = await runner.acquire('k');
      const release = runner.hold('k');
      await conn.runAction({ key: '/flow/echo', input: 'x' });
      await tick(50);
      assert.ok(
        !control.calls.includes(`suspend ${runner.actorFor('k').name}`)
      );
      assert.strictEqual(runner.boxes()[0].inFlight, 1);
      release();
      release(); // idempotent
      await tick(50);
      assert.ok(control.calls.includes(`suspend ${runner.actorFor('k').name}`));
      assert.strictEqual(runner.boxes()[0].inFlight, 0);
      await runner.close();
    });
  });

  describe('boxes()', () => {
    const phaseOf = (r: ReturnType<typeof make>, k: string) =>
      r.boxes().find((b) => b.key === k)?.phase;

    it('reports the lifecycle phases a dashboard shows', async () => {
      const runner = make({ whenIdle: 'suspend' });
      assert.deepStrictEqual(runner.boxes(), []);

      control.delayMs = 40;
      const acquiring = runner.acquire('k');
      await tick(10);
      assert.strictEqual(phaseOf(runner, 'k'), 'starting');
      const conn = await acquiring;
      control.delayMs = 0;

      const long = conn.runAction({ key: '/flow/hold' });
      await tick();
      const [info] = runner.boxes();
      assert.strictEqual(info.phase, 'running');
      assert.strictEqual(info.inFlight, 1);
      assert.deepStrictEqual(info.actor, runner.actorFor('k'));
      router.release();
      await long;
      await tick();
      assert.strictEqual(phaseOf(runner, 'k'), 'suspended');
      assert.strictEqual(runner.boxes()[0].inFlight, 0);
      await runner.close();
    });

    it("reports 'waiting-for-worker' while the pool is full", async () => {
      const runner = make();
      control.actors.set(key(runner.actorFor('k')), 'ACTOR_STATE_SUSPENDED');
      control.failNext.set('resume', [
        new SubstrateApiError(
          'RESOURCE_EXHAUSTED',
          'no free workers available'
        ),
        new SubstrateApiError(
          'RESOURCE_EXHAUSTED',
          'no free workers available'
        ),
      ]);
      const before = Date.now();
      const acquiring = runner.acquire('k');
      await tick(50);
      const waiting = runner.boxes()[0];
      assert.strictEqual(waiting.phase, 'waiting-for-worker');
      assert.ok(waiting.since >= before);
      await acquiring;
      assert.strictEqual(phaseOf(runner, 'k'), 'running');
      await runner.close();
    });
  });

  describe('release and close', () => {
    it('release deletes the actor, even while running', async () => {
      const runner = make();
      const ref = runner.actorFor('k');
      await runner.acquire('k');
      await runner.release('k');
      assert.strictEqual(control.actors.has(key(ref)), false);
      await runner.close();
    });

    it('suspend() snapshots on demand (retention hook)', async () => {
      const runner = make();
      const ref = runner.actorFor('k');
      await runner.acquire('k');
      await runner.suspend('k');
      assert.strictEqual(control.actors.get(key(ref)), 'ACTOR_STATE_SUSPENDED');
      await runner.close();
    });

    it("onBoxClose: 'delete' (default) removes tracked actors", async () => {
      const runner = make();
      await runner.acquire('a');
      await runner.acquire('b');
      await runner.close();
      assert.strictEqual(control.actors.size, 0);
      await assert.rejects(runner.acquire('a'), /closed/);
    });

    it("onBoxClose: 'suspend' keeps boxes for a restarted host", async () => {
      const runner = make({ onBoxClose: 'suspend' });
      const ref = runner.actorFor('a');
      await runner.acquire('a');
      await runner.close();
      assert.strictEqual(control.actors.get(key(ref)), 'ACTOR_STATE_SUSPENDED');

      // A new runner finds the same actor for the same key.
      const next = make({ onBoxClose: 'leave' });
      await next.acquire('a');
      assert.strictEqual(control.count('create'), 1);
      await next.close();
    });

    it("onBoxClose: 'leave' touches nothing", async () => {
      const runner = make({ onBoxClose: 'leave' });
      const ref = runner.actorFor('a');
      await runner.acquire('a');
      await runner.close();
      assert.strictEqual(control.actors.get(key(ref)), 'ACTOR_STATE_RUNNING');
    });

    it('does not close a caller-supplied control', async () => {
      control.closed = false;
      await make().close();
      assert.strictEqual(control.closed, false);
    });
  });
});
