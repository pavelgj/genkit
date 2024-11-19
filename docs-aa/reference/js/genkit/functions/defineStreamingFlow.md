# Function: defineStreamingFlow()

```ts
function defineStreamingFlow<I, O, S>(
   registry: Registry, 
   config: StreamingFlowConfig<I, O, S>, 
fn: FlowFn<I, O, S>): StreamableFlow<I, O, S>
```

Defines a streaming flow. This operates on the currently active registry.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `S` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `S`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `registry` | `Registry` |
| `config` | [`StreamingFlowConfig`](../interfaces/StreamingFlowConfig.md)\<`I`, `O`, `S`\> |
| `fn` | [`FlowFn`](../type-aliases/FlowFn.md)\<`I`, `O`, `S`\> |

## Returns

[`StreamableFlow`](../interfaces/StreamableFlow.md)\<`I`, `O`, `S`\>

## Defined in

core/lib/flow.d.ts:194
