# Type Alias: noNever\<T\>

```ts
type noNever<T>: identity<{ [k in noNeverKeys<T>]: k extends keyof T ? T[k] : never }>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/util.d.ts:48
