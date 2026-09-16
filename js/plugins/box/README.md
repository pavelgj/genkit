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

> Status: experimental. `substrate` and `container` runners are not in this
> release.

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

For untrusted or hostile code, use stronger isolation (a container, Cloud Run
sandbox, or a gVisor-class runtime). Those runners are planned but not in this
release.

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
