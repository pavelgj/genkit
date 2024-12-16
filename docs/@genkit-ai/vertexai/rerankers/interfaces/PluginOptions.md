[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [rerankers](../README.md) / PluginOptions

# Interface: PluginOptions

## Extends

- `CommonPluginOptions`.`RerankerOptions`

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

### projectId?

> `optional` **projectId**: `string`

The Google Cloud project id to call.

#### Inherited from

`CommonPluginOptions.projectId`

#### Defined in

[plugins/vertexai/src/common/types.ts:22](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/common/types.ts#L22)

***

### rerankers

> **rerankers**: (`string` \| `VertexRerankerConfig`)[]

Configure reranker options

#### Inherited from

`RerankerOptions.rerankers`

#### Defined in

[plugins/vertexai/src/rerankers/types.ts:52](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/rerankers/types.ts#L52)
