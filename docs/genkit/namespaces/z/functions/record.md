# Function: record()

## record(valueType, params)

```ts
function record<Value>(valueType: Value, params?: RawCreateParams): ZodRecord<ZodString, Value>
```

### Type Parameters

| Type Parameter |
| ------ |
| `Value` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `Value`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `valueType` | `Value` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

### Returns

[`ZodRecord`](../classes/ZodRecord.md)\<[`ZodString`](../classes/ZodString.md), `Value`\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1062

## record(keySchema, valueType, params)

```ts
function record<Keys, Value>(
   keySchema: Keys, 
   valueType: Value, 
params?: RawCreateParams): ZodRecord<Keys, Value>
```

### Type Parameters

| Type Parameter |
| ------ |
| `Keys` *extends* [`ZodType`](../classes/ZodType.md)\<`string` \| `number` \| `symbol`, `any`, `any`, `Keys`\> |
| `Value` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `Value`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `keySchema` | `Keys` |
| `valueType` | `Value` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

### Returns

[`ZodRecord`](../classes/ZodRecord.md)\<`Keys`, `Value`\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1062
