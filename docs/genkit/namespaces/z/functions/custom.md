# Function: custom()

```ts
function custom<T>(
   check?: (data: any) => any, 
   params?: string | CustomParams | (input: any) => CustomParams, 
fatal?: boolean): ZodType<T, ZodTypeDef, T>
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `check`? | (`data`: `any`) => `any` | - |
| `params`? | `string` \| `CustomParams` \| (`input`: `any`) => `CustomParams` | - |
| `fatal`? | `boolean` | **Deprecated** Pass `fatal` into the params object instead: `z.string().custom((val) => val.length > 5, { fatal: false })` |

## Returns

[`ZodType`](../classes/ZodType.md)\<`T`, [`ZodTypeDef`](../interfaces/ZodTypeDef.md), `T`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:943
