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
use a container-based approach there.
