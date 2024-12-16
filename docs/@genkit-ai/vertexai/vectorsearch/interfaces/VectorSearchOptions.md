[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / VectorSearchOptions

# Interface: VectorSearchOptions\<EmbedderCustomOptions, IndexerOptions, RetrieverOptions\>

## Type Parameters

• **EmbedderCustomOptions** *extends* [`ZodTypeAny`](../../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

• **IndexerOptions** *extends* `object`

• **RetrieverOptions** *extends* `object`

## Properties

### deployedIndexId

> **deployedIndexId**: `string`

#### Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/types.ts:179](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/types.ts#L179)

***

### documentIndexer

> **documentIndexer**: [`DocumentIndexer`](../type-aliases/DocumentIndexer.md)\<`IndexerOptions`\>

#### Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/types.ts:185](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/types.ts#L185)

***

### documentRetriever

> **documentRetriever**: [`DocumentRetriever`](../type-aliases/DocumentRetriever.md)\<`RetrieverOptions`\>

#### Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/types.ts:184](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/types.ts#L184)

***

### embedder?

> `optional` **embedder**: [`EmbedderReference`](../../../../genkit/interfaces/EmbedderReference.md)\<`EmbedderCustomOptions`\>

#### Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/types.ts:187](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/types.ts#L187)

***

### embedderOptions?

> `optional` **embedderOptions**: [`TypeOf`](../../../../genkit/namespaces/z/type-aliases/TypeOf.md)\<`EmbedderCustomOptions`\>

#### Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/types.ts:188](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/types.ts#L188)

***

### indexEndpointId

> **indexEndpointId**: `string`

#### Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/types.ts:180](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/types.ts#L180)

***

### indexId

> **indexId**: `string`

#### Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/types.ts:182](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/types.ts#L182)

***

### publicDomainName

> **publicDomainName**: `string`

#### Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/types.ts:181](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/types.ts#L181)
