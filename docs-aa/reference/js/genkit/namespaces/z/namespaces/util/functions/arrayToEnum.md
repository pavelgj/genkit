# Function: arrayToEnum()

```ts
function arrayToEnum<T, U>(items: U): { [k in string]: k }
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |
| `U` *extends* [`T`, `...T[]`] |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | `U` |

## Returns

`{ [k in string]: k }`

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/util.d.ts:11
