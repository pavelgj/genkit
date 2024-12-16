[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / getBigQueryDocumentRetriever

# Function: getBigQueryDocumentRetriever()

> **getBigQueryDocumentRetriever**(`bq`, `tableId`, `datasetId`): [`DocumentRetriever`](../type-aliases/DocumentRetriever.md)\<\{ `k`: `number`; \}\>

Creates a BigQuery Document Retriever.

This function returns a DocumentRetriever function that retrieves documents
from a BigQuery table based on the provided neighbors.

## Parameters

### bq

`BigQuery`

The BigQuery instance.

### tableId

`string`

The ID of the BigQuery table.

### datasetId

`string`

The ID of the BigQuery dataset.

## Returns

[`DocumentRetriever`](../type-aliases/DocumentRetriever.md)\<\{ `k`: `number`; \}\>

- The DocumentRetriever function.

## Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/bigquery.ts:34](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/bigquery.ts#L34)
