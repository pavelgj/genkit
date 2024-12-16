[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [model](../README.md) / DefineModelOptions

# Type Alias: DefineModelOptions\<CustomOptionsSchema\>

> **DefineModelOptions**\<`CustomOptionsSchema`\>: `object`

## Type Parameters

• **CustomOptionsSchema** *extends* [`ZodTypeAny`](../../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../../namespaces/z/type-aliases/ZodTypeAny.md)

## Type declaration

### configSchema?

> `optional` **configSchema**: `CustomOptionsSchema`

Custom options schema for this model.

### label?

> `optional` **label**: `string`

Descriptive name for this model e.g. 'Google AI - Gemini Pro'.

### name

> **name**: `string`

### supports?

> `optional` **supports**: [`ModelInfo`](ModelInfo.md)\[`"supports"`\]

Capabilities this model supports.

### use?

> `optional` **use**: [`ModelMiddleware`](ModelMiddleware.md)[]

Middleware to be used with this model.

### versions?

> `optional` **versions**: `string`[]

Known version names for this model, e.g. `gemini-1.0-pro-001`.

## Defined in

ai/lib/model.d.ts:7286
