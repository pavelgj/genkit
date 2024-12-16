[**@genkit-ai/firebase**](../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [@genkit-ai/firebase](../../README.md) / [auth](../README.md) / firebaseAuth

# Function: firebaseAuth()

## Call Signature

> **firebaseAuth**\<`I`\>(`policy`): [`FunctionFlowAuth`](../../functions/interfaces/FunctionFlowAuth.md)\<`I`\>

### Type Parameters

• **I** *extends* [`ZodType`](../../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\>

### Parameters

#### policy

(`user`, `input`) => `void` \| `Promise`\<`void`\>

### Returns

[`FunctionFlowAuth`](../../functions/interfaces/FunctionFlowAuth.md)\<`I`\>

### Defined in

[plugins/firebase/src/auth.ts:23](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/firebase/src/auth.ts#L23)

## Call Signature

> **firebaseAuth**\<`I`\>(`policy`, `config`): [`FunctionFlowAuth`](../../functions/interfaces/FunctionFlowAuth.md)\<`I`\>

### Type Parameters

• **I** *extends* [`ZodType`](../../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\>

### Parameters

#### policy

(`user`, `input`) => `void` \| `Promise`\<`void`\>

#### config

##### required

`true`

### Returns

[`FunctionFlowAuth`](../../functions/interfaces/FunctionFlowAuth.md)\<`I`\>

### Defined in

[plugins/firebase/src/auth.ts:26](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/firebase/src/auth.ts#L26)

## Call Signature

> **firebaseAuth**\<`I`\>(`policy`, `config`): [`FunctionFlowAuth`](../../functions/interfaces/FunctionFlowAuth.md)\<`I`\>

### Type Parameters

• **I** *extends* [`ZodType`](../../../../genkit/namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\>

### Parameters

#### policy

(`user`, `input`) => `void` \| `Promise`\<`void`\>

#### config

##### required

`false`

### Returns

[`FunctionFlowAuth`](../../functions/interfaces/FunctionFlowAuth.md)\<`I`\>

### Defined in

[plugins/firebase/src/auth.ts:30](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/firebase/src/auth.ts#L30)
