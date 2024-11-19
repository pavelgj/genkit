# Function: indexerRef()

```ts
function indexerRef<CustomOptionsSchema>(options: IndexerReference<CustomOptionsSchema>): IndexerReference<CustomOptionsSchema>
```

Helper method to configure a [IndexerReference](../interfaces/IndexerReference.md) to a plugin.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptionsSchema` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptionsSchema`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`IndexerReference`](../interfaces/IndexerReference.md)\<`CustomOptionsSchema`\> |

## Returns

[`IndexerReference`](../interfaces/IndexerReference.md)\<`CustomOptionsSchema`\>

## Defined in

ai/lib/retriever.d.ts:431
