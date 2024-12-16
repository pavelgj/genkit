[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / RerankerParams

# Interface: RerankerParams\<CustomOptions\>

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

ai/lib/reranker.d.ts:458

***

### options?

> `optional` **options**: [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\>

#### Defined in

ai/lib/reranker.d.ts:459

***

### query

> **query**: `string` \| \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}

#### Defined in

ai/lib/reranker.d.ts:457

***

### reranker

> **reranker**: [`RerankerArgument`](../type-aliases/RerankerArgument.md)\<`CustomOptions`\>

#### Defined in

ai/lib/reranker.d.ts:456
