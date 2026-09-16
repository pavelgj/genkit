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

import type { SandboxProvider } from '../types.js';
import { bubblewrap } from './bubblewrap.js';
import { sandboxExec } from './sandbox-exec.js';

export {
  SubprocessProvider,
} from './subprocess.js';
export {
  SandboxExecProvider,
  sandboxExec,
  type SandboxExecOptions,
} from './sandbox-exec.js';
export {
  BubblewrapProvider,
  bubblewrap,
  type BubblewrapOptions,
} from './bubblewrap.js';

/**
 * Picks the OS-appropriate local sandbox: seatbelt on macOS, bubblewrap on
 * Linux. Hard-errors on any other platform (notably Windows) rather than
 * silently running without isolation; use `container({ image })` there.
 */
export function localSandbox(): SandboxProvider {
  switch (process.platform) {
    case 'darwin':
      return sandboxExec();
    case 'linux':
      return bubblewrap();
    default:
      throw new Error(
        `localSandbox() has no local sandbox for platform '${process.platform}'. ` +
          `Use container({ image }) for isolation on this platform.`
      );
  }
}
