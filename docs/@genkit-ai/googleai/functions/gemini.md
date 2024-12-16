[**@genkit-ai/googleai**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/googleai](../README.md) / gemini

# Function: gemini()

> **gemini**(`version`, `options`): [`ModelReference`](../../../genkit/interfaces/ModelReference.md)\<*typeof* `GeminiConfigSchema`\>

Returns a reference to a model that can be used in generate calls.

```js
await ai.generate({
  prompt: 'hi',
  model: gemini('gemini-1.5-flash')
});
```

## Parameters

### version

`GeminiVersionString`

### options

#### codeExecution

`boolean` \| \{\} = `...`

#### contextCache

`boolean` = `...`

#### functionCallingConfig

\{ `allowedFunctionNames`: `string`[]; `mode`: `"MODE_UNSPECIFIED"` \| `"AUTO"` \| `"ANY"` \| `"NONE"`; \} = `...`

#### functionCallingConfig.allowedFunctionNames

`string`[] = `...`

#### functionCallingConfig.mode

`"MODE_UNSPECIFIED"` \| `"AUTO"` \| `"ANY"` \| `"NONE"` = `...`

#### maxOutputTokens

`number`

#### safetySettings

`object`[] = `...`

#### stopSequences

`string`[]

#### temperature

`number`

#### topK

`number`

#### topP

`number`

#### version

`string`

## Returns

[`ModelReference`](../../../genkit/interfaces/ModelReference.md)\<*typeof* `GeminiConfigSchema`\>

## Defined in

[plugins/googleai/src/gemini.ts:239](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/googleai/src/gemini.ts#L239)
