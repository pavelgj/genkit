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

// The model gateway process (runs in-cluster, see substrate/gateway.yaml.tmpl).
// It is the only holder of the Gemini API key, and the only host boxed agents
// may reach. For parked calls it pauses the calling actor while the model
// runs, through ate-api, using its own service account token.
//
// Env:
//   GEMINI_API_KEY          the model key
//   GATEWAY_SECRET_FILE     HMAC secret shared with the host (caller tokens)
//   ATE_API                 ate-api endpoint (default api.ate-system.svc:443)
//   ATE_CA_FILE             ate-api CA bundle
//   ATE_TOKEN_FILE          projected service account token for ate-api
//   PAUSE_AFTER_MS          pause only calls running longer (default 1500)

import { grpcSubstrateControl } from '@genkit-ai/box/substrate';
import { googleAI } from '@genkit-ai/google-genai';
import express from 'express';
import { genkit } from 'genkit';
import { readFileSync } from 'node:fs';
import { Parker } from './model-gateway/parker.js';
import { modelGatewayServer } from './model-gateway/server.js';

function env(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) throw new Error(`${name} is not set`);
  return value;
}

const log = (msg: string) => console.log(`${new Date().toISOString()} ${msg}`);

const ai = genkit({ plugins: [googleAI()] });

const control = grpcSubstrateControl({
  endpoint: env('ATE_API', 'api.ate-system.svc:443'),
  ca: readFileSync(env('ATE_CA_FILE')),
  // Projected tokens rotate; re-read per call.
  token: () => readFileSync(env('ATE_TOKEN_FILE'), 'utf8'),
});

const gateway = modelGatewayServer(ai, {
  secret: readFileSync(env('GATEWAY_SECRET_FILE'), 'utf8').trim(),
  parker: new Parker({
    control,
    pauseAfterMs: Number(env('PAUSE_AFTER_MS', '1500')),
    log,
  }),
  allowModels: [
    'googleai/gemini-flash-latest',
    'googleai/gemini-3.5-flash-lite',
  ],
  log,
});

const app = express();
app.use(gateway.router);
const port = Number(env('PORT', '8080'));
app.listen(port, () => log(`model gateway listening on :${port}`));
