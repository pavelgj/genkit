[**genkitx-ollama**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkitx-ollama](../README.md) / OllamaPluginParams

# Interface: OllamaPluginParams

Parameters for the Ollama plugin configuration.

## Properties

### embedders?

> `optional` **embedders**: `EmbeddingModelDefinition`[]

Array of embedding models to be defined.

```ts
const ai = genkit({
  plugins: [
    ollama({
      serverAddress: 'http://localhost:11434',
      embedders: [{ name: 'nomic-embed-text', dimensions: 768 }],
    }),
  ],
});
```

#### Defined in

[types.ts:83](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/ollama/src/types.ts#L83)

***

### models?

> `optional` **models**: `ModelDefinition`[]

Array of models to be defined.

```ts
const ai = genkit({
  plugins: [
    ollama({
      models: [{ name: 'gemma' }],
      serverAddress: 'http://127.0.0.1:11434', // default local address
    }),
  ],
});
```

#### Defined in

[types.ts:67](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/ollama/src/types.ts#L67)

***

### requestHeaders?

> `optional` **requestHeaders**: `RequestHeaders`

Optional request headers, which can be either static or dynamically generated.

```ts
const ai = genkit({
  plugins: [
    ollama({
      models: [...],
      serverAddress: 'https://my-deployment.server.address',
      requestHeaders: async (params) => {
        const headers = await fetchAuthHeaders(params.serverAddress);
        return { Authorization: headers['Authorization'] };
      },
    }),
  ],
});
```

#### Defined in

[types.ts:108](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/ollama/src/types.ts#L108)

***

### serverAddress

> **serverAddress**: `string`

The address of the Ollama server.

#### Defined in

[types.ts:88](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/ollama/src/types.ts#L88)
