[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [extract](../README.md) / extractJson

# Function: extractJson()

## Call Signature

> **extractJson**\<`T`\>(`text`, `throwOnBadJson`?): `T`

Extracts JSON from string with lenient parsing rules to improve likelihood of successful extraction.

### Type Parameters

• **T** = `unknown`

### Parameters

#### text

`string`

#### throwOnBadJson?

`true`

### Returns

`T`

### Defined in

ai/lib/extract.d.ts:23

## Call Signature

> **extractJson**\<`T`\>(`text`, `throwOnBadJson`?): `T` \| `null`

Extracts JSON from string with lenient parsing rules to improve likelihood of successful extraction.

### Type Parameters

• **T** = `unknown`

### Parameters

#### text

`string`

#### throwOnBadJson?

`false`

### Returns

`T` \| `null`

### Defined in

ai/lib/extract.d.ts:24
