# Class: ZodSet\<Value\>

## Extends

- [`ZodType`](ZodType.md)\<`Set`\<`Value`\[`"_output"`\]\>, [`ZodSetDef`](../interfaces/ZodSetDef.md)\<`Value`\>, `Set`\<`Value`\[`"_input"`\]\>\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Value` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) |

## Constructors

### new ZodSet()

```ts
new ZodSet<Value>(def: ZodSetDef<Value>): ZodSet<Value>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`ZodSetDef`](../interfaces/ZodSetDef.md)\<`Value`\> |

#### Returns

[`ZodSet`](ZodSet.md)\<`Value`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `_def` | `readonly` | [`ZodSetDef`](../interfaces/ZodSetDef.md)\<`Value`\> | - | [`ZodType`](ZodType.md).`_def` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51 |
| `_input` | `readonly` | `Set`\<`Value`\[`"_input"`\]\> | - | [`ZodType`](ZodType.md).`_input` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50 |
| `_output` | `readonly` | `Set`\<`Value`\[`"_output"`\]\> | - | [`ZodType`](ZodType.md).`_output` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49 |
| `_type` | `readonly` | `Set`\<`Value`\[`"_output"`\]\> | - | [`ZodType`](ZodType.md).`_type` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48 |
| `spa` | `public` | (`data`: `unknown`, `params`?: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Set`\<`Value`\[`"_input"`\]\>, `Set`\<`Value`\[`"_output"`\]\>\>\> | Alias of safeParseAsync | [`ZodType`](ZodType.md).`spa` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67 |
| `create` | `static` | \<`Value_1`\>(`valueType`: `Value_1`, `params`?: [`RawCreateParams`](../type-aliases/RawCreateParams.md)) => [`ZodSet`](ZodSet.md)\<`Value_1`\> | - | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:718 |

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
_parse(input: ParseInput): ParseReturnType<Set<Value["_output"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Set`\<`Value`\[`"_output"`\]\>\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:713

***

### \_parseAsync()

```ts
_parseAsync(input: ParseInput): AsyncParseReturnType<Set<Value["_output"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Set`\<`Value`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

```ts
_parseSync(input: ParseInput): SyncParseReturnType<Set<Value["_output"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`Set`\<`Value`\[`"_output"`\]\>\>

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
_refinement(refinement: (arg: Set<Value["_output"]>, ctx: RefinementCtx) => any): ZodEffects<ZodSet<Value>, Set<Value["_output"]>, Set<Value["_input"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `Set`\<`Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

```ts
and<T>(incoming: T): ZodIntersection<ZodSet<Value>, T>
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

[`ZodIntersection`](ZodIntersection.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

```ts
array(): ZodArray<ZodSet<Value>, "many">
```

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

```ts
brand<B>(brand?: B): ZodBranded<ZodSet<Value>, B>
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

[`ZodBranded`](ZodBranded.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

```ts
catch(def: Set<Value["_output"]>): ZodCatch<ZodSet<Value>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | `Set`\<`Value`\[`"_output"`\]\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

```ts
catch(def: (ctx: {
  error: ZodError<any>;
  input: Set<Value["_input"]>;
}) => Set<Value["_output"]>): ZodCatch<ZodSet<Value>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](ZodError.md)\<`any`\>; `input`: `Set`\<`Value`\[`"_input"`\]\>; \}) => `Set`\<`Value`\[`"_output"`\]\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

```ts
default(def: Set<Value["_input"]>): ZodDefault<ZodSet<Value>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | `Set`\<`Value`\[`"_input"`\]\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

```ts
default(def: () => Set<Value["_input"]>): ZodDefault<ZodSet<Value>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | () => `Set`\<`Value`\[`"_input"`\]\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>\>

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

### max()

```ts
max(maxSize: number, message?: ErrMessage): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `maxSize` | `number` |
| `message`? | `ErrMessage` |

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:715

***

### min()

```ts
min(minSize: number, message?: ErrMessage): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `minSize` | `number` |
| `message`? | `ErrMessage` |

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:714

***

### nonempty()

```ts
nonempty(message?: ErrMessage): ZodSet<Value>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodSet`](ZodSet.md)\<`Value`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:717

***

### nullable()

```ts
nullable(): ZodNullable<ZodSet<Value>>
```

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

```ts
nullish(): ZodOptional<ZodNullable<ZodSet<Value>>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

```ts
optional(): ZodOptional<ZodSet<Value>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

