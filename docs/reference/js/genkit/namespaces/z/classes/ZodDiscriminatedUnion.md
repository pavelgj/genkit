# Class: ZodDiscriminatedUnion\<Discriminator, Options\>

## Extends

- [`ZodType`](ZodType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

## Type Parameters

| Type Parameter |
| ------ |
| `Discriminator` *extends* `string` |
| `Options` *extends* [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`Discriminator`\>[] |

## Constructors

### new ZodDiscriminatedUnion()

```ts
new ZodDiscriminatedUnion<Discriminator, Options>(def: ZodDiscriminatedUnionDef<Discriminator, Options>): ZodDiscriminatedUnion<Discriminator, Options>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\> |

#### Returns

[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `_def` | `readonly` | [`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\> | - | [`ZodType`](ZodType.md).`_def` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51 |
| `_input` | `readonly` | [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\> | - | [`ZodType`](ZodType.md).`_input` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50 |
| `_output` | `readonly` | [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\> | - | [`ZodType`](ZodType.md).`_output` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49 |
| `_type` | `readonly` | [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\> | - | [`ZodType`](ZodType.md).`_type` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48 |
| `spa` | `public` | (`data`: `unknown`, `params`?: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\> | Alias of safeParseAsync | [`ZodType`](ZodType.md).`spa` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67 |

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

### discriminator

#### Get Signature

```ts
get discriminator(): Discriminator
```

##### Returns

`Discriminator`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:622

***

### options

#### Get Signature

```ts
get options(): Options
```

##### Returns

`Options`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:623

***

### optionsMap

#### Get Signature

```ts
get optionsMap(): Map<Primitive, ZodDiscriminatedUnionOption<any>>
```

##### Returns

`Map`\<[`Primitive`](../type-aliases/Primitive.md), [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`any`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:624

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
_parse(input: ParseInput): ParseReturnType<output<Options[number]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:621

***

### \_parseAsync()

```ts
_parseAsync(input: ParseInput): AsyncParseReturnType<output<Options[number]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

```ts
_parseSync(input: ParseInput): SyncParseReturnType<output<Options[number]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

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
_refinement(refinement: (arg: output<Options[number]>, ctx: RefinementCtx) => any): ZodEffects<ZodDiscriminatedUnion<Discriminator, Options>, output<Options[number]>, input<Options[number]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

```ts
and<T>(incoming: T): ZodIntersection<ZodDiscriminatedUnion<Discriminator, Options>, T>
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

[`ZodIntersection`](ZodIntersection.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

```ts
array(): ZodArray<ZodDiscriminatedUnion<Discriminator, Options>, "many">
```

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

```ts
brand<B>(brand?: B): ZodBranded<ZodDiscriminatedUnion<Discriminator, Options>, B>
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

[`ZodBranded`](ZodBranded.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

```ts
catch(def: output<Options[number]>): ZodCatch<ZodDiscriminatedUnion<Discriminator, Options>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

```ts
catch(def: (ctx: {
  error: ZodError<any>;
  input: input<Options[number]>;
}) => output<Options[number]>): ZodCatch<ZodDiscriminatedUnion<Discriminator, Options>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](ZodError.md)\<`any`\>; `input`: [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>; \}) => [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

```ts
default(def: noUndefined<input<Options[number]>>): ZodDefault<ZodDiscriminatedUnion<Discriminator, Options>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

```ts
default(def: () => noUndefined<input<Options[number]>>): ZodDefault<ZodDiscriminatedUnion<Discriminator, Options>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | () => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

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
nullable(): ZodNullable<ZodDiscriminatedUnion<Discriminator, Options>>
```

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

```ts
nullish(): ZodOptional<ZodNullable<ZodDiscriminatedUnion<Discriminator, Options>>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

```ts
optional(): ZodOptional<ZodDiscriminatedUnion<Discriminator, Options>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

```ts
or<T>(option: T): ZodUnion<[ZodDiscriminatedUnion<Discriminator, Options>, T]>
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

[`ZodUnion`](ZodUnion.md)\<[[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

```ts
parse(data: unknown, params?: Partial<ParseParams>): output<Options[number]>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

```ts
parseAsync(data: unknown, params?: Partial<ParseParams>): Promise<output<Options[number]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

```ts
pipe<T>(target: T): ZodPipeline<ZodDiscriminatedUnion<Discriminator, Options>, T>
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

[`ZodPipeline`](ZodPipeline.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

```ts
promise(): ZodPromise<ZodDiscriminatedUnion<Discriminator, Options>>
```

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

```ts
readonly(): ZodReadonly<ZodDiscriminatedUnion<Discriminator, Options>>
```

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

```ts
refine<RefinedOutput>(check: (arg: output<Options[number]>) => arg is RefinedOutput, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: output<Options[number]>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodDiscriminatedUnion<Discriminator, Options>, RefinedOutput, input<Options[number]>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \} |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>) => `arg is RefinedOutput` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

```ts
refine(check: (arg: output<Options[number]>) => unknown, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: output<Options[number]>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodDiscriminatedUnion<Discriminator, Options>, output<Options[number]>, input<Options[number]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>) => `unknown` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

```ts
refinement<RefinedOutput>(check: (arg: output<Options[number]>) => arg is RefinedOutput, refinementData: IssueData | (arg: output<Options[number]>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodDiscriminatedUnion<Discriminator, Options>, RefinedOutput, input<Options[number]>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \} |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>) => `arg is RefinedOutput` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

```ts
refinement(check: (arg: output<Options[number]>) => boolean, refinementData: IssueData | (arg: output<Options[number]>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodDiscriminatedUnion<Discriminator, Options>, output<Options[number]>, input<Options[number]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>) => `boolean` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

```ts
safeParse(data: unknown, params?: Partial<ParseParams>): SafeParseReturnType<input<Options[number]>, output<Options[number]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

```ts
safeParseAsync(data: unknown, params?: Partial<ParseParams>): Promise<SafeParseReturnType<input<Options[number]>, output<Options[number]>>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

```ts
superRefine<RefinedOutput>(refinement: (arg: output<Options[number]>, ctx: RefinementCtx) => arg is RefinedOutput): ZodEffects<ZodDiscriminatedUnion<Discriminator, Options>, RefinedOutput, input<Options[number]>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \} |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `arg is RefinedOutput` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: output<Options[number]>, ctx: RefinementCtx) => void): ZodEffects<ZodDiscriminatedUnion<Discriminator, Options>, output<Options[number]>, input<Options[number]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `void` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: output<Options[number]>, ctx: RefinementCtx) => Promise<void>): ZodEffects<ZodDiscriminatedUnion<Discriminator, Options>, output<Options[number]>, input<Options[number]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `Promise`\<`void`\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

```ts
transform<NewOut>(transform: (arg: output<Options[number]>, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<ZodDiscriminatedUnion<Discriminator, Options>, NewOut, input<Options[number]>>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `NewOut` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transform` | (`arg`: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `NewOut`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84

***

### create()

```ts
static create<Discriminator, Types>(
   discriminator: Discriminator, 
   options: Types, 
params?: RawCreateParams): ZodDiscriminatedUnion<Discriminator, Types>
```

The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
However, it only allows a union of objects, all of which need to share a discriminator property. This property must
have a different value for each object in the union.

#### Type Parameters

| Type Parameter |
| ------ |
| `Discriminator` *extends* `string` |
| `Types` *extends* [[`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`Discriminator`\>, `...ZodDiscriminatedUnionOption<Discriminator>[]`] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `discriminator` | `Discriminator` | the name of the discriminator property |
| `options` | `Types` | - |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) | - |

#### Returns

[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Types`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:633
