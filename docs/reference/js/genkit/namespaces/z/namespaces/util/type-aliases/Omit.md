# Type Alias: Omit\<T, K\>

```ts
type Omit<T, K>: Pick<T, Exclude<keyof T, K>>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` *extends* keyof `T` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/util.d.ts:7
