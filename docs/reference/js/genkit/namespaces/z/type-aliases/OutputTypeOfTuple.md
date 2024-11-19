# Type Alias: OutputTypeOfTuple\<T\>

```ts
type OutputTypeOfTuple<T>: AssertArray<{ [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_output"] : never }>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodTupleItems`](ZodTupleItems.md) \| [] |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:649
