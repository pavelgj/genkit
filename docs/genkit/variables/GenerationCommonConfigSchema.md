[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / GenerationCommonConfigSchema

# Variable: GenerationCommonConfigSchema

> `const` **GenerationCommonConfigSchema**: [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `maxOutputTokens`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `stopSequences`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; `temperature`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `topK`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `topP`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `version`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `maxOutputTokens`: `number`; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}, \{ `maxOutputTokens`: `number`; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}\>

Zod schema of a common config object.

## Defined in

ai/lib/model.d.ts:997
