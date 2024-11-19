# Type Alias: OuterTypeOfFunction\<Args, Returns\>

```ts
type OuterTypeOfFunction<Args, Returns>: Args["_input"] extends any[] ? (...args: Args["_input"]) => Returns["_output"] : never;
```

## Type Parameters

| Type Parameter |
| ------ |
| `Args` *extends* [`ZodTuple`](../classes/ZodTuple.md)\<`any`, `any`\> |
| `Returns` *extends* [`ZodTypeAny`](ZodTypeAny.md) |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:725
