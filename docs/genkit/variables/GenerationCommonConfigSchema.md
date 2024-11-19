# Variable: GenerationCommonConfigSchema

```ts
const GenerationCommonConfigSchema: ZodObject<{
  maxOutputTokens: ZodOptional<ZodNumber>;
  stopSequences: ZodOptional<ZodArray<ZodString, "many">>;
  temperature: ZodOptional<ZodNumber>;
  topK: ZodOptional<ZodNumber>;
  topP: ZodOptional<ZodNumber>;
  version: ZodOptional<ZodString>;
 }, "strip", ZodTypeAny, {
  maxOutputTokens: number;
  stopSequences: string[];
  temperature: number;
  topK: number;
  topP: number;
  version: string;
 }, {
  maxOutputTokens: number;
  stopSequences: string[];
  temperature: number;
  topK: number;
  topP: number;
  version: string;
}>;
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `maxOutputTokens` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\> | - | ai/lib/model.d.ts:929 |
| `stopSequences` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\> | - | ai/lib/model.d.ts:932 |
| `temperature` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\> | - | ai/lib/model.d.ts:928 |
| `topK` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\> | - | ai/lib/model.d.ts:930 |
| `topP` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\> | - | ai/lib/model.d.ts:931 |
| `version` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\> | A specific version of a model family, e.g. `gemini-1.0-pro-001` for the `gemini-1.0-pro` family. | ai/lib/model.d.ts:927 |

## Defined in

ai/lib/model.d.ts:925
