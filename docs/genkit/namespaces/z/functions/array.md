# Function: array()

```ts
function array<T>(schema: T, params?: RawCreateParams): ZodArray<T, "many">
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `T`\> |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `schema` | `T` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

## Returns

[`ZodArray`](../classes/ZodArray.md)\<`T`, `"many"`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1055
