# Function: intersection()

```ts
function intersection<T, U>(
   left: T, 
   right: U, 
params?: RawCreateParams): ZodIntersection<T, U>
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `T`\> |
| `U` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `U`\> |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `left` | `T` |
| `right` | `U` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

## Returns

[`ZodIntersection`](../classes/ZodIntersection.md)\<`T`, `U`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1060
