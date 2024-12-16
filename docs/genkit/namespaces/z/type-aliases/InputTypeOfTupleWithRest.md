[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / InputTypeOfTupleWithRest

# Type Alias: InputTypeOfTupleWithRest\<T, Rest\>

> **InputTypeOfTupleWithRest**\<`T`, `Rest`\>: `Rest` *extends* [`ZodTypeAny`](ZodTypeAny.md) ? [`...InputTypeOfTuple<T>`, `...Rest["_input"][]`] : [`InputTypeOfTuple`](InputTypeOfTuple.md)\<`T`\>

## Type Parameters

• **T** *extends* [`ZodTupleItems`](ZodTupleItems.md) \| []

• **Rest** *extends* [`ZodTypeAny`](ZodTypeAny.md) \| `null` = `null`

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:656
