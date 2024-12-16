[**@genkit-ai/firebase**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/firebase](../README.md) / [/](../README.md) / defineFirestoreRetriever

# Function: defineFirestoreRetriever()

> **defineFirestoreRetriever**(`ai`, `config`): [`RetrieverAction`](../../../genkit/type-aliases/RetrieverAction.md)

Define a retriever that uses vector similarity search to retrieve documents from Firestore.
You must create a vector index on the associated field before you can perform nearest-neighbor
search.

## Parameters

### ai

`Genkit`

### config

#### collection

`string`

The name of the collection from which to query.

#### contentField

`string` \| (`snap`) => (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]

The name of the field containing the document content you wish to return.

#### distanceMeasure

`"EUCLIDEAN"` \| `"COSINE"` \| `"DOT_PRODUCT"`

The distance measure to use when comparing vectors. Defaults to 'COSINE'.

#### embedder

[`EmbedderArgument`](../../../genkit/type-aliases/EmbedderArgument.md)\<[`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)\>

The embedder to use with this retriever.

#### firestore

`Firestore`

The Firestore database instance from which to query.

#### label

`string`

Optional label for display in Developer UI.

#### metadataFields

`string`[] \| (`snap`) => `Record`\<`string`, `any`\>

A list of fields to include in the returned document metadata. If not supplied, all fields other
than the vector are included. Alternatively, provide a transform function to extract the desired
metadata fields from a snapshot.

#### name

`string`

The name of the retriever.

#### vectorField

`string`

The name of the field within the collection containing the vector data.

## Returns

[`RetrieverAction`](../../../genkit/type-aliases/RetrieverAction.md)

## Defined in

[plugins/firebase/src/firestoreRetriever.ts:72](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/firebase/src/firestoreRetriever.ts#L72)
