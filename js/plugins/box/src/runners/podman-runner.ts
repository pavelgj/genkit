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

import { logger } from 'genkit/logging';
import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { realpathSync } from 'node:fs';
import { createServer } from 'node:net';
import { ReflectionClientV1 } from '../reflection-client-v1.js';
import type { BoxConnection, BoxRunner } from '../types.js';
import { BOX_SELF_ID_ENV } from './exec-runner.js';

/**
 * The port the box's reflection server listens on *inside* the container.
 *
 * A container gets a private, empty network namespace, so `findPort()`'s probe
 * (3100 upward) always lands on 3100 and we can publish it without discovery.
 * Once `GENKIT_REFLECTION_PORT` is honored by every runtime we pin it outright;
 * we already set it so JS boxes never probe at all.
 */
const CONTAINER_REFLECTION_PORT = 3100;

/** A bind mount into the box container. */
export interface PodmanMount {
  source: string;
  target: string;
  readonly?: boolean;
}

/** Options for {@link podmanRunner}. */
export interface PodmanRunnerOptions {
  /** Image the box runs in, e.g. `node:22-slim`. Required. */
  image: string;
  /**
   * Command that starts the box entry point *inside* the container, e.g.
   * `node dist/boxed.js`. Mutually exclusive with `self`.
   */
  cmd?: string;
  /**
   * Re-run the current entry point inside the container ("self-entry mode").
   * The project is mounted at its own absolute path so `process.argv` and
   * loader flags carry over verbatim; the image supplies the interpreter,
   * since the host's `process.execPath` is the wrong OS/arch.
   */
  self?: boolean;
  /**
   * Interpreter used in self-entry mode. Defaults to `node` (resolved inside
   * the container).
   */
  interpreter?: string;
  /**
   * Project directory mounted into the container at the *same* absolute path.
   * Defaults to the current working directory. Identical paths keep argv and
   * relative symlinks (pnpm) valid without rewriting.
   */
  projectDir?: string;
  /**
   * Named volume mounted over `<projectDir>/node_modules`. Host deps are built
   * for the host OS/arch and cannot load in a Linux container, so self-entry
   * mode needs Linux-built deps here. Prime it once with an install run.
   */
  modulesVolume?: string;
  /** Extra bind mounts. */
  mounts?: PodmanMount[];
  /**
   * Network mode. `internal` (default) uses a `--internal` podman network:
   * published ports still work, but the box cannot reach the internet.
   * `bridge` is the normal podman network with full egress.
   */
  network?: 'internal' | 'bridge';
  /** Name of the `--internal` network to create/reuse. */
  networkName?: string;
  /** Env vars passed into the box. Containers inherit nothing by default. */
  env?: Record<string, string>;
  /** Extra raw `podman run` args, e.g. `['--memory=512m']`. */
  extraArgs?: string[];
  /** Container engine binary. `docker` is CLI-compatible for what we use. */
  engine?: 'podman' | 'docker';
}

/** Picks a free port on the host loopback for publishing. */
async function freePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const srv = createServer();
    srv.once('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const addr = srv.address();
      const port = typeof addr === 'object' && addr ? addr.port : 0;
      srv.close(() => resolve(port));
    });
  });
}

/** Runs an engine command to completion, resolving stdout. */
function run(
  engine: string,
  args: string[]
): Promise<{ code: number; stdout: string; stderr: string }> {
  return new Promise((resolve) => {
    const child = spawn(engine, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (d) => (stdout += d.toString()));
    child.stderr.on('data', (d) => (stderr += d.toString()));
    child.once('error', (e) => resolve({ code: -1, stdout, stderr: `${e}` }));
    child.once('close', (code) =>
      resolve({ code: code ?? -1, stdout: stdout.trim(), stderr: stderr.trim() })
    );
  });
}

interface ContainerInstance {
  name: string;
  hostPort: number;
  client: ReflectionClientV1;
  lastUsed: number;
}

