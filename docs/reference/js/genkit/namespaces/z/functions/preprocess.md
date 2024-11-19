# Function: preprocess()

```ts
function preprocess<I>(
   preprocess: (arg: unknown, ctx: RefinementCtx) => unknown, 
   schema: I, 
params?: RawCreateParams): ZodEffects<I, I["_output"], unknown>
```

## Type Parameters

| Type Parameter |
| ------ |
| `I` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `I`\> |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `preprocess` | (`arg`: `unknown`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `unknown` |
| `schema` | `I` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

## Returns

[`ZodEffects`](../classes/ZodEffects.md)\<`I`, `I`\[`"_output"`\], `unknown`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1074
