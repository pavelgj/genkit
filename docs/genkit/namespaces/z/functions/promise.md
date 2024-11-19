# Function: promise()

```ts
function promise<T>(schema: T, params?: RawCreateParams): ZodPromise<T>
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

[`ZodPromise`](../classes/ZodPromise.md)\<`T`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1070
