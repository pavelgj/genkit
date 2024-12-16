[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / run

# Function: run()

## Call Signature

> **run**\<`T`\>(`name`, `func`, `registry`?): `Promise`\<`T`\>

### Type Parameters

• **T**

### Parameters

#### name

`string`

#### func

() => `Promise`\<`T`\>

#### registry?

[`Registry`](../registry/classes/Registry.md)

### Returns

`Promise`\<`T`\>

### Defined in

core/lib/flow.d.ts:204

## Call Signature

> **run**\<`T`\>(`name`, `input`, `func`, `registry`?): `Promise`\<`T`\>

### Type Parameters

• **T**

### Parameters

#### name

`string`

#### input

`any`

#### func

(`input`?) => `Promise`\<`T`\>

#### registry?

[`Registry`](../registry/classes/Registry.md)

### Returns

`Promise`\<`T`\>

### Defined in

core/lib/flow.d.ts:205
