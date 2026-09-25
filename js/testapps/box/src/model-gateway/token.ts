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

// Caller tokens: which actor a gateway request comes from.
//
// Substrate's rule is that nothing an actor says about itself can be trusted,
// and the gateway pauses whichever actor a request names. So the actor ref
// comes from a token the *host* mints (it knows the ref: it just started that
// actor), HMAC-signed with a secret shared by host and gateway. A token that
// leaks from its box can only pause that same box.
//
// Demo-grade. The proper source of identity is substrate itself: the egress
// gateway verifies each actor's client certificate and hands the actor's
// SPIFFE ID to a credential provider, which could return a per-actor token
// for the egress gateway to inject as a header. See the testapp README.

import { createHmac, timingSafeEqual } from 'node:crypto';

export interface CallerClaims {
  atespace: string;
  name: string;
  /** Expiry, ms since epoch. */
  exp: number;
}

const b64 = (s: string) => Buffer.from(s).toString('base64url');

export function mintCallerToken(
  secret: string,
  actor: { atespace: string; name: string },
  ttlMs = 60 * 60_000
): string {
  const claims: CallerClaims = { ...actor, exp: Date.now() + ttlMs };
  const body = b64(JSON.stringify(claims));
  return `${body}.${sign(secret, body)}`;
}

/** The token's claims, or undefined if it is malformed, forged or expired. */
export function verifyCallerToken(
  secret: string,
  token: string,
  now = Date.now()
): CallerClaims | undefined {
  const [body, sig] = token.split('.');
  if (!body || !sig) return undefined;
  const expected = Buffer.from(sign(secret, body));
  const actual = Buffer.from(sig);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) {
    return undefined;
  }
  try {
    const claims = JSON.parse(
      Buffer.from(body, 'base64url').toString()
    ) as Partial<CallerClaims>;
    if (
      typeof claims.atespace !== 'string' ||
      typeof claims.name !== 'string' ||
      typeof claims.exp !== 'number' ||
      claims.exp < now
    ) {
      return undefined;
    }
    return { atespace: claims.atespace, name: claims.name, exp: claims.exp };
  } catch {
    return undefined;
  }
}

function sign(secret: string, body: string): string {
  return createHmac('sha256', secret).update(body).digest('base64url');
}
