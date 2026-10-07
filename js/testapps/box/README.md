# Genkit in a Box testapp

The "slickest case" from the design: one entry file defines a `runShell` tool
and boxes it in a local OS sandbox (`self: true` + `localSandbox()`), while the
agent and the model API key stay in the main (unsandboxed) process. Only
`runShell` crosses into the sandbox.

## Run

```bash
export GEMINI_API_KEY=...
pnpm i
pnpm genkit:dev
```

Then, in the Dev UI:

- Call the `runInBox` flow with `{ "cmd": "uname -a" }` to run a command inside
  the sandbox directly.
- Chat with the `codingAgent` agent; when it uses `runShell`, that call executes
  inside the sandbox.

## What to notice

- The `runShell` body runs jailed by the OS sandbox. What that blocks differs by
  platform:
  - **macOS** (`sandbox-exec`): filesystem writes are blocked except `/tmp`.
    Reads and network are still open. Try `echo hi > ~/nope.txt` and watch it
    fail, then note that `cat ~/.aws/credentials` still works.
  - **Linux** (`bubblewrap`): the box sees only a read-only system plus an
    ephemeral `/tmp`; your home dir and repo are not even mounted, so they can't
    be read or written. Network is still open.
- The agent and the `GEMINI_API_KEY` live outside the sandbox. Only the tool is
  boxed.

These are dev-time guardrails against accidents, not containment for hostile
code: network egress is open and there are no CPU/memory limits. See the
`@genkit-ai/box` README ("Isolation levels") for the full picture and for
running untrusted code.

On a platform without a local sandbox (e.g. Windows), `localSandbox()` throws;
use the container variant below.

## Container variant (`src/index-podman.ts`)

Same demo, but the boxed side runs in a podman container instead of a local OS
sandbox. Needs podman (`podman machine start` on macOS).

```bash
export GEMINI_API_KEY=...
pnpm genkit:dev:podman
```

Call `runInBox` with `{ "cmd": "uname -a" }` and note it reports **Linux**, not
your host, because the tool body really executed in the container.

What is different from the local-sandbox version:

- **Egress is blocked.** Boxes run on an auto-created `--internal` podman
  network. Try `{ "cmd": "getent hosts example.com || echo BLOCKED" }`.
- **Resource caps are real** (`--memory=512m`, `--pids-limit=256`).
- **No host env leaks in.** Try
  `{ "cmd": "printenv GEMINI_API_KEY || echo NO_KEY_IN_BOX" }`; the container
  inherits nothing, so your key is not there.
- **Two files, not one.** Self mode cannot work here: the host's node binary and
  darwin-built `node_modules` (esbuild especially) cannot run in a Linux
  container. So the boxed side is a separate compiled entry
  (`src/boxed-podman.ts` -> `lib/`), and the container runs the compiled JS
  rather than `tsx`. The tool is declared from a spec (`myBox.defineTool`)
  because there is no local action to hand over.

If the host process is killed before `close()`, strays are labelled:

```bash
podman rm -f $(podman ps -aq --filter label=genkit-box)
```

## Durable agents (`src/index-durable.ts`, prototype)

An agent whose loop runs as committed steps, so it survives the process dying
mid-turn. Design: `js/plugins/box/durable-agents-design.local.md`. The engine
is in `src/durable/` and is built on top of GiaB, not into it.

```ts
const sandbox = defineEnvironment(ai, {
  name: 'sandbox',
  runner: execRunner({ self: true, isolate: localSandbox() }),
  tools: [runShell], // runs in a per-session box
  lifecycle: { short: 'keep', long: 'release' },
});

export const durableCoder = defineDurableAgent(ai, {
  name: 'durableCoder',
  model: 'googleai/gemini-flash-latest',
  tools: [readFileTool],
  environments: [sandbox],
  replay: { readFile: 'safe' }, // runShell is not: never repeated after a crash
  store: new FileSessionStore('.durable'), // any genkit SessionStore
});
```

It's a normal agent (`chat`, `detach`, `getSnapshot`, `abort`, Dev UI). Under
the hood every model call and tool call is an effect in one run document per
session (transcript, business state and queue together), committed through
`SessionStore.saveSnapshot`. A lease-based scheduler runs whatever is ready;
the loop itself (`src/durable/step.ts`) never waits on anything.

