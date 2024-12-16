[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / FlowFn

# Type Alias: FlowFn()\<I, O, S\>

> **FlowFn**\<`I`, `O`, `S`\>: (`input`, `streamingCallback`) => `Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\> \| [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>

Function to be executed in the flow.

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **S** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Parameters

### input

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>

### streamingCallback

`FlowSideChannel`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`S`\>\>

## Returns

`Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\> \| [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>

## Defined in

core/lib/flow.d.ts:116
