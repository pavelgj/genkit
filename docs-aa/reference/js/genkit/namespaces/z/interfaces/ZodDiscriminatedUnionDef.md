# Interface: ZodDiscriminatedUnionDef\<Discriminator, Options\>

## Extends

- [`ZodTypeDef`](ZodTypeDef.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Discriminator` *extends* `string` | - |
| `Options` *extends* [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`string`\>[] | [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`string`\>[] |

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| `description?` | `string` | [`ZodTypeDef`](ZodTypeDef.md).`description` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:23 |
| `discriminator` | `Discriminator` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:615 |
| `errorMap?` | [`ZodErrorMap`](../type-aliases/ZodErrorMap.md) | [`ZodTypeDef`](ZodTypeDef.md).`errorMap` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:22 |
| `options` | `Options` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:616 |
| `optionsMap` | `Map`\<[`Primitive`](../type-aliases/Primitive.md), [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`any`\>\> | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:617 |
| `typeName` | `ZodDiscriminatedUnion` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:618 |
