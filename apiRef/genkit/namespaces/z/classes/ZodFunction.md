# Class: ZodFunction\<Args, Returns\>

## Extends

- [`ZodType`](ZodType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`ZodFunctionDef`](../interfaces/ZodFunctionDef.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

## Type Parameters

| Type Parameter |
| ------ |
| `Args` *extends* [`ZodTuple`](ZodTuple.md)\<`any`, `any`\> |
| `Returns` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) |

## Constructors

### new ZodFunction()

```ts
new ZodFunction<Args, Returns>(def: ZodFunctionDef<Args, Returns>): ZodFunction<Args, Returns>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`ZodFunctionDef`](../interfaces/ZodFunctionDef.md)\<`Args`, `Returns`\> |

#### Returns

[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `_def` | `readonly` | [`ZodFunctionDef`](../interfaces/ZodFunctionDef.md)\<`Args`, `Returns`\> | - | [`ZodType`](ZodType.md).`_def` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51 |
| `_input` | `readonly` | [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\> | - | [`ZodType`](ZodType.md).`_input` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50 |
| `_output` | `readonly` | [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\> | - | [`ZodType`](ZodType.md).`_output` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49 |
| `_type` | `readonly` | [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\> | - | [`ZodType`](ZodType.md).`_type` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48 |
| `spa` | `public` | (`data`: `unknown`, `params`?: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\> | Alias of safeParseAsync | [`ZodType`](ZodType.md).`spa` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67 |
| `validate` | `public` | \<`F`\>(`func`: `F`) => `ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`: `Args`\[`"_input"`\]) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\> | - | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:735 |

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
_parse(input: ParseInput): ParseReturnType<any>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`any`\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:728

***

### \_parseAsync()

```ts
_parseAsync(input: ParseInput): AsyncParseReturnType<OuterTypeOfFunction<Args, Returns>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

```ts
_parseSync(input: ParseInput): SyncParseReturnType<OuterTypeOfFunction<Args, Returns>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

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
_refinement(refinement: (arg: OuterTypeOfFunction<Args, Returns>, ctx: RefinementCtx) => any): ZodEffects<ZodFunction<Args, Returns>, OuterTypeOfFunction<Args, Returns>, InnerTypeOfFunction<Args, Returns>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

```ts
and<T>(incoming: T): ZodIntersection<ZodFunction<Args, Returns>, T>
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

[`ZodIntersection`](ZodIntersection.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### args()

```ts
args<Items>(...items: Items): ZodFunction<ZodTuple<Items, ZodUnknown>, Returns>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Items` *extends* [] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`items` | `Items` |

#### Returns

[`ZodFunction`](ZodFunction.md)\<[`ZodTuple`](ZodTuple.md)\<`Items`, [`ZodUnknown`](ZodUnknown.md)\>, `Returns`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:731

***

### array()

```ts
array(): ZodArray<ZodFunction<Args, Returns>, "many">
```

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

```ts
brand<B>(brand?: B): ZodBranded<ZodFunction<Args, Returns>, B>
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

[`ZodBranded`](ZodBranded.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

```ts
catch(def: OuterTypeOfFunction<Args, Returns>): ZodCatch<ZodFunction<Args, Returns>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

```ts
catch(def: (ctx: {
  error: ZodError<any>;
  input: InnerTypeOfFunction<Args, Returns>;
}) => OuterTypeOfFunction<Args, Returns>): ZodCatch<ZodFunction<Args, Returns>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](ZodError.md)\<`any`\>; `input`: [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>; \}) => [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

```ts
default(def: noUndefined<InnerTypeOfFunction<Args, Returns>>): ZodDefault<ZodFunction<Args, Returns>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

```ts
default(def: () => noUndefined<InnerTypeOfFunction<Args, Returns>>): ZodDefault<ZodFunction<Args, Returns>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | () => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

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

### implement()

```ts
implement<F>(func: F): ReturnType<F> extends Returns["_output"] ? (...args: Args["_input"]) => ReturnType<ReturnType<F>> : OuterTypeOfFunction<Args, Returns>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `F` *extends* (...`args`: `any`\[`any`\]) => `Returns`\[`"_input"`\] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `func` | `F` |

#### Returns

`ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`: `Args`\[`"_input"`\]) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:733

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

### nullable()

```ts
nullable(): ZodNullable<ZodFunction<Args, Returns>>
```

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

```ts
nullish(): ZodOptional<ZodNullable<ZodFunction<Args, Returns>>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

```ts
optional(): ZodOptional<ZodFunction<Args, Returns>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

```ts
or<T>(option: T): ZodUnion<[ZodFunction<Args, Returns>, T]>
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

[`ZodUnion`](ZodUnion.md)\<[[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parameters()

```ts
parameters(): Args
```

#### Returns

`Args`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:729

***

### parse()

```ts
parse(data: unknown, params?: Partial<ParseParams>): OuterTypeOfFunction<Args, Returns>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

```ts
parseAsync(data: unknown, params?: Partial<ParseParams>): Promise<OuterTypeOfFunction<Args, Returns>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

```ts
pipe<T>(target: T): ZodPipeline<ZodFunction<Args, Returns>, T>
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

