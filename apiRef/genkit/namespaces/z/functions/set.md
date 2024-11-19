# Function: set()

```ts
function set<Value>(valueType: Value, params?: RawCreateParams): ZodSet<Value>
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Value` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `Value`\> | [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `valueType` | `Value` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

## Returns

[`ZodSet`](../classes/ZodSet.md)\<`Value`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1064
