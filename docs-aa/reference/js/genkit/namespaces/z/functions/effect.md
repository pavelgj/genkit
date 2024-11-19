# Function: effect()

```ts
function effect<I>(
   schema: I, 
   effect: Effect<I["_output"]>, 
params?: RawCreateParams): ZodEffects<I, I["_output"], input<I>>
```

## Type Parameters

| Type Parameter |
| ------ |
| `I` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `I`\> |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `schema` | `I` |
| `effect` | [`Effect`](../type-aliases/Effect.md)\<`I`\[`"_output"`\]\> |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

## Returns

[`ZodEffects`](../classes/ZodEffects.md)\<`I`, `I`\[`"_output"`\], [`input`](../type-aliases/input.md)\<`I`\>\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1071
