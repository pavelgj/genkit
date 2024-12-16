[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [evaluation](../README.md) / PluginOptions

# Interface: PluginOptions

## Extends

- `CommonPluginOptions`.`EvaluationOptions`

## Properties

### googleAuth?

> `optional` **googleAuth**: `GoogleAuthOptions`\<`JSONClient`\>

Provide custom authentication configuration for connecting to Vertex AI.

#### Inherited from

`CommonPluginOptions.googleAuth`

#### Defined in

[plugins/vertexai/src/common/types.ts:26](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/common/types.ts#L26)

***

### location

> **location**: `string`

The Google Cloud region to call.

#### Inherited from

`CommonPluginOptions.location`

#### Defined in

[plugins/vertexai/src/common/types.ts:24](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/common/types.ts#L24)

***

### metrics

> **metrics**: `VertexAIEvaluationMetric`[]

#### Inherited from

`EvaluationOptions.metrics`

#### Defined in

[plugins/vertexai/src/evaluation/types.ts:48](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/evaluation/types.ts#L48)

***

### projectId?

> `optional` **projectId**: `string`

The Google Cloud project id to call.

#### Inherited from

`CommonPluginOptions.projectId`

#### Defined in

[plugins/vertexai/src/common/types.ts:22](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/common/types.ts#L22)
