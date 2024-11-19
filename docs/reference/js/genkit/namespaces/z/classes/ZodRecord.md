# Class: ZodRecord\<Key, Value\>

## Extends

- [`ZodType`](ZodType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`ZodRecordDef`](../interfaces/ZodRecordDef.md)\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Key` *extends* [`KeySchema`](../type-aliases/KeySchema.md) | [`ZodString`](ZodString.md) |
| `Value` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) |

## Constructors

### new ZodRecord()

```ts
new ZodRecord<Key, Value>(def: ZodRecordDef<Key, Value>): ZodRecord<Key, Value>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`ZodRecordDef`](../interfaces/ZodRecordDef.md)\<`Key`, `Value`\> |

#### Returns

[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `_def` | `readonly` | [`ZodRecordDef`](../interfaces/ZodRecordDef.md)\<`Key`, `Value`\> | - | [`ZodType`](ZodType.md).`_def` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51 |
| `_input` | `readonly` | [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\> | - | [`ZodType`](ZodType.md).`_input` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50 |
| `_output` | `readonly` | [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\> | - | [`ZodType`](ZodType.md).`_output` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49 |
| `_type` | `readonly` | [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\> | - | [`ZodType`](ZodType.md).`_type` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48 |
| `spa` | `public` | (`data`: `unknown`, `params`?: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>\> | Alias of safeParseAsync | [`ZodType`](ZodType.md).`spa` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67 |

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

### element

#### Get Signature

```ts
get element(): Value
```

##### Returns

`Value`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:685

***

### keySchema

#### Get Signature

```ts
get keySchema(): Key
```

##### Returns

`Key`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:682

***

### valueSchema

#### Get Signature

```ts
get valueSchema(): Value
```

##### Returns

`Value`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:683

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
_parse(input: ParseInput): ParseReturnType<RecordType<Key["_output"], Value["_output"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:684

***

### \_parseAsync()

```ts
_parseAsync(input: ParseInput): AsyncParseReturnType<RecordType<Key["_output"], Value["_output"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

```ts
_parseSync(input: ParseInput): SyncParseReturnType<RecordType<Key["_output"], Value["_output"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

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
_refinement(refinement: (arg: RecordType<Key["_output"], Value["_output"]>, ctx: RefinementCtx) => any): ZodEffects<ZodRecord<Key, Value>, RecordType<Key["_output"], Value["_output"]>, RecordType<Key["_input"], Value["_input"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### and()

```ts
and<T>(incoming: T): ZodIntersection<ZodRecord<Key, Value>, T>
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

[`ZodIntersection`](ZodIntersection.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

```ts
array(): ZodArray<ZodRecord<Key, Value>, "many">
```

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### brand()

```ts
brand<B>(brand?: B): ZodBranded<ZodRecord<Key, Value>, B>
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

[`ZodBranded`](ZodBranded.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

```ts
catch(def: RecordType<Key["_output"], Value["_output"]>): ZodCatch<ZodRecord<Key, Value>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

```ts
catch(def: (ctx: {
  error: ZodError<any>;
  input: RecordType<Key["_input"], Value["_input"]>;
}) => RecordType<Key["_output"], Value["_output"]>): ZodCatch<ZodRecord<Key, Value>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](ZodError.md)\<`any`\>; `input`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>; \}) => [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\> |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### default()

#### default(def)

```ts
default(def: noUndefined<RecordType<Key["_input"], Value["_input"]>>): ZodDefault<ZodRecord<Key, Value>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

```ts
default(def: () => noUndefined<RecordType<Key["_input"], Value["_input"]>>): ZodDefault<ZodRecord<Key, Value>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | () => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\> |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>\>

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
nullable(): ZodNullable<ZodRecord<Key, Value>>
```

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

```ts
nullish(): ZodOptional<ZodNullable<ZodRecord<Key, Value>>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

```ts
optional(): ZodOptional<ZodRecord<Key, Value>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

```ts
or<T>(option: T): ZodUnion<[ZodRecord<Key, Value>, T]>
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

[`ZodUnion`](ZodUnion.md)\<[[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

```ts
parse(data: unknown, params?: Partial<ParseParams>): RecordType<Key["_output"], Value["_output"]>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

```ts
parseAsync(data: unknown, params?: Partial<ParseParams>): Promise<RecordType<Key["_output"], Value["_output"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

```ts
pipe<T>(target: T): ZodPipeline<ZodRecord<Key, Value>, T>
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

[`ZodPipeline`](ZodPipeline.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

```ts
promise(): ZodPromise<ZodRecord<Key, Value>>
```

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

```ts
readonly(): ZodReadonly<ZodRecord<Key, Value>>
```

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

```ts
refine<RefinedOutput>(check: (arg: RecordType<Key["_output"], Value["_output"]>) => arg is RefinedOutput, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: RecordType<Key["_output"], Value["_output"]>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodRecord<Key, Value>, RefinedOutput, RecordType<Key["_input"], Value["_input"]>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\> \| `Partial`\<`Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>) => `arg is RefinedOutput` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

```ts
refine(check: (arg: RecordType<Key["_output"], Value["_output"]>) => unknown, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: RecordType<Key["_output"], Value["_output"]>) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodRecord<Key, Value>, RecordType<Key["_output"], Value["_output"]>, RecordType<Key["_input"], Value["_input"]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>) => `unknown` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

```ts
refinement<RefinedOutput>(check: (arg: RecordType<Key["_output"], Value["_output"]>) => arg is RefinedOutput, refinementData: IssueData | (arg: RecordType<Key["_output"], Value["_output"]>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodRecord<Key, Value>, RefinedOutput, RecordType<Key["_input"], Value["_input"]>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\> \| `Partial`\<`Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>) => `arg is RefinedOutput` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

```ts
refinement(check: (arg: RecordType<Key["_output"], Value["_output"]>) => boolean, refinementData: IssueData | (arg: RecordType<Key["_output"], Value["_output"]>, ctx: RefinementCtx) => IssueData): ZodEffects<ZodRecord<Key, Value>, RecordType<Key["_output"], Value["_output"]>, RecordType<Key["_input"], Value["_input"]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>) => `boolean` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### safeParse()

```ts
safeParse(data: unknown, params?: Partial<ParseParams>): SafeParseReturnType<RecordType<Key["_input"], Value["_input"]>, RecordType<Key["_output"], Value["_output"]>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

```ts
safeParseAsync(data: unknown, params?: Partial<ParseParams>): Promise<SafeParseReturnType<RecordType<Key["_input"], Value["_input"]>, RecordType<Key["_output"], Value["_output"]>>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### superRefine()

#### superRefine(refinement)

```ts
superRefine<RefinedOutput>(refinement: (arg: RecordType<Key["_output"], Value["_output"]>, ctx: RefinementCtx) => arg is RefinedOutput): ZodEffects<ZodRecord<Key, Value>, RefinedOutput, RecordType<Key["_input"], Value["_input"]>>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\> \| `Partial`\<`Record`\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `arg is RefinedOutput` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: RecordType<Key["_output"], Value["_output"]>, ctx: RefinementCtx) => void): ZodEffects<ZodRecord<Key, Value>, RecordType<Key["_output"], Value["_output"]>, RecordType<Key["_input"], Value["_input"]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `void` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: RecordType<Key["_output"], Value["_output"]>, ctx: RefinementCtx) => Promise<void>): ZodEffects<ZodRecord<Key, Value>, RecordType<Key["_output"], Value["_output"]>, RecordType<Key["_input"], Value["_input"]>>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `Promise`\<`void`\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### transform()

```ts
transform<NewOut>(transform: (arg: RecordType<Key["_output"], Value["_output"]>, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<ZodRecord<Key, Value>, NewOut, RecordType<Key["_input"], Value["_input"]>>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `NewOut` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transform` | (`arg`: [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_output"`\], `Value`\[`"_output"`\]\>, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodRecord`](ZodRecord.md)\<`Key`, `Value`\>, `NewOut`, [`RecordType`](../type-aliases/RecordType.md)\<`Key`\[`"_input"`\], `Value`\[`"_input"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84

***

### create()

#### create(valueType, params)

```ts
static create<Value>(valueType: Value, params?: RawCreateParams): ZodRecord<ZodString, Value>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `Value` *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `Value`\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `valueType` | `Value` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

##### Returns

[`ZodRecord`](ZodRecord.md)\<[`ZodString`](ZodString.md), `Value`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:686

#### create(keySchema, valueType, params)

```ts
static create<Keys, Value>(
   keySchema: Keys, 
   valueType: Value, 
params?: RawCreateParams): ZodRecord<Keys, Value>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `Keys` *extends* [`ZodType`](ZodType.md)\<`string` \| `number` \| `symbol`, `any`, `any`, `Keys`\> |
| `Value` *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`, `Value`\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `keySchema` | `Keys` |
| `valueType` | `Value` |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) |

##### Returns

[`ZodRecord`](ZodRecord.md)\<`Keys`, `Value`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:687
