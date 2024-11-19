# Type Alias: InputTypeOfTupleWithRest\<T, Rest\>

```ts
type InputTypeOfTupleWithRest<T, Rest>: Rest extends ZodTypeAny ? [...InputTypeOfTuple<T>, ...Rest["_input"][]] : InputTypeOfTuple<T>;
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ZodTupleItems`](ZodTupleItems.md) \| [] | - |
| `Rest` *extends* [`ZodTypeAny`](ZodTypeAny.md) \| `null` | `null` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:656
