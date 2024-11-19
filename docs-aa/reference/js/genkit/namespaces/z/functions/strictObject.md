# Function: strictObject()

```ts
function strictObject<T>(shape: T, params?: RawCreateParams): ZodObject<T, "strict", ZodTypeAny, { [k in string | number | symbol]: addQuestionMarks<baseObjectOutputType<T>, any>[k] }, { [k_1 in string | number | symbol]: baseObjectInputType<T>[k_1] }>
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `shape` | `T` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

## Returns

[`ZodObject`](../classes/ZodObject.md)\<`T`, `"strict"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\>\[k\_1\] \}\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1057
