[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / ZodObject

# Class: ZodObject\<T, UnknownKeys, Catchall, Output, Input\>

## Extends

- [`ZodType`](ZodType.md)\<`Output`, [`ZodObjectDef`](../interfaces/ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\>, `Input`\>

## Type Parameters

• **T** *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

• **UnknownKeys** *extends* [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md) = [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md)

• **Catchall** *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

• **Output** = [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `UnknownKeys`\>

• **Input** = [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `UnknownKeys`\>

## Constructors

### new ZodObject()

> **new ZodObject**\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>(`def`): [`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>

#### Parameters

##### def

[`ZodObjectDef`](../interfaces/ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\>

#### Returns

[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

### \_def

> `readonly` **\_def**: [`ZodObjectDef`](../interfaces/ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_def`](ZodType.md#_def)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51

***

### \_input

> `readonly` **\_input**: `Input`

#### Inherited from

[`ZodType`](ZodType.md).[`_input`](ZodType.md#_input)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50

***

### \_output

> `readonly` **\_output**: `Output`

#### Inherited from

[`ZodType`](ZodType.md).[`_output`](ZodType.md#_output)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49

***

### \_type

> `readonly` **\_type**: `Output`

#### Inherited from

[`ZodType`](ZodType.md).[`_type`](ZodType.md#_type)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48

***

### ~~augment()~~

> **augment**: \<`Augmentation`\>(`augmentation`) => [`ZodObject`](ZodObject.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

#### Type Parameters

• **Augmentation** *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

##### augmentation

`Augmentation`

#### Returns

[`ZodObject`](ZodObject.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

#### Deprecated

Use `.extend` instead

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:554

***

### ~~nonstrict()~~

> **nonstrict**: () => [`ZodObject`](ZodObject.md)\<`T`, `"passthrough"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"passthrough"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"passthrough"`\>\>

#### Returns

[`ZodObject`](ZodObject.md)\<`T`, `"passthrough"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"passthrough"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"passthrough"`\>\>

#### Deprecated

In most cases, this is no longer needed - unknown properties are now silently stripped.
If you want to pass through unknown properties, use `.passthrough()` instead.

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:549

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

#### Inherited from

[`ZodType`](ZodType.md).[`spa`](ZodType.md#spa)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67

***

### create()

> `static` **create**: \<`T_1`\>(`shape`, `params`?) => [`ZodObject`](ZodObject.md)\<`T_1`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Type Parameters

• **T_1** *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

##### shape

`T_1`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

[`ZodObject`](ZodObject.md)\<`T_1`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:592

***

### lazycreate()

> `static` **lazycreate**: \<`T_1`\>(`shape`, `params`?) => [`ZodObject`](ZodObject.md)\<`T_1`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Type Parameters

• **T_1** *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

##### shape

() => `T_1`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

[`ZodObject`](ZodObject.md)\<`T_1`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:594

***

### strictCreate()

> `static` **strictCreate**: \<`T_1`\>(`shape`, `params`?) => [`ZodObject`](ZodObject.md)\<`T_1`, `"strict"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Type Parameters

• **T_1** *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

##### shape

`T_1`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

[`ZodObject`](ZodObject.md)\<`T_1`, `"strict"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:593

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

### shape

#### Get Signature

> **get** **shape**(): `T`

##### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:541

## Methods

### \_getCached()

> **\_getCached**(): `object`

#### Returns

`object`

##### keys

> **keys**: `string`[]

##### shape

> **shape**: `T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:536

***

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:540

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Output`\>

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Output`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

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

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `"many"`\>

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

> **brand**\<`B`\>(`brand`?): [`ZodBranded`](ZodBranded.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `B`\>

#### Type Parameters

• **B** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Parameters

###### def

`Output`

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Parameters

###### def

(`ctx`) => `Output`

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### catchall()

> **catchall**\<`Index`\>(`index`): [`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Index`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Index`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Index`, `UnknownKeys`\>\>

#### Type Parameters

• **Index** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `Index`\>

#### Parameters

##### index

`Index`

#### Returns

[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Index`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Index`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Index`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:564

***

### ~~deepPartial()~~

> **deepPartial**(): `DeepPartial`\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

`DeepPartial`\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Deprecated

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:574

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

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

### extend()

> **extend**\<`Augmentation`\>(`augmentation`): [`ZodObject`](ZodObject.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

#### Type Parameters

• **Augmentation** *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

##### augmentation

`Augmentation`

#### Returns

[`ZodObject`](ZodObject.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:550

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

### keyof()

> **keyof**(): [`ZodEnum`](ZodEnum.md)\<`CastToStringTuple`\<`UnionToTuple`\<keyof `T`, []\>\>\>

#### Returns

[`ZodEnum`](ZodEnum.md)\<`CastToStringTuple`\<`UnionToTuple`\<keyof `T`, []\>\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:591

***

### merge()

> **merge**\<`Incoming`, `Augmentation`\>(`merging`): [`ZodObject`](ZodObject.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"unknownKeys"`\], `Incoming`\[`"_def"`\]\[`"catchall"`\], [`objectOutputType`](../type-aliases/objectOutputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"catchall"`\], `Incoming`\[`"_def"`\]\[`"unknownKeys"`\]\>, [`objectInputType`](../type-aliases/objectInputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"catchall"`\], `Incoming`\[`"_def"`\]\[`"unknownKeys"`\]\>\>

Prior to zod@1.0.12 there was a bug in the
inferred type of merged objects. Please
upgrade if you are experiencing issues.

#### Type Parameters

• **Incoming** *extends* [`ZodObject`](ZodObject.md)\<`any`, `any`, `any`, \{\}, \{\}, `Incoming`\>

• **Augmentation** *extends* `any`

#### Parameters

##### merging

`Incoming`

#### Returns

[`ZodObject`](ZodObject.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"unknownKeys"`\], `Incoming`\[`"_def"`\]\[`"catchall"`\], [`objectOutputType`](../type-aliases/objectOutputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"catchall"`\], `Incoming`\[`"_def"`\]\[`"unknownKeys"`\]\>, [`objectInputType`](../type-aliases/objectInputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"catchall"`\], `Incoming`\[`"_def"`\]\[`"unknownKeys"`\]\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:560

***

### nullable()

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### omit()

> **omit**\<`Mask`\>(`mask`): [`ZodObject`](ZodObject.md)\<`Omit`\<`T`, keyof `Mask`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>\>

#### Type Parameters

• **Mask** *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

#### Parameters

##### mask

`Mask`

#### Returns

[`ZodObject`](ZodObject.md)\<`Omit`\<`T`, keyof `Mask`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:568

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<[[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`]\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<[[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

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

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

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

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### partial()

#### Call Signature

> **partial**(): [`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>\>

##### Returns

[`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:575

#### Call Signature

> **partial**\<`Mask`\>(`mask`): [`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>\>

##### Type Parameters

• **Mask** *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

##### Parameters

###### mask

`Mask`

##### Returns

[`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:578

***

### passthrough()

> **passthrough**(): [`ZodObject`](ZodObject.md)\<`T`, `"passthrough"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"passthrough"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"passthrough"`\>\>

#### Returns

[`ZodObject`](ZodObject.md)\<`T`, `"passthrough"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"passthrough"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"passthrough"`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:544

***

### pick()

> **pick**\<`Mask`\>(`mask`): [`ZodObject`](ZodObject.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>\>

#### Type Parameters

• **Mask** *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

#### Parameters

##### mask

`Mask`

#### Returns

[`ZodObject`](ZodObject.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:565

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Type Parameters

• **T** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### Call Signature

> **refine**(`check`, `message`?): [`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` | `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> | (`arg`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement-1)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) | (`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md)

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement-1)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### required()

#### Call Signature

> **required**(): [`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>\>

##### Returns

[`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:583

#### Call Signature

> **required**\<`Mask`\>(`mask`): [`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>\>

##### Type Parameters

• **Mask** *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

##### Parameters

###### mask

`Mask`

##### Returns

[`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:586

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

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

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

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### setKey()

> **setKey**\<`Key`, `Schema`\>(`key`, `schema`): [`ZodObject`](ZodObject.md)\<`T` & `{ [k in string]: Schema }`, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T` & `{ [k in string]: Schema }`, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T` & `{ [k in string]: Schema }`, `Catchall`, `UnknownKeys`\>\>

#### Type Parameters

• **Key** *extends* `string`

• **Schema** *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `Schema`\>

#### Parameters

##### key

`Key`

##### schema

`Schema`

#### Returns

[`ZodObject`](ZodObject.md)\<`T` & `{ [k in string]: Schema }`, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T` & `{ [k in string]: Schema }`, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T` & `{ [k in string]: Schema }`, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:561

***

### strict()

> **strict**(`message`?): [`ZodObject`](ZodObject.md)\<`T`, `"strict"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"strict"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"strict"`\>\>

#### Parameters

##### message?

`ErrMessage`

#### Returns

[`ZodObject`](ZodObject.md)\<`T`, `"strict"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"strict"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"strict"`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:542

***

### strip()

> **strip**(): [`ZodObject`](ZodObject.md)\<`T`, `"strip"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"strip"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"strip"`\>\>

#### Returns

[`ZodObject`](ZodObject.md)\<`T`, `"strip"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"strip"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"strip"`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:543

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Type Parameters

• **RefinedOutput**

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `NewOut`, `Input`\>

#### Type Parameters

• **NewOut**

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `NewOut`, `Input`\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
