# Type Alias: EvaluatorAction\<DataPoint, CustomOptions\>

```ts
type EvaluatorAction<DataPoint, CustomOptions>: Action<typeof EvalRequestSchema, typeof EvalResponsesSchema> & {
  __configSchema: CustomOptions;
  __dataPointType: DataPoint;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `__configSchema`? | `CustomOptions` | ai/lib/evaluator.d.ts:300 |
| `__dataPointType`? | `DataPoint` | ai/lib/evaluator.d.ts:299 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `DataPoint` *extends* *typeof* [`BaseDataPointSchema`](../variables/BaseDataPointSchema.md) | *typeof* [`BaseDataPointSchema`](../variables/BaseDataPointSchema.md) |
| `CustomOptions` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Defined in

ai/lib/evaluator.d.ts:298
