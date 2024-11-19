# Type Alias: ZodFormattedError\<T, U\>

```ts
type ZodFormattedError<T, U>: {
  _errors: U[];
} & recursiveZodFormattedError<NonNullable<T>>;
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `_errors` | `U`[] | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:132 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `U` | `string` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:131
