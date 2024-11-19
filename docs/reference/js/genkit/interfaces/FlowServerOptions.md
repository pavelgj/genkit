# Interface: FlowServerOptions

Options to configure the flow server.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `cors?` | `any` | CORS options for the server. | core/lib/flow.d.ts:151 |
| `flows` | ([`CallableFlow`](CallableFlow.md)\<`any`, `any`\> \| [`StreamableFlow`](StreamableFlow.md)\<`any`, `any`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\>)[] | List of flows to expose via the flow server. | core/lib/flow.d.ts:147 |
| `jsonParserOptions?` | `any` | JSON body parser options. | core/lib/flow.d.ts:155 |
| `pathPrefix?` | `string` | HTTP method path prefix for the exposed flows. | core/lib/flow.d.ts:153 |
| `port?` | `number` | Port to run the server on. Defaults to env.PORT or 3400. | core/lib/flow.d.ts:149 |
