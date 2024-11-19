# Class: ZodString

## Extends

- [`ZodType`](ZodType.md)\<`string`, [`ZodStringDef`](../interfaces/ZodStringDef.md), `string`\>

## Constructors

### new ZodString()

```ts
new ZodString(def: ZodStringDef): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | [`ZodStringDef`](../interfaces/ZodStringDef.md) |

#### Returns

[`ZodString`](ZodString.md)

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructors)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:76

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `_def` | `readonly` | [`ZodStringDef`](../interfaces/ZodStringDef.md) | - | [`ZodType`](ZodType.md).`_def` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:51 |
| `_input` | `readonly` | `string` | - | [`ZodType`](ZodType.md).`_input` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:50 |
| `_output` | `readonly` | `string` | - | [`ZodType`](ZodType.md).`_output` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:49 |
| `_type` | `readonly` | `string` | - | [`ZodType`](ZodType.md).`_type` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:48 |
| `spa` | `public` | (`data`: `unknown`, `params`?: `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\>) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`string`, `string`\>\> | Alias of safeParseAsync | [`ZodType`](ZodType.md).`spa` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:67 |
| `create` | `static` | (`params`?: \{ `description`: `string`; `errorMap`: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md); `invalid_type_error`: `string`; `message`: `string`; `required_error`: `string`; \} & \{ `coerce`: `true`; \}) => [`ZodString`](ZodString.md) | - | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:259 |

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

### isBase64

#### Get Signature

