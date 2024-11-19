# Interface: CallableFlow()\<I, O\>

Non-streaming flow that can be called directly like a function.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

```ts
interface CallableFlow(input?: TypeOf<I>, opts?: {
  withLocalAuthContext: unknown;
}): Promise<TypeOf<O>>
```

Non-streaming flow that can be called directly like a function.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input`? | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\> |
| `opts`? | `object` |
| `opts.withLocalAuthContext`? | `unknown` |

## Returns

`Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>

## Defined in

core/lib/flow.d.ts:68

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `flow` | [`Flow`](../classes/Flow.md)\<`I`, `O`, [`ZodVoid`](../namespaces/z/classes/ZodVoid.md)\> | core/lib/flow.d.ts:71 |