```bash
# Headless: start a turn, kill the engine mid-tool, restart, watch it finish.
GEMINI_API_KEY=... pnpm durable:crash-demo
DURABLE_MODEL=durable/script pnpm durable:crash-demo   # scripted, no key

# Dev UI
GEMINI_API_KEY=... pnpm genkit:dev:durable
```

In the Dev UI:

- `startTask` with `{ "message": "Use runShell to run `sleep 8 && date`, then
tell me the time" }` starts a background turn; keep its `sessionId`.
- `crashEngine` while the shell command runs: in-flight work is dropped, like a
  real crash. `restartEngine` starts a new engine on the same store; it finds
  the expired lease, abandons the unsafe `runShell`, and the model is told the
  call was interrupted (it usually checks the state and retries).
- `inspectRun` with the `sessionId` shows the run document: effects with their
  attempts and leases, the transcript, and the sandbox lifecycle hints.
- `steer` adds a note to a running turn; it joins after the current tool calls.
- Killing the whole process (Ctrl-C) and starting it again works too: state is
  in `.durable/`, and the new engine recovers active sessions on start.

Tests: `tests/durable_test.ts` (loop, steering, interrupts, abort,
exactly-once, crash recovery, leases) and `tests/durable-environment_test.ts`.

Prototype limits: one process per store (FileSessionStore locks are
in-process), waiting facades are in-process, only `run` completion mode is
implemented (timers, signals, polled operations are designed, not built), and
no substrate runner integration yet (the environment maps hints onto
`suspend`/`release`; a substrate `pause` needs a runner hook).

## Substrate variant (`src/index-substrate.ts`)

Boxed **agents** on [Agent Substrate](https://github.com/agent-substrate/substrate),
taking turns on shared workers.

The whole agent (tools, conversation history, the generate loop) runs in a
gVisor sandbox, one substrate Actor per chat session (`src/boxed-substrate.ts`).
The host process only routes: it has no model, no tools, and no state. Model
calls go to a **model gateway** (`src/gateway-main.ts`, in-cluster), the only
holder of the API key and the only host a box may reach.

An agent holds a worker only while it has work to do:

- **Between turns:** with `whenIdle: 'suspend'`, a session's actor is
  snapshotted (memory and disk) once its turn ends.
- **During model calls (background tasks):** the gateway pauses the actor
  while the model works, and resumes it when the answer is in. A model call
  takes seconds; resuming takes about 200ms.

When every worker is busy, a turn waits for one (retrying until
`readyTimeoutMs`, 60s by default).

```ts
const sandbox = box(ai, {
  runner: substrateRunner({
    ...conn,
    whenIdle: 'suspend',
    egress: [{ hostnames: ['model-gateway.genkit-box.svc'] }], // nothing else
  }),
  route: (_req, ctx) => String(ctx?.sessionId ?? 'default'),
});

// Foreground turn: streams, never paused. The session id routes the turn and
// keys the boxed agent's history; the gateway token names the actor.
const agent = sandbox.agent({ name: 'sandboxAgent', context: gatewayContext(sessionId, false) });
const res = await agent.chat({ sessionId }).send(message);

// Background task: the call returns once the turn is detached, and the
// gateway may park the actor during its model calls.
const release = runner.hold(sessionId); // keep whenIdle off until it ends
const bg = sandbox.agent({ name: 'sandboxAgent', context: gatewayContext(sessionId, true) });
const task = await bg.chat({ sessionId }).detach(message);
```

In the box, the model is just a name: the `modelGateway` plugin forwards
`gateway/<model>` to the gateway.

```ts
const ai = genkit({ plugins: [modelGateway({ url: process.env.MODEL_GATEWAY_URL! })] });
ai.defineAgent({ model: 'gateway/googleai/gemini-3.6-flash', tools, store });
```

Needs a local substrate on kind (`hack/create-kind-cluster.sh` and
`hack/install-ate-kind.sh --deploy-ate-system --deploy-demo-counter` in the
substrate repo), plus `kubectl-ate` on PATH. Then:

```bash
export GEMINI_API_KEY=...
./substrate/setup.sh          # images, model gateway, WorkerPool, ActorTemplate, creds, port-forwards
pnpm start:substrate          # reads substrate/.env, builds web/, serves the demo UI on :8080
```

The `substrate` scripts read `substrate/.env` on every start. Each `setup.sh`
run can write a new template name there (templates are immutable), so a shell
that sourced an older `.env` would otherwise point at a template that no
longer exists.

When you're done, shut it all down so nothing keeps running:

```bash
./substrate/teardown.sh          # suspend actors, stop port-forwards, kind and the podman VM
./substrate/teardown.sh --demo   # or: remove only this demo; substrate keeps running
./substrate/teardown.sh --purge  # or: delete the kind cluster and registry
```

The default keeps everything, including sessions (actors are suspended, not
deleted). To come back:

```bash
podman machine start substrate
podman --connection substrate-root start kind-registry kind-control-plane
./substrate/setup.sh             # waits for substrate, repairs workers, new token
pnpm start:substrate
```

After the kind node restarts, substrate's workers come back with new pod IPs
that substrate doesn't pick up (a worker's registered IP is immutable), so
actors can't start. `setup.sh` detects this and replaces those workers. They
are stateless, so nothing is lost.

