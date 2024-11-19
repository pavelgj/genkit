# Class: ZodArray\<T, Cardinality\>

## Extends

- [`ZodType`](ZodType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, [`ZodArrayDef`](../interfaces/ZodArrayDef.md)\<`T`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) | - |
| `Cardinality` *extends* [`ArrayCardinality`](../type-aliases/ArrayCardinality.md) | `"many"` |

## Constructors

### new ZodArray()

```ts
new ZodArray<T, Cardinality>(def: ZodArrayDef<T>): ZodArray<T, Cardinality>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`ZodArrayDef`](../interfaces/ZodArrayDef.md)\<`T`\> |

#### Returns

[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `_def` | `readonly` | [`ZodArrayDef`](../interfaces/ZodArrayDef.md)\<`T`\> | - | [`ZodType`](ZodType.md).`_def` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51 |
| `_input` | `readonly` | `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][] | - | [`ZodType`](ZodType.md).`_input` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50 |
| `_output` | `readonly` | [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\> | - | [`ZodType`](ZodType.md).`_output` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49 |
| `_type` | `readonly` | [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\> | - | [`ZodType`](ZodType.md).`_type` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48 |
| `spa` | `public` | (`data`: `unknown`, `params`?: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\> | Alias of safeParseAsync | [`ZodType`](ZodType.md).`spa` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67 |
| `create` | `static` | \<`T_1`\>(`schema`: `T_1`, `params`?: [`RawCreateParams`](../type-aliases/RawCreateParams.md)) => [`ZodArray`](ZodArray.md)\<`T_1`, `"many"`\> | - | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:499 |

## Accessors

### description

#### Get Signature

```ts
get description(): undefined | string
```

##### Returns

`undefined` \| `string`

#### Inherited from

[`ZodType`](ZodType.md).[`description`](ZodType.md#description)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:52

***

### element

#### Get Signature

```ts
get element(): T
```

##### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:494

## Methods

### \_getOrReturnCtx()

```ts
_getOrReturnCtx(input: ParseInput, ctx?: ParseContext): ParseContext
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |
| `ctx`? | [`ParseContext`](../interfaces/ParseContext.md) |

#### Returns

[`ParseContext`](../interfaces/ParseContext.md)

#### Inherited from

[`ZodType`](ZodType.md).[`_getOrReturnCtx`](ZodType.md#_getorreturnctx)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:55

***

### \_getType()

```ts
_getType(input: ParseInput): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

`string`

#### Inherited from

[`ZodType`](ZodType.md).[`_getType`](ZodType.md#_gettype)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:54

***

### \_parse()

```ts
_parse(input: ParseInput): ParseReturnType<arrayOutputType<T, Cardinality>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:493

***

### \_parseAsync()

```ts
_parseAsync(input: ParseInput): AsyncParseReturnType<arrayOutputType<T, Cardinality>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

```ts
_parseSync(input: ParseInput): SyncParseReturnType<arrayOutputType<T, Cardinality>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseSync`](ZodType.md#_parsesync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:60

***

### \_processInputParams()

```ts
_processInputParams(input: ParseInput): {
  ctx: ParseContext;
  status: ParseStatus;
}
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

```ts
{
  ctx: ParseContext;
  status: ParseStatus;
}
```

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `ctx` | [`ParseContext`](../interfaces/ParseContext.md) | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:58 |
| `status` | [`ParseStatus`](ParseStatus.md) | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:57 |

#### Inherited from

[`ZodType`](ZodType.md).[`_processInputParams`](ZodType.md#_processinputparams)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:56

***

### \_refinement()

```ts
_refinement(refinement: (arg: arrayOutputType<T, Cardinality>, ctx: RefinementCtx) => any): ZodEffects<ZodArray<T, Cardinality>, arrayOutputType<T, Cardinality>, Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

```ts
and<T>(incoming: T): ZodIntersection<ZodArray<T, Cardinality>, T>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

```ts
array(): ZodArray<ZodArray<T, Cardinality>, "many">
```

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

```ts
brand<B>(brand?: B): ZodBranded<ZodArray<T, Cardinality>, B>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `B` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `brand`? | `B` |

#### Returns

[`ZodBranded`](ZodBranded.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

```ts
catch(def: arrayOutputType<T, Cardinality>): ZodCatch<ZodArray<T, Cardinality>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

```ts
catch(def: (ctx: {
  error: ZodError<any>;
  input: Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][];
}) => arrayOutputType<T, Cardinality>): ZodCatch<ZodArray<T, Cardinality>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](ZodError.md)\<`any`\>; `input`: `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]; \}) => [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

```ts
default(def: noUndefined<Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]>): ZodDefault<ZodArray<T, Cardinality>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

```ts
default(def: () => noUndefined<Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]>): ZodDefault<ZodArray<T, Cardinality>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | () => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:86

***

### describe()

```ts
describe(description: string): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |

#### Returns

`this`

#### Inherited from

[`ZodType`](ZodType.md).[`describe`](ZodType.md#describe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:93

***

### isNullable()

```ts
isNullable(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`ZodType`](ZodType.md).[`isNullable`](ZodType.md#isnullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:97

***

### isOptional()

```ts
isOptional(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`ZodType`](ZodType.md).[`isOptional`](ZodType.md#isoptional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:96

***

### length()

```ts
length(len: number, message?: ErrMessage): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `len` | `number` |
| `message`? | `ErrMessage` |

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:497

***

### max()

```ts
max(maxLength: number, message?: ErrMessage): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `maxLength` | `number` |
| `message`? | `ErrMessage` |

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:496

***

### min()

```ts
min(minLength: number, message?: ErrMessage): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `minLength` | `number` |
| `message`? | `ErrMessage` |

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:495

***

### nonempty()

```ts
nonempty(message?: ErrMessage): ZodArray<T, "atleastone">
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodArray`](ZodArray.md)\<`T`, `"atleastone"`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:498

***

### nullable()

```ts
nullable(): ZodNullable<ZodArray<T, Cardinality>>
```

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

```ts
nullish(): ZodOptional<ZodNullable<ZodArray<T, Cardinality>>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

```ts
optional(): ZodOptional<ZodArray<T, Cardinality>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

```ts
or<T>(option: T): ZodUnion<[ZodArray<T, Cardinality>, T]>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](ZodUnion.md)\<[[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

```ts
parse(data: unknown, params?: Partial<ParseParams>): arrayOutputType<T, Cardinality>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

```ts
parseAsync(data: unknown, params?: Partial<ParseParams>): Promise<arrayOutputType<T, Cardinality>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

```ts
pipe<T>(target: T): ZodPipeline<ZodArray<T, Cardinality>, T>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

```ts
promise(): ZodPromise<ZodArray<T, Cardinality>>
```

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

```ts
readonly(): ZodReadonly<ZodArray<T, Cardinality>>
```

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

```ts
refine<RefinedOutput>(check: (arg: arrayOutputType<T, Cardinality>) => arg is RefinedOutput, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: arrayOutputType<T, Cardinality>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodArray<T, Cardinality>, RefinedOutput, Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* [`T`\[`"_output"`\], `...T["_output"][]`] \| `T`\[`"_output"`\][] |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>) => `arg is RefinedOutput` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

```ts
refine(check: (arg: arrayOutputType<T, Cardinality>) => unknown, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: arrayOutputType<T, Cardinality>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodArray<T, Cardinality>, arrayOutputType<T, Cardinality>, Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>) => `unknown` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

```ts
refinement<RefinedOutput>(check: (arg: arrayOutputType<T, Cardinality>) => arg is RefinedOutput, refinementData: IssueData | (arg: arrayOutputType<T, Cardinality>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodArray<T, Cardinality>, RefinedOutput, Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* [`T`\[`"_output"`\], `...T["_output"][]`] \| `T`\[`"_output"`\][] |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>) => `arg is RefinedOutput` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

```ts
refinement(check: (arg: arrayOutputType<T, Cardinality>) => boolean, refinementData: IssueData | (arg: arrayOutputType<T, Cardinality>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodArray<T, Cardinality>, arrayOutputType<T, Cardinality>, Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>) => `boolean` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

```ts
safeParse(data: unknown, params?: Partial<ParseParams>): SafeParseReturnType<Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][], arrayOutputType<T, Cardinality>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

```ts
safeParseAsync(data: unknown, params?: Partial<ParseParams>): Promise<SafeParseReturnType<Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][], arrayOutputType<T, Cardinality>>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

```ts
superRefine<RefinedOutput>(refinement: (arg: arrayOutputType<T, Cardinality>, ctx: RefinementCtx) => arg is RefinedOutput): ZodEffects<ZodArray<T, Cardinality>, RefinedOutput, Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* [`T`\[`"_output"`\], `...T["_output"][]`] \| `T`\[`"_output"`\][] |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `arg is RefinedOutput` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: arrayOutputType<T, Cardinality>, ctx: RefinementCtx) => void): ZodEffects<ZodArray<T, Cardinality>, arrayOutputType<T, Cardinality>, Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `void` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: arrayOutputType<T, Cardinality>, ctx: RefinementCtx) => Promise<void>): ZodEffects<ZodArray<T, Cardinality>, arrayOutputType<T, Cardinality>, Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `Promise`\<`void`\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

```ts
transform<NewOut>(transform: (arg: arrayOutputType<T, Cardinality>, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<ZodArray<T, Cardinality>, NewOut, Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `NewOut` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transform` | (`arg`: [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodArray`](ZodArray.md)\<`T`, `Cardinality`\>, `NewOut`, `Cardinality` *extends* `"atleastone"` ? [`T`\[`"_input"`\], `...T["_input"][]`] : `T`\[`"_input"`\][]\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
