[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / ZodDefault

# Class: ZodDefault\<T\>

## Extends

- [`ZodType`](ZodType.md)\<[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>, [`ZodDefaultDef`](../interfaces/ZodDefaultDef.md)\<`T`\>, `T`\[`"_input"`\] \| `undefined`\>

## Type Parameters

• **T** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

## Constructors

### new ZodDefault()

> **new ZodDefault**\<`T`\>(`def`): [`ZodDefault`](ZodDefault.md)\<`T`\>

#### Parameters

##### def

[`ZodDefaultDef`](../interfaces/ZodDefaultDef.md)\<`T`\>

#### Returns

[`ZodDefault`](ZodDefault.md)\<`T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodDefaultDef`](../interfaces/ZodDefaultDef.md)\<`T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_def`](ZodType.md#_def)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `undefined` \| `T`\[`"_input"`\]

#### Inherited from

[`ZodType`](ZodType.md).[`_input`](ZodType.md#_input)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_output`](ZodType.md#_output)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_type`](ZodType.md#_type)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`undefined` \| `T`\[`"_input"`\], [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>\>

Alias of safeParseAsync

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`undefined` \| `T`\[`"_input"`\], [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`spa`](ZodType.md#spa)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### create()

> `static` **create**: \<`T_1`\>(`type`, `params`) => [`ZodDefault`](ZodDefault.md)\<`T_1`\>

#### Type Parameters

• **T_1** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T_1`\>

#### Parameters

##### type

`T_1`

##### params

`object` & `object`

#### Returns

[`ZodDefault`](ZodDefault.md)\<`T_1`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:866

## Accessors

### description

#### Get Signature

> **get** **description**(): `undefined` \| `string`

##### Returns

`undefined` \| `string`

#### Inherited from

[`ZodType`](ZodType.md).[`description`](ZodType.md#description)

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

#### Inherited from

[`ZodType`](ZodType.md).[`_getOrReturnCtx`](ZodType.md#_getorreturnctx)

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

#### Inherited from

[`ZodType`](ZodType.md).[`_getType`](ZodType.md#_gettype)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:54

***

### \_parse()

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:864

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseSync`](ZodType.md#_parsesync)

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

#### Inherited from

[`ZodType`](ZodType.md).[`_processInputParams`](ZodType.md#_processinputparams)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:56

***

### \_refinement()

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>, `undefined` \| `T`\[`"_input"`\]\>

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>, `undefined` \| `T`\[`"_input"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `"many"`\>

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): [`ZodBranded`](ZodBranded.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

##### Parameters

###### def

(`ctx`) => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_input"`\]\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_input"`\]\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

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

#### Inherited from

[`ZodType`](ZodType.md).[`describe`](ZodType.md#describe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:93

***

### isNullable()

> **isNullable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`ZodType`](ZodType.md).[`isNullable`](ZodType.md#isnullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:97

***

### isOptional()

> **isOptional**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`ZodType`](ZodType.md).[`isOptional`](ZodType.md#isoptional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:96

***

### nullable()

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<[[`ZodDefault`](ZodDefault.md)\<`T`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<[[`ZodDefault`](ZodDefault.md)\<`T`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`\[`"_input"`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `any`

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### Call Signature

> **refine**(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>, `undefined` \| `T`\[`"_input"`\]\>

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>, `undefined` \| `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`\[`"_input"`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `any`

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement-1)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>, `undefined` \| `T`\[`"_input"`\]\>

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>, `undefined` \| `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement-1)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### removeDefault()

> **removeDefault**(): `T`

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:865

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`undefined` \| `T`\[`"_input"`\], [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`undefined` \| `T`\[`"_input"`\], [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`undefined` \| `T`\[`"_input"`\], [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`undefined` \| `T`\[`"_input"`\], [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`\[`"_input"`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `any`

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>, `undefined` \| `T`\[`"_input"`\]\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>, `undefined` \| `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>, `undefined` \| `T`\[`"_input"`\]\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`"_output"`\]\>, `undefined` \| `T`\[`"_input"`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `NewOut`, `undefined` \| `T`\[`"_input"`\]\>

#### Type Parameters

• **NewOut**

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDefault`](ZodDefault.md)\<`T`\>, `NewOut`, `undefined` \| `T`\[`"_input"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
