[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / vertexAiRetrieverRef

# Function: vertexAiRetrieverRef()

> **vertexAiRetrieverRef**(`params`): [`RetrieverReference`](../../../../genkit/interfaces/RetrieverReference.md)\<[`ZodOptional`](../../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodOptional`](../../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodObject`](../../../../genkit/namespaces/z/classes/ZodObject.md)\<[`extendShape`](../../../../genkit/namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `k`: [`ZodOptional`](../../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../../../../genkit/namespaces/z/classes/ZodNumber.md)\>; \}, \{\}\>, `"strip"`, [`ZodTypeAny`](../../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `k`: `number`; \}, \{ `k`: `number`; \}\>\>\>\>

Creates a reference to a Vertex AI retriever.

## Parameters

### params

The parameters for the retriever reference.

#### displayName

`string`

An optional display name for the retriever.

#### indexId

`string`

The ID of the Vertex AI index.

## Returns

[`RetrieverReference`](../../../../genkit/interfaces/RetrieverReference.md)\<[`ZodOptional`](../../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodOptional`](../../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodObject`](../../../../genkit/namespaces/z/classes/ZodObject.md)\<[`extendShape`](../../../../genkit/namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `k`: [`ZodOptional`](../../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../../../../genkit/namespaces/z/classes/ZodNumber.md)\>; \}, \{\}\>, `"strip"`, [`ZodTypeAny`](../../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `k`: `number`; \}, \{ `k`: `number`; \}\>\>\>\>

- The retriever reference object.

## Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/retrievers.ts:134](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/retrievers.ts#L134)
