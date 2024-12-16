[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / RetrieverParams

# Interface: RetrieverParams\<CustomOptions\>

## Type Parameters

• **CustomOptions** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### options?

> `optional` **options**: [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\>

#### Defined in

ai/lib/retriever.d.ts:389

***

### query

> **query**: `string` \| \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}

#### Defined in

ai/lib/retriever.d.ts:388

***

### retriever

> **retriever**: [`RetrieverArgument`](../type-aliases/RetrieverArgument.md)\<`CustomOptions`\>

#### Defined in

ai/lib/retriever.d.ts:387