`GEMINI_API_KEY` goes into a Kubernetes Secret mounted by the gateway only.
Neither the ActorTemplate nor any snapshot contains it.

### Demo UI (`web/`)

Open http://localhost:8080. Each column is a chat session with its own boxed
agent; the panel on top is the substrate worker pool:

- **Worker cards** show which session each worker is running right now, or
  `free`.
- **Session badges** show what the session's actor is doing: `starting`,
  `waiting for a worker`, `running on <worker>`, `suspended`.
- **Send to all sessions** starts a turn in every column at once. With 3
  sessions on 2 workers, one waits, then takes the first worker to free up.
- **Background** (per column) or **Start 6 background tasks** runs detached
  turns. Watch the "parked on the model" row: agents waiting on Gemini hold
  no worker, so 6 agents make progress on 2 workers. To compare, start the
  server with `PARK=0` (background tasks, but never paused).

The state comes from `GET /api/state` (`src/substrate-state.ts`), which joins
ate-api's `ListWorkers` and `ListActors` with `runner.boxes()`. Substrate knows
which actor is on which worker; only the runner knows which session an actor
belongs to, and that a turn is waiting for a worker.

### Benchmarking with a fake model

Real model latency and 429/503s make pause/resume numbers noisy. The gateway
also serves `fake/agent`, a deterministic agent script
(`src/model-gateway/fake-model.ts`) configured by the message itself:

```bash
AGENT_MODEL=fake/agent ./substrate/setup.sh   # new template, same image
pnpm start:substrate
# then send: "bench steps=3 modelMs=5000 toolMs=300"
```

Each task is `steps + 1` model calls of `modelMs` each (the time the gateway
can park the agent) and `steps` `runShell` calls of `toolMs` each (the work
that needs a worker). Re-run `setup.sh` without `AGENT_MODEL` to go back to
`googleai/gemini-3.6-flash`.

On the local kind cluster (2 workers, 1 actor each), with
`bench steps=3 modelMs=5000 toolMs=300`:

| Agents | Parked: batch / worker-s per task | `PARK=0`: batch / worker-s per task |
| --- | --- | --- |
| 6 | 28s / 4.5 | 66s / 21.3 |
| 12 | 59s / 5.3 | 134s / 21.6 |
| 24 | 104s / 6.8 | 270s / 21.6 |

For UI work, run the server and Vite's dev server side by side
(`pnpm start:substrate` and `pnpm web:dev`, then open :5173). `pnpm
genkit:dev:substrate` also serves the demo UI, next to the Genkit Dev UI.

### Dev UI

Or try the flows in the Genkit Dev UI (`pnpm genkit:dev:substrate`):

- `chatWithAgent` with `{ "message": "My favorite color is teal. Save it to color.txt." }`.
  It returns a `sessionId`. Pass it back with
  `{ "sessionId": "...", "message": "What's my favorite color?" }`: the history
  came back from the snapshot. Omit `sessionId` to start another session.
