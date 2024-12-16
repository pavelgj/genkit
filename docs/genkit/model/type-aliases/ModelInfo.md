[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [model](../README.md) / ModelInfo

# Type Alias: ModelInfo

> **ModelInfo**: `object`

Model info metadata.

## Type declaration

### label?

> `optional` **label**: `string`

### stage?

> `optional` **stage**: `"featured"` \| `"stable"` \| `"unstable"` \| `"legacy"` \| `"deprecated"`

### supports?

> `optional` **supports**: `object`

#### supports.contentType?

> `optional` **supports.contentType**: `string`[]

#### supports.context?

> `optional` **supports.context**: `boolean`

#### supports.media?

> `optional` **supports.media**: `boolean`

#### supports.multiturn?

> `optional` **supports.multiturn**: `boolean`

#### supports.output?

> `optional` **supports.output**: `string`[]

#### supports.systemRole?

> `optional` **supports.systemRole**: `boolean`

#### supports.tools?

> `optional` **supports.tools**: `boolean`

### versions?

> `optional` **versions**: `string`[]

## Defined in

ai/lib/model.d.ts:967
