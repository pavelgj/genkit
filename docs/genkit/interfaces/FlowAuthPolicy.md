[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / FlowAuthPolicy

# Interface: FlowAuthPolicy()\<I\>

Flow Auth policy. Consumes the authorization context of the flow and
performs checks before the flow runs. If this throws, the flow will not
be executed.

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

> **FlowAuthPolicy**(`auth`, `input`): `void` \| `Promise`\<`void`\>

Flow Auth policy. Consumes the authorization context of the flow and
performs checks before the flow runs. If this throws, the flow will not
be executed.

## Parameters

### auth

`any`

### input

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>

## Returns

`void` \| `Promise`\<`void`\>

## Defined in

core/lib/flow.d.ts:33
