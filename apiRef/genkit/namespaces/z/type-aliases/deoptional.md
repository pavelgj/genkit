# Type Alias: deoptional\<T\>

```ts
type deoptional<T>: T extends ZodOptional<infer U> ? deoptional<U> : T extends ZodNullable<infer U> ? ZodNullable<deoptional<U>> : T;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodTypeAny`](ZodTypeAny.md) |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:529
