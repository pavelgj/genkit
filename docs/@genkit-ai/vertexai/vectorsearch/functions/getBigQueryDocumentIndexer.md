[**@genkit-ai/vertexai**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/vertexai](../../README.md) / [vectorsearch](../README.md) / getBigQueryDocumentIndexer

# Function: getBigQueryDocumentIndexer()

> **getBigQueryDocumentIndexer**(`bq`, `tableId`, `datasetId`): [`DocumentIndexer`](../type-aliases/DocumentIndexer.md)\<\{\}\>

Creates a BigQuery Document Indexer.

This function returns a DocumentIndexer function that indexes documents
into a BigQuery table. Note this indexer does not handle duplicate
documents.

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

[`DocumentIndexer`](../type-aliases/DocumentIndexer.md)\<\{\}\>

- The DocumentIndexer function.

## Defined in

[plugins/vertexai/src/vectorsearch/vector\_search/bigquery.ts:109](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/vectorsearch/vector_search/bigquery.ts#L109)
