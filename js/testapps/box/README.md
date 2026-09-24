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

## Substrate variant (`src/index-substrate.ts`)

Boxed **agents** on [Agent Substrate](https://github.com/agent-substrate/substrate),
taking turns on shared workers.

The whole agent (model calls, tools, conversation history) runs in a gVisor
sandbox, one substrate Actor per chat session (`src/boxed-substrate.ts`).
The host process only routes: it has no model, no tools, and no state. With
`whenIdle: 'suspend'`, a session's actor holds a worker only while a turn is
running. Between turns it is snapshotted (memory and disk) and the worker is
freed, so many chats share a small pool. When every worker is busy, a turn
waits for one (retrying until `readyTimeoutMs`, 60s by default).

```ts
const sandbox = box(ai, {
  runner: substrateRunner({ ...conn, whenIdle: 'suspend', egress: [{ all: true }] }),
  route: (_req, ctx) => String(ctx?.sessionId ?? 'default'),
});

// in a flow: the session id routes the turn, and keys the boxed agent's history
const agent = sandbox.agent({ name: 'sandboxAgent', context: { sessionId } });
const res = await agent.chat({ sessionId }).send(message);
```

Needs a local substrate on kind (`hack/create-kind-cluster.sh` and
`hack/install-ate-kind.sh --deploy-ate-system --deploy-demo-counter` in the
substrate repo), plus `kubectl-ate` on PATH. Then:

```bash
export GEMINI_API_KEY=...
./substrate/setup.sh          # image, WorkerPool, ActorTemplate, creds, port-forwards
source substrate/.env
pnpm start:substrate          # builds web/, serves the demo UI on :8080
```

### Demo UI (`web/`)

Open http://localhost:8080. Each column is a chat session with its own boxed
agent; the panel on top is the substrate worker pool:

- **Worker cards** show which session each worker is running right now, or
  `free`.
- **Session badges** show what the session's actor is doing: `starting`,
  `waiting for a worker`, `running on <worker>`, `suspended`.
- **Send to all sessions** starts a turn in every column at once. With 3
  sessions on 2 workers, one waits, then takes the first worker to free up.

The state comes from `GET /api/state` (`src/substrate-state.ts`), which joins
ate-api's `ListWorkers` and `ListActors` with `runner.boxes()`. Substrate knows
which actor is on which worker; only the runner knows which session an actor
belongs to, and that a turn is waiting for a worker.

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

Re-run `setup.sh` after changing `src/boxed-substrate.ts` or the key. Either
gets a new template, so old sessions are never resumed onto new code.

### Keeping the API key out of the box

The demo takes shortcuts: `GEMINI_API_KEY` goes into the ActorTemplate env,
and the actor gets open egress (`egress: [{ all: true }]`) so it can reach
Gemini. That means:

- the key is readable by anyone with ate-api access (it is in the template),
  and captured in every snapshot;
- the agent's own tools can read it (`printenv`), and with open egress a
  prompt-injected `runShell` can send it anywhere.

The proper setup uses substrate's egress credential injection: the egress
gateway adds the key header on the way out, so it never enters the box, and
egress can be narrowed to the model endpoint:

1. Install substrate with `--experimental-egress-credential-injection` (it
   implies the sdsmint gateway, which terminates TLS) and deploy its
   credential provider (`manifests/egress-credential-injection/`). Store the
   key in a Kubernetes Secret the provider may read.
2. Project the gateway's CA into the actor (a `systemInfo` volume with the
   `egress-mitm.ate.dev` trust bundle) and set
   `NODE_EXTRA_CA_CERTS=/run/ate/trust-bundle.pem`
   (see substrate's `docs/egress-trust-bundle.md`).
3. Give the actor an egress policy that allows only
   `generativelanguage.googleapis.com` and injects `x-goog-api-key` from the
   secret (`inject_static_headers` with an `ate-secret://...` credential URI).
   The runner's `egress` option supports hostname rules today; header
   injection effects are not wired up yet.
4. Drop `GEMINI_API_KEY` from the template, and pass the Google AI plugin a
   placeholder key: the gateway replaces the header.

If the tools run untrusted code, also consider splitting again: model and key
on the host, only the tools in the box (the other variants in this app).
