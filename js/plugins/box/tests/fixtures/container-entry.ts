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

// A minimal real Genkit box, run inside a container by the podman-runner
// integration test. GENKIT_ENV=dev plus GENKIT_REFLECTION_HOST/PORT make it
// serve the V1 reflection API on 0.0.0.0:3100, which the runner publishes.

import { genkit, z } from 'genkit';

const ai = genkit({});

ai.defineFlow(
  {
    name: 'echo',
    inputSchema: z.object({ text: z.string() }),
    outputSchema: z.object({ echoed: z.string() }),
  },
  async ({ text }) => ({ echoed: `boxed:${text}` })
);

ai.defineFlow(
  {
    name: 'countTo',
    inputSchema: z.object({ n: z.number() }),
    outputSchema: z.object({ total: z.number() }),
    streamSchema: z.object({ i: z.number() }),
  },
  async ({ n }, { sendChunk }) => {
    for (let i = 1; i <= n; i++) sendChunk({ i });
    return { total: n };
  }
);

// Keep the process alive serving reflection requests.
setInterval(() => {}, 1 << 30);
