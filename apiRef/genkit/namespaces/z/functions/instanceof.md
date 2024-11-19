# Function: instanceof()

```ts
function instanceof<T>(cls: T, params?: CustomParams): ZodType<InstanceType<T>, ZodTypeDef, InstanceType<T>>
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Class` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `cls` | `T` |
| `params`? | `CustomParams` |

## Returns

[`ZodType`](../classes/ZodType.md)\<`InstanceType`\<`T`\>, [`ZodTypeDef`](../interfaces/ZodTypeDef.md), `InstanceType`\<`T`\>\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1001
