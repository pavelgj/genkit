# Function: enum()

## enum(values, params)

```ts
function enum<U, T>(values: T, params?: RawCreateParams): ZodEnum<Writeable<T>>
```

### Type Parameters

| Type Parameter |
| ------ |
| `U` *extends* `string` |
| `T` *extends* readonly [`U`, `U`, `T`] |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `values` | `T` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

### Returns

[`ZodEnum`](../classes/ZodEnum.md)\<[`Writeable`](../type-aliases/Writeable.md)\<`T`\>\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1068

## enum(values, params)

```ts
function enum<U, T>(values: T, params?: RawCreateParams): ZodEnum<T>
```

### Type Parameters

| Type Parameter |
| ------ |
| `U` *extends* `string` |
| `T` *extends* [`U`, `...U[]`] |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `values` | `T` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

### Returns

[`ZodEnum`](../classes/ZodEnum.md)\<`T`\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1068
