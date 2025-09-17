/**
 * Copyright 2025 Google LLC
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

import { lazy } from '@genkit-ai/core/async';

export class AsyncLazyTaskQueue {
  private tasks: PromiseLike<void>[] = [];
  private alreadyRunning?: Promise<void>;

  enqueueLazy(task: () => any | PromiseLike<any>) {
    this.tasks.push(lazy(task));
    this._process();
  }

  async merge() {
    if (this.tasks.length === 0) {
      return;
    }
    this._process();
    await this.alreadyRunning;
  }

  private async _process() {
    if (this.alreadyRunning) {
      return;
    }
    this.alreadyRunning = new Promise(async (resolve, reject) => {
      while (this.tasks.length > 0) {
        try {
          await this.tasks[0];
          this.tasks.shift();
        } catch (e) {
          reject(e);
        }
      }
      resolve();
      this.alreadyRunning = undefined;
    });
  }
}
