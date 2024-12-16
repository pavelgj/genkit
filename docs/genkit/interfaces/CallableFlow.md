[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / CallableFlow

# Interface: CallableFlow()\<I, O, S\>

Non-streaming flow that can be called directly like a function.

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **S** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

> **CallableFlow**(`input`?, `opts`?): `Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>

Non-streaming flow that can be called directly like a function.

## Parameters

### input?

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>

### opts?

`FlowCallOptions`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`S`\>\>

## Returns

`Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>

## Defined in

core/lib/flow.d.ts:76

## Properties

### flow

> **flow**: [`Flow`](../classes/Flow.md)\<`I`, `O`, `S`\>

#### Defined in

core/lib/flow.d.ts:78

## Methods

### stream()

> **stream**(`input`?, `opts`?): `StreamingResponse`\<`O`, `S`\>

#### Parameters

##### input?

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>

##### opts?

`FlowCallOptions`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`S`\>\>

#### Returns

`StreamingResponse`\<`O`, `S`\>

#### Defined in

core/lib/flow.d.ts:77
