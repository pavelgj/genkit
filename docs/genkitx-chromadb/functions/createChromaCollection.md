[**genkitx-chromadb**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkitx-chromadb](../README.md) / createChromaCollection

# Function: createChromaCollection()

> **createChromaCollection**\<`EmbedderCustomOptions`\>(`ai`, `params`): `Promise`\<`Collection`\>

Helper function for creating Chroma collections.

## Type Parameters

• **EmbedderCustomOptions** *extends* [`ZodType`](../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `EmbedderCustomOptions`\>

## Parameters

### ai

`Genkit`

### params

#### clientParams

`ChromaClientParams`

#### embedder

[`EmbedderArgument`](../../genkit/type-aliases/EmbedderArgument.md)\<`EmbedderCustomOptions`\>

#### embedderOptions

[`TypeOf`](../../genkit/namespaces/z/type-aliases/TypeOf.md)\<`EmbedderCustomOptions`\>

#### metadata

`CollectionMetadata`

#### name

`string`

## Returns

`Promise`\<`Collection`\>

## Defined in

[plugins/chroma/src/index.ts:297](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/chroma/src/index.ts#L297)
