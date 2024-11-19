# Function: embedderRef()

```ts
function embedderRef<CustomOptionsSchema>(options: EmbedderReference<CustomOptionsSchema>): EmbedderReference<CustomOptionsSchema>
```

Helper method to configure a [EmbedderReference](../interfaces/EmbedderReference.md) to a plugin.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptionsSchema` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptionsSchema`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`EmbedderReference`](../interfaces/EmbedderReference.md)\<`CustomOptionsSchema`\> |

## Returns

[`EmbedderReference`](../interfaces/EmbedderReference.md)\<`CustomOptionsSchema`\>

## Defined in

ai/lib/embedder.d.ts:218