- `runInSandbox` with the same `sessionId` and `{ "cmd": "cat color.txt" }`
  runs a command in that session's sandbox directly, no model involved.
- Keep an eye on the pool while you chat in a few sessions at once. The pool
  has 2 workers; each shows `1/1` only while a turn runs:

  ```bash
  watch kubectl ate get workers
  watch kubectl ate get actors -a genkit-box
  ```

Re-run `setup.sh` after changing `src/boxed-substrate.ts` (a new template, so
old sessions are never resumed onto new code), `src/gateway-main.ts`, or the
key (the gateway is redeployed).

### The model gateway (`src/model-gateway/`)

Why it exists:

- **Workers are freed during model calls.** Pausing an actor severs its
  connections, so the box can't hold a request open while the model works.
  Parked calls are fire-and-poll instead: start a call, then long-poll for
  the result. The gateway pauses the caller once a call runs longer than
  `PAUSE_AFTER_MS` (1.5s), and resumes it when the result is ready; the
  box's next poll gets it.
- **The API key stays out of the box.** Boxes may reach the gateway and
  nothing else, so a prompt-injected `runShell` can't leak a key or reach
  the internet.

```
PUT /v1/calls/{callId}           { model, request, park }  -> 202 { status }
GET /v1/calls/{callId}?waitMs=N                            -> { status: pending | done | error }
POST /v1/generate                { model, request }        -> NDJSON chunks, then the response
```

| Piece | Where | What it does |
| --- | --- | --- |
| `client.ts` | box | `modelGateway()` plugin: fresh connection per request, retries through dropped connections |
| `server.ts` | gateway | runs the model action with the box's `GenerateRequest` |
| `parker.ts` | gateway | pause after a delay, resume on completion; if the node stays full, suspend and resume elsewhere |
| `token.ts` | host + gateway | HMAC caller tokens naming the actor |

What decides pausing:

- Only background tasks (`park: true`) are paused. A foreground turn has a
  live inbound request (the streamed reply), which a pause would cut.
- A background task makes one model call at a time and nothing else goes
  in or out of the box meanwhile, so nothing else can break. Tools that
  need connections (a download, a subprocess talking to a server) would; a
  real client should only set `park` when the model call is the box's only
  outbound work.
- Call ids are scoped to the caller. Actors are restored from a shared golden
  snapshot, so their random number caches start identical (the client uses
  `randomUUID({ disableEntropyCache: true })` for that reason too).

**Caller identity (demo-grade).** The gateway pauses whatever actor a call
comes from, so it can't trust the box to say which one that is. The host
mints an HMAC token for the actor it starts (`runner.actorFor(sessionId)`)
and passes it in the turn's context; genkit propagates action context into
model calls, so no agent changes are needed. A token leaked from a box can
only pause that box.

The proper source is substrate itself: its egress gateway verifies each
actor's client certificate and hands the actor's SPIFFE ID to a credential
provider (`credproviderpb`). A provider that returns per-actor tokens, with
the egress policy injecting them as a header (`inject_static_headers`), would
give the gateway an identity the actor can't forge and the host doesn't need
to mint. That needs substrate's experimental TLS-terminating egress mode.

**Task status.** The host follows each background task by polling the boxed
agent's snapshot. Any request through the router resumes a paused actor, so
the host first asks ate-api whether the actor is `PAUSED` and skips the poll
if so. The boxed store also reports a fresh heartbeat on reads, since a read
it can answer proves the process is alive, even after a long pause.

TODO, the proper setup: keep sessions in an external store shared by host
and box (Firestore, Postgres). Status reads then never touch the actor, the
PAUSED check goes away, and the store has to know when an actor is parked on
the model so a stale heartbeat doesn't mark the task `expired`.

**Other rough edges:**

- ate-api has no RBAC yet: the gateway's service account token (used to
  pause and resume) has full control of the cluster, like the host's.
- The gateway keeps calls in memory: a restart loses in-flight calls, and
  their boxes time out and retry the call.
- The runner doesn't know when the gateway pauses its box. That is fine: its
  next call goes through the router, which resumes paused actors itself.

