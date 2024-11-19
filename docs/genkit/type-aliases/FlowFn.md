# Type Alias: FlowFn()\<I, O, S\>

```ts
type FlowFn<I, O, S>: (input: TypeOf<I>, streamingCallback?: StreamingCallback<TypeOf<S>>) => Promise<TypeOf<O>> | TypeOf<O>;
```

Function to be executed in the flow.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `S` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\> |
| `streamingCallback`? | [`StreamingCallback`](StreamingCallback.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`S`\>\> |

## Returns

`Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\> \| [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>

## Defined in

core/lib/flow.d.ts:94
