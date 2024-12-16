[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / ZodEnum

# Class: ZodEnum\<T\>

## Extends

- [`ZodType`](ZodType.md)\<`T`\[`number`\], [`ZodEnumDef`](../interfaces/ZodEnumDef.md)\<`T`\>, `T`\[`number`\]\>

## Type Parameters

• **T** *extends* [`string`, `...string[]`]

## Constructors

### new ZodEnum()

> **new ZodEnum**\<`T`\>(`def`): [`ZodEnum`](ZodEnum.md)\<`T`\>

#### Parameters

##### def

[`ZodEnumDef`](../interfaces/ZodEnumDef.md)\<`T`\>

#### Returns

[`ZodEnum`](ZodEnum.md)\<`T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodEnumDef`](../interfaces/ZodEnumDef.md)\<`T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_def`](ZodType.md#_def)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `T`\[`number`\]

#### Inherited from

[`ZodType`](ZodType.md).[`_input`](ZodType.md#_input)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: `T`\[`number`\]

#### Inherited from

[`ZodType`](ZodType.md).[`_output`](ZodType.md#_output)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: `T`\[`number`\]

#### Inherited from

[`ZodType`](ZodType.md).[`_type`](ZodType.md#_type)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

Alias of safeParseAsync

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`spa`](ZodType.md#spa)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### create()

> `static` **create**: \<`U`, `T`\>(`values`, `params`?) => [`ZodEnum`](ZodEnum.md)\<[`Writeable`](../type-aliases/Writeable.md)\<`T`\>\>\<`U`, `T`\>(`values`, `params`?) => [`ZodEnum`](ZodEnum.md)\<`T`\>

#### Type Parameters

• **U** *extends* `string`

• **T** *extends* readonly [`U`, `U`, `T`]

#### Parameters

##### values

`T`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

[`ZodEnum`](ZodEnum.md)\<[`Writeable`](../type-aliases/Writeable.md)\<`T`\>\>

#### Type Parameters

• **U** *extends* `string`

• **T** *extends* [`U`, `...U[]`]

#### Parameters

##### values

`T`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

[`ZodEnum`](ZodEnum.md)\<`T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:785

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

***

### enum

#### Get Signature

> **get** **enum**(): [`Values`](../type-aliases/Values.md)\<`T`\>

##### Returns

[`Values`](../type-aliases/Values.md)\<`T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:780

***

### Enum

#### Get Signature

> **get** **Enum**(): [`Values`](../type-aliases/Values.md)\<`T`\>

##### Returns

[`Values`](../type-aliases/Values.md)\<`T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:782

***

### options

#### Get Signature

> **get** **options**(): `T`

##### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:779

***

### Values

#### Get Signature

> **get** **Values**(): [`Values`](../type-aliases/Values.md)\<`T`\>

##### Returns

[`Values`](../type-aliases/Values.md)\<`T`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:781

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`T`\[`number`\]\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`T`\[`number`\]\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:778

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`T`\[`number`\]\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`T`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`T`\[`number`\]\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`T`\[`number`\]\>

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

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `"many"`\>

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): [`ZodBranded`](ZodBranded.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

##### Parameters

###### def

`T`\[`number`\]

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

##### Parameters

###### def

(`ctx`) => `T`\[`number`\]

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`number`\]\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`number`\]\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

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

### exclude()

> **exclude**\<`ToExclude`\>(`values`, `newDef`?): [`ZodEnum`](ZodEnum.md)\<[`typecast`](../type-aliases/typecast.md)\<[`Writeable`](../type-aliases/Writeable.md)\<[`FilterEnum`](../type-aliases/FilterEnum.md)\<`T`, `ToExclude`\[`number`\]\>\>, [`string`, `...string[]`]\>\>

#### Type Parameters

• **ToExclude** *extends* readonly [`T`\[`number`\], `T`\[`number`\], `ToExclude`]

#### Parameters

##### values

`ToExclude`

##### newDef?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

[`ZodEnum`](ZodEnum.md)\<[`typecast`](../type-aliases/typecast.md)\<[`Writeable`](../type-aliases/Writeable.md)\<[`FilterEnum`](../type-aliases/FilterEnum.md)\<`T`, `ToExclude`\[`number`\]\>\>, [`string`, `...string[]`]\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:784

***

### extract()

> **extract**\<`ToExtract`\>(`values`, `newDef`?): [`ZodEnum`](ZodEnum.md)\<[`Writeable`](../type-aliases/Writeable.md)\<`ToExtract`\>\>

#### Type Parameters

• **ToExtract** *extends* readonly [`T`\[`number`\], `T`\[`number`\], `ToExtract`]

#### Parameters

##### values

`ToExtract`

##### newDef?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

[`ZodEnum`](ZodEnum.md)\<[`Writeable`](../type-aliases/Writeable.md)\<`ToExtract`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:783

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

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<[[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<[[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): `T`\[`number`\]

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`T`\[`number`\]

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<`T`\[`number`\]\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`T`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `string`

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### Call Signature

> **refine**(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `string`

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement-1)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement-1)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Type Parameters

• **RefinedOutput** *extends* `string`

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `NewOut`, `T`\[`number`\]\>

#### Type Parameters

• **NewOut**

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodEnum`](ZodEnum.md)\<`T`\>, `NewOut`, `T`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
