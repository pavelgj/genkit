[**genkitx-chromadb**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkitx-chromadb](../README.md) / chromaIndexer

# Function: chromaIndexer()

> **chromaIndexer**\<`EmbedderCustomOptions`\>(`ai`, `params`): [`IndexerAction`](../../genkit/type-aliases/IndexerAction.md)\<[`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNull`](../../genkit/namespaces/z/classes/ZodNull.md)\>\>

Configures a Chroma indexer.

## Type Parameters

• **EmbedderCustomOptions** *extends* [`ZodType`](../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `EmbedderCustomOptions`\>

## Parameters

### ai

`Genkit`

### params

#### clientParams

`ChromaClientParams`

#### collectionName

`string`

#### createCollectionIfMissing

`boolean`

#### embedder

[`EmbedderArgument`](../../genkit/type-aliases/EmbedderArgument.md)\<`EmbedderCustomOptions`\>

#### embedderOptions

[`TypeOf`](../../genkit/namespaces/z/type-aliases/TypeOf.md)\<`EmbedderCustomOptions`\>

## Returns

[`IndexerAction`](../../genkit/type-aliases/IndexerAction.md)\<[`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNull`](../../genkit/namespaces/z/classes/ZodNull.md)\>\>

## Defined in

[plugins/chroma/src/index.ts:227](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/chroma/src/index.ts#L227)
