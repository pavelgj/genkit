[**@genkit-ai/firebase**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/firebase](../../README.md) / [functions](../README.md) / onFlow

# Function: onFlow()

> **onFlow**\<`I`, `O`, `S`\>(`genkit`, `config`, `steps`): [`StreamingFunctionFlow`](../type-aliases/StreamingFunctionFlow.md)\<`I`, `O`, `S`\>

Creates a flow backed by Cloud Functions for Firebase gen2 HTTPS function.

## Type Parameters

• **I** *extends* [`ZodType`](../../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\>

• **O** *extends* [`ZodType`](../../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\>

• **S** *extends* [`ZodType`](../../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `S`\>

## Parameters

### genkit

`Genkit`

### config

`FunctionFlowConfig`\<`I`, `O`, `S`\>

### steps

[`FlowFn`](../../../../genkit/type-aliases/FlowFn.md)\<`I`, `O`, `S`\>

## Returns

[`StreamingFunctionFlow`](../type-aliases/StreamingFunctionFlow.md)\<`I`, `O`, `S`\>

## Defined in

[plugins/firebase/src/functions.ts:70](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/firebase/src/functions.ts#L70)
