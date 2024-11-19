# Interface: ZodObjectDef\<T, UnknownKeys, Catchall\>

## Extends

- [`ZodTypeDef`](ZodTypeDef.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md) | [`ZodRawShape`](../type-aliases/ZodRawShape.md) |
| `UnknownKeys` *extends* [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md) | [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md) |
| `Catchall` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| `catchall` | `Catchall` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:506 |
| `description?` | `string` | [`ZodTypeDef`](ZodTypeDef.md).`description` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:23 |
| `errorMap?` | [`ZodErrorMap`](../type-aliases/ZodErrorMap.md) | [`ZodTypeDef`](ZodTypeDef.md).`errorMap` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:22 |
| `shape` | () => `T` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:505 |
| `typeName` | `ZodObject` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:504 |
| `unknownKeys` | `UnknownKeys` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:507 |
