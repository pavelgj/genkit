[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / EmbedderParams

# Interface: EmbedderParams\<CustomOptions\>

Options of an `embed` function.

## Type Parameters

• **CustomOptions** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### content

> **content**: `string` \| \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}

#### Defined in

ai/lib/embedder.d.ts:172

***

### embedder

> **embedder**: [`EmbedderArgument`](../type-aliases/EmbedderArgument.md)\<`CustomOptions`\>

#### Defined in

ai/lib/embedder.d.ts:171

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

#### Defined in

ai/lib/embedder.d.ts:173

***

### options?

> `optional` **options**: [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\>

#### Defined in

ai/lib/embedder.d.ts:174
