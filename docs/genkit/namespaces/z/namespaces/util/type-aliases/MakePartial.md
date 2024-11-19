# Type Alias: MakePartial\<T, K\>

```ts
type MakePartial<T, K>: Omit<T, K> & Partial<Pick<T, K>>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` *extends* keyof `T` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/util.d.ts:9
