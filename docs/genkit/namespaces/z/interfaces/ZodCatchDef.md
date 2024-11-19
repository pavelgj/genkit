# Interface: ZodCatchDef\<T\>

## Extends

- [`ZodTypeDef`](ZodTypeDef.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| `catchValue` | (`ctx`: \{ `error`: [`ZodError`](../classes/ZodError.md)\<`any`\>; `input`: `unknown`; \}) => `T`\[`"_input"`\] | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:878 |
| `description?` | `string` | [`ZodTypeDef`](ZodTypeDef.md).`description` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:23 |
| `errorMap?` | [`ZodErrorMap`](../type-aliases/ZodErrorMap.md) | [`ZodTypeDef`](ZodTypeDef.md).`errorMap` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:22 |
| `innerType` | `T` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:877 |
| `typeName` | `ZodCatch` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:882 |
