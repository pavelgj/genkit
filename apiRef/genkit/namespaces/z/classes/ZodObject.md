# Class: ZodObject\<T, UnknownKeys, Catchall, Output, Input\>

## Extends

- [`ZodType`](ZodType.md)\<`Output`, [`ZodObjectDef`](../interfaces/ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\>, `Input`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md) | - |
| `UnknownKeys` *extends* [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md) | [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md) |
| `Catchall` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) |
| `Output` | [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `UnknownKeys`\> |
| `Input` | [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `UnknownKeys`\> |

## Constructors

### new ZodObject()

```ts
new ZodObject<T, UnknownKeys, Catchall, Output, Input>(def: ZodObjectDef<T, UnknownKeys, Catchall>): ZodObject<T, UnknownKeys, Catchall, Output, Input>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`ZodObjectDef`](../interfaces/ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\> |

#### Returns

[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `_def` | `readonly` | [`ZodObjectDef`](../interfaces/ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\> | - | [`ZodType`](ZodType.md).`_def` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51 |
| `_input` | `readonly` | `Input` | - | [`ZodType`](ZodType.md).`_input` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50 |
| `_output` | `readonly` | `Output` | - | [`ZodType`](ZodType.md).`_output` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49 |
| `_type` | `readonly` | `Output` | - | [`ZodType`](ZodType.md).`_type` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48 |
| ~~`augment`~~ | `public` | \<`Augmentation`\>(`augmentation`: `Augmentation`) => [`ZodObject`](ZodObject.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\> | **Deprecated** Use `.extend` instead | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:554 |
| ~~`nonstrict`~~ | `public` | () => [`ZodObject`](ZodObject.md)\<`T`, `"passthrough"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"passthrough"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"passthrough"`\>\> | **Deprecated** In most cases, this is no longer needed - unknown properties are now silently stripped. If you want to pass through unknown properties, use `.passthrough()` instead. | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:549 |
| `spa` | `public` | (`data`: `unknown`, `params`?: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\> | Alias of safeParseAsync | [`ZodType`](ZodType.md).`spa` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67 |
| `create` | `static` | \<`T_1`\>(`shape`: `T_1`, `params`?: [`RawCreateParams`](../type-aliases/RawCreateParams.md)) => [`ZodObject`](ZodObject.md)\<`T_1`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\> | - | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:592 |
| `lazycreate` | `static` | \<`T_1`\>(`shape`: () => `T_1`, `params`?: [`RawCreateParams`](../type-aliases/RawCreateParams.md)) => [`ZodObject`](ZodObject.md)\<`T_1`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\> | - | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:594 |
| `strictCreate` | `static` | \<`T_1`\>(`shape`: `T_1`, `params`?: [`RawCreateParams`](../type-aliases/RawCreateParams.md)) => [`ZodObject`](ZodObject.md)\<`T_1`, `"strict"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\[k\] \}, \{ \[k\_1 in string \| number \| symbol\]: baseObjectInputType\<T\_1\>\[k\_1\] \}\> | - | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:593 |

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

### shape

#### Get Signature

```ts
get shape(): T
```

##### Returns

`T`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:541

## Methods

### \_getCached()

```ts
_getCached(): {
  keys: string[];
  shape: T;
}
```

#### Returns

```ts
{
  keys: string[];
  shape: T;
}
```

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `keys` | `string`[] | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:538 |
| `shape` | `T` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:537 |

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:536

***

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
_parse(input: ParseInput): ParseReturnType<Output>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:540

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

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

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
_refinement(refinement: (arg: Output, ctx: RefinementCtx) => any): ZodEffects<ZodObject<T, UnknownKeys, Catchall, Output, Input>, Output, Input>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

```ts
and<T>(incoming: T): ZodIntersection<ZodObject<T, UnknownKeys, Catchall, Output, Input>, T>
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

[`ZodIntersection`](ZodIntersection.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

```ts
array(): ZodArray<ZodObject<T, UnknownKeys, Catchall, Output, Input>, "many">
```

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

```ts
brand<B>(brand?: B): ZodBranded<ZodObject<T, UnknownKeys, Catchall, Output, Input>, B>
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

[`ZodBranded`](ZodBranded.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

```ts
catch(def: Output): ZodCatch<ZodObject<T, UnknownKeys, Catchall, Output, Input>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | `Output` |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

```ts
catch(def: (ctx: {
  error: ZodError<any>;
  input: Input;
}) => Output): ZodCatch<ZodObject<T, UnknownKeys, Catchall, Output, Input>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](ZodError.md)\<`any`\>; `input`: `Input`; \}) => `Output` |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### catchall()

