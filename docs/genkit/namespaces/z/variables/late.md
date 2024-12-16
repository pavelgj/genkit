[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / late

# Variable: late

> `const` **late**: `object`

## Type declaration

### object()

> **object**: \<`T`\>(`shape`, `params`?) => [`ZodObject`](../classes/ZodObject.md)\<`T`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `{ [k in keyof addQuestionMarks<baseObjectOutputType<T>, any>]: addQuestionMarks<baseObjectOutputType<T>, any>[k] }`, `{ [k_1 in keyof baseObjectInputType<T>]: baseObjectInputType<T>[k_1] }`\>

#### Type Parameters

• **T** *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

##### shape

() => `T`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

[`ZodObject`](../classes/ZodObject.md)\<`T`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `{ [k in keyof addQuestionMarks<baseObjectOutputType<T>, any>]: addQuestionMarks<baseObjectOutputType<T>, any>[k] }`, `{ [k_1 in keyof baseObjectInputType<T>]: baseObjectInputType<T>[k_1] }`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:956
