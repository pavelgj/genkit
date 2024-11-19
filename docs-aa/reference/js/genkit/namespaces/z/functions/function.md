# Function: function()

## function(undefined)

```ts
function function(): ZodFunction<ZodTuple<[], ZodUnknown>, ZodUnknown>
```

### Returns

[`ZodFunction`](../classes/ZodFunction.md)\<[`ZodTuple`](../classes/ZodTuple.md)\<[], [`ZodUnknown`](../classes/ZodUnknown.md)\>, [`ZodUnknown`](../classes/ZodUnknown.md)\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1065

## function(args)

```ts
function function<T>(args: T): ZodFunction<T, ZodUnknown>
```

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ZodTuple`](../classes/ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\> | [`ZodTuple`](../classes/ZodTuple.md)\<[], [`ZodUnknown`](../classes/ZodUnknown.md)\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | `T` |

### Returns

[`ZodFunction`](../classes/ZodFunction.md)\<`T`, [`ZodUnknown`](../classes/ZodUnknown.md)\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1065

## function(args, returns)

```ts
function function<T, U>(args: T, returns: U): ZodFunction<T, U>
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodTuple`](../classes/ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\> |
| `U` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `U`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | `T` |
| `returns` | `U` |

### Returns

[`ZodFunction`](../classes/ZodFunction.md)\<`T`, `U`\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1065

## function(args, returns, params)

```ts
function function<T, U>(
   args: T, 
   returns: U, 
params?: RawCreateParams): ZodFunction<T, U>
```

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ZodTuple`](../classes/ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\> | [`ZodTuple`](../classes/ZodTuple.md)\<[], [`ZodUnknown`](../classes/ZodUnknown.md)\> |
| `U` *extends* [`ZodType`](../classes/ZodType.md)\<`any`, `any`, `any`, `U`\> | [`ZodUnknown`](../classes/ZodUnknown.md) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | `T` |
| `returns` | `U` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

### Returns

[`ZodFunction`](../classes/ZodFunction.md)\<`T`, `U`\>

### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1065
