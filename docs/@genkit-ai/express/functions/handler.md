[**@genkit-ai/express**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/express](../README.md) / handler

# Function: handler()

> **handler**\<`I`, `O`, `S`\>(`f`, `opts`?): `express.RequestHandler`

Exposes provided flow or an action as express handler.

## Type Parameters

• **I** *extends* [`ZodType`](../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> = [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodType`](../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

• **S** *extends* [`ZodType`](../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `S`\> = [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

## Parameters

### f

[`CallableFlow`](../../../genkit/interfaces/CallableFlow.md)\<`I`, `O`, `S`\> | [`Flow`](../../../genkit/classes/Flow.md)\<`I`, `O`, `S`\> | [`Action`](../../../genkit/type-aliases/Action.md)\<`I`, `O`, `S`\>

### opts?

#### authPolicy

[`AuthPolicy`](../interfaces/AuthPolicy.md)\<`I`, `O`, `S`\>

## Returns

`express.RequestHandler`

## Defined in

[plugins/express/src/index.ts:70](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/express/src/index.ts#L70)
