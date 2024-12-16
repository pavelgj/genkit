[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [tracing](../README.md) / SpanData

# Type Alias: SpanData

> **SpanData**: `object`

## Type declaration

### attributes

> **attributes**: `Record`\<`string`, `any`\>

### displayName

> **displayName**: `string`

### endTime

> **endTime**: `number`

### instrumentationLibrary

> **instrumentationLibrary**: `object`

#### instrumentationLibrary.name

> **instrumentationLibrary.name**: `string`

#### instrumentationLibrary.schemaUrl?

> `optional` **instrumentationLibrary.schemaUrl**: `string`

#### instrumentationLibrary.version?

> `optional` **instrumentationLibrary.version**: `string`

### links?

> `optional` **links**: `object`[]

### parentSpanId?

> `optional` **parentSpanId**: `string`

### sameProcessAsParentSpan?

> `optional` **sameProcessAsParentSpan**: `object`

#### sameProcessAsParentSpan.value

> **sameProcessAsParentSpan.value**: `boolean`

### spanId

> **spanId**: `string`

### spanKind

> **spanKind**: `string`

### startTime

> **startTime**: `number`

### status?

> `optional` **status**: `object`

#### status.code

> **status.code**: `number`

#### status.message?

> `optional` **status.message**: `string`

### timeEvents?

> `optional` **timeEvents**: `object`

#### timeEvents.timeEvent

> **timeEvents.timeEvent**: `object`[]

### traceId

> **traceId**: `string`

### truncated?

> `optional` **truncated**: `boolean`

## Defined in

core/lib/tracing/types.d.ts:407