[`ZodPipeline`](ZodPipeline.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

```ts
promise(): ZodPromise<ZodFunction<Args, Returns>>
```

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

```ts
readonly(): ZodReadonly<ZodFunction<Args, Returns>>
```

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

```ts
refine<RefinedOutput>(check: (arg: OuterTypeOfFunction<Args, Returns>) => arg is RefinedOutput, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: OuterTypeOfFunction<Args, Returns>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodFunction<Args, Returns>, RefinedOutput, InnerTypeOfFunction<Args, Returns>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* (...`args`: `any`\[`any`\]) => `Returns`\[`"_output"`\] |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>) => `arg is RefinedOutput` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

```ts
refine(check: (arg: OuterTypeOfFunction<Args, Returns>) => unknown, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: OuterTypeOfFunction<Args, Returns>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodFunction<Args, Returns>, OuterTypeOfFunction<Args, Returns>, InnerTypeOfFunction<Args, Returns>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>) => `unknown` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

```ts
refinement<RefinedOutput>(check: (arg: OuterTypeOfFunction<Args, Returns>) => arg is RefinedOutput, refinementData: IssueData | (arg: OuterTypeOfFunction<Args, Returns>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodFunction<Args, Returns>, RefinedOutput, InnerTypeOfFunction<Args, Returns>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* (...`args`: `any`\[`any`\]) => `Returns`\[`"_output"`\] |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>) => `arg is RefinedOutput` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

```ts
refinement(check: (arg: OuterTypeOfFunction<Args, Returns>) => boolean, refinementData: IssueData | (arg: OuterTypeOfFunction<Args, Returns>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodFunction<Args, Returns>, OuterTypeOfFunction<Args, Returns>, InnerTypeOfFunction<Args, Returns>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>) => `boolean` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### returns()

```ts
returns<NewReturnType>(returnType: NewReturnType): ZodFunction<Args, NewReturnType>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `NewReturnType` *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `NewReturnType`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `returnType` | `NewReturnType` |

#### Returns

[`ZodFunction`](ZodFunction.md)\<`Args`, `NewReturnType`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:732

***

### returnType()

```ts
returnType(): Returns
```

#### Returns

`Returns`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:730

***

### safeParse()

```ts
safeParse(data: unknown, params?: Partial<ParseParams>): SafeParseReturnType<InnerTypeOfFunction<Args, Returns>, OuterTypeOfFunction<Args, Returns>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

```ts
safeParseAsync(data: unknown, params?: Partial<ParseParams>): Promise<SafeParseReturnType<InnerTypeOfFunction<Args, Returns>, OuterTypeOfFunction<Args, Returns>>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### strictImplement()

```ts
strictImplement(func: InnerTypeOfFunction<Args, Returns>): InnerTypeOfFunction<Args, Returns>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `func` | [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\> |

#### Returns

[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:734

***

### superRefine()

#### superRefine(refinement)

```ts
superRefine<RefinedOutput>(refinement: (arg: OuterTypeOfFunction<Args, Returns>, ctx: RefinementCtx) => arg is RefinedOutput): ZodEffects<ZodFunction<Args, Returns>, RefinedOutput, InnerTypeOfFunction<Args, Returns>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* (...`args`: `any`\[`any`\]) => `Returns`\[`"_output"`\] |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `arg is RefinedOutput` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: OuterTypeOfFunction<Args, Returns>, ctx: RefinementCtx) => void): ZodEffects<ZodFunction<Args, Returns>, OuterTypeOfFunction<Args, Returns>, InnerTypeOfFunction<Args, Returns>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `void` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: OuterTypeOfFunction<Args, Returns>, ctx: RefinementCtx) => Promise<void>): ZodEffects<ZodFunction<Args, Returns>, OuterTypeOfFunction<Args, Returns>, InnerTypeOfFunction<Args, Returns>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `Promise`\<`void`\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

```ts
transform<NewOut>(transform: (arg: OuterTypeOfFunction<Args, Returns>, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<ZodFunction<Args, Returns>, NewOut, InnerTypeOfFunction<Args, Returns>>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `NewOut` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transform` | (`arg`: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `NewOut`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84

***

### create()

#### create(undefined)

```ts
static create(): ZodFunction<ZodTuple<[], ZodUnknown>, ZodUnknown>
```

##### Returns

[`ZodFunction`](ZodFunction.md)\<[`ZodTuple`](ZodTuple.md)\<[], [`ZodUnknown`](ZodUnknown.md)\>, [`ZodUnknown`](ZodUnknown.md)\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:736

#### create(args)

```ts
static create<T>(args: T): ZodFunction<T, ZodUnknown>
```

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ZodTuple`](ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\> | [`ZodTuple`](ZodTuple.md)\<[], [`ZodUnknown`](ZodUnknown.md)\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | `T` |

##### Returns

[`ZodFunction`](ZodFunction.md)\<`T`, [`ZodUnknown`](ZodUnknown.md)\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:737

#### create(args, returns)

```ts
static create<T, U>(args: T, returns: U): ZodFunction<T, U>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodTuple`](ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\> |
| `U` *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `U`\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | `T` |
| `returns` | `U` |

##### Returns

[`ZodFunction`](ZodFunction.md)\<`T`, `U`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:738

#### create(args, returns, params)

```ts
static create<T, U>(
   args: T, 
   returns: U, 
params?: RawCreateParams): ZodFunction<T, U>
```

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ZodTuple`](ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\> | [`ZodTuple`](ZodTuple.md)\<[], [`ZodUnknown`](ZodUnknown.md)\> |
| `U` *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `U`\> | [`ZodUnknown`](ZodUnknown.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | `T` |
| `returns` | `U` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

##### Returns

[`ZodFunction`](ZodFunction.md)\<`T`, `U`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:739
