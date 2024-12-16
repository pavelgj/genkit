[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / ModelRequest

# Interface: ModelRequest\<CustomOptionsSchema\>

ModelRequest represents the parameters that are passed to a model when generating content.

## Extends

- [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<*typeof* [`ModelRequestSchema`](../variables/ModelRequestSchema.md)\>

## Type Parameters

• **CustomOptionsSchema** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### config?

> `optional` **config**: [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptionsSchema`\>

#### Overrides

`z.infer.config`

#### Defined in

ai/lib/model.d.ts:1698

***

### docs?

> `optional` **docs**: `object`[]

#### content

> **content**: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]

#### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

#### Inherited from

`z.infer.docs`

#### Defined in

ai/lib/model.d.ts:1574

***

### messages

> **messages**: `object`[]

#### content

> **content**: (\{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]

#### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

#### role

> **role**: `"model"` \| `"tool"` \| `"system"` \| `"user"`

#### Inherited from

`z.infer.messages`

#### Defined in

ai/lib/model.d.ts:1510

***

### output?

> `optional` **output**: `object`

#### constrained?

> `optional` **constrained**: `boolean`

#### contentType?

> `optional` **contentType**: `string`

#### format?

> `optional` **format**: `string`

#### instructions?

> `optional` **instructions**: `string`

#### schema?

> `optional` **schema**: `Record`\<`string`, `any`\>

#### Inherited from

`z.infer.output`

#### Defined in

ai/lib/model.d.ts:1595

***

### tools?

> `optional` **tools**: `object`[]

#### description

> **description**: `string`

#### inputSchema?

> `optional` **inputSchema**: `null` \| `Record`\<`string`, `any`\>

#### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

#### name

> **name**: `string`

#### outputSchema?

> `optional` **outputSchema**: `null` \| `Record`\<`string`, `any`\>

#### Inherited from

`z.infer.tools`

#### Defined in

ai/lib/model.d.ts:1587
