[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / EvaluatorParams

# Interface: EvaluatorParams\<DataPoint, CustomOptions\>

## Type Parameters

• **DataPoint** *extends* *typeof* [`BaseDataPointSchema`](../variables/BaseDataPointSchema.md) = *typeof* [`BaseDataPointSchema`](../variables/BaseDataPointSchema.md)

• **CustomOptions** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### dataset

> **dataset**: [`Dataset`](../evaluator/type-aliases/Dataset.md)\<`DataPoint`\>

#### Defined in

ai/lib/evaluator.d.ts:352

***

### evalRunId?

> `optional` **evalRunId**: `string`

#### Defined in

ai/lib/evaluator.d.ts:353

***

### evaluator

> **evaluator**: [`EvaluatorArgument`](../evaluator/type-aliases/EvaluatorArgument.md)\<`DataPoint`, `CustomOptions`\>

#### Defined in

ai/lib/evaluator.d.ts:351

***

### options?

> `optional` **options**: [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\>

#### Defined in

ai/lib/evaluator.d.ts:354
