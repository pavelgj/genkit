[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / object

# Function: object()

> **object**\<`T`\>(`shape`, `params`?): [`ZodObject`](../classes/ZodObject.md)\<`T`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\>\[k\_1\] \}\>

## Type Parameters

• **T** *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

## Parameters

### shape

`T`

### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

## Returns

[`ZodObject`](../classes/ZodObject.md)\<`T`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\>\[k\_1\] \}\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1056
