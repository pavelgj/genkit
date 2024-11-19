# Type Alias: typeToFlattenedError\<T, U\>

```ts
type typeToFlattenedError<T, U>: {
  fieldErrors: { [P in allKeys<T>]?: U[] };
  formErrors: U[];
};
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `U` | `string` |

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `fieldErrors` | `{ [P in allKeys<T>]?: U[] }` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:8 |
| `formErrors` | `U`[] | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:7 |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:6
