# Interface: FlowConfig\<I, O\>

Configuration for a flow.

## Extended by

- [`StreamingFlowConfig`](StreamingFlowConfig.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `authPolicy?` | [`FlowAuthPolicy`](FlowAuthPolicy.md)\<`I`\> | Auth policy. | core/lib/flow.d.ts:53 |
| `inputSchema?` | `I` | Schema of the input to the flow. | core/lib/flow.d.ts:49 |
| `middleware?` | `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>[] | Middleware for HTTP requests. Not called for direct invocations. | core/lib/flow.d.ts:55 |
| `name` | `string` | Name of the flow. | core/lib/flow.d.ts:47 |
| `outputSchema?` | `O` | Schema of the output from the flow. | core/lib/flow.d.ts:51 |
