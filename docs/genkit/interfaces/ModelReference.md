[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / ModelReference

# Interface: ModelReference\<CustomOptions\>

## Type Parameters

• **CustomOptions** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### config?

> `optional` **config**: [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\>

#### Defined in

ai/lib/model.d.ts:7308

***

### configSchema?

> `optional` **configSchema**: `CustomOptions`

#### Defined in

ai/lib/model.d.ts:7305

***

### info?

> `optional` **info**: `object`

#### label?

> `optional` **label**: `string`

#### stage?

> `optional` **stage**: `"featured"` \| `"stable"` \| `"unstable"` \| `"legacy"` \| `"deprecated"`

#### supports?

> `optional` **supports**: `object`

##### supports.contentType?

> `optional` **supports.contentType**: `string`[]

##### supports.context?

> `optional` **supports.context**: `boolean`

##### supports.media?

> `optional` **supports.media**: `boolean`

##### supports.multiturn?

> `optional` **supports.multiturn**: `boolean`

##### supports.output?

> `optional` **supports.output**: `string`[]

##### supports.systemRole?

> `optional` **supports.systemRole**: `boolean`

##### supports.tools?

> `optional` **supports.tools**: `boolean`

#### versions?

> `optional` **versions**: `string`[]

#### Defined in

ai/lib/model.d.ts:7306

***

### name

> **name**: `string`

#### Defined in

ai/lib/model.d.ts:7304

***

### version?

> `optional` **version**: `string`

#### Defined in

ai/lib/model.d.ts:7307

## Methods

### withConfig()

> **withConfig**(`cfg`): [`ModelReference`](ModelReference.md)\<`CustomOptions`\>

#### Parameters

##### cfg

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\>

#### Returns

[`ModelReference`](ModelReference.md)\<`CustomOptions`\>

#### Defined in

ai/lib/model.d.ts:7309

***

### withVersion()

> **withVersion**(`version`): [`ModelReference`](ModelReference.md)\<`CustomOptions`\>

#### Parameters

##### version

`string`

#### Returns

[`ModelReference`](ModelReference.md)\<`CustomOptions`\>

#### Defined in

ai/lib/model.d.ts:7310
