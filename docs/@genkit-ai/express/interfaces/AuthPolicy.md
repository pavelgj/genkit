[**@genkit-ai/express**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/express](../README.md) / AuthPolicy

# Interface: AuthPolicy()\<I, O, S\>

Flow Auth policy. Consumes the authorization context of the flow and
performs checks before the flow runs. If this throws, the flow will not
be executed.

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

• **S** *extends* [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

> **AuthPolicy**(`ctx`): `void` \| `Promise`\<`void`\>

Flow Auth policy. Consumes the authorization context of the flow and
performs checks before the flow runs. If this throws, the flow will not
be executed.

## Parameters

### ctx

[`AuthPolicyContext`](AuthPolicyContext.md)\<`I`, `O`, `S`\>

## Returns

`void` \| `Promise`\<`void`\>

## Defined in

[plugins/express/src/index.ts:56](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/express/src/index.ts#L56)
