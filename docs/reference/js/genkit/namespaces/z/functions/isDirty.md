# Function: isDirty()

```ts
function isDirty<T>(x: ParseReturnType<T>): x is OK<T> | DIRTY<T>
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`T`\> |

## Returns

x is OK\<T\> \| DIRTY\<T\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:76
