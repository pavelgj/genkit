[**@genkit-ai/checks**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/checks](../README.md) / PluginOptions

# Interface: PluginOptions

## Properties

### evaluation?

> `optional` **evaluation**: `object`

Configure Checks evaluators.

#### metrics

> **metrics**: `ChecksEvaluationMetric`[]

#### Defined in

[index.ts:36](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/checks/src/index.ts#L36)

***

### googleAuthOptions?

> `optional` **googleAuthOptions**: `GoogleAuthOptions`\<`JSONClient`\>

Provide custom authentication configuration for connecting to Checks API.

#### Defined in

[index.ts:34](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/checks/src/index.ts#L34)

***

### projectId?

> `optional` **projectId**: `string`

The Google Cloud project id to call. Must have quota for the Checks API.

#### Defined in

[index.ts:32](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/checks/src/index.ts#L32)
