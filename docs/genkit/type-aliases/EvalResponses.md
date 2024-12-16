[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / EvalResponses

# Type Alias: EvalResponses

> **EvalResponses**: `object`[]

## Type declaration

### evaluation

> **evaluation**: \{ `details`: [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<\{ `reasoning`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; \}, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), `"passthrough"`\>; `error`: `string`; `id`: `string`; `score`: `string` \| `number` \| `boolean`; \} \| `object`[]

### sampleIndex?

> `optional` **sampleIndex**: `number`

### spanId?

> `optional` **spanId**: `string`

### testCaseId

> **testCaseId**: `string`

### traceId?

> `optional` **traceId**: `string`

## Defined in

ai/lib/evaluator.d.ts:296
