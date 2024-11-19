# Type Alias: extendShape\<A, B\>

```ts
type extendShape<A, B>: { [K in keyof A as K extends keyof B ? never : K]: A[K] } & { [K in keyof B]: B[K] };
```

## Type Parameters

| Type Parameter |
| ------ |
| `A` *extends* `object` |
| `B` *extends* `object` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/util.d.ts:52
