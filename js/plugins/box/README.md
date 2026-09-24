# Genkit [in a] Box (`@genkit-ai/box`)

Run Genkit actions (tools, flows, agents) somewhere other than your main
process, and call them as if they were local. "Somewhere" can be a local OS
sandbox (macOS seatbelt, Linux bubblewrap) or a plain subprocess (trusted or
cross-language). You swap a `runner`, not your code.

Two reasons to box:

- **Isolation**: you don't fully trust the code (e.g. a shell tool an LLM
  drives). Box the dangerous tool; keep the agent and model keys outside.
- **Resource sharing / relocation**: run an action elsewhere (another process,
  another language) behind the same call site.

Box is the execution framework under Genkit Channels, and is usable directly.

> Status: experimental. `podmanRunner` (containers) is included; the
> `substrate` runner is not in this release.

## Install

```bash
npm i @genkit-ai/box
```

## The slickest case: sandbox a shell tool locally

One file defines the tool AND boxes it (`self: true`). The tool runs inside the
OS sandbox; the agent and your API key stay outside it.

```ts
import { googleAI } from '@genkit-ai/google-genai';
import { box, execRunner, localSandbox } from '@genkit-ai/box';
import { genkit, z } from 'genkit';

const ai = genkit({ plugins: [googleAI()] });

// Run the boxed side as *this same program*, isolated per-OS
// (seatbelt on macOS, bubblewrap on Linux).
const myBox = box(ai, {
  runner: execRunner({ self: true, isolate: localSandbox() }),
});

// The real implementation; this body runs inside the sandbox.
const runShell = ai.defineTool(
  {
    name: 'runShell',
    description: 'Run a shell command',
    inputSchema: z.object({ cmd: z.string() }),
    outputSchema: z.object({ stdout: z.string() }),
  },
  async ({ cmd }) => {
    /* ... */ return { stdout: '...' };
  }
);

// A boxed handle: hand over the real action (no schema restatement).
const boxedRunShell = myBox.fromTool(runShell);

// The agent and the Gemini key stay OUTSIDE the sandbox.
export const codingAgent = ai.defineAgent({
  name: 'codingAgent',
  model: googleAI.model('gemini-flash-latest'),
  tools: [boxedRunShell],
});
```

The same pattern works for flows (`myBox.fromFlow(...)`) and agents
(`myBox.fromAgent(...)` / `myBox.agent({ name })`).

## Runners and isolation

- **runner** = *where* the box runs. `execRunner({ self })` re-runs this entry;
  `execRunner({ cmd: 'tsx boxed.ts' })` runs a separate entry (stronger code
  isolation, and it can be a different language).
- **isolate** = *how* it's jailed. `localSandbox()` (auto-picks per OS),
  `sandboxExec()` (macOS), `bubblewrap()` (Linux). Omit it for a plain trusted
  subprocess.

```ts
// separate entry + auto-picked local sandbox
box(ai, { runner: execRunner({ cmd: 'tsx src/boxed.ts', isolate: localSandbox() }) });
```

`localSandbox()` hard-errors on platforms without a local sandbox (e.g. Windows).

## Isolation levels (read this before trusting it)

The local providers are **dev-time guardrails against accidents and casual
misbehavior, not containment for hostile code.** Know exactly what each one
restricts:

| Option | FS read | FS write | Network egress | CPU/mem/syscalls |
| --- | --- | --- | --- | --- |
| none (no `isolate`) | full | full | full | none |
| `sandboxExec()` (macOS) | **full** | blocked except `/tmp` | **full** | none |
| `bubblewrap()` (Linux) | confined: ro `/usr /bin /lib /lib64 /etc` + tmpfs; home/repo/creds not present | `/tmp` tmpfs only | **full** | none |
| `podmanRunner()` (any OS) | only what you mount | only what you mount rw | **blocked** by default | yes, via `extraArgs` |

Specifics and caveats:

- **Network egress is open on both by default.** The box must reach the
  reflection host on loopback, and the current default profiles allow *all*
  network, not just loopback. A boxed tool can call out to the internet and
  exfiltrate. Restricting egress is not wired up yet (see below).
- **macOS restricts writes only.** With `sandboxExec()` a boxed tool can still
  read anything you can (`~/.aws/credentials`, `~/.ssh`, source, env-bearing
  dotfiles). It only blocks filesystem writes outside `/tmp`. `sandbox-exec` is
  also deprecated by Apple (still works on current macOS, prints a warning).
- **Linux confines the filesystem view.** With `bubblewrap()` the box sees only
  a read-only system plus an ephemeral `/tmp`; your home dir, repo, and
  credentials are simply not mounted, so they can't be read or written.
- **No resource limits anywhere.** No CPU/memory/pid caps and no seccomp syscall
  filtering on either provider. A boxed tool can peg the CPU or fork-bomb.

For untrusted or hostile code, use `podmanRunner()` (below) or a stronger
runtime (Cloud Run sandbox, gVisor-class). The local providers above are not
containment.

## Containers: `podmanRunner()`

The container runner is a **runner**, not an `isolate:` provider, because it
swaps the reflection direction: the box serves the **V1** HTTP reflection API
and the runner publishes that port to the host loopback (`-p`). Nothing dials
out of the container.

```ts
import { box, podmanRunner } from '@genkit-ai/box';

const myBox = box(ai, {
  runner: podmanRunner({
    image: 'node:22-slim',
    cmd: 'node dist/boxed.js',       // runs INSIDE the container
    extraArgs: ['--memory=512m', '--pids-limit=256'],
  }),
});
```

