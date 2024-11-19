# Type Alias: InputTypeOfTuple\<T\>

```ts
type InputTypeOfTuple<T>: AssertArray<{ [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_input"] : never }>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodTupleItems`](ZodTupleItems.md) \| [] |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:653
