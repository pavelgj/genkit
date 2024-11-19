# Interface: EvaluatorParams\<DataPoint, CustomOptions\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `DataPoint` *extends* *typeof* [`BaseDataPointSchema`](../variables/BaseDataPointSchema.md) | *typeof* [`BaseDataPointSchema`](../variables/BaseDataPointSchema.md) |
| `CustomOptions` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `dataset` | `Dataset`\<`DataPoint`\> | ai/lib/evaluator.d.ts:352 |
| `evalRunId?` | `string` | ai/lib/evaluator.d.ts:353 |
| `evaluator` | `EvaluatorArgument`\<`DataPoint`, `CustomOptions`\> | ai/lib/evaluator.d.ts:351 |
| `options?` | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\> | ai/lib/evaluator.d.ts:354 |
