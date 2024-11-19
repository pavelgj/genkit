# Function: retrieverRef()

```ts
function retrieverRef<CustomOptionsSchema>(options: RetrieverReference<CustomOptionsSchema>): RetrieverReference<CustomOptionsSchema>
```

Helper method to configure a [RetrieverReference](../interfaces/RetrieverReference.md) to a plugin.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptionsSchema` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptionsSchema`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RetrieverReference`](../interfaces/RetrieverReference.md)\<`CustomOptionsSchema`\> |

## Returns

[`RetrieverReference`](../interfaces/RetrieverReference.md)\<`CustomOptionsSchema`\>

## Defined in

ai/lib/retriever.d.ts:399
