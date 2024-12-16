[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / FlowConfig

# Interface: FlowConfig\<I, O\>

Configuration for a flow.

## Extended by

- [`StreamingFlowConfig`](StreamingFlowConfig.md)

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### authPolicy?

> `optional` **authPolicy**: [`FlowAuthPolicy`](FlowAuthPolicy.md)\<`I`\>

Auth policy.

#### Defined in

core/lib/flow.d.ts:55

***

### inputSchema?

> `optional` **inputSchema**: `I`

Schema of the input to the flow.

#### Defined in

core/lib/flow.d.ts:51

***

### middleware?

> `optional` **middleware**: `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>[]

Middleware for HTTP requests. Not called for direct invocations.

#### Defined in

core/lib/flow.d.ts:57

***

### name

> **name**: `string`

Name of the flow.

#### Defined in

core/lib/flow.d.ts:49

***

### outputSchema?

> `optional` **outputSchema**: `O`

Schema of the output from the flow.

#### Defined in

core/lib/flow.d.ts:53
