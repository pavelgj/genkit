[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / DocumentIndexer

# Type Alias: DocumentIndexer()\<Options\>

> **DocumentIndexer**\<`Options`\>: (`docs`, `options`?) => `Promise`\<`string`[]\>

Indexer function that takes an array of documents, stores them in a database of the user's choice, and resolves to a list of document ids.
Also takes an options object that can be used to configure the indexer. Only Streaming Update Indexers are supported.

## Type Parameters

• **Options** *extends* `object` = \{\}

## Parameters

### docs

[`Document`](../../../../genkit/classes/Document.md)[]

### options?

`Options`

## Returns

`Promise`\<`string`[]\>

## Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/types.ts:168](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/types.ts#L168)
