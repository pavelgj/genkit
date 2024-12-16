[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / ZodType

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

• **Output** = `any`

• **Def** *extends* [`ZodTypeDef`](../interfaces/ZodTypeDef.md) = [`ZodTypeDef`](../interfaces/ZodTypeDef.md)

• **Input** = `Output`

## Constructors

### new ZodType()

> **new ZodType**\<`Output`, `Def`, `Input`\>(`def`): [`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>

#### Parameters

##### def

`Def`

#### Returns

[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: `Def`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `Input`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: `Output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: `Output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

Alias of safeParseAsync

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

## Accessors

### description

#### Get Signature

> **get** **description**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:52

## Methods

### \_getOrReturnCtx()

> **\_getOrReturnCtx**(`input`, `ctx`?): [`ParseContext`](../interfaces/ParseContext.md)

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

##### ctx?

[`ParseContext`](../interfaces/ParseContext.md)

#### Returns

[`ParseContext`](../interfaces/ParseContext.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:55

***

### \_getType()

> **\_getType**(`input`): `string`

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:54

***

### \_parse()

> `abstract` **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:53

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Output`\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`Output`\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:60

***

### \_processInputParams()

> **\_processInputParams**(`input`): `object`

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

`object`

##### ctx

> **ctx**: [`ParseContext`](../interfaces/ParseContext.md)

##### status

> **status**: [`ParseStatus`](ParseStatus.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:56

***

### \_refinement()

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `"many"`\>

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `"many"`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): [`ZodBranded`](ZodBranded.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `B`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

##### Parameters

###### def

`Output`

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

##### Parameters

###### def

(`ctx`) => `Output`

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:86

***

### describe()

> **describe**(`description`): `this`

#### Parameters

##### description

`string`

#### Returns

`this`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:93

***

### isNullable()

> **isNullable**(): `boolean`

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:97

***

### isOptional()

> **isOptional**(): `boolean`

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:96

***

### nullable()

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<[[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<[[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `T`]\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): `Output`

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Output`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<`Output`\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### Call Signature

> **refine**(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `NewOut`, `Input`\>

#### Type Parameters

• **NewOut**

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodType`](ZodType.md)\<`Output`, `Def`, `Input`\>, `NewOut`, `Input`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
