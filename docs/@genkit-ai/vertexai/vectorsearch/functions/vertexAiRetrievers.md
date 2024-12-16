[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / vertexAiRetrievers

# Function: vertexAiRetrievers()

> **vertexAiRetrievers**\<`EmbedderCustomOptions`\>(`ai`, `params`): [`RetrieverAction`](../../../../genkit/type-aliases/RetrieverAction.md)\<[`ZodTypeAny`](../../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)\>[]

Creates Vertex AI retrievers.

This function returns a list of retriever actions for Vertex AI based on the provided
vector search options and embedder configurations.

## Type Parameters

• **EmbedderCustomOptions** *extends* [`ZodType`](../../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `EmbedderCustomOptions`\>

## Parameters

### ai

`Genkit`

### params

`VertexVectorSearchOptions`\<`EmbedderCustomOptions`\>

The parameters for creating the retrievers.

## Returns

[`RetrieverAction`](../../../../genkit/type-aliases/RetrieverAction.md)\<[`ZodTypeAny`](../../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)\>[]

- An array of retriever actions.

## Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/retrievers.ts:36](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/retrievers.ts#L36)
