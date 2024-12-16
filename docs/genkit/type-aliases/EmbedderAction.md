[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / EmbedderAction

# Type Alias: EmbedderAction\<CustomOptions\>

> **EmbedderAction**\<`CustomOptions`\>: [`Action`](Action.md)\<*typeof* `EmbedRequestSchema`, *typeof* `EmbedResponseSchema`\> & `object`

Embedder action -- a subtype of [Action](Action.md) with input/output types for embedders.

## Type declaration

### \_\_configSchema?

> `optional` **\_\_configSchema**: `CustomOptions`

## Type Parameters

• **CustomOptions** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Defined in

ai/lib/embedder.d.ts:164
