[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [model](../README.md) / modelRef

# Function: modelRef()

> **modelRef**\<`CustomOptionsSchema`\>(`options`): [`ModelReference`](../../interfaces/ModelReference.md)\<`CustomOptionsSchema`\>

Cretes a model reference.

## Type Parameters

• **CustomOptionsSchema** *extends* [`ZodType`](../../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptionsSchema`\> = [`ZodTypeAny`](../../namespaces/z/type-aliases/ZodTypeAny.md)

## Parameters

### options

`Omit`\<[`ModelReference`](../../interfaces/ModelReference.md)\<`CustomOptionsSchema`\>, `"withConfig"` \| `"withVersion"`\>

## Returns

[`ModelReference`](../../interfaces/ModelReference.md)\<`CustomOptionsSchema`\>

## Defined in

ai/lib/model.d.ts:7313
