# Function: lazy()

```ts
function lazy<T>(getter: () => T, params?: RawCreateParams): ZodLazy<T>
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `T`\> |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `getter` | () => `T` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

## Returns

[`ZodLazy`](../classes/ZodLazy.md)\<`T`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1066
