[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / getFirestoreDocumentIndexer

# Function: getFirestoreDocumentIndexer()

> **getFirestoreDocumentIndexer**(`db`, `collectionName`): [`DocumentIndexer`](../type-aliases/DocumentIndexer.md)\<\{\}\>

Creates a Firestore Document Indexer.

This function returns a DocumentIndexer function that indexes documents
into a Firestore collection.

## Parameters

### db

`Firestore`

The Firestore instance.

### collectionName

`string`

The name of the Firestore collection.

## Returns

[`DocumentIndexer`](../type-aliases/DocumentIndexer.md)\<\{\}\>

- The DocumentIndexer function.

## Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/firestore.ts:66](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/firestore.ts#L66)
