[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / FlowServerOptions

# Interface: FlowServerOptions

Options to configure the flow server.

## Properties

### cors?

> `optional` **cors**: `any`

CORS options for the server.

#### Defined in

core/lib/flow.d.ts:158

***

### flows

> **flows**: ([`CallableFlow`](CallableFlow.md)\<`any`, `any`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\> \| [`StreamableFlow`](StreamableFlow.md)\<`any`, `any`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\>)[]

List of flows to expose via the flow server.

#### Defined in

core/lib/flow.d.ts:154

***

### jsonParserOptions?

> `optional` **jsonParserOptions**: `any`

JSON body parser options.

#### Defined in

core/lib/flow.d.ts:162

***

### pathPrefix?

> `optional` **pathPrefix**: `string`

HTTP method path prefix for the exposed flows.

#### Defined in

core/lib/flow.d.ts:160

***

### port?

> `optional` **port**: `number`

Port to run the server on. Defaults to env.PORT or 3400.

#### Defined in

core/lib/flow.d.ts:156
