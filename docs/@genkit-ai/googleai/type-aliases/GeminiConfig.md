[**@genkit-ai/googleai**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/googleai](../README.md) / GeminiConfig

# Type Alias: GeminiConfig

> **GeminiConfig**: `object`

## Type declaration

### codeExecution?

> `optional` **codeExecution**: `boolean` \| \{\}

### contextCache?

> `optional` **contextCache**: `boolean`

### functionCallingConfig?

> `optional` **functionCallingConfig**: `object`

#### functionCallingConfig.allowedFunctionNames?

> `optional` **functionCallingConfig.allowedFunctionNames**: `string`[]

#### functionCallingConfig.mode?

> `optional` **functionCallingConfig.mode**: `"MODE_UNSPECIFIED"` \| `"AUTO"` \| `"ANY"` \| `"NONE"`

### maxOutputTokens?

> `optional` **maxOutputTokens**: `number`

### safetySettings?

> `optional` **safetySettings**: `object`[]

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

## Defined in

[plugins/googleai/src/gemini.ts:95](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/googleai/src/gemini.ts#L95)