```ts
catchall<Index>(index: Index): ZodObject<T, UnknownKeys, Index, objectOutputType<T, Index, UnknownKeys>, objectInputType<T, Index, UnknownKeys>>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Index` *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `Index`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `Index` |

#### Returns

[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Index`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Index`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Index`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:564

***

### ~~deepPartial()~~

```ts
deepPartial(): DeepPartial<ZodObject<T, UnknownKeys, Catchall, Output, Input>>
```

#### Returns

`DeepPartial`\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Deprecated

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:574

***

### default()

#### default(def)

```ts
default(def: noUndefined<Input>): ZodDefault<ZodObject<T, UnknownKeys, Catchall, Output, Input>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

```ts
default(def: () => noUndefined<Input>): ZodDefault<ZodObject<T, UnknownKeys, Catchall, Output, Input>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | () => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

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

### extend()

```ts
extend<Augmentation>(augmentation: Augmentation): ZodObject<extendShape<T, Augmentation>, UnknownKeys, Catchall, objectOutputType<extendShape<T, Augmentation>, Catchall, UnknownKeys>, objectInputType<extendShape<T, Augmentation>, Catchall, UnknownKeys>>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Augmentation` *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `augmentation` | `Augmentation` |

#### Returns

[`ZodObject`](ZodObject.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:550

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

### keyof()

```ts
keyof(): ZodEnum<CastToStringTuple<UnionToTuple<keyof T, []>>>
```

#### Returns

[`ZodEnum`](ZodEnum.md)\<`CastToStringTuple`\<`UnionToTuple`\<keyof `T`, []\>\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:591

***

### merge()

```ts
merge<Incoming, Augmentation>(merging: Incoming): ZodObject<extendShape<T, Augmentation>, Incoming["_def"]["unknownKeys"], Incoming["_def"]["catchall"], objectOutputType<extendShape<T, Augmentation>, Incoming["_def"]["catchall"], Incoming["_def"]["unknownKeys"]>, objectInputType<extendShape<T, Augmentation>, Incoming["_def"]["catchall"], Incoming["_def"]["unknownKeys"]>>
```

Prior to zod@1.0.12 there was a bug in the
inferred type of merged objects. Please
upgrade if you are experiencing issues.

#### Type Parameters

| Type Parameter |
| ------ |
| `Incoming` *extends* [`ZodObject`](ZodObject.md)\<`any`, `any`, `any`, \{\}, \{\}, `Incoming`\> |
| `Augmentation` *extends* `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `merging` | `Incoming` |

#### Returns

[`ZodObject`](ZodObject.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"unknownKeys"`\], `Incoming`\[`"_def"`\]\[`"catchall"`\], [`objectOutputType`](../type-aliases/objectOutputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"catchall"`\], `Incoming`\[`"_def"`\]\[`"unknownKeys"`\]\>, [`objectInputType`](../type-aliases/objectInputType.md)\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"catchall"`\], `Incoming`\[`"_def"`\]\[`"unknownKeys"`\]\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:560

***

### nullable()

```ts
nullable(): ZodNullable<ZodObject<T, UnknownKeys, Catchall, Output, Input>>
```

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

```ts
nullish(): ZodOptional<ZodNullable<ZodObject<T, UnknownKeys, Catchall, Output, Input>>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### omit()

```ts
omit<Mask>(mask: Mask): ZodObject<Omit<T, keyof Mask>, UnknownKeys, Catchall, objectOutputType<Omit<T, keyof Mask>, Catchall, UnknownKeys>, objectInputType<Omit<T, keyof Mask>, Catchall, UnknownKeys>>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Mask` *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mask` | `Mask` |

#### Returns

[`ZodObject`](ZodObject.md)\<`Omit`\<`T`, keyof `Mask`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:568

***

### optional()

```ts
optional(): ZodOptional<ZodObject<T, UnknownKeys, Catchall, Output, Input>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

```ts
or<T>(option: T): ZodUnion<[ZodObject<T, UnknownKeys, Catchall, Output, Input>, T]>
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

[`ZodUnion`](ZodUnion.md)\<[[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

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

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

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

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### partial()

#### partial(undefined)

```ts
partial(): ZodObject<{ [k in string | number | symbol]: ZodOptional<T[k]> }, UnknownKeys, Catchall, objectOutputType<{ [k in string | number | symbol]: ZodOptional<T[k]> }, Catchall, UnknownKeys>, objectInputType<{ [k in string | number | symbol]: ZodOptional<T[k]> }, Catchall, UnknownKeys>>
```

##### Returns

[`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:575

#### partial(mask)

```ts
partial<Mask>(mask: Mask): ZodObject<{ [k in string | number | symbol]: k extends keyof T ? { [k in string | number | symbol]: k extends keyof Mask ? ZodOptional<T[k<k>]> : T[k] }[k<k>] : never }, UnknownKeys, Catchall, objectOutputType<{ [k in string | number | symbol]: k extends keyof T ? { [k in string | number | symbol]: k extends keyof Mask ? ZodOptional<T[k<k>]> : T[k] }[k<k>] : never }, Catchall, UnknownKeys>, objectInputType<{ [k in string | number | symbol]: k extends keyof T ? { [k in string | number | symbol]: k extends keyof Mask ? ZodOptional<T[k<k>]> : T[k] }[k<k>] : never }, Catchall, UnknownKeys>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `Mask` *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `mask` | `Mask` |

##### Returns

[`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:578

***

### passthrough()

```ts
passthrough(): ZodObject<T, "passthrough", Catchall, objectOutputType<T, Catchall, "passthrough">, objectInputType<T, Catchall, "passthrough">>
```

#### Returns

[`ZodObject`](ZodObject.md)\<`T`, `"passthrough"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"passthrough"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"passthrough"`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:544

***

### pick()

```ts
pick<Mask>(mask: Mask): ZodObject<Pick<T, Extract<keyof T, keyof Mask>>, UnknownKeys, Catchall, objectOutputType<Pick<T, Extract<keyof T, keyof Mask>>, Catchall, UnknownKeys>, objectInputType<Pick<T, Extract<keyof T, keyof Mask>>, Catchall, UnknownKeys>>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Mask` *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mask` | `Mask` |

#### Returns

[`ZodObject`](ZodObject.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:565

***

### pipe()

```ts
pipe<T>(target: T): ZodPipeline<ZodObject<T, UnknownKeys, Catchall, Output, Input>, T>
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

[`ZodPipeline`](ZodPipeline.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

```ts
promise(): ZodPromise<ZodObject<T, UnknownKeys, Catchall, Output, Input>>
```

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

```ts
readonly(): ZodReadonly<ZodObject<T, UnknownKeys, Catchall, Output, Input>>
```

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

```ts
refine<RefinedOutput>(check: (arg: Output) => arg is RefinedOutput, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: Output) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodObject<T, UnknownKeys, Catchall, Output, Input>, RefinedOutput, Input>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `Output`) => `arg is RefinedOutput` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: `Output`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

```ts
refine(check: (arg: Output) => unknown, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: Output) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodObject<T, UnknownKeys, Catchall, Output, Input>, Output, Input>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `Output`) => `unknown` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: `Output`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

```ts
refinement<RefinedOutput>(check: (arg: Output) => arg is RefinedOutput, refinementData: IssueData | (arg: Output, ctx: RefinementCtx) => IssueData): ZodEffects<ZodObject<T, UnknownKeys, Catchall, Output, Input>, RefinedOutput, Input>
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

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

```ts
refinement(check: (arg: Output) => boolean, refinementData: IssueData | (arg: Output, ctx: RefinementCtx) => IssueData): ZodEffects<ZodObject<T, UnknownKeys, Catchall, Output, Input>, Output, Input>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `Output`) => `boolean` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### required()