/**
 * A {@link BoxRunner} that runs each box as a podman (or docker) container.
 *
 * Unlike {@link ExecRunner}, this speaks **reflection V1**: the box runs the
 * HTTP reflection server and we publish its port to the host loopback. V1's
 * dial-in direction is what makes containers work, since `-p` forwards
 * host->container and no container-to-host path is needed.
 *
 * V1 is not just convenience here, so don't "simplify" this back to V2: a V2
 * dial-back and blocked egress are mutually exclusive, because they are the
 * same route. On an `--internal` network `host.containers.internal` still
 * resolves but cannot be connected to, while published ports keep working (the
 * engine injects those from the host side). See the plugin README, "Why V1
 * here, and not V2".
 *
 * This is the first runner with real containment: `--internal` networking
 * blocks egress, and `--memory`/`--pids-limit` (via `extraArgs`) give actual
 * resource caps, neither of which the local sandbox providers can do.
 */
export class PodmanRunner implements BoxRunner {
  readonly name = 'podman';
  private instances = new Map<string, ContainerInstance>();
  private readonly engine: string;
  private readonly projectDir: string;
  private networkReady?: Promise<void>;
  private closed = false;

  /** Set by `box()` so nested boxes can tell which box they are the runtime for. */
  boxId?: string;

  constructor(private readonly options: PodmanRunnerOptions) {
    if (options.self && options.cmd) {
      throw new Error('podmanRunner: `self` and `cmd` are mutually exclusive.');
    }
    if (!options.self && !options.cmd) {
      throw new Error('podmanRunner: one of `self` or `cmd` is required.');
    }
    if (!options.image) {
      throw new Error('podmanRunner: `image` is required.');
    }
    this.engine = options.engine ?? 'podman';
    // Resolve symlinks: podman binds the real path, and on macOS `/tmp` is a
    // symlink to `/private/tmp`, which otherwise fails with "statfs ... no
    // such file or directory".
    const dir = options.projectDir ?? process.cwd();
    this.projectDir = (() => {
      try {
        return realpathSync(dir);
      } catch {
        return dir;
      }
    })();
  }

  private get networkName(): string {
    return this.options.networkName ?? 'genkit-box-internal';
  }

  /**
   * Creates the `--internal` network once. It blocks outbound traffic while
   * still allowing published ports, which is what gives the box egress
   * containment without breaking reflection.
   */
  private ensureNetwork(): Promise<void> {
    if ((this.options.network ?? 'internal') !== 'internal') {
      return Promise.resolve();
    }
    if (!this.networkReady) {
      this.networkReady = (async () => {
        const exists = await run(this.engine, [
          'network',
          'exists',
          this.networkName,
        ]);
        if (exists.code === 0) return;
        const created = await run(this.engine, [
          'network',
          'create',
          '--internal',
          this.networkName,
        ]);
        // A concurrent box may have won the race; treat "already exists" as ok.
        if (created.code !== 0 && !/already exists/i.test(created.stderr)) {
          throw new Error(
            `Failed to create ${this.engine} network '${this.networkName}': ${created.stderr}`
          );
        }
      })();
    }
    return this.networkReady;
  }

  /** The command the container runs. */
  private entryCommand(): string[] {
    if (this.options.self) {
      // The host's execPath is the wrong OS/arch, so the image supplies the
      // interpreter. execArgv (tsx's --import, source maps) and argv survive
      // because the project is mounted at its own absolute path.
      return [
        this.options.interpreter ?? 'node',
        ...process.execArgv,
        ...process.argv.slice(1),
      ];
    }
    return this.options.cmd!.split(/\s+/).filter(Boolean);
  }

