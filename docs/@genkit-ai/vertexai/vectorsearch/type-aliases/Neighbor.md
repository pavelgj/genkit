[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / Neighbor

# Type Alias: Neighbor

> **Neighbor**: `object`

## Type declaration

### datapoint?

> `optional` **datapoint**: `object`

#### datapoint.crowdingTag?

> `optional` **datapoint.crowdingTag**: `object`

#### datapoint.crowdingTag.crowdingAttribute?

> `optional` **datapoint.crowdingTag.crowdingAttribute**: `string`

#### datapoint.datapointId?

> `optional` **datapoint.datapointId**: `string`

#### datapoint.featureVector?

> `optional` **datapoint.featureVector**: `number`[]

#### datapoint.numericRestricts?

> `optional` **datapoint.numericRestricts**: `object`[]

#### datapoint.restricts?

> `optional` **datapoint.restricts**: `object`[]

#### datapoint.sparseEmbedding?

> `optional` **datapoint.sparseEmbedding**: `object`

#### datapoint.sparseEmbedding.dimensions?

> `optional` **datapoint.sparseEmbedding.dimensions**: (`string` \| `number`)[]

#### datapoint.sparseEmbedding.values?

> `optional` **datapoint.sparseEmbedding.values**: `number`[]

### distance?

> `optional` **distance**: `number`

### sparseDistance?

> `optional` **sparseDistance**: `number`

## Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/types.ts:119](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/types.ts#L119)
