[**genkitx-pinecone**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkitx-pinecone](../README.md) / configurePineconeRetriever

# Function: configurePineconeRetriever()

> **configurePineconeRetriever**\<`EmbedderCustomOptions`\>(`ai`, `params`): [`RetrieverAction`](../../genkit/type-aliases/RetrieverAction.md)\<[`ZodObject`](../../genkit/namespaces/z/classes/ZodObject.md)\<[`extendShape`](../../genkit/namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `k`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../../genkit/namespaces/z/classes/ZodNumber.md)\>; \}, \{ `filter`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodRecord`](../../genkit/namespaces/z/classes/ZodRecord.md)\<[`ZodString`](../../genkit/namespaces/z/classes/ZodString.md), [`ZodAny`](../../genkit/namespaces/z/classes/ZodAny.md)\>\>; `k`: [`ZodNumber`](../../genkit/namespaces/z/classes/ZodNumber.md); `namespace`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../../genkit/namespaces/z/classes/ZodString.md)\>; `sparseVector`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodEffects`](../../genkit/namespaces/z/classes/ZodEffects.md)\<[`ZodObject`](../../genkit/namespaces/z/classes/ZodObject.md)\<\{ `indices`: [`ZodArray`](../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodNumber`](../../genkit/namespaces/z/classes/ZodNumber.md), `"many"`\>; `values`: [`ZodArray`](../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodNumber`](../../genkit/namespaces/z/classes/ZodNumber.md), `"many"`\>; \}, `"strip"`, [`ZodTypeAny`](../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `indices`: `number`[]; `values`: `number`[]; \}, \{ `indices`: `number`[]; `values`: `number`[]; \}\>, \{ `indices`: `number`[]; `values`: `number`[]; \}, \{ `indices`: `number`[]; `values`: `number`[]; \}\>\>; \}\>, `"strip"`, [`ZodTypeAny`](../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `filter`: `Record`\<`string`, `any`\>; `k`: `number`; `namespace`: `string`; `sparseVector`: \{ `indices`: `number`[]; `values`: `number`[]; \}; \}, \{ `filter`: `Record`\<`string`, `any`\>; `k`: `number`; `namespace`: `string`; `sparseVector`: \{ `indices`: `number`[]; `values`: `number`[]; \}; \}\>\>

Configures a Pinecone retriever.

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

[`RetrieverAction`](../../genkit/type-aliases/RetrieverAction.md)\<[`ZodObject`](../../genkit/namespaces/z/classes/ZodObject.md)\<[`extendShape`](../../genkit/namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `k`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../../genkit/namespaces/z/classes/ZodNumber.md)\>; \}, \{ `filter`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodRecord`](../../genkit/namespaces/z/classes/ZodRecord.md)\<[`ZodString`](../../genkit/namespaces/z/classes/ZodString.md), [`ZodAny`](../../genkit/namespaces/z/classes/ZodAny.md)\>\>; `k`: [`ZodNumber`](../../genkit/namespaces/z/classes/ZodNumber.md); `namespace`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../../genkit/namespaces/z/classes/ZodString.md)\>; `sparseVector`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodEffects`](../../genkit/namespaces/z/classes/ZodEffects.md)\<[`ZodObject`](../../genkit/namespaces/z/classes/ZodObject.md)\<\{ `indices`: [`ZodArray`](../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodNumber`](../../genkit/namespaces/z/classes/ZodNumber.md), `"many"`\>; `values`: [`ZodArray`](../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodNumber`](../../genkit/namespaces/z/classes/ZodNumber.md), `"many"`\>; \}, `"strip"`, [`ZodTypeAny`](../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `indices`: `number`[]; `values`: `number`[]; \}, \{ `indices`: `number`[]; `values`: `number`[]; \}\>, \{ `indices`: `number`[]; `values`: `number`[]; \}, \{ `indices`: `number`[]; `values`: `number`[]; \}\>\>; \}\>, `"strip"`, [`ZodTypeAny`](../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `filter`: `Record`\<`string`, `any`\>; `k`: `number`; `namespace`: `string`; `sparseVector`: \{ `indices`: `number`[]; `values`: `number`[]; \}; \}, \{ `filter`: `Record`\<`string`, `any`\>; `k`: `number`; `namespace`: `string`; `sparseVector`: \{ `indices`: `number`[]; `values`: `number`[]; \}; \}\>\>

## Defined in

[plugins/pinecone/src/index.ts:112](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/pinecone/src/index.ts#L112)
