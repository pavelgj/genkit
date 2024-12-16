[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / ZodFunction

# Class: ZodFunction\<Args, Returns\>

## Extends

- [`ZodType`](ZodType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`ZodFunctionDef`](../interfaces/ZodFunctionDef.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

## Type Parameters

• **Args** *extends* [`ZodTuple`](ZodTuple.md)\<`any`, `any`\>

• **Returns** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

## Constructors

### new ZodFunction()

> **new ZodFunction**\<`Args`, `Returns`\>(`def`): [`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>

#### Parameters

##### def

[`ZodFunctionDef`](../interfaces/ZodFunctionDef.md)\<`Args`, `Returns`\>

#### Returns

[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodFunctionDef`](../interfaces/ZodFunctionDef.md)\<`Args`, `Returns`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_def`](ZodType.md#_def)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_input`](ZodType.md#_input)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_output`](ZodType.md#_output)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_type`](ZodType.md#_type)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

Alias of safeParseAsync

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`spa`](ZodType.md#spa)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### validate()

> **validate**: \<`F`\>(`func`) => `ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Type Parameters

• **F** *extends* (...`args`) => `Returns`\[`"_input"`\]

#### Parameters

##### func

`F`

#### Returns

`ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:735

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`any`\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`any`\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:728

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

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

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### args()

> **args**\<`Items`\>(...`items`): [`ZodFunction`](ZodFunction.md)\<[`ZodTuple`](ZodTuple.md)\<`Items`, [`ZodUnknown`](ZodUnknown.md)\>, `Returns`\>

#### Type Parameters

• **Items** *extends* [] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`]

#### Parameters

##### items

...`Items`

#### Returns

[`ZodFunction`](ZodFunction.md)\<[`ZodTuple`](ZodTuple.md)\<`Items`, [`ZodUnknown`](ZodUnknown.md)\>, `Returns`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:731

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `"many"`\>

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): [`ZodBranded`](ZodBranded.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

###### def

[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

###### def

(`ctx`) => [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

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

### implement()

> **implement**\<`F`\>(`func`): `ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Type Parameters

• **F** *extends* (...`args`) => `Returns`\[`"_input"`\]

#### Parameters

##### func

`F`

#### Returns

`ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:733

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

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<[[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<[[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parameters()

> **parameters**(): `Args`

#### Returns

`Args`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:729

***

### parse()

> **parse**(`data`, `params`?): [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Type Parameters

• **RefinedOutput** *extends* (...`args`) => `Returns`\[`"_output"`\]

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### Call Signature

> **refine**(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Type Parameters

• **RefinedOutput** *extends* (...`args`) => `Returns`\[`"_output"`\]

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement-1)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement-1)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### returns()

> **returns**\<`NewReturnType`\>(`returnType`): [`ZodFunction`](ZodFunction.md)\<`Args`, `NewReturnType`\>

#### Type Parameters

• **NewReturnType** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `NewReturnType`\>

#### Parameters

##### returnType

`NewReturnType`

#### Returns

[`ZodFunction`](ZodFunction.md)\<`Args`, `NewReturnType`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:732

***

### returnType()

> **returnType**(): `Returns`

#### Returns

`Returns`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:730

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### strictImplement()

> **strictImplement**(`func`): [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

#### Parameters

##### func

[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

#### Returns

[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:734

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Type Parameters

• **RefinedOutput** *extends* (...`args`) => `Returns`\[`"_output"`\]

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `NewOut`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Type Parameters

• **NewOut**

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodFunction`](ZodFunction.md)\<`Args`, `Returns`\>, `NewOut`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84

***

### create()

#### Call Signature

> `static` **create**(): [`ZodFunction`](ZodFunction.md)\<[`ZodTuple`](ZodTuple.md)\<[], [`ZodUnknown`](ZodUnknown.md)\>, [`ZodUnknown`](ZodUnknown.md)\>

##### Returns

[`ZodFunction`](ZodFunction.md)\<[`ZodTuple`](ZodTuple.md)\<[], [`ZodUnknown`](ZodUnknown.md)\>, [`ZodUnknown`](ZodUnknown.md)\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:736

#### Call Signature

> `static` **create**\<`T`\>(`args`): [`ZodFunction`](ZodFunction.md)\<`T`, [`ZodUnknown`](ZodUnknown.md)\>

##### Type Parameters

• **T** *extends* [`ZodTuple`](ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\> = [`ZodTuple`](ZodTuple.md)\<[], [`ZodUnknown`](ZodUnknown.md)\>

##### Parameters

###### args

`T`

##### Returns

[`ZodFunction`](ZodFunction.md)\<`T`, [`ZodUnknown`](ZodUnknown.md)\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:737

#### Call Signature

> `static` **create**\<`T`, `U`\>(`args`, `returns`): [`ZodFunction`](ZodFunction.md)\<`T`, `U`\>

##### Type Parameters

• **T** *extends* [`ZodTuple`](ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\>

• **U** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `U`\>

##### Parameters

###### args

`T`

###### returns

`U`

##### Returns

[`ZodFunction`](ZodFunction.md)\<`T`, `U`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:738

#### Call Signature

> `static` **create**\<`T`, `U`\>(`args`, `returns`, `params`?): [`ZodFunction`](ZodFunction.md)\<`T`, `U`\>

##### Type Parameters

• **T** *extends* [`ZodTuple`](ZodTuple.md)\<[] \| [[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`], `null` \| [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `T`\> = [`ZodTuple`](ZodTuple.md)\<[], [`ZodUnknown`](ZodUnknown.md)\>

• **U** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `U`\> = [`ZodUnknown`](ZodUnknown.md)

##### Parameters

###### args

`T`

###### returns

`U`

###### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

##### Returns

[`ZodFunction`](ZodFunction.md)\<`T`, `U`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:739
