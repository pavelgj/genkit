[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [tracing](../README.md) / SpanContextSchema

# Variable: SpanContextSchema

> `const` **SpanContextSchema**: [`ZodObject`](../../namespaces/z/classes/ZodObject.md)\<\{ `isRemote`: [`ZodOptional`](../../namespaces/z/classes/ZodOptional.md)\<[`ZodBoolean`](../../namespaces/z/classes/ZodBoolean.md)\>; `spanId`: [`ZodString`](../../namespaces/z/classes/ZodString.md); `traceFlags`: [`ZodNumber`](../../namespaces/z/classes/ZodNumber.md); `traceId`: [`ZodString`](../../namespaces/z/classes/ZodString.md); \}, `"strip"`, [`ZodTypeAny`](../../namespaces/z/type-aliases/ZodTypeAny.md), \{ `isRemote`: `boolean`; `spanId`: `string`; `traceFlags`: `number`; `traceId`: `string`; \}, \{ `isRemote`: `boolean`; `spanId`: `string`; `traceFlags`: `number`; `traceId`: `string`; \}\>

## Defined in

core/lib/tracing/types.d.ts:136
