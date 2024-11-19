# Type Alias: arrayOutputType\<T, Cardinality\>

```ts
type arrayOutputType<T, Cardinality>: Cardinality extends "atleastone" ? [T["_output"], ...T["_output"][]] : T["_output"][];
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ZodTypeAny`](ZodTypeAny.md) | - |
| `Cardinality` *extends* [`ArrayCardinality`](ArrayCardinality.md) | `"many"` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:491
