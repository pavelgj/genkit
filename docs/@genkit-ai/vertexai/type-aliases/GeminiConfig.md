[**@genkit-ai/vertexai**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/vertexai](../README.md) / [/](../README.md) / GeminiConfig

# Type Alias: GeminiConfig

> **GeminiConfig**: `object`

Gemini model configuration options.

E.g.
```js
  config: {
    temperature: 0.9,
    maxOutputTokens: 300,
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_NONE',
      },
    ],
    functionCallingConfig: {
      mode: 'ANY',
    }
  }
```

## Type declaration

### functionCallingConfig?

> `optional` **functionCallingConfig**: `object`

Function calling options.

E.g. forced tool call:

```js
  config: {
    functionCallingConfig: {
      mode: 'ANY',
    }
  }
```

#### functionCallingConfig.allowedFunctionNames?

> `optional` **functionCallingConfig.allowedFunctionNames**: `string`[]

#### functionCallingConfig.mode?

> `optional` **functionCallingConfig.mode**: `"MODE_UNSPECIFIED"` \| `"AUTO"` \| `"ANY"` \| `"NONE"`

### googleSearchRetrieval?

> `optional` **googleSearchRetrieval**: `object`

Google Search retrieval options.

```js
  config: {
    googleSearchRetrieval: {
      disableAttribution: true,
    }
  }
```

#### googleSearchRetrieval.disableAttribution?

> `optional` **googleSearchRetrieval.disableAttribution**: `boolean`

### location?

> `optional` **location**: `string`

GCP region (e.g. us-central1)

### maxOutputTokens?

> `optional` **maxOutputTokens**: `number`

### safetySettings?

> `optional` **safetySettings**: `object`[]

Safety filter settings. See: https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/configure-safety-filters#configurable-filters

E.g.

```js
config: {
  safetySettings: [
    {
      category: 'HARM_CATEGORY_HATE_SPEECH',
      threshold: 'BLOCK_LOW_AND_ABOVE',
    },
    {
      category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
    {
      category: 'HARM_CATEGORY_HARASSMENT',
      threshold: 'BLOCK_ONLY_HIGH',
    },
    {
      category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
      threshold: 'BLOCK_NONE',
    },
  ],
}
```

### stopSequences?

> `optional` **stopSequences**: `string`[]

### temperature?

> `optional` **temperature**: `number`

### topK?

> `optional` **topK**: `number`

### topP?

> `optional` **topP**: `number`

### version?

> `optional` **version**: `string`

### vertexRetrieval?

> `optional` **vertexRetrieval**: `object`

Vertex retrieval options.

E.g.

```js
  config: {
    vertexRetrieval: {
      datastore: {
        projectId: 'your-cloud-project',
        location: 'us-central1',
        collection: 'your-collection',
      },
      disableAttribution: true,
    }
  }
```

#### vertexRetrieval.datastore

> **vertexRetrieval.datastore**: `object`

#### vertexRetrieval.datastore.dataStoreId

> **vertexRetrieval.datastore.dataStoreId**: `string`

#### vertexRetrieval.datastore.location?

> `optional` **vertexRetrieval.datastore.location**: `string`

#### vertexRetrieval.datastore.projectId?

> `optional` **vertexRetrieval.datastore.projectId**: `string`

#### vertexRetrieval.disableAttribution?

> `optional` **vertexRetrieval.disableAttribution**: `boolean`

## Defined in

[plugins/vertexai/src/gemini.ts:201](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/vertexai/src/gemini.ts#L201)
