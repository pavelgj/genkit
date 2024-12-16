[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / record

# Function: record()

## Call Signature

> **record**\<`Value`\>(`valueType`, `params`?): [`ZodRecord`](../classes/ZodRecord.md)\<[`ZodString`](../classes/ZodString.md), `Value`\>

### Type Parameters

• **Value** *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `Value`\>

### Parameters

#### valueType

`Value`

#### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

### Returns

[`ZodRecord`](../classes/ZodRecord.md)\<[`ZodString`](../classes/ZodString.md), `Value`\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1062

## Call Signature

> **record**\<`Keys`, `Value`\>(`keySchema`, `valueType`, `params`?): [`ZodRecord`](../classes/ZodRecord.md)\<`Keys`, `Value`\>

### Type Parameters

• **Keys** *extends* [`ZodType`](../classes/ZodType.md)\<`string` \| `number` \| `symbol`, `any`, `any`, `Keys`\>

• **Value** *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `Value`\>

### Parameters

#### keySchema

`Keys`

#### valueType

`Value`

#### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

### Returns

[`ZodRecord`](../classes/ZodRecord.md)\<`Keys`, `Value`\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1062
