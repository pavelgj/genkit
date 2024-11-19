# Interface: StreamableFlow()\<I, O, S\>

Streaming flow that can be called directly like a function.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `S` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

```ts
interface StreamableFlow(input?: TypeOf<I>, opts?: {
  withLocalAuthContext: unknown;
}): StreamingResponse<O, S>
```

Streaming flow that can be called directly like a function.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input`? | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\> |
| `opts`? | `object` |
| `opts.withLocalAuthContext`? | `unknown` |

## Returns

`StreamingResponse`\<`O`, `S`\>

## Defined in

core/lib/flow.d.ts:77

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `flow` | [`Flow`](../classes/Flow.md)\<`I`, `O`, `S`\> | core/lib/flow.d.ts:80 |
