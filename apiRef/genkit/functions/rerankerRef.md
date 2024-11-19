# Function: rerankerRef()

```ts
function rerankerRef<CustomOptionsSchema>(options: RerankerReference<CustomOptionsSchema>): RerankerReference<CustomOptionsSchema>
```

Helper method to configure a [RerankerReference](../interfaces/RerankerReference.md) to a plugin.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptionsSchema` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptionsSchema`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RerankerReference`](../interfaces/RerankerReference.md)\<`CustomOptionsSchema`\> |

## Returns

[`RerankerReference`](../interfaces/RerankerReference.md)\<`CustomOptionsSchema`\>

## Defined in

ai/lib/reranker.d.ts:483
