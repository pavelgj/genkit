[**genkitx-pinecone**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkitx-pinecone](../README.md) / configurePineconeIndexer

# Function: configurePineconeIndexer()

> **configurePineconeIndexer**\<`EmbedderCustomOptions`\>(`ai`, `params`): [`IndexerAction`](../../genkit/type-aliases/IndexerAction.md)\<[`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodObject`](../../genkit/namespaces/z/classes/ZodObject.md)\<\{ `namespace`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../../genkit/namespaces/z/classes/ZodString.md)\>; \}, `"strip"`, [`ZodTypeAny`](../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `namespace`: `string`; \}, \{ `namespace`: `string`; \}\>\>\>

Configures a Pinecone indexer.

## Type Parameters

• **EmbedderCustomOptions** *extends* [`ZodType`](../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `EmbedderCustomOptions`\>

## Parameters

### ai

`Genkit`

### params

#### clientParams

`PineconeConfiguration`

#### embedder

[`EmbedderArgument`](../../genkit/type-aliases/EmbedderArgument.md)\<`EmbedderCustomOptions`\>

#### embedderOptions

[`TypeOf`](../../genkit/namespaces/z/type-aliases/TypeOf.md)\<`EmbedderCustomOptions`\>

#### indexId

`string`

#### textKey

`string`

## Returns

[`IndexerAction`](../../genkit/type-aliases/IndexerAction.md)\<[`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodObject`](../../genkit/namespaces/z/classes/ZodObject.md)\<\{ `namespace`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../../genkit/namespaces/z/classes/ZodString.md)\>; \}, `"strip"`, [`ZodTypeAny`](../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `namespace`: `string`; \}, \{ `namespace`: `string`; \}\>\>\>

## Defined in

[plugins/pinecone/src/index.ts:170](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/pinecone/src/index.ts#L170)
