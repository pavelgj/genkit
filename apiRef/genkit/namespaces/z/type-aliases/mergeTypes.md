# Type Alias: mergeTypes\<A, B\>

```ts
type mergeTypes<A, B>: { [k in keyof A | keyof B]: k extends keyof B ? B[k] : k extends keyof A ? A[k] : never };
```

## Type Parameters

| Type Parameter |
| ------ |
| `A` |
| `B` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:509
