[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / custom

# Function: custom()

> **custom**\<`T`\>(`check`?, `params`?, `fatal`?): [`ZodType`](../classes/ZodType.md)\<`T`, [`ZodTypeDef`](../interfaces/ZodTypeDef.md), `T`\>

## Type Parameters

• **T**

## Parameters

### check?

(`data`) => `any`

### params?

`string` | `CustomParams` | (`input`) => `CustomParams`

### fatal?

`boolean`

**Deprecated**

Pass `fatal` into the params object instead:

```ts
z.string().custom((val) => val.length > 5, { fatal: false })
```

## Returns

[`ZodType`](../classes/ZodType.md)\<`T`, [`ZodTypeDef`](../interfaces/ZodTypeDef.md), `T`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:943
