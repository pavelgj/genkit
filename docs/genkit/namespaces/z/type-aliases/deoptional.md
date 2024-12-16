[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / deoptional

# Type Alias: deoptional\<T\>

> **deoptional**\<`T`\>: `T` *extends* [`ZodOptional`](../classes/ZodOptional.md)\<infer U\> ? [`deoptional`](deoptional.md)\<`U`\> : `T` *extends* [`ZodNullable`](../classes/ZodNullable.md)\<infer U\> ? [`ZodNullable`](../classes/ZodNullable.md)\<[`deoptional`](deoptional.md)\<`U`\>\> : `T`

## Type Parameters

• **T** *extends* [`ZodTypeAny`](ZodTypeAny.md)

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:529
