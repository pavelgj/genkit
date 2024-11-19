# Type Alias: InnerTypeOfFunction\<Args, Returns\>

```ts
type InnerTypeOfFunction<Args, Returns>: Args["_output"] extends any[] ? (...args: Args["_output"]) => Returns["_input"] : never;
```

## Type Parameters

| Type Parameter |
| ------ |
| `Args` *extends* [`ZodTuple`](../classes/ZodTuple.md)\<`any`, `any`\> |
| `Returns` *extends* [`ZodTypeAny`](ZodTypeAny.md) |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:726