This is the first option with real containment:

- **Egress is blocked by default.** Boxes run on an auto-created `--internal`
  podman network, so a boxed tool cannot reach the internet. Published ports
  still work, so reflection is unaffected. Opt out with `network: 'bridge'`.
- **Resource caps actually exist.** Pass `--memory`, `--cpus`, `--pids-limit`
  via `extraArgs`; the local providers cannot do this at all.
- **Nothing is inherited.** Unlike the subprocess runners, a container gets no
  host env and no host filesystem. Your `GEMINI_API_KEY` does not leak into the
  box unless you pass it explicitly via `env:`.
- **`docker` works too**, via `engine: 'docker'`.

### Why V1 here, and not V2

Everything else in Genkit (and the rest of box) uses reflection V2, where the
runtime dials *out* to a WebSocket server. V1 is deliberate here, and the reason
is load-bearing rather than stylistic: **blocking egress and dialing back out
are mutually exclusive, because they are the same route.**

V2 in a container is otherwise perfectly workable. The box would dial
`ws://host.containers.internal:<port>` instead of `127.0.0.1`, and that reaches
a loopback-bound host server via the gateway relay (gvproxy on macOS, pasta on
rootless Linux). On a normal bridge it just works.

But on an `--internal` network the gateway is unreachable by construction: the
DNS name still resolves, and nothing can connect to it. Published ports are
unaffected because the engine injects them from the host side rather than
routing them out of the container. So:

| | V2 (dial out) | V1 + `-p` (dial in) |
| --- | --- | --- |
| normal bridge | works | works |
| **egress blocked (`--internal`)** | **impossible** | **works** |

Since the whole point of this runner is isolation, V1 is the only option that
keeps egress blocked. Put differently: V2 is fine when you box for
*relocation*, V1 is required when you box for *isolation*.

Workarounds exist for egress-restricted V2, but none are general: a unix socket
with `--network=none` is Linux-only (`ws+unix:` is a `ws`-specific URL form, and
the socket cannot cross the macOS VM boundary or map to a Windows named pipe),
and a `socat` relay sidecar costs an extra container per box.

### Self-entry mode

`self: true` runs *this same program* in the container. The project is mounted
at its **own absolute path**, so `process.argv` and loader flags (tsx's
`--import`, source maps) carry over verbatim and relative symlinks still
resolve.

```ts
podmanRunner({
  image: 'node:22-slim',
  self: true,
  modulesVolume: 'genkit-box-modules',
});
```

The catch is `node_modules`: host-installed deps are built for the host OS/arch
and **cannot load in a Linux container** (esbuild and other native addons fail
outright). `modulesVolume` shadows the mounted `node_modules` with a named
volume holding Linux-built deps. Prime it once:

```bash
podman run --rm -v "$PWD:$PWD" -w "$PWD" \
  -v genkit-box-modules:"$PWD/node_modules" node:22-slim npm ci
```

### Port contract

The box's reflection server must land on a known port for publishing to work.
The runner sets `GENKIT_REFLECTION_PORT=3100` (bind exactly that port, no
probing) and `GENKIT_REFLECTION_HOST=0.0.0.0` (published ports arrive on the
container's eth0, so the default loopback bind would be unreachable). The host
side is always bound to `127.0.0.1`, since the reflection API is
unauthenticated.

> Cross-language boxes: `GENKIT_REFLECTION_PORT` is honored by JS and Go today.
> Go additionally hardcodes a loopback bind, so Go boxes need a host override
> before they work in a container. Python supports neither yet.

### Tightening the defaults

```ts
// Linux: bind only your repo read-only, keep an ephemeral /tmp.
bubblewrap({ roBind: ['/path/to/repo'], tmpfs: ['/tmp'] });

// macOS: supply a full custom seatbelt profile.
sandboxExec({ profile: '(version 1)\n(deny default)\n(allow network* (local ip))' });
```

Note: `bubblewrap({ unshareNet: true })` isolates the network namespace, but
that currently breaks the reflection dial-back (the host binds the host's
loopback, not the namespace's), so it is not usable for local boxes yet.

## Lifecycle: route + retention

`route` decides which box a call goes to; presets ship as functions.

```ts
import { box, execRunner, singleton, perRequest } from '@genkit-ai/box';

box(ai, { runner: execRunner({ self: true }) });                 // singleton (default)
box(ai, { runner: execRunner({ self: true }), route: perRequest }); // fresh box per call

// session-scoped: you supply the key
box(ai, {
  runner: execRunner({ cmd: 'tsx boxed.ts' }),
  route: (req, ctx) => (ctx?.session as any)?.id ?? crypto.randomUUID(),
  retention: { idle: 600_000 },
});
```

## From a spec (cross-language boxes)

When the box is a different language (a Go or Python app started via `cmd`),
there is no local action to hand over, so declare the shape:

```ts
const boxedRunShell = myBox.tool({
  name: 'runShell',
  inputSchema: z.object({ cmd: z.string() }),
  outputSchema: z.object({ stdout: z.string() }),
});
```

`.tool()`/`.flow()`/`.agent()` return unregistered proxies. The `define*`
variants (`defineFromTool(action, { name })`, `defineTool(spec)`, ...) also
register the proxy so it shows up in the Dev UI. Registered `defineFrom*`
variants must be renamed, since the original already occupies its name.

## Nesting

Boxes compose: an agent box (for relocation) can itself box a risky tool (for
isolation). See the design notes for details.

## License

Apache 2.0
