# Function: defineFlow()

```ts
function defineFlow<I, O>(
   registry: Registry, 
   config: string | FlowConfig<I, O>, 
fn: FlowFn<I, O, ZodVoid>): CallableFlow<I, O>
```

Defines a non-streaming flow. This operates on the currently active registry.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `registry` | `Registry` |
| `config` | `string` \| [`FlowConfig`](../interfaces/FlowConfig.md)\<`I`, `O`\> |
| `fn` | [`FlowFn`](../type-aliases/FlowFn.md)\<`I`, `O`, [`ZodVoid`](../namespaces/z/classes/ZodVoid.md)\> |

## Returns

[`CallableFlow`](../interfaces/CallableFlow.md)\<`I`, `O`\>

## Defined in

core/lib/flow.d.ts:190
