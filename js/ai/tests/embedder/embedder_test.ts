/**
 * Copyright 2026 Google LLC
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

import { GenkitError, z } from '@genkit-ai/core';
import { initNodeFeatures } from '@genkit-ai/core/node';
import { Registry } from '@genkit-ai/core/registry';
import * as assert from 'assert';
import { beforeEach, describe, it } from 'node:test';
import { Document } from '../../src/document.js';
import { defineEmbedder, embedMany } from '../../src/embedder.js';
import { GenkitAI } from '../../src/genkit-ai.js';

initNodeFeatures();

describe('embedMany', () => {
  let registry: Registry;

  beforeEach(() => {
    registry = new Registry();
  });

  it('sends a single batch when content length is within batchSize', async () => {
    const batches: string[][] = [];
    const seenOptions: unknown[] = [];
    const seenMetadata: unknown[] = [];
    const testEmbedder = defineEmbedder(
      registry,
      {
        name: 'test-embedder',
        configSchema: z.object({ dim: z.number().optional() }),
      },
      async (input, options) => {
        batches.push(input.map((d) => d.text));
        seenOptions.push(options);
        seenMetadata.push(input.map((d) => d.metadata));
        return {
          embeddings: input.map((d) => ({ embedding: [d.text.length] })),
        };
      }
    );

    const result = await embedMany(registry, {
      embedder: testEmbedder,
      content: ['a', 'bb', 'ccc'],
      metadata: { source: 'unit-test' },
      options: { dim: 1 },
      batchSize: 3,
    });

    assert.deepStrictEqual(batches, [['a', 'bb', 'ccc']]);
    assert.deepStrictEqual(seenOptions, [{ dim: 1 }]);
    assert.deepStrictEqual(seenMetadata, [
      [
        { source: 'unit-test' },
        { source: 'unit-test' },
        { source: 'unit-test' },
      ],
    ]);
    assert.deepStrictEqual(result, [
      { embedding: [1] },
      { embedding: [2] },
      { embedding: [3] },
    ]);
  });

  it('chunks into multiple batches and forwards options and metadata to each', async () => {
    const batches: string[][] = [];
    const seenOptions: unknown[] = [];
    const testEmbedder = defineEmbedder(
      registry,
      {
        name: 'test-embedder',
        configSchema: z.object({ task: z.string().optional() }),
      },
      async (input, options) => {
        batches.push(input.map((d) => d.text));
        seenOptions.push(options);
        return {
          embeddings: input.map((d) => ({
            embedding: [Number(d.text.replace('doc-', ''))],
          })),
        };
      }
    );

    const result = await embedMany(registry, {
      embedder: testEmbedder,
      content: ['doc-0', 'doc-1', 'doc-2', 'doc-3', 'doc-4'],
      options: { task: 'retrieval' },
      batchSize: 2,
    });

    assert.deepStrictEqual(batches, [
      ['doc-0', 'doc-1'],
      ['doc-2', 'doc-3'],
      ['doc-4'],
    ]);
    assert.deepStrictEqual(seenOptions, [
      { task: 'retrieval' },
      { task: 'retrieval' },
      { task: 'retrieval' },
    ]);
    assert.deepStrictEqual(result, [
      { embedding: [0] },
      { embedding: [1] },
      { embedding: [2] },
      { embedding: [3] },
      { embedding: [4] },
    ]);
  });

  it('defaults batchSize to 100 when omitted', async () => {
    const batchSizes: number[] = [];
    const testEmbedder = defineEmbedder(
      registry,
      { name: 'test-embedder' },
      async (input) => {
        batchSizes.push(input.length);
        return {
          embeddings: input.map((_, idx) => ({ embedding: [idx] })),
        };
      }
    );

    const content = Array.from({ length: 105 }, (_, i) => `doc-${i}`);
    const result = await embedMany(registry, {
      embedder: testEmbedder,
      content,
    });

    assert.deepStrictEqual(batchSizes, [100, 5]);
    assert.strictEqual(result.length, 105);
  });

  it('preserves input order when later batches resolve before earlier ones', async () => {
    const resolvers: Array<() => void> = [];
    const testEmbedder = defineEmbedder(
      registry,
      { name: 'out-of-order-embedder' },
      async (input) => {
        await new Promise<void>((resolve) => {
          resolvers.push(resolve);
        });
        return {
          embeddings: input.map((d) => ({
            embedding: [Number(d.text)],
          })),
        };
      }
    );

    const ai = new GenkitAI(registry);
    const pending = ai.embedMany({
      embedder: testEmbedder,
      content: ['0', '1', '2', '3', '4'],
      batchSize: 2,
    });

    // Wait for all three batch invocations to register their resolvers.
    while (resolvers.length < 3) {
      await new Promise((resolve) => setImmediate(resolve));
    }

    // Resolve batches in reverse order: batch 2, then batch 1, then batch 0.
    resolvers[2]();
    await new Promise((resolve) => setImmediate(resolve));
    resolvers[1]();
    await new Promise((resolve) => setImmediate(resolve));
    resolvers[0]();

    const result = await pending;
    assert.deepStrictEqual(result, [
      { embedding: [0] },
      { embedding: [1] },
      { embedding: [2] },
      { embedding: [3] },
      { embedding: [4] },
    ]);
  });

  it('handles DocumentData arrays and empty content', async () => {
    const batchSizes: number[] = [];
    const testEmbedder = defineEmbedder(
      registry,
      { name: 'doc-embedder' },
      async (input) => {
        batchSizes.push(input.length);
        return {
          embeddings: input.map((d) => ({ embedding: [d.text.length] })),
        };
      }
    );

    const empty = await embedMany(registry, {
      embedder: testEmbedder,
      content: [],
      batchSize: 2,
    });
    assert.deepStrictEqual(empty, []);

    const docs = [
      Document.fromText('one'),
      Document.fromText('two'),
      Document.fromText('three'),
    ];
    const result = await embedMany(registry, {
      embedder: testEmbedder,
      content: docs,
      batchSize: 2,
    });
    assert.deepStrictEqual(batchSizes, [0, 2, 1]);
    assert.deepStrictEqual(result, [
      { embedding: [3] },
      { embedding: [3] },
      { embedding: [5] },
    ]);
  });

  it('rejects invalid batchSize values without calling the embedder', async () => {
    let calls = 0;
    const testEmbedder = defineEmbedder(
      registry,
      { name: 'test-embedder' },
      async (input) => {
        calls++;
        return { embeddings: input.map(() => ({ embedding: [0] })) };
      }
    );

    for (const invalidBatchSize of [
      0,
      -1,
      -10,
      1.5,
      NaN,
      Infinity,
      -Infinity,
    ]) {
      await assert.rejects(
        () =>
          embedMany(registry, {
            embedder: testEmbedder,
            content: ['a', 'b'],
            batchSize: invalidBatchSize,
          }),
        (err: unknown) =>
          err instanceof GenkitError &&
          err.status === 'INVALID_ARGUMENT' &&
          err.message.includes('batchSize')
      );
    }

    assert.strictEqual(calls, 0);
  });
});
