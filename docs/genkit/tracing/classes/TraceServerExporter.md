[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [tracing](../README.md) / TraceServerExporter

# Class: TraceServerExporter

Exports collected OpenTelemetetry spans to the telemetry server.

## Implements

- `SpanExporter`

## Constructors

### new TraceServerExporter()

> **new TraceServerExporter**(): [`TraceServerExporter`](TraceServerExporter.md)

#### Returns

[`TraceServerExporter`](TraceServerExporter.md)

## Methods

### export()

> **export**(`spans`, `resultCallback`): `void`

Export spans.

#### Parameters

##### spans

`ReadableSpan`[]

##### resultCallback

(`result`) => `void`

#### Returns

`void`

#### Implementation of

`SpanExporter.export`

#### Defined in

core/lib/tracing/exporter.d.ts:34

***

### forceFlush()

> **forceFlush**(): `Promise`\<`void`\>

Exports any pending spans in exporter

#### Returns

`Promise`\<`void`\>

#### Implementation of

`SpanExporter.forceFlush`

#### Defined in

core/lib/tracing/exporter.d.ts:47

***

### shutdown()

> **shutdown**(): `Promise`\<`void`\>

Shutdown the exporter.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`SpanExporter.shutdown`

#### Defined in

core/lib/tracing/exporter.d.ts:38
