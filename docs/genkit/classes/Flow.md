[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / Flow

# Class: Flow\<I, O, S\>

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **S** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Constructors

### new Flow()

> **new Flow**\<`I`, `O`, `S`\>(`registry`, `config`, `action`): [`Flow`](Flow.md)\<`I`, `O`, `S`\>

#### Parameters

##### registry

[`Registry`](../registry/classes/Registry.md)

##### config

[`FlowConfig`](../interfaces/FlowConfig.md)\<`I`, `O`\> | [`StreamingFlowConfig`](../interfaces/StreamingFlowConfig.md)\<`I`, `O`, `S`\>

##### action

[`Action`](../type-aliases/Action.md)\<`I`, `O`, `S`\>

#### Returns

[`Flow`](Flow.md)\<`I`, `O`, `S`\>

#### Defined in

core/lib/flow.d.ts:130

## Properties

### action

> `readonly` **action**: [`Action`](../type-aliases/Action.md)\<`I`, `O`, `S`\>

#### Defined in

core/lib/flow.d.ts:129

***

### authPolicy?

> `readonly` `optional` **authPolicy**: [`FlowAuthPolicy`](../interfaces/FlowAuthPolicy.md)\<`I`\>

#### Defined in

core/lib/flow.d.ts:127

***

### inputSchema?

> `readonly` `optional` **inputSchema**: `I`

#### Defined in

core/lib/flow.d.ts:124

***

### middleware?

> `readonly` `optional` **middleware**: `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>[]

#### Defined in

core/lib/flow.d.ts:128

***

### name

> `readonly` **name**: `string`

#### Defined in

core/lib/flow.d.ts:123

***

### outputSchema?

> `readonly` `optional` **outputSchema**: `O`

#### Defined in

core/lib/flow.d.ts:125

***

### registry

> `readonly` **registry**: [`Registry`](../registry/classes/Registry.md)

#### Defined in

core/lib/flow.d.ts:122

***

### streamSchema?

> `readonly` `optional` **streamSchema**: `S`

#### Defined in

core/lib/flow.d.ts:126

## Methods

### expressHandler()

> **expressHandler**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

##### request

`__RequestWithAuth`

##### response

`Response`\<`any`, `Record`\<`string`, `any`\>\>

#### Returns

`Promise`\<`void`\>

#### Defined in

core/lib/flow.d.ts:147

***

### invoke()

> **invoke**(`input`, `opts`): `Promise`\<`ActionResult`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

Executes the flow with the input directly.

#### Parameters

##### input

`unknown`

##### opts

###### context

`unknown`

###### labels

`Record`\<`string`, `string`\>

###### onChunk

[`StreamingCallback`](../type-aliases/StreamingCallback.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`S`\>\>

#### Returns

`Promise`\<`ActionResult`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

#### Defined in

core/lib/flow.d.ts:134

***

### run()

> **run**(`payload`?, `opts`?): `Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>

Runs the flow. This is used when calling a flow from another flow.

#### Parameters

##### payload?

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>

##### opts?

`FlowCallOptions`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`S`\>\>

#### Returns

`Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>

#### Defined in

core/lib/flow.d.ts:142

***

### stream()

> **stream**(`payload`?, `opts`?): `StreamingResponse`\<`O`, `S`\>

Runs the flow and streams results. This is used when calling a flow from another flow.

#### Parameters

##### payload?

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>

##### opts?

`Omit`\<`FlowCallOptions`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`S`\>\>, `"onChunk"`\>

#### Returns

`StreamingResponse`\<`O`, `S`\>

#### Defined in

core/lib/flow.d.ts:146