```ts
or<T>(option: T): ZodUnion<[ZodSet<Value>, T]>
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

[`ZodUnion`](ZodUnion.md)\<[[`ZodSet`](ZodSet.md)\<`Value`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

```ts
parse(data: unknown, params?: Partial<ParseParams>): Set<Value["_output"]>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Set`\<`Value`\[`"_output"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

```ts
parseAsync(data: unknown, params?: Partial<ParseParams>): Promise<Set<Value["_output"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<`Set`\<`Value`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

```ts
pipe<T>(target: T): ZodPipeline<ZodSet<Value>, T>
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

[`ZodPipeline`](ZodPipeline.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

```ts
promise(): ZodPromise<ZodSet<Value>>
```

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

```ts
readonly(): ZodReadonly<ZodSet<Value>>
```

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

```ts
refine<RefinedOutput>(check: (arg: Set<Value["_output"]>) => arg is RefinedOutput, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: Set<Value["_output"]>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodSet<Value>, RefinedOutput, Set<Value["_input"]>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `Set`\<`Value`\[`"_output"`\], `RefinedOutput`\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `Set`\<`Value`\[`"_output"`\]\>) => `arg is RefinedOutput` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: `Set`\<`Value`\[`"_output"`\]\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `RefinedOutput`, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

```ts
refine(check: (arg: Set<Value["_output"]>) => unknown, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: Set<Value["_output"]>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodSet<Value>, Set<Value["_output"]>, Set<Value["_input"]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `Set`\<`Value`\[`"_output"`\]\>) => `unknown` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: `Set`\<`Value`\[`"_output"`\]\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

```ts
refinement<RefinedOutput>(check: (arg: Set<Value["_output"]>) => arg is RefinedOutput, refinementData: IssueData | (arg: Set<Value["_output"]>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodSet<Value>, RefinedOutput, Set<Value["_input"]>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `Set`\<`Value`\[`"_output"`\], `RefinedOutput`\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `Set`\<`Value`\[`"_output"`\]\>) => `arg is RefinedOutput` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: `Set`\<`Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `RefinedOutput`, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

```ts
refinement(check: (arg: Set<Value["_output"]>) => boolean, refinementData: IssueData | (arg: Set<Value["_output"]>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodSet<Value>, Set<Value["_output"]>, Set<Value["_input"]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `Set`\<`Value`\[`"_output"`\]\>) => `boolean` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: `Set`\<`Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

```ts
safeParse(data: unknown, params?: Partial<ParseParams>): SafeParseReturnType<Set<Value["_input"]>, Set<Value["_output"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Set`\<`Value`\[`"_input"`\]\>, `Set`\<`Value`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

```ts
safeParseAsync(data: unknown, params?: Partial<ParseParams>): Promise<SafeParseReturnType<Set<Value["_input"]>, Set<Value["_output"]>>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Set`\<`Value`\[`"_input"`\]\>, `Set`\<`Value`\[`"_output"`\]\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### size()

```ts
size(size: number, message?: ErrMessage): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `size` | `number` |
| `message`? | `ErrMessage` |

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:716

***

### superRefine()

#### superRefine(refinement)

```ts
superRefine<RefinedOutput>(refinement: (arg: Set<Value["_output"]>, ctx: RefinementCtx) => arg is RefinedOutput): ZodEffects<ZodSet<Value>, RefinedOutput, Set<Value["_input"]>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `Set`\<`Value`\[`"_output"`\], `RefinedOutput`\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `Set`\<`Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `arg is RefinedOutput` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `RefinedOutput`, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: Set<Value["_output"]>, ctx: RefinementCtx) => void): ZodEffects<ZodSet<Value>, Set<Value["_output"]>, Set<Value["_input"]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `Set`\<`Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `void` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: Set<Value["_output"]>, ctx: RefinementCtx) => Promise<void>): ZodEffects<ZodSet<Value>, Set<Value["_output"]>, Set<Value["_input"]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `Set`\<`Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `Promise`\<`void`\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `Set`\<`Value`\[`"_output"`\]\>, `Set`\<`Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

```ts
transform<NewOut>(transform: (arg: Set<Value["_output"]>, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<ZodSet<Value>, NewOut, Set<Value["_input"]>>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `NewOut` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transform` | (`arg`: `Set`\<`Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodSet`](ZodSet.md)\<`Value`\>, `NewOut`, `Set`\<`Value`\[`"_input"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