#### required(undefined)

```ts
required(): ZodObject<{ [k in string | number | symbol]: deoptional<T[k]> }, UnknownKeys, Catchall, objectOutputType<{ [k in string | number | symbol]: deoptional<T[k]> }, Catchall, UnknownKeys>, objectInputType<{ [k in string | number | symbol]: deoptional<T[k]> }, Catchall, UnknownKeys>>
```

##### Returns

[`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:583

#### required(mask)

```ts
required<Mask>(mask: Mask): ZodObject<{ [k in string | number | symbol]: k extends keyof T ? { [k in string | number | symbol]: k extends keyof Mask ? deoptional<T[k<k>]> : T[k] }[k<k>] : never }, UnknownKeys, Catchall, objectOutputType<{ [k in string | number | symbol]: k extends keyof T ? { [k in string | number | symbol]: k extends keyof Mask ? deoptional<T[k<k>]> : T[k] }[k<k>] : never }, Catchall, UnknownKeys>, objectInputType<{ [k in string | number | symbol]: k extends keyof T ? { [k in string | number | symbol]: k extends keyof Mask ? deoptional<T[k<k>]> : T[k] }[k<k>] : never }, Catchall, UnknownKeys>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `Mask` *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `mask` | `Mask` |

##### Returns

[`ZodObject`](ZodObject.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\<k\>\]\> : T\[k\] \}\[k\<k\>\] : never \}, `Catchall`, `UnknownKeys`\>\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:586

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

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

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

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### setKey()

