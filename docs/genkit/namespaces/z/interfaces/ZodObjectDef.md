[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / ZodObjectDef

# Interface: ZodObjectDef\<T, UnknownKeys, Catchall\>

## Extends

- [`ZodTypeDef`](ZodTypeDef.md)

## Type Parameters

• **T** *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md) = [`ZodRawShape`](../type-aliases/ZodRawShape.md)

• **UnknownKeys** *extends* [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md) = [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md)

• **Catchall** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

## Properties

### catchall

> **catchall**: `Catchall`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:506

***

### description?

> `optional` **description**: `string`

#### Inherited from

[`ZodTypeDef`](ZodTypeDef.md).[`description`](ZodTypeDef.md#description)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:23

***

### errorMap?

> `optional` **errorMap**: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md)

#### Inherited from

[`ZodTypeDef`](ZodTypeDef.md).[`errorMap`](ZodTypeDef.md#errormap)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:22

***

### shape()

> **shape**: () => `T`

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:505

***

### typeName

> **typeName**: [`ZodObject`](../enumerations/ZodFirstPartyTypeKind.md#zodobject)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:504

***

### unknownKeys

> **unknownKeys**: `UnknownKeys`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:507
