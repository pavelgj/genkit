[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / EmbedderReference

# Interface: EmbedderReference\<CustomOptions\>

A reference object that can used to resolve an embedder instance. Include additional type information
about the specific embedder, e.g. custom config options schema.

## Type Parameters

• **CustomOptions** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### config?

> `optional` **config**: [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\>

#### Defined in

ai/lib/embedder.d.ts:246

***

### configSchema?

> `optional` **configSchema**: `CustomOptions`

#### Defined in

ai/lib/embedder.d.ts:244

***

### info?

> `optional` **info**: `object`

#### dimensions?

> `optional` **dimensions**: `number`

#### label?

> `optional` **label**: `string`

#### supports?

> `optional` **supports**: `object`

##### supports.input?

> `optional` **supports.input**: (`"text"` \| `"image"`)[]

##### supports.multilingual?

> `optional` **supports.multilingual**: `boolean`

#### Defined in

ai/lib/embedder.d.ts:245

***

### name

> **name**: `string`

#### Defined in

ai/lib/embedder.d.ts:243

***

### version?

> `optional` **version**: `string`

#### Defined in

ai/lib/embedder.d.ts:247
