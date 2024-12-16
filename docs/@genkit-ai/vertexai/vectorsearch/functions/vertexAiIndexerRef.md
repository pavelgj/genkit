[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / vertexAiIndexerRef

# Function: vertexAiIndexerRef()

> **vertexAiIndexerRef**(`params`): [`IndexerReference`](../../../../genkit/interfaces/IndexerReference.md)\<[`ZodOptional`](../../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodAny`](../../../../genkit/namespaces/z/classes/ZodAny.md)\>\>

Creates a reference to a Vertex AI indexer.

## Parameters

### params

The parameters for the indexer reference.

#### displayName

`string`

An optional display name for the indexer.

#### indexId

`string`

The ID of the Vertex AI index.

## Returns

[`IndexerReference`](../../../../genkit/interfaces/IndexerReference.md)\<[`ZodOptional`](../../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodAny`](../../../../genkit/namespaces/z/classes/ZodAny.md)\>\>

- The indexer reference object.

## Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/indexers.ts:34](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/indexers.ts#L34)
