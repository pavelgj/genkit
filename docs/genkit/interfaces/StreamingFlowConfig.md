[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / StreamingFlowConfig

# Interface: StreamingFlowConfig\<I, O, S\>

Configuration for a streaming flow.

## Extends

- [`FlowConfig`](FlowConfig.md)\<`I`, `O`\>

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **S** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### authPolicy?

> `optional` **authPolicy**: [`FlowAuthPolicy`](FlowAuthPolicy.md)\<`I`\>

Auth policy.

#### Inherited from

[`FlowConfig`](FlowConfig.md).[`authPolicy`](FlowConfig.md#authpolicy)

#### Defined in

core/lib/flow.d.ts:55

***

### inputSchema?

> `optional` **inputSchema**: `I`

Schema of the input to the flow.

#### Inherited from

[`FlowConfig`](FlowConfig.md).[`inputSchema`](FlowConfig.md#inputschema)

#### Defined in

core/lib/flow.d.ts:51

***

### middleware?

> `optional` **middleware**: `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>[]

Middleware for HTTP requests. Not called for direct invocations.

#### Inherited from

[`FlowConfig`](FlowConfig.md).[`middleware`](FlowConfig.md#middleware)

#### Defined in

core/lib/flow.d.ts:57

***

### name

> **name**: `string`

Name of the flow.

#### Inherited from

[`FlowConfig`](FlowConfig.md).[`name`](FlowConfig.md#name)

#### Defined in

core/lib/flow.d.ts:49

***

### outputSchema?

> `optional` **outputSchema**: `O`

Schema of the output from the flow.

#### Inherited from

[`FlowConfig`](FlowConfig.md).[`outputSchema`](FlowConfig.md#outputschema)

#### Defined in

core/lib/flow.d.ts:53

***

### streamSchema?

> `optional` **streamSchema**: `S`

Schema of the streaming chunks from the flow.

#### Defined in

core/lib/flow.d.ts:64
