[**@genkit-ai/evaluator**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/evaluator](../README.md) / PluginOptions

# Interface: PluginOptions\<ModelCustomOptions, EmbedderCustomOptions\>

## Type Parameters

• **ModelCustomOptions** *extends* [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

• **EmbedderCustomOptions** *extends* [`ZodTypeAny`](../../../genkit/namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### embedder?

> `optional` **embedder**: [`EmbedderReference`](../../../genkit/interfaces/EmbedderReference.md)\<`EmbedderCustomOptions`\>

#### Defined in

[plugins/evaluators/src/index.ts:42](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/evaluators/src/index.ts#L42)

***

### embedderOptions?

> `optional` **embedderOptions**: [`TypeOf`](../../../genkit/namespaces/z/type-aliases/TypeOf.md)\<`EmbedderCustomOptions`\>

#### Defined in

[plugins/evaluators/src/index.ts:43](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/evaluators/src/index.ts#L43)

***

### judge

> **judge**: [`ModelReference`](../../../genkit/interfaces/ModelReference.md)\<`ModelCustomOptions`\>

#### Defined in

[plugins/evaluators/src/index.ts:40](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/evaluators/src/index.ts#L40)

***

### judgeConfig?

> `optional` **judgeConfig**: [`TypeOf`](../../../genkit/namespaces/z/type-aliases/TypeOf.md)\<`ModelCustomOptions`\>

#### Defined in

[plugins/evaluators/src/index.ts:41](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/evaluators/src/index.ts#L41)

***

### metrics?

> `optional` **metrics**: [`GenkitMetric`](../enumerations/GenkitMetric.md)[]

#### Defined in

[plugins/evaluators/src/index.ts:39](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/evaluators/src/index.ts#L39)