  /**
   * Builds the full `podman run` argv. Pure and deterministic so it can be
   * unit tested without touching a container engine.
   */
  buildRunArgs(name: string, hostPort: number): string[] {
    const args = [
      'run',
      '--rm',
      '--init',
      '--name',
      name,
      // Makes strays discoverable if the host process dies without close():
      //   podman rm -f $(podman ps -aq --filter label=genkit-box)
      '--label',
      'genkit-box',
      // Bind the host side to loopback: the reflection API is unauthenticated.
      '-p',
      `127.0.0.1:${hostPort}:${CONTAINER_REFLECTION_PORT}`,
    ];

    if ((this.options.network ?? 'internal') === 'internal') {
      args.push('--network', this.networkName);
    }

    args.push('-v', `${this.projectDir}:${this.projectDir}`);
    if (this.options.modulesVolume) {
      args.push('-v', `${this.options.modulesVolume}:${this.projectDir}/node_modules`);
    }
    for (const m of this.options.mounts ?? []) {
      args.push('-v', `${m.source}:${m.target}${m.readonly ? ':ro' : ''}`);
    }
    args.push('-w', this.projectDir);

    // Containers inherit nothing from process.env, so secrets stay out of the
    // box unless explicitly passed. That is a deliberate difference from the
    // subprocess runners.
    const env: Record<string, string> = {
      GENKIT_ENV: 'dev',
      // Published ports arrive on eth0, not loopback, so the default
      // 127.0.0.1 bind would be unreachable from the host.
      GENKIT_REFLECTION_HOST: '0.0.0.0',
      GENKIT_REFLECTION_PORT: String(CONTAINER_REFLECTION_PORT),
      ...(this.boxId ? { [BOX_SELF_ID_ENV]: this.boxId } : {}),
      ...this.options.env,
    };
    for (const [k, v] of Object.entries(env)) {
      args.push('-e', `${k}=${v}`);
    }

    args.push(...(this.options.extraArgs ?? []));
    args.push(this.options.image, ...this.entryCommand());
    return args;
  }

  async acquire(key: string, signal?: AbortSignal): Promise<BoxConnection> {
    if (this.closed) throw new Error('podmanRunner is closed.');

    const existing = this.instances.get(key);
    if (existing) {
      // A paused container (suspend) has to be resumed before it can serve.
      await run(this.engine, ['unpause', existing.name]);
      existing.lastUsed = Date.now();
      return existing.client;
    }

    await this.ensureNetwork();
    const name = `genkit-box-${randomUUID().slice(0, 12)}`;
    const hostPort = await freePort();
    const args = this.buildRunArgs(name, hostPort);

    logger.debug(`Box starting container ${name}: ${this.engine} ${args.join(' ')}`);
    const child = spawn(this.engine, args, {
      stdio: ['ignore', 'inherit', 'inherit'],
    });
    child.once('error', (e) =>
      logger.error(`Box container ${name} failed to start: ${e}`)
    );

    const client = new ReflectionClientV1(`http://127.0.0.1:${hostPort}`);
    this.instances.set(key, { name, hostPort, client, lastUsed: Date.now() });

    try {
      await client.waitForReady(30_000, signal);
    } catch (e) {
      await this.release(key);
      throw e;
    }
    if (signal?.aborted) {
      await this.release(key);
      throw new Error('Aborted before box became ready.');
    }
    return client;
  }

  /**
   * Freezes the container while it waits on input. Unlike a subprocess, a
   * paused container keeps its memory and port, so `acquire` can resume it
   * instead of paying a cold start.
   */
  async suspend(key: string): Promise<void> {
    const inst = this.instances.get(key);
    if (!inst) return;
    await run(this.engine, ['pause', inst.name]);
  }

  async release(key: string): Promise<void> {
    const inst = this.instances.get(key);
    if (!inst) return;
    this.instances.delete(key);
    // Paused containers ignore SIGTERM, so unpause before stopping.
    await run(this.engine, ['unpause', inst.name]);
    await inst.client.quit();
    // --rm removes it once stopped; force-remove covers a wedged container.
    const stopped = await run(this.engine, ['stop', '-t', '3', inst.name]);
    if (stopped.code !== 0) {
      await run(this.engine, ['rm', '-f', inst.name]);
    }
  }

  async close(): Promise<void> {
    this.closed = true;
    await Promise.all(
      Array.from(this.instances.keys()).map((k) =>
        this.release(k).catch(() => {})
      )
    );
    this.instances.clear();
  }
}

/** Creates a {@link PodmanRunner}. */
export function podmanRunner(options: PodmanRunnerOptions): PodmanRunner {
  return new PodmanRunner(options);
}
