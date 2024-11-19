# Type Alias: OutputTypeOfTupleWithRest\<T, Rest\>

```ts
type OutputTypeOfTupleWithRest<T, Rest>: Rest extends ZodTypeAny ? [...OutputTypeOfTuple<T>, ...Rest["_output"][]] : OutputTypeOfTuple<T>;
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ZodTupleItems`](ZodTupleItems.md) \| [] | - |
| `Rest` *extends* [`ZodTypeAny`](ZodTypeAny.md) \| `null` | `null` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:652
