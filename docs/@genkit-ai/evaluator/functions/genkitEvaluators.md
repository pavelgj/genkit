[**@genkit-ai/evaluator**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/evaluator](../README.md) / genkitEvaluators

# Function: genkitEvaluators()

> **genkitEvaluators**\<`ModelCustomOptions`, `EmbedderCustomOptions`\>(`ai`, `params`): [`EvaluatorAction`](../../../genkit/type-aliases/EvaluatorAction.md)\<[`ZodObject`](../../../genkit/namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../../../genkit/namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../../../genkit/namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../../../genkit/namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../../../genkit/namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../../../genkit/namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodString`](../../../genkit/namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}\>, [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)\>[]

Configures a Genkit evaluator

## Type Parameters

• **ModelCustomOptions** *extends* [`ZodType`](../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `ModelCustomOptions`\>

• **EmbedderCustomOptions** *extends* [`ZodType`](../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `EmbedderCustomOptions`\>

## Parameters

### ai

`Genkit`

### params

[`PluginOptions`](../interfaces/PluginOptions.md)\<`ModelCustomOptions`, `EmbedderCustomOptions`\>

## Returns

[`EvaluatorAction`](../../../genkit/type-aliases/EvaluatorAction.md)\<[`ZodObject`](../../../genkit/namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../../../genkit/namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../../../genkit/namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../../../genkit/namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../../../genkit/namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../../../genkit/namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodString`](../../../genkit/namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}\>, [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)\>[]

## Defined in

[plugins/evaluators/src/index.ts:89](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/evaluators/src/index.ts#L89)
