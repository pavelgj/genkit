# Function: evaluatorRef()

```ts
function evaluatorRef<CustomOptionsSchema>(options: EvaluatorReference<CustomOptionsSchema>): EvaluatorReference<CustomOptionsSchema>
```

Helper method to configure a [EvaluatorReference](../interfaces/EvaluatorReference.md) to a plugin.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptionsSchema` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptionsSchema`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`EvaluatorReference`](../interfaces/EvaluatorReference.md)\<`CustomOptionsSchema`\> |

## Returns

[`EvaluatorReference`](../interfaces/EvaluatorReference.md)\<`CustomOptionsSchema`\>

## Defined in

ai/lib/evaluator.d.ts:392
