[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [tracing](../README.md) / TraceData

# Type Alias: TraceData

> **TraceData**: `object`

## Type declaration

### displayName?

> `optional` **displayName**: `string`

### endTime?

> `optional` **endTime**: `number`

### spans

> **spans**: `Record`\<`string`, \{ `attributes`: `Record`\<`string`, `any`\>; `displayName`: `string`; `endTime`: `number`; `instrumentationLibrary`: \{ `name`: `string`; `schemaUrl`: `string`; `version`: `string`; \}; `links`: `object`[]; `parentSpanId`: `string`; `sameProcessAsParentSpan`: \{ `value`: `boolean`; \}; `spanId`: `string`; `spanKind`: `string`; `startTime`: `number`; `status`: \{ `code`: `number`; `message`: `string`; \}; `timeEvents`: \{ `timeEvent`: `object`[]; \}; `traceId`: `string`; `truncated`: `boolean`; \}\>

### startTime?

> `optional` **startTime**: `number`

### traceId

> **traceId**: `string`

## Defined in

core/lib/tracing/types.d.ts:712
