[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / InputTypeOfTuple

# Type Alias: InputTypeOfTuple\<T\>

> **InputTypeOfTuple**\<`T`\>: [`AssertArray`](AssertArray.md)\<`{ [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_input"] : never }`\>

## Type Parameters

• **T** *extends* [`ZodTupleItems`](ZodTupleItems.md) \| []

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:653
