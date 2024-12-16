[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / IndexerParams

# Interface: IndexerParams\<CustomOptions\>

Options passed to the index function.

## Type Parameters

• **CustomOptions** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### documents

> **documents**: `object`[]

#### content

> **content**: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]

#### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

#### Defined in

ai/lib/retriever.d.ts:408

***

### indexer

> **indexer**: [`IndexerArgument`](../type-aliases/IndexerArgument.md)\<`CustomOptions`\>

#### Defined in

ai/lib/retriever.d.ts:407

***

### options?

> `optional` **options**: [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\>

#### Defined in

ai/lib/retriever.d.ts:409
