# Function: map()

```ts
function map<Key, Value>(
   keyType: Key, 
   valueType: Value, 
params?: RawCreateParams): ZodMap<Key, Value>
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Key` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `Key`\> | [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) |
| `Value` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `Value`\> | [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `keyType` | `Key` |
| `valueType` | `Value` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

## Returns

[`ZodMap`](../classes/ZodMap.md)\<`Key`, `Value`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1063
