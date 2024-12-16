[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / ParseContext

# Interface: ParseContext

## Properties

### common

> `readonly` **common**: `object`

#### async

> `readonly` **async**: `boolean`

#### contextualErrorMap?

> `readonly` `optional` **contextualErrorMap**: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md)

#### issues

> `readonly` **issues**: [`ZodIssue`](../type-aliases/ZodIssue.md)[]

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:18

***

### data

> `readonly` **data**: `any`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:26

***

### parent

> `readonly` **parent**: `null` \| [`ParseContext`](ParseContext.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:25

***

### parsedType

> `readonly` **parsedType**: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"map"` \| `"unknown"` \| `"nan"` \| `"integer"` \| `"float"` \| `"date"` \| `"null"` \| `"array"` \| `"promise"` \| `"void"` \| `"never"` \| `"set"`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:27

***

### path

> `readonly` **path**: [`ParsePath`](../type-aliases/ParsePath.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:23

***

### schemaErrorMap?

> `readonly` `optional` **schemaErrorMap**: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:24
