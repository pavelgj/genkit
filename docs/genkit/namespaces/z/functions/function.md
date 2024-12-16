[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / function

# Function: function()

## Call Signature

> **function**(): [`ZodFunction`](../classes/ZodFunction.md)\<[`ZodTuple`](../classes/ZodTuple.md)\<[], [`ZodUnknown`](../classes/ZodUnknown.md)\>, [`ZodUnknown`](../classes/ZodUnknown.md)\>

### Returns

[`ZodFunction`](../classes/ZodFunction.md)\<[`ZodTuple`](../classes/ZodTuple.md)\<[], [`ZodUnknown`](../classes/ZodUnknown.md)\>, [`ZodUnknown`](../classes/ZodUnknown.md)\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1065

## Call Signature

> **function**\<`T`\>(`args`): [`ZodFunction`](../classes/ZodFunction.md)\<`T`, [`ZodUnknown`](../classes/ZodUnknown.md)\>

### Type Parameters

• **T** *extends* [`ZodTuple`](../classes/ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\> = [`ZodTuple`](../classes/ZodTuple.md)\<[], [`ZodUnknown`](../classes/ZodUnknown.md)\>

### Parameters

#### args

`T`

### Returns

[`ZodFunction`](../classes/ZodFunction.md)\<`T`, [`ZodUnknown`](../classes/ZodUnknown.md)\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1065

## Call Signature

> **function**\<`T`, `U`\>(`args`, `returns`): [`ZodFunction`](../classes/ZodFunction.md)\<`T`, `U`\>

### Type Parameters

• **T** *extends* [`ZodTuple`](../classes/ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\>

• **U** *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `U`\>

### Parameters

#### args

`T`

#### returns

`U`

### Returns

[`ZodFunction`](../classes/ZodFunction.md)\<`T`, `U`\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1065

## Call Signature

> **function**\<`T`, `U`\>(`args`, `returns`, `params`?): [`ZodFunction`](../classes/ZodFunction.md)\<`T`, `U`\>

### Type Parameters

• **T** *extends* [`ZodTuple`](../classes/ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\> = [`ZodTuple`](../classes/ZodTuple.md)\<[], [`ZodUnknown`](../classes/ZodUnknown.md)\>

• **U** *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `U`\> = [`ZodUnknown`](../classes/ZodUnknown.md)

### Parameters

#### args

`T`

#### returns

`U`

#### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

### Returns

[`ZodFunction`](../classes/ZodFunction.md)\<`T`, `U`\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1065
