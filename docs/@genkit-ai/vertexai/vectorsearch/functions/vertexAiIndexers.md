[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / vertexAiIndexers

# Function: vertexAiIndexers()

> **vertexAiIndexers**\<`EmbedderCustomOptions`\>(`ai`, `params`): [`IndexerAction`](../../../../genkit/type-aliases/IndexerAction.md)\<[`ZodTypeAny`](../../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)\>[]

Creates Vertex AI indexers.

This function returns a list of indexer actions for Vertex AI based on the provided
vector search options and embedder configurations.

## Type Parameters

• **EmbedderCustomOptions** *extends* [`ZodType`](../../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `EmbedderCustomOptions`\>

## Parameters

### ai

`Genkit`

### params

`VertexVectorSearchOptions`\<`EmbedderCustomOptions`\>

The parameters for creating the indexers.

## Returns

[`IndexerAction`](../../../../genkit/type-aliases/IndexerAction.md)\<[`ZodTypeAny`](../../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)\>[]

- An array of indexer actions.

## Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/indexers.ts:56](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/indexers.ts#L56)
