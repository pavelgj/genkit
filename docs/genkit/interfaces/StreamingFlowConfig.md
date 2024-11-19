# Interface: StreamingFlowConfig\<I, O, S\>

Configuration for a streaming flow.

## Extends

- [`FlowConfig`](FlowConfig.md)\<`I`, `O`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `S` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `authPolicy?` | [`FlowAuthPolicy`](FlowAuthPolicy.md)\<`I`\> | Auth policy. | [`FlowConfig`](FlowConfig.md).`authPolicy` | core/lib/flow.d.ts:53 |
| `inputSchema?` | `I` | Schema of the input to the flow. | [`FlowConfig`](FlowConfig.md).`inputSchema` | core/lib/flow.d.ts:49 |
| `middleware?` | `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>[] | Middleware for HTTP requests. Not called for direct invocations. | [`FlowConfig`](FlowConfig.md).`middleware` | core/lib/flow.d.ts:55 |
| `name` | `string` | Name of the flow. | [`FlowConfig`](FlowConfig.md).`name` | core/lib/flow.d.ts:47 |
| `outputSchema?` | `O` | Schema of the output from the flow. | [`FlowConfig`](FlowConfig.md).`outputSchema` | core/lib/flow.d.ts:51 |
| `streamSchema?` | `S` | Schema of the streaming chunks from the flow. | - | core/lib/flow.d.ts:62 |
