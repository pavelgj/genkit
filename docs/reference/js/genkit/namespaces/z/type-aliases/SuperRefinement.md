# Type Alias: SuperRefinement()\<T\>

```ts
type SuperRefinement<T>: (arg: T, ctx: RefinementCtx) => void | Promise<void>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `arg` | `T` |
| `ctx` | [`RefinementCtx`](../interfaces/RefinementCtx.md) |

## Returns

`void` \| `Promise`\<`void`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:811
