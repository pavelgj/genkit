# Function: tuple()

```ts
function tuple<T>(schemas: T, params?: RawCreateParams): ZodTuple<T, null>
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`] |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `schemas` | `T` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

## Returns

[`ZodTuple`](../classes/ZodTuple.md)\<`T`, `null`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1061