```ts
setKey<Key, Schema>(key: Key, schema: Schema): ZodObject<T & { [k in string]: Schema }, UnknownKeys, Catchall, objectOutputType<T & { [k in string]: Schema }, Catchall, UnknownKeys>, objectInputType<T & { [k in string]: Schema }, Catchall, UnknownKeys>>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Key` *extends* `string` |
| `Schema` *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `Schema`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `Key` |
| `schema` | `Schema` |

#### Returns

[`ZodObject`](ZodObject.md)\<`T` & `{ [k in string]: Schema }`, `UnknownKeys`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T` & `{ [k in string]: Schema }`, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T` & `{ [k in string]: Schema }`, `Catchall`, `UnknownKeys`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:561

***

### strict()

```ts
strict(message?: ErrMessage): ZodObject<T, "strict", Catchall, objectOutputType<T, Catchall, "strict">, objectInputType<T, Catchall, "strict">>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodObject`](ZodObject.md)\<`T`, `"strict"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"strict"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"strict"`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:542

***

### strip()

```ts
strip(): ZodObject<T, "strip", Catchall, objectOutputType<T, Catchall, "strip">, objectInputType<T, Catchall, "strip">>
```

#### Returns

[`ZodObject`](ZodObject.md)\<`T`, `"strip"`, `Catchall`, [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `"strip"`\>, [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `"strip"`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:543

***

### superRefine()

#### superRefine(refinement)

```ts
superRefine<RefinedOutput>(refinement: (arg: Output, ctx: RefinementCtx) => arg is RefinedOutput): ZodEffects<ZodObject<T, UnknownKeys, Catchall, Output, Input>, RefinedOutput, Input>
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

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: Output, ctx: RefinementCtx) => void): ZodEffects<ZodObject<T, UnknownKeys, Catchall, Output, Input>, Output, Input>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `void` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: Output, ctx: RefinementCtx) => Promise<void>): ZodEffects<ZodObject<T, UnknownKeys, Catchall, Output, Input>, Output, Input>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `Promise`\<`void`\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

```ts
transform<NewOut>(transform: (arg: Output, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<ZodObject<T, UnknownKeys, Catchall, Output, Input>, NewOut, Input>
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

[`ZodEffects`](ZodEffects.md)\<[`ZodObject`](ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `NewOut`, `Input`\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84