```ts
get isBase64(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:256

***

### isCUID

#### Get Signature

```ts
get isCUID(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:252

***

### isCUID2

#### Get Signature

```ts
get isCUID2(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:253

***

### isDate

#### Get Signature

```ts
get isDate(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:244

***

### isDatetime

#### Get Signature

```ts
get isDatetime(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:243

***

### isDuration

#### Get Signature

```ts
get isDuration(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:246

***

### isEmail

#### Get Signature

```ts
get isEmail(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:247

***

### isEmoji

#### Get Signature

```ts
get isEmoji(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:249

***

### isIP

#### Get Signature

```ts
get isIP(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:255

***

### isNANOID

#### Get Signature

```ts
get isNANOID(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:251

***

### isTime

#### Get Signature

```ts
get isTime(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:245

***

### isULID

#### Get Signature

```ts
get isULID(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:254

***

### isURL

#### Get Signature

```ts
get isURL(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:248

***

### isUUID

#### Get Signature

```ts
get isUUID(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:250

***

### maxLength

#### Get Signature

```ts
get maxLength(): null | number
```

##### Returns

`null` \| `number`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:258

***

### minLength

#### Get Signature

```ts
get minLength(): null | number
```

##### Returns

`null` \| `number`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:257

## Methods

### \_addCheck()

```ts
_addCheck(check: ZodStringCheck): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | [`ZodStringCheck`](../type-aliases/ZodStringCheck.md) |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:199

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
_parse(input: ParseInput): ParseReturnType<string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`string`\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:197

***

### \_parseAsync()

```ts
_parseAsync(input: ParseInput): AsyncParseReturnType<string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`string`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:61

***

### \_parseSync()

```ts
_parseSync(input: ParseInput): SyncParseReturnType<string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ParseInput`](../type-aliases/ParseInput.md) |

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`string`\>

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
_refinement(refinement: (arg: string, ctx: RefinementCtx) => any): ZodEffects<ZodString, string, string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodString`](ZodString.md), `string`, `string`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:72

***

### \_regex()

```ts
protected _regex(
   regex: RegExp, 
   validation: StringValidation, 
message?: ErrMessage): ZodEffects<ZodString, string, string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `regex` | `RegExp` |
| `validation` | [`StringValidation`](../type-aliases/StringValidation.md) |
| `message`? | `ErrMessage` |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodString`](ZodString.md), `string`, `string`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:198

***

### and()

```ts
and<T>(incoming: T): ZodIntersection<ZodString, T>
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

[`ZodIntersection`](ZodIntersection.md)\<[`ZodString`](ZodString.md), `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:83

***

### array()

```ts
array(): ZodArray<ZodString, "many">
```

#### Returns

[`ZodArray`](ZodArray.md)\<[`ZodString`](ZodString.md), `"many"`\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:80

***

### base64()

```ts
base64(message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:208

***

### brand()

```ts
brand<B>(brand?: B): ZodBranded<ZodString, B>
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

[`ZodBranded`](ZodBranded.md)\<[`ZodString`](ZodString.md), `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:87

***

### catch()

#### catch(def)

```ts
catch(def: string): ZodCatch<ZodString>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | `string` |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodString`](ZodString.md)\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:88

#### catch(def)

```ts
catch(def: (ctx: {
  error: ZodError<any>;
  input: string;
}) => string): ZodCatch<ZodString>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](ZodError.md)\<`any`\>; `input`: `string`; \}) => `string` |

##### Returns

[`ZodCatch`](ZodCatch.md)\<[`ZodString`](ZodString.md)\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:89

***

### cuid()

```ts
cuid(message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:205

***

### cuid2()

```ts
cuid2(message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:206

***

### date()

```ts
date(message?: string): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `string` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:219

***

### datetime()

```ts
datetime(options?: string | {
  local: boolean;
  message: string;
  offset: boolean;
  precision: null | number;
 }): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `string` \| \{ `local`: `boolean`; `message`: `string`; `offset`: `boolean`; `precision`: `null` \| `number`; \} |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:213

***

### default()

#### default(def)

```ts
default(def: string): ZodDefault<ZodString>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | `string` |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodString`](ZodString.md)\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:85

#### default(def)

```ts
default(def: () => string): ZodDefault<ZodString>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `def` | () => `string` |

##### Returns

[`ZodDefault`](ZodDefault.md)\<[`ZodString`](ZodString.md)\>

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

### duration()

```ts
duration(message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:224

***

### email()

```ts
email(message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:200

***

### emoji()

```ts
emoji(message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:202

***

### endsWith()

```ts
endsWith(value: string, message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:231

***

### includes()

```ts
includes(value: string, options?: {
  message: string;
  position: number;
 }): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `options`? | `object` |
| `options.message`? | `string` |
| `options.position`? | `number` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:226

***

### ip()

```ts
ip(options?: string | {
  message: string;
  version: "v4" | "v6";
 }): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `string` \| \{ `message`: `string`; `version`: `"v4"` \| `"v6"`; \} |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:209

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

### length()

```ts
length(len: number, message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `len` | `number` |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:234

***

### max()

```ts
max(maxLength: number, message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `maxLength` | `number` |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:233

***

### min()

```ts
min(minLength: number, message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `minLength` | `number` |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:232

***

### nanoid()

```ts
nanoid(message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:204

***

### ~~nonempty()~~

```ts
nonempty(message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Deprecated

Use z.string().min(1) instead.

#### See

[ZodString.min](ZodString.md#min)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:239

***

### nullable()

```ts
nullable(): ZodNullable<ZodString>
```

#### Returns

[`ZodNullable`](ZodNullable.md)\<[`ZodString`](ZodString.md)\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:78

***

### nullish()

```ts
nullish(): ZodOptional<ZodNullable<ZodString>>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<[`ZodString`](ZodString.md)\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:79

***

### optional()

```ts
optional(): ZodOptional<ZodString>
```

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodString`](ZodString.md)\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:77

***

### or()

```ts
or<T>(option: T): ZodUnion<[ZodString, T]>
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

[`ZodUnion`](ZodUnion.md)\<[[`ZodString`](ZodString.md), `T`]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:82

***

### parse()

```ts
parse(data: unknown, params?: Partial<ParseParams>): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`string`

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:62

***

### parseAsync()

```ts
parseAsync(data: unknown, params?: Partial<ParseParams>): Promise<string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:64

***

### pipe()

```ts
pipe<T>(target: T): ZodPipeline<ZodString, T>
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

[`ZodPipeline`](ZodPipeline.md)\<[`ZodString`](ZodString.md), `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:94

***

### promise()

```ts
promise(): ZodPromise<ZodString>
```

#### Returns

[`ZodPromise`](ZodPromise.md)\<[`ZodString`](ZodString.md)\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:81

***

### readonly()

```ts
readonly(): ZodReadonly<ZodString>
```

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<[`ZodString`](ZodString.md)\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:95

***

### refine()

#### refine(check, message)

```ts
refine<RefinedOutput>(check: (arg: string) => arg is RefinedOutput, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: string) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodString, RefinedOutput, string>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `string` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `string`) => `arg is RefinedOutput` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: `string`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodString`](ZodString.md), `RefinedOutput`, `string`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:68

#### refine(check, message)

```ts
refine(check: (arg: string) => unknown, message?: string | Partial<Omit<ZodCustomIssue, "code">> | (arg: string) => Partial<Omit<ZodCustomIssue, "code">>): ZodEffects<ZodString, string, string>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `string`) => `unknown` |
| `message`? | `string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| (`arg`: `string`) => `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodString`](ZodString.md), `string`, `string`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:69

***

### refinement()

#### refinement(check, refinementData)

```ts
refinement<RefinedOutput>(check: (arg: string) => arg is RefinedOutput, refinementData: IssueData | (arg: string, ctx: RefinementCtx) => IssueData): ZodEffects<ZodString, RefinedOutput, string>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `string` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `string`) => `arg is RefinedOutput` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodString`](ZodString.md), `RefinedOutput`, `string`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:70

#### refinement(check, refinementData)

```ts
refinement(check: (arg: string) => boolean, refinementData: IssueData | (arg: string, ctx: RefinementCtx) => IssueData): ZodEffects<ZodString, string, string>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | (`arg`: `string`) => `boolean` |
| `refinementData` | [`IssueData`](../type-aliases/IssueData.md) \| (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => [`IssueData`](../type-aliases/IssueData.md) |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodString`](ZodString.md), `string`, `string`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:71

***

### regex()

```ts
regex(regex: RegExp, message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `regex` | `RegExp` |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:225

***

### safeParse()

```ts
safeParse(data: unknown, params?: Partial<ParseParams>): SafeParseReturnType<string, string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`string`, `string`\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:63

***

### safeParseAsync()

```ts
safeParseAsync(data: unknown, params?: Partial<ParseParams>): Promise<SafeParseReturnType<string, string>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `unknown` |
| `params`? | `Partial`\<[`ParseParams`](../type-aliases/ParseParams.md)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`string`, `string`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:65

***

### startsWith()

```ts
startsWith(value: string, message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:230

***

### superRefine()

#### superRefine(refinement)

```ts
superRefine<RefinedOutput>(refinement: (arg: string, ctx: RefinementCtx) => arg is RefinedOutput): ZodEffects<ZodString, RefinedOutput, string>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `RefinedOutput` *extends* `string` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `arg is RefinedOutput` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodString`](ZodString.md), `RefinedOutput`, `string`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:73

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: string, ctx: RefinementCtx) => void): ZodEffects<ZodString, string, string>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `void` |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodString`](ZodString.md), `string`, `string`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:74

#### superRefine(refinement)

```ts
superRefine(refinement: (arg: string, ctx: RefinementCtx) => Promise<void>): ZodEffects<ZodString, string, string>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `refinement` | (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `Promise`\<`void`\> |

##### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodString`](ZodString.md), `string`, `string`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:75

***

### time()

```ts
time(options?: string | {
  message: string;
  precision: null | number;
 }): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `string` \| \{ `message`: `string`; `precision`: `null` \| `number`; \} |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:220

***

### toLowerCase()

```ts
toLowerCase(): ZodString
```

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:241

***

### toUpperCase()

```ts
toUpperCase(): ZodString
```

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:242

***

### transform()

```ts
transform<NewOut>(transform: (arg: string, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<ZodString, NewOut, string>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `NewOut` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transform` | (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](ZodEffects.md)\<[`ZodString`](ZodString.md), `NewOut`, `string`\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:84

***

### trim()

```ts
trim(): ZodString
```

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:240

***

### ulid()

```ts
ulid(message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:207

***

### url()

```ts
url(message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:201

***

### uuid()

```ts
uuid(message?: ErrMessage): ZodString
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `ErrMessage` |

#### Returns

[`ZodString`](ZodString.md)

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:203
