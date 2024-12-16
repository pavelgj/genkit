[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [retriever](../README.md) / RetrieverFn

# Type Alias: RetrieverFn()\<RetrieverOptions\>

> **RetrieverFn**\<`RetrieverOptions`\>: (`query`, `queryOpts`) => `Promise`\<`RetrieverResponse`\>

Retriever implementation function signature.

## Type Parameters

• **RetrieverOptions** *extends* [`ZodTypeAny`](../../namespaces/z/type-aliases/ZodTypeAny.md)

## Parameters

### query

[`Document`](../../classes/Document.md)

### queryOpts

[`TypeOf`](../../namespaces/z/type-aliases/TypeOf.md)\<`RetrieverOptions`\>

## Returns

`Promise`\<`RetrieverResponse`\>

## Defined in

ai/lib/retriever.d.ts:26
