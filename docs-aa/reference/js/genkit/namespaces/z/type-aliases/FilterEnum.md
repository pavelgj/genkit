# Type Alias: FilterEnum\<Values, ToExclude\>

```ts
type FilterEnum<Values, ToExclude>: Values extends [] ? [] : Values extends [infer Head, ...(infer Rest)] ? Head extends ToExclude ? FilterEnum<Rest, ToExclude> : [Head, ...FilterEnum<Rest, ToExclude>] : never;
```

## Type Parameters

| Type Parameter |
| ------ |
| `Values` |
| `ToExclude` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:772
