# Variable: BaseDataPointSchema

```ts
const BaseDataPointSchema: ZodObject<{
  context: ZodOptional<ZodArray<ZodUnknown, "many">>;
  input: ZodUnknown;
  output: ZodOptional<ZodUnknown>;
  reference: ZodOptional<ZodUnknown>;
  testCaseId: ZodOptional<ZodString>;
  traceIds: ZodOptional<ZodArray<ZodString, "many">>;
 }, "strip", ZodTypeAny, {
  context: unknown[];
  input: unknown;
  output: unknown;
  reference: unknown;
  testCaseId: string;
  traceIds: string[];
 }, {
  context: unknown[];
  input: unknown;
  output: unknown;
  reference: unknown;
  testCaseId: string;
  traceIds: string[];
}>;
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `context` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\> | ai/lib/evaluator.d.ts:25 |
| `input` | [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md) | ai/lib/evaluator.d.ts:23 |
| `output` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\> | ai/lib/evaluator.d.ts:24 |
| `reference` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\> | ai/lib/evaluator.d.ts:26 |
| `testCaseId` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\> | ai/lib/evaluator.d.ts:27 |
| `traceIds` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\> | ai/lib/evaluator.d.ts:28 |

## Defined in

ai/lib/evaluator.d.ts:22
