[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / ZodDiscriminatedUnion

# Class: ZodDiscriminatedUnion\<Discriminator, Options\>

## Extends

- [`ZodType`](ZodType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

## Type Parameters

• **Discriminator** *extends* `string`

• **Options** *extends* [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`Discriminator`\>[]

## Constructors

### new ZodDiscriminatedUnion()

> **new ZodDiscriminatedUnion**\<`Discriminator`, `Options`\>(`def`): [`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>

#### Parameters

##### def

[`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\>

#### Returns

[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_def`](ZodType.md#_def)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_input`](ZodType.md#_input)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_output`](ZodType.md#_output)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_type`](ZodType.md#_type)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### spa()

> **spa**: (`data`, `params`?) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

Alias of safeParseAsync

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`spa`](ZodType.md#spa)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

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

### discriminator

#### Get Signature

> **get** **discriminator**(): `Discriminator`

##### Returns

`Discriminator`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:622

***

### options

#### Get Signature

> **get** **options**(): `Options`

##### Returns

`Options`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:623

***

### optionsMap

#### Get Signature

> **get** **optionsMap**(): `Map`\<[`Primitive`](../type-aliases/Primitive.md), [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`any`\>\>

##### Returns

`Map`\<[`Primitive`](../type-aliases/Primitive.md), [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`any`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:624

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:621

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

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

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `"many"`\>

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): [`ZodBranded`](ZodBranded.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

##### Parameters

###### def

[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

##### Parameters

###### def

(`ctx`) => [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

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

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<[[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<[[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

> **parse**(`data`, `params`?): [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

> **parseAsync**(`data`, `params`?): `Promise`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \}

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### Call Signature

> **refine**(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \}

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement-1)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement-1)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

> **safeParse**(`data`, `params`?): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params`?): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

#### Parameters

##### data

`unknown`

##### params?

`Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Type Parameters

• **RefinedOutput** *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \}

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `NewOut`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

#### Type Parameters

• **NewOut**

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `NewOut`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84

***

### create()

> `static` **create**\<`Discriminator`, `Types`\>(`discriminator`, `options`, `params`?): [`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Types`\>

The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
However, it only allows a union of objects, all of which need to share a discriminator property. This property must
have a different value for each object in the union.

#### Type Parameters

• **Discriminator** *extends* `string`

• **Types** *extends* [[`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`Discriminator`\>, `...ZodDiscriminatedUnionOption<Discriminator>[]`]

#### Parameters

##### discriminator

`Discriminator`

the name of the discriminator property

##### options

`Types`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

[`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)\<`Discriminator`, `Types`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:633
