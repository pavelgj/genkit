# Interface: ParseContext

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `common` | `readonly` | \{ `async`: `boolean`; `contextualErrorMap`: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md); `issues`: [`ZodIssue`](../type-aliases/ZodIssue.md)[]; \} | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:18 |
| `common.async` | `readonly` | `boolean` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:21 |
| `common.contextualErrorMap?` | `readonly` | [`ZodErrorMap`](../type-aliases/ZodErrorMap.md) | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:20 |
| `common.issues` | `readonly` | [`ZodIssue`](../type-aliases/ZodIssue.md)[] | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:19 |
| `data` | `readonly` | `any` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:26 |
| `parent` | `readonly` | `null` \| [`ParseContext`](ParseContext.md) | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:25 |
| `parsedType` | `readonly` | \| `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"map"` \| `"unknown"` \| `"nan"` \| `"integer"` \| `"float"` \| `"date"` \| `"null"` \| `"array"` \| `"promise"` \| `"void"` \| `"never"` \| `"set"` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:27 |
| `path` | `readonly` | [`ParsePath`](../type-aliases/ParsePath.md) | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:23 |
| `schemaErrorMap?` | `readonly` | [`ZodErrorMap`](../type-aliases/ZodErrorMap.md) | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:24 |
