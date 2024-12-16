[**@genkit-ai/express**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/express](../README.md) / AuthPolicyContext

# Interface: AuthPolicyContext\<I, O, S\>

Auth policy context is an object passed to the auth policy providing details necessary for auth.

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

• **S** *extends* [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### action?

> `optional` **action**: [`Action`](../../../genkit/type-aliases/Action.md)\<`I`, `O`, `S`\>

#### Defined in

[plugins/express/src/index.ts:40](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/express/src/index.ts#L40)

***

### auth

> **auth**: `any`

#### Defined in

[plugins/express/src/index.ts:42](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/express/src/index.ts#L42)

***

### flow?

> `optional` **flow**: [`Flow`](../../../genkit/classes/Flow.md)\<`I`, `O`, `S`\>

#### Defined in

[plugins/express/src/index.ts:39](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/express/src/index.ts#L39)

***

### input

> **input**: [`TypeOf`](../../../genkit/namespaces/z/type-aliases/TypeOf.md)\<`I`\>

#### Defined in

[plugins/express/src/index.ts:41](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/express/src/index.ts#L41)

***

### request

> **request**: [`RequestWithAuth`](RequestWithAuth.md)

#### Defined in

[plugins/express/src/index.ts:43](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/express/src/index.ts#L43)
