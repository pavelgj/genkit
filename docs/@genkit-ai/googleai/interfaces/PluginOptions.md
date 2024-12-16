[**@genkit-ai/googleai**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/googleai](../README.md) / PluginOptions

# Interface: PluginOptions

## Properties

### apiKey?

> `optional` **apiKey**: `string`

#### Defined in

[plugins/googleai/src/index.ts:49](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/googleai/src/index.ts#L49)

***

### apiVersion?

> `optional` **apiVersion**: `string` \| `string`[]

#### Defined in

[plugins/googleai/src/index.ts:50](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/googleai/src/index.ts#L50)

***

### baseUrl?

> `optional` **baseUrl**: `string`

#### Defined in

[plugins/googleai/src/index.ts:51](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/googleai/src/index.ts#L51)

***

### models?

> `optional` **models**: (`string` \| [`ModelReference`](../../../genkit/interfaces/ModelReference.md)\<[`ZodObject`](../../../genkit/namespaces/z/classes/ZodObject.md)\<[`extendShape`](../../../genkit/namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `maxOutputTokens`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../../../genkit/namespaces/z/classes/ZodNumber.md)\>; `stopSequences`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodString`](../../../genkit/namespaces/z/classes/ZodString.md), `"many"`\>\>; `temperature`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../../../genkit/namespaces/z/classes/ZodNumber.md)\>; `topK`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../../../genkit/namespaces/z/classes/ZodNumber.md)\>; `topP`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../../../genkit/namespaces/z/classes/ZodNumber.md)\>; `version`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../../../genkit/namespaces/z/classes/ZodString.md)\>; \}, \{ `codeExecution`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodUnion`](../../../genkit/namespaces/z/classes/ZodUnion.md)\<[[`ZodBoolean`](../../../genkit/namespaces/z/classes/ZodBoolean.md), [`ZodObject`](../../../genkit/namespaces/z/classes/ZodObject.md)\<..., ..., ..., ..., ...\>]\>\>; `contextCache`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodBoolean`](../../../genkit/namespaces/z/classes/ZodBoolean.md)\>; `functionCallingConfig`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodObject`](../../../genkit/namespaces/z/classes/ZodObject.md)\<\{ `allowedFunctionNames`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<...\>; `mode`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<...\>; \}, `"strip"`, [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `allowedFunctionNames`: ... \| ...; `mode`: ... \| ... \| ... \| ... \| ...; \}, \{ `allowedFunctionNames`: ... \| ...; `mode`: ... \| ... \| ... \| ... \| ...; \}\>\>; `safetySettings`: [`ZodOptional`](../../../genkit/namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../../../genkit/namespaces/z/classes/ZodArray.md)\<[`ZodObject`](../../../genkit/namespaces/z/classes/ZodObject.md)\<\{ `category`: ...; `threshold`: ...; \}, `"strip"`, [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `category`: ...; `threshold`: ...; \}, \{ `category`: ...; `threshold`: ...; \}\>, `"many"`\>\>; \}\>, `"strip"`, [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md), \{ `codeExecution`: `boolean` \| \{\}; `contextCache`: `boolean`; `functionCallingConfig`: \{ `allowedFunctionNames`: `string`[]; `mode`: `"MODE_UNSPECIFIED"` \| `"AUTO"` \| `"ANY"` \| `"NONE"`; \}; `maxOutputTokens`: `number`; `safetySettings`: `object`[]; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}, \{ `codeExecution`: `boolean` \| \{\}; `contextCache`: `boolean`; `functionCallingConfig`: \{ `allowedFunctionNames`: `string`[]; `mode`: `"MODE_UNSPECIFIED"` \| `"AUTO"` \| `"ANY"` \| `"NONE"`; \}; `maxOutputTokens`: `number`; `safetySettings`: `object`[]; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}\>\>)[]

#### Defined in

[plugins/googleai/src/index.ts:52](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/googleai/src/index.ts#L52)
