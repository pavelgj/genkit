# Class: `abstract` ZodType\<Output, Def, Input\>

## Extended by

- [`ZodString`](ZodString.md)
- [`ZodNumber`](ZodNumber.md)
- [`ZodBigInt`](ZodBigInt.md)
- [`ZodBoolean`](ZodBoolean.md)
- [`ZodDate`](ZodDate.md)
- [`ZodSymbol`](ZodSymbol.md)
- [`ZodUndefined`](ZodUndefined.md)
- [`ZodNull`](ZodNull.md)
- [`ZodAny`](ZodAny.md)
- [`ZodUnknown`](ZodUnknown.md)
- [`ZodNever`](ZodNever.md)
- [`ZodVoid`](ZodVoid.md)
- [`ZodArray`](ZodArray.md)
- [`ZodObject`](ZodObject.md)
- [`ZodUnion`](ZodUnion.md)
- [`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)
- [`ZodIntersection`](ZodIntersection.md)
- [`ZodTuple`](ZodTuple.md)
- [`ZodRecord`](ZodRecord.md)
- [`ZodMap`](ZodMap.md)
- [`ZodSet`](ZodSet.md)
- [`ZodFunction`](ZodFunction.md)
- [`ZodLazy`](ZodLazy.md)
- [`ZodLiteral`](ZodLiteral.md)
- [`ZodEnum`](ZodEnum.md)
- [`ZodNativeEnum`](ZodNativeEnum.md)
- [`ZodPromise`](ZodPromise.md)
- [`ZodEffects`](ZodEffects.md)
- [`ZodOptional`](ZodOptional.md)
- [`ZodNullable`](ZodNullable.md)
- [`ZodDefault`](ZodDefault.md)
- [`ZodCatch`](ZodCatch.md)
- [`ZodNaN`](ZodNaN.md)
- [`ZodBranded`](ZodBranded.md)
- [`ZodPipeline`](ZodPipeline.md)
- [`ZodReadonly`](ZodReadonly.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Output` | `any` |
| `Def` *extends* [`ZodTypeDef`](../interfaces/ZodTypeDef.md) | [`ZodTypeDef`](../interfaces/ZodTypeDef.md) |
| `Input` | `Output` |

## Constructors

### new ZodType()

```ts
new ZodType<Output, Def, Input>(def: Def): ZodType<Output, Def, Input>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | `Def` |

#### Returns

[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `_def` | `readonly` | `Def` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51 |
| `_input` | `readonly` | `Input` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50 |
| `_output` | `readonly` | `Output` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49 |
| `_type` | `readonly` | `Output` | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48 |
| `spa` | `public` | (`data`: `unknown`, `params`?: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\> | Alias of safeParseAsync | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67 |

## Accessors

### description

#### Get Signature

```ts
get description(): undefined | string
```

##### Returns

`undefined` \| `string`

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

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:54

***

### \_parse()

```ts
abstract _parse(input: ParseInput): ParseReturnType<Output>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:53

***

### \_parseAsync()

```ts
_parseAsync(input: ParseInput): AsyncParseReturnType<Output>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

```ts
_parseSync(input: ParseInput): SyncParseReturnType<Output>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`Output`\>

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

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:56

***

### \_refinement()

```ts
_refinement(refinement: (arg: Output, ctx: RefinementCtx) => any): ZodEffects<ZodType<Output, Def, Input>, Output, Input>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

```ts
and<T>(incoming: T): ZodIntersection<ZodType<Output, Def, Input>, T>
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

[`ZodIntersection`](ZodIntersection.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

```ts
array(): ZodArray<ZodType<Output, Def, Input>, "many">
```

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `"many"`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

```ts
brand<B>(brand?: B): ZodBranded<ZodType<Output, Def, Input>, B>
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

[`ZodBranded`](ZodBranded.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `B`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

```ts
catch(def: Output): ZodCatch<ZodType<Output, Def, Input>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | `Output` |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

```ts
catch(def: (ctx: {
  error: ZodError<any>;
  input: Input;
}) => Output): ZodCatch<ZodType<Output, Def, Input>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](ZodError.md)\<`any`\>; `input`: `Input`; \}) => `Output` |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

```ts
default(def: noUndefined<Input>): ZodDefault<ZodType<Output, Def, Input>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

```ts
default(def: () => noUndefined<Input>): ZodDefault<ZodType<Output, Def, Input>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | () => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

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

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:93

***

### isNullable()

```ts
isNullable(): boolean
```

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:97

***

### isOptional()

```ts
isOptional(): boolean
```

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:96

***

### nullable()

```ts
nullable(): ZodNullable<ZodType<Output, Def, Input>>
```

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

```ts
nullish(): ZodOptional<ZodNullable<ZodType<Output, Def, Input>>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

```ts
optional(): ZodOptional<ZodType<Output, Def, Input>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

```ts
or<T>(option: T): ZodUnion<[ZodType<Output, Def, Input>, T]>
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

[`ZodUnion`](ZodUnion.md)\<[[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `T`]\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

```ts
parse(data: unknown, params?: Partial<ParseParams>): Output
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

```ts
parseAsync(data: unknown, params?: Partial<ParseParams>): Promise<Output>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<`Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

```ts
pipe<T>(target: T): ZodPipeline<ZodType<Output, Def, Input>, T>
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

[`ZodPipeline`](ZodPipeline.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

```ts
promise(): ZodPromise<ZodType<Output, Def, Input>>
```

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

```ts
readonly(): ZodReadonly<ZodType<Output, Def, Input>>
```

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

```ts
refine<RefinedOutput>(check: (arg: Output) => arg is RefinedOutput, message?: string | (arg: Output) => Partial<Omit<ZodCustomIssue, "code">> | Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodType<Output, Def, Input>, RefinedOutput, Input>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `Output`) => `arg is RefinedOutput` |
| `message`? | `string` \| (`arg`: `Output`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

```ts
refine(check: (arg: Output) => unknown, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: Output) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodType<Output, Def, Input>, Output, Input>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `Output`) => `unknown` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: `Output`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

```ts
refinement<RefinedOutput>(check: (arg: Output) => arg is RefinedOutput, refinementData: IssueData | (arg: Output, ctx: RefinementCtx) => IssueData): ZodEffects<ZodType<Output, Def, Input>, RefinedOutput, Input>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `Output`) => `arg is RefinedOutput` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

```ts
refinement(check: (arg: Output) => boolean, refinementData: IssueData | (arg: Output, ctx: RefinementCtx) => IssueData): ZodEffects<ZodType<Output, Def, Input>, Output, Input>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `Output`) => `boolean` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

```ts
safeParse(data: unknown, params?: Partial<ParseParams>): SafeParseReturnType<Input, Output>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

```ts
safeParseAsync(data: unknown, params?: Partial<ParseParams>): Promise<SafeParseReturnType<Input, Output>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

```ts
superRefine<RefinedOutput>(refinement: (arg: Output, ctx: RefinementCtx) => arg is RefinedOutput): ZodEffects<ZodType<Output, Def, Input>, RefinedOutput, Input>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `arg is RefinedOutput` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: Output, ctx: RefinementCtx) => void): ZodEffects<ZodType<Output, Def, Input>, Output, Input>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `void` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: Output, ctx: RefinementCtx) => Promise<void>): ZodEffects<ZodType<Output, Def, Input>, Output, Input>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `Promise`\<`void`\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

```ts
transform<NewOut>(transform: (arg: Output, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<ZodType<Output, Def, Input>, NewOut, Input>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `NewOut` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transform` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `NewOut`, `Input`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
