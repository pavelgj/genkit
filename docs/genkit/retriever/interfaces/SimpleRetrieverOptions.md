[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [retriever](../README.md) / SimpleRetrieverOptions

# Interface: SimpleRetrieverOptions\<C, R\>

Simple retiriever options.

## Type Parameters

• **C** *extends* [`ZodTypeAny`](../../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../../namespaces/z/type-aliases/ZodTypeAny.md)

• **R** = `any`

## Properties

### configSchema?

> `optional` **configSchema**: `C`

A Zod schema containing any configuration info available beyond the query.

#### Defined in

ai/lib/retriever.d.ts:479

***

### content?

> `optional` **content**: `string` \| (`item`) => `string` \| (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]

Specifies how to extract content from the returned items.

- If a string, specifies the key of the returned item to extract as content.
- If a function, allows you to extract content as text or a document part.

#### Defined in

ai/lib/retriever.d.ts:486

***

### metadata?

> `optional` **metadata**: `string`[] \| (`item`) => `undefined` \| `Record`\<`string`, `any`\>

Specifies how to extract metadata from the returned items.

- If an array of strings, specifies list of keys to extract from returned objects.
- If a function, allows you to use custom behavior to extract metadata from returned items.

#### Defined in

ai/lib/retriever.d.ts:493

***

### name

> **name**: `string`

The name of the retriever you're creating.

#### Defined in

ai/lib/retriever.d.ts:477
