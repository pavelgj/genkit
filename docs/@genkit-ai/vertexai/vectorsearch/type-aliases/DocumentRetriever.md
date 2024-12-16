[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / DocumentRetriever

# Type Alias: DocumentRetriever()\<Options\>

> **DocumentRetriever**\<`Options`\>: (`docIds`, `options`?) => `Promise`\<[`Document`](../../../../genkit/classes/Document.md)[]\>

A document retriever function that takes an array of Neighbors from Vertex AI Vector Search query result, and resolves to a list of documents.
Also takes an options object that can be used to configure the retriever.

## Type Parameters

• **Options** *extends* `object` = \{ `k`: `number`; \}

## Parameters

### docIds

[`Neighbor`](Neighbor.md)[]

### options?

`Options`

## Returns

`Promise`\<[`Document`](../../../../genkit/classes/Document.md)[]\>

## Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/types.ts:161](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/types.ts#L161)
