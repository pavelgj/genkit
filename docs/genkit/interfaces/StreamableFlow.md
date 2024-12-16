[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / StreamableFlow

# Interface: ~~StreamableFlow()\<I, O, S\>~~

Streaming flow that can be called directly like a function.

## Deprecated

use [CallableFlow](CallableFlow.md)

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **S** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

> **StreamableFlow**(`input`?, `opts`?): `StreamingResponse`\<`O`, `S`\>

Streaming flow that can be called directly like a function.

## Parameters

### input?

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>

### opts?

`FlowCallOptions`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`S`\>\>

## Returns

`StreamingResponse`\<`O`, `S`\>

## Deprecated

use [CallableFlow](CallableFlow.md)

## Defined in

core/lib/flow.d.ts:85

## Properties

### ~~flow~~

> **flow**: [`Flow`](../classes/Flow.md)\<`I`, `O`, `S`\>

#### Defined in

core/lib/flow.d.ts:86
