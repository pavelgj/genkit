[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / ZodRecordDef

# Interface: ZodRecordDef\<Key, Value\>

## Extends

- [`ZodTypeDef`](ZodTypeDef.md)

## Type Parameters

• **Key** *extends* [`KeySchema`](../type-aliases/KeySchema.md) = [`ZodString`](../classes/ZodString.md)

• **Value** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

## Properties

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

### keyType

> **keyType**: `Key`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:674

***

### typeName

> **typeName**: [`ZodRecord`](../enumerations/ZodFirstPartyTypeKind.md#zodrecord)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:675

***

### valueType

> **valueType**: `Value`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:673
