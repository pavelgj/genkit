[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / getFirestoreDocumentRetriever

# Function: getFirestoreDocumentRetriever()

> **getFirestoreDocumentRetriever**(`db`, `collectionName`): [`DocumentRetriever`](../type-aliases/DocumentRetriever.md)\<\{ `k`: `number`; \}\>

Creates a Firestore Document Retriever.

This function returns a DocumentRetriever function that retrieves documents
from a Firestore collection based on the provided Vertex AI Vector Search neighbors.

## Parameters

### db

`Firestore`

The Firestore instance.

### collectionName

`string`

The name of the Firestore collection.

## Returns

[`DocumentRetriever`](../type-aliases/DocumentRetriever.md)\<\{ `k`: `number`; \}\>

- The DocumentRetriever function.

## Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/firestore.ts:30](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/firestore.ts#L30)
