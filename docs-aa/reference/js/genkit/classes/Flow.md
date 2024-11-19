# Class: Flow\<I, O, S\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `S` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Constructors

### new Flow()

```ts
new Flow<I, O, S>(
   registry: Registry, 
   config: FlowConfig<I, O> | StreamingFlowConfig<I, O, S>, 
flowFn: FlowFn<I, O, S>): Flow<I, O, S>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `registry` | `Registry` |
| `config` | [`FlowConfig`](../interfaces/FlowConfig.md)\<`I`, `O`\> \| [`StreamingFlowConfig`](../interfaces/StreamingFlowConfig.md)\<`I`, `O`, `S`\> |
| `flowFn` | [`FlowFn`](../type-aliases/FlowFn.md)\<`I`, `O`, `S`\> |

#### Returns

[`Flow`](Flow.md)\<`I`, `O`, `S`\>

#### Defined in

core/lib/flow.d.ts:119

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `authPolicy?` | `readonly` | [`FlowAuthPolicy`](../interfaces/FlowAuthPolicy.md)\<`I`\> | core/lib/flow.d.ts:116 |
| `flowFn` | `readonly` | [`FlowFn`](../type-aliases/FlowFn.md)\<`I`, `O`, `S`\> | core/lib/flow.d.ts:118 |
| `inputSchema?` | `readonly` | `I` | core/lib/flow.d.ts:113 |
| `middleware?` | `readonly` | `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>[] | core/lib/flow.d.ts:117 |
| `name` | `readonly` | `string` | core/lib/flow.d.ts:112 |
| `outputSchema?` | `readonly` | `O` | core/lib/flow.d.ts:114 |
| `streamSchema?` | `readonly` | `S` | core/lib/flow.d.ts:115 |

## Methods

### expressHandler()

```ts
expressHandler(request: __RequestWithAuth, response: Response<any, Record<string, any>>): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`__RequestWithAuth`](../interfaces/RequestWithAuth.md) |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

core/lib/flow.d.ts:140

***

### invoke()

```ts
invoke(input: unknown, opts: {
  auth: unknown;
  labels: Record<string, string>;
  streamingCallback: StreamingCallback<TypeOf<S>>;
}): Promise<FlowResult<TypeOf<O>>>
```

Executes the flow with the input directly.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |
| `opts` | `object` |
| `opts.auth`? | `unknown` |
| `opts.labels`? | `Record`\<`string`, `string`\> |
| `opts.streamingCallback`? | [`StreamingCallback`](../type-aliases/StreamingCallback.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`S`\>\> |

#### Returns

`Promise`\<`FlowResult`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

#### Defined in

core/lib/flow.d.ts:123

***

### run()

```ts
run(payload?: TypeOf<I>, opts?: {
  withLocalAuthContext: unknown;
}): Promise<TypeOf<O>>
```

Runs the flow. This is used when calling a flow from another flow.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload`? | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\> |
| `opts`? | `object` |
| `opts.withLocalAuthContext`? | `unknown` |

#### Returns

`Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>

#### Defined in

core/lib/flow.d.ts:131

***

### stream()

```ts
stream(payload?: TypeOf<I>, opts?: {
  withLocalAuthContext: unknown;
}): StreamingResponse<O, S>
```

Runs the flow and streams results. This is used when calling a flow from another flow.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload`? | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\> |
| `opts`? | `object` |
| `opts.withLocalAuthContext`? | `unknown` |

#### Returns

`StreamingResponse`\<`O`, `S`\>

#### Defined in

core/lib/flow.d.ts:137
