[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / GenerationResponseError

# Class: GenerationResponseError

Base error class for Genkit errors.

## Extends

- [`GenkitError`](GenkitError.md)

## Extended by

- [`GenerationBlockedError`](GenerationBlockedError.md)

## Constructors

### new GenerationResponseError()

> **new GenerationResponseError**(`response`, `message`, `status`?, `detail`?): [`GenerationResponseError`](GenerationResponseError.md)

#### Parameters

##### response

[`GenerateResponse`](GenerateResponse.md)\<`any`\>

##### message

`string`

##### status?

`"CANCELLED"` | `"UNKNOWN"` | `"INVALID_ARGUMENT"` | `"DEADLINE_EXCEEDED"` | `"NOT_FOUND"` | `"ALREADY_EXISTS"` | `"PERMISSION_DENIED"` | `"UNAUTHENTICATED"` | `"RESOURCE_EXHAUSTED"` | `"FAILED_PRECONDITION"` | `"ABORTED"` | `"OUT_OF_RANGE"` | `"UNIMPLEMENTED"` | `"INTERNAL"` | `"UNAVAILABLE"` | `"DATA_LOSS"`

##### detail?

`Record`\<`string`, `any`\>

#### Returns

[`GenerationResponseError`](GenerationResponseError.md)

#### Overrides

[`GenkitError`](GenkitError.md).[`constructor`](GenkitError.md#constructors)

#### Defined in

ai/lib/generate-OYA442tG.d.ts:248

## Properties

### detail

> **detail**: `object`

#### Index Signature

 \[`otherDetails`: `string`\]: `any`

#### response

> **response**: [`GenerateResponse`](GenerateResponse.md)\<`unknown`\>

#### Overrides

[`GenkitError`](GenkitError.md).[`detail`](GenkitError.md#detail-1)

#### Defined in

ai/lib/generate-OYA442tG.d.ts:244

***

### message

> **message**: `string`

#### Inherited from

[`GenkitError`](GenkitError.md).[`message`](GenkitError.md#message-1)

#### Defined in

node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1054

***

### name

> **name**: `string`

#### Inherited from

[`GenkitError`](GenkitError.md).[`name`](GenkitError.md#name)

#### Defined in

node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1053

***

### source?

> `optional` **source**: `string`

#### Inherited from

[`GenkitError`](GenkitError.md).[`source`](GenkitError.md#source-1)

#### Defined in

core/lib/error.d.ts:24

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`GenkitError`](GenkitError.md).[`stack`](GenkitError.md#stack)

#### Defined in

node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1055

***

### status

> **status**: `"CANCELLED"` \| `"UNKNOWN"` \| `"INVALID_ARGUMENT"` \| `"DEADLINE_EXCEEDED"` \| `"NOT_FOUND"` \| `"ALREADY_EXISTS"` \| `"PERMISSION_DENIED"` \| `"UNAUTHENTICATED"` \| `"RESOURCE_EXHAUSTED"` \| `"FAILED_PRECONDITION"` \| `"ABORTED"` \| `"OUT_OF_RANGE"` \| `"UNIMPLEMENTED"` \| `"INTERNAL"` \| `"UNAVAILABLE"` \| `"DATA_LOSS"`

#### Inherited from

[`GenkitError`](GenkitError.md).[`status`](GenkitError.md#status-1)

#### Defined in

core/lib/error.d.ts:25

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`GenkitError`](GenkitError.md).[`prepareStackTrace`](GenkitError.md#preparestacktrace)

#### Defined in

node\_modules/.pnpm/@types+node@20.16.9/node\_modules/@types/node/globals.d.ts:98

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`GenkitError`](GenkitError.md).[`stackTraceLimit`](GenkitError.md#stacktracelimit)

#### Defined in

node\_modules/.pnpm/@types+node@20.16.9/node\_modules/@types/node/globals.d.ts:100

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

[`GenkitError`](GenkitError.md).[`captureStackTrace`](GenkitError.md#capturestacktrace)

#### Defined in

node\_modules/.pnpm/@types+node@20.16.9/node\_modules/@types/node/globals.d.ts:91
