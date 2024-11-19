# Class: ZodBranded\<T, B\>

## Extends

- [`ZodType`](ZodType.md)\<`T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, [`ZodBrandedDef`](../interfaces/ZodBrandedDef.md)\<`T`\>, `T`\[`"_input"`\]\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) |
| `B` *extends* `string` \| `number` \| `symbol` |

## Constructors

### new ZodBranded()

```ts
new ZodBranded<T, B>(def: ZodBrandedDef<T>): ZodBranded<T, B>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`ZodBrandedDef`](../interfaces/ZodBrandedDef.md)\<`T`\> |

#### Returns

[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `_def` | `readonly` | [`ZodBrandedDef`](../interfaces/ZodBrandedDef.md)\<`T`\> | - | [`ZodType`](ZodType.md).`_def` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51 |
| `_input` | `readonly` | `T`\[`"_input"`\] | - | [`ZodType`](ZodType.md).`_input` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50 |
| `_output` | `readonly` | `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\> | - | [`ZodType`](ZodType.md).`_output` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49 |
| `_type` | `readonly` | `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\> | - | [`ZodType`](ZodType.md).`_type` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48 |
| `spa` | `public` | (`data`: `unknown`, `params`?: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`"_input"`\], `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>\>\> | Alias of safeParseAsync | [`ZodType`](ZodType.md).`spa` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67 |

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

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:915

***

### \_parseAsync()

```ts
_parseAsync(input: ParseInput): AsyncParseReturnType<T["_output"] & BRAND<B>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

```ts
_parseSync(input: ParseInput): SyncParseReturnType<T["_output"] & BRAND<B>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>\>

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
_refinement(refinement: (arg: T["_output"] & BRAND<B>, ctx: RefinementCtx) => any): ZodEffects<ZodBranded<T, B>, T["_output"] & BRAND<B>, T["_input"]>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `T`\[`"_input"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

```ts
and<T>(incoming: T): ZodIntersection<ZodBranded<T, B>, T>
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

[`ZodIntersection`](ZodIntersection.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

```ts
array(): ZodArray<ZodBranded<T, B>, "many">
```

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

```ts
brand<B>(brand?: B): ZodBranded<ZodBranded<T, B>, B>
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

[`ZodBranded`](ZodBranded.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

```ts
catch(def: T["_output"] & BRAND<B>): ZodCatch<ZodBranded<T, B>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

```ts
catch(def: (ctx: {
  error: ZodError<any>;
  input: T["_input"];
}) => T["_output"] & BRAND<B>): ZodCatch<ZodBranded<T, B>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](ZodError.md)\<`any`\>; `input`: `T`\[`"_input"`\]; \}) => `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

```ts
default(def: noUndefined<T["_input"]>): ZodDefault<ZodBranded<T, B>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_input"`\]\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

```ts
default(def: () => noUndefined<T["_input"]>): ZodDefault<ZodBranded<T, B>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | () => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_input"`\]\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>\>

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

### nullable()

```ts
nullable(): ZodNullable<ZodBranded<T, B>>
```

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

```ts
nullish(): ZodOptional<ZodNullable<ZodBranded<T, B>>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

```ts
optional(): ZodOptional<ZodBranded<T, B>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

```ts
or<T>(option: T): ZodUnion<[ZodBranded<T, B>, T]>
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

[`ZodUnion`](ZodUnion.md)\<[[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

```ts
parse(data: unknown, params?: Partial<ParseParams>): T["_output"] & BRAND<B>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

```ts
parseAsync(data: unknown, params?: Partial<ParseParams>): Promise<T["_output"] & BRAND<B>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<`T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

```ts
pipe<T>(target: T): ZodPipeline<ZodBranded<T, B>, T>
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

[`ZodPipeline`](ZodPipeline.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

```ts
promise(): ZodPromise<ZodBranded<T, B>>
```

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

```ts
readonly(): ZodReadonly<ZodBranded<T, B>>
```

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

```ts
refine<RefinedOutput>(check: (arg: T["_output"] & BRAND<B>) => arg is RefinedOutput, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: T["_output"] & BRAND<B>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodBranded<T, B>, RefinedOutput, T["_input"]>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>) => `arg is RefinedOutput` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `RefinedOutput`, `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

```ts
refine(check: (arg: T["_output"] & BRAND<B>) => unknown, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: T["_output"] & BRAND<B>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodBranded<T, B>, T["_output"] & BRAND<B>, T["_input"]>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>) => `unknown` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

```ts
refinement<RefinedOutput>(check: (arg: T["_output"] & BRAND<B>) => arg is RefinedOutput, refinementData: IssueData | (arg: T["_output"] & BRAND<B>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodBranded<T, B>, RefinedOutput, T["_input"]>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>) => `arg is RefinedOutput` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `RefinedOutput`, `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

```ts
refinement(check: (arg: T["_output"] & BRAND<B>) => boolean, refinementData: IssueData | (arg: T["_output"] & BRAND<B>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodBranded<T, B>, T["_output"] & BRAND<B>, T["_input"]>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>) => `boolean` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

```ts
safeParse(data: unknown, params?: Partial<ParseParams>): SafeParseReturnType<T["_input"], T["_output"] & BRAND<B>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`"_input"`\], `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

```ts
safeParseAsync(data: unknown, params?: Partial<ParseParams>): Promise<SafeParseReturnType<T["_input"], T["_output"] & BRAND<B>>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`"_input"`\], `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

```ts
superRefine<RefinedOutput>(refinement: (arg: T["_output"] & BRAND<B>, ctx: RefinementCtx) => arg is RefinedOutput): ZodEffects<ZodBranded<T, B>, RefinedOutput, T["_input"]>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `arg is RefinedOutput` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `RefinedOutput`, `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: T["_output"] & BRAND<B>, ctx: RefinementCtx) => void): ZodEffects<ZodBranded<T, B>, T["_output"] & BRAND<B>, T["_input"]>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `void` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: T["_output"] & BRAND<B>, ctx: RefinementCtx) => Promise<void>): ZodEffects<ZodBranded<T, B>, T["_output"] & BRAND<B>, T["_input"]>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `Promise`\<`void`\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

```ts
transform<NewOut>(transform: (arg: T["_output"] & BRAND<B>, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<ZodBranded<T, B>, NewOut, T["_input"]>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `NewOut` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transform` | (`arg`: `T`\[`"_output"`\] & [`BRAND`](../type-aliases/BRAND.md)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodBranded`](ZodBranded.md)\<`T`, `B`\>, `NewOut`, `T`\[`"_input"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84

***

### unwrap()

```ts
unwrap(): T
```

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:916
