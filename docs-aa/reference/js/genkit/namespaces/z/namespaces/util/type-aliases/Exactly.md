# Type Alias: Exactly\<T, X\>

```ts
type Exactly<T, X>: T & Record<Exclude<keyof X, keyof T>, never>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `X` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/util.d.ts:10
