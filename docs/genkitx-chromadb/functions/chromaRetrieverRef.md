[**genkitx-chromadb**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkitx-chromadb](../README.md) / chromaRetrieverRef

# Function: chromaRetrieverRef()

> **chromaRetrieverRef**(`params`): [`RetrieverReference`](../../genkit/interfaces/RetrieverReference.md)\<[`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodObject`](../../genkit/namespaces/z/classes/ZodObject.md)\<[`extendShape`](../../genkit/namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `k`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../../genkit/namespaces/z/classes/ZodNumber.md)\>; \}, \{ `include`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodEnum`](../../genkit/namespaces/z/classes/ZodEnum.md)\<[`"documents"`, `"embeddings"`, `"metadatas"`, `"distances"`]\>, `"many"`\>\>; `where`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodType`](../../genkit/namespaces/z/classes/ZodType.md)\<`Where`, [`ZodTypeDef`](../../genkit/namespaces/z/interfaces/ZodTypeDef.md), `Where`\>\>; `whereDocument`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodType`](../../genkit/namespaces/z/classes/ZodType.md)\<`WhereDocument`, [`ZodTypeDef`](../../genkit/namespaces/z/interfaces/ZodTypeDef.md), `WhereDocument`\>\>; \}\>, `"strip"`, [`ZodTypeAny`](../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `include`: (`"documents"` \| `"embeddings"` \| `"metadatas"` \| `"distances"`)[]; `k`: `number`; `where`: `Where`; `whereDocument`: `WhereDocument`; \}, \{ `include`: (`"documents"` \| `"embeddings"` \| `"metadatas"` \| `"distances"`)[]; `k`: `number`; `where`: `Where`; `whereDocument`: `WhereDocument`; \}\>\>\>

## Parameters

### params

#### collectionName

`string`

#### displayName

`string`

## Returns

[`RetrieverReference`](../../genkit/interfaces/RetrieverReference.md)\<[`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodObject`](../../genkit/namespaces/z/classes/ZodObject.md)\<[`extendShape`](../../genkit/namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `k`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../../genkit/namespaces/z/classes/ZodNumber.md)\>; \}, \{ `include`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodEnum`](../../genkit/namespaces/z/classes/ZodEnum.md)\<[`"documents"`, `"embeddings"`, `"metadatas"`, `"distances"`]\>, `"many"`\>\>; `where`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodType`](../../genkit/namespaces/z/classes/ZodType.md)\<`Where`, [`ZodTypeDef`](../../genkit/namespaces/z/interfaces/ZodTypeDef.md), `Where`\>\>; `whereDocument`: [`ZodOptional`](../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodType`](../../genkit/namespaces/z/classes/ZodType.md)\<`WhereDocument`, [`ZodTypeDef`](../../genkit/namespaces/z/interfaces/ZodTypeDef.md), `WhereDocument`\>\>; \}\>, `"strip"`, [`ZodTypeAny`](../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `include`: (`"documents"` \| `"embeddings"` \| `"metadatas"` \| `"distances"`)[]; `k`: `number`; `where`: `Where`; `whereDocument`: `WhereDocument`; \}, \{ `include`: (`"documents"` \| `"embeddings"` \| `"metadatas"` \| `"distances"`)[]; `k`: `number`; `where`: `Where`; `whereDocument`: `WhereDocument`; \}\>\>\>

## Defined in

[plugins/chroma/src/index.ts:85](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/chroma/src/index.ts#L85)
