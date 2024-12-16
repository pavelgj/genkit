[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / ZodDiscriminatedUnionDef

# Interface: ZodDiscriminatedUnionDef\<Discriminator, Options\>

## Extends

- [`ZodTypeDef`](ZodTypeDef.md)

## Type Parameters

• **Discriminator** *extends* `string`

• **Options** *extends* [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`string`\>[] = [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`string`\>[]

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

[`ZodTypeDef`](ZodTypeDef.md).[`description`](ZodTypeDef.md#description)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:23

***

### discriminator

> **discriminator**: `Discriminator`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:615

***

### errorMap?

> `optional` **errorMap**: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md)

#### Inherited from

[`ZodTypeDef`](ZodTypeDef.md).[`errorMap`](ZodTypeDef.md#errormap)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:22

***

### options

> **options**: `Options`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:616

***

### optionsMap

> **optionsMap**: `Map`\<[`Primitive`](../type-aliases/Primitive.md), [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`any`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:617

***

### typeName

> **typeName**: [`ZodDiscriminatedUnion`](../enumerations/ZodFirstPartyTypeKind.md#zoddiscriminatedunion)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:618
