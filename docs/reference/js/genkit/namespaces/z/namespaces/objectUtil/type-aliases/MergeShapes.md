# Type Alias: MergeShapes\<U, V\>

```ts
type MergeShapes<U, V>: { [k in Exclude<keyof U, keyof V>]: U[k] } & V;
```

## Type Parameters

| Type Parameter |
| ------ |
| `U` |
| `V` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/util.d.ts:25
