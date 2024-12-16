[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / EvaluatorAction

# Type Alias: EvaluatorAction\<DataPoint, CustomOptions\>

> **EvaluatorAction**\<`DataPoint`, `CustomOptions`\>: [`Action`](Action.md)\<*typeof* `EvalRequestSchema`, *typeof* [`EvalResponsesSchema`](../evaluator/variables/EvalResponsesSchema.md)\> & `object`

## Type declaration

### \_\_configSchema?

> `optional` **\_\_configSchema**: `CustomOptions`

### \_\_dataPointType?

> `optional` **\_\_dataPointType**: `DataPoint`

## Type Parameters

• **DataPoint** *extends* *typeof* [`BaseDataPointSchema`](../variables/BaseDataPointSchema.md) = *typeof* [`BaseDataPointSchema`](../variables/BaseDataPointSchema.md)

• **CustomOptions** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Defined in

ai/lib/evaluator.d.ts:298
