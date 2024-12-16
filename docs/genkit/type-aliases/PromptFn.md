[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / PromptFn

# Type Alias: PromptFn()\<I, CustomOptionsSchema\>

> **PromptFn**\<`I`, `CustomOptionsSchema`\>: (`input`) => `Promise`\<[`GenerateRequest`](../interfaces/GenerateRequest.md)\<`CustomOptionsSchema`\>\>

Prompt implementation function signature.

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **CustomOptionsSchema** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Parameters

### input

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>

## Returns

`Promise`\<[`GenerateRequest`](../interfaces/GenerateRequest.md)\<`CustomOptionsSchema`\>\>

## Defined in

ai/lib/generate-OYA442tG.d.ts:27
