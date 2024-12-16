[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / GenerationBlockedError

# Class: GenerationBlockedError

A GenerationBlockedError is thrown when a generation is blocked.

## Extends

- [`GenerationResponseError`](GenerationResponseError.md)

## Constructors

### new GenerationBlockedError()

> **new GenerationBlockedError**(`response`, `message`, `status`?, `detail`?): [`GenerationBlockedError`](GenerationBlockedError.md)

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

[`GenerationBlockedError`](GenerationBlockedError.md)

#### Inherited from

[`GenerationResponseError`](GenerationResponseError.md).[`constructor`](GenerationResponseError.md#constructors)

#### Defined in

ai/lib/generate-OYA442tG.d.ts:248

## Properties

### detail

> **detail**: `object`

#### Index Signature

 \[`otherDetails`: `string`\]: `any`

#### response

> **response**: [`GenerateResponse`](GenerateResponse.md)\<`unknown`\>

#### Inherited from

[`GenerationResponseError`](GenerationResponseError.md).[`detail`](GenerationResponseError.md#detail-1)

#### Defined in

ai/lib/generate-OYA442tG.d.ts:244

***

### message

> **message**: `string`

#### Inherited from

[`GenerationResponseError`](GenerationResponseError.md).[`message`](GenerationResponseError.md#message-1)

#### Defined in

node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1054

***

### name

> **name**: `string`

#### Inherited from

[`GenerationResponseError`](GenerationResponseError.md).[`name`](GenerationResponseError.md#name)

#### Defined in

node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1053

***

### source?

> `optional` **source**: `string`

#### Inherited from

[`GenerationResponseError`](GenerationResponseError.md).[`source`](GenerationResponseError.md#source)

#### Defined in

core/lib/error.d.ts:24

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`GenerationResponseError`](GenerationResponseError.md).[`stack`](GenerationResponseError.md#stack)

#### Defined in

node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1055

***

### status

> **status**: `"CANCELLED"` \| `"UNKNOWN"` \| `"INVALID_ARGUMENT"` \| `"DEADLINE_EXCEEDED"` \| `"NOT_FOUND"` \| `"ALREADY_EXISTS"` \| `"PERMISSION_DENIED"` \| `"UNAUTHENTICATED"` \| `"RESOURCE_EXHAUSTED"` \| `"FAILED_PRECONDITION"` \| `"ABORTED"` \| `"OUT_OF_RANGE"` \| `"UNIMPLEMENTED"` \| `"INTERNAL"` \| `"UNAVAILABLE"` \| `"DATA_LOSS"`

#### Inherited from

[`GenerationResponseError`](GenerationResponseError.md).[`status`](GenerationResponseError.md#status-1)

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

[`GenerationResponseError`](GenerationResponseError.md).[`prepareStackTrace`](GenerationResponseError.md#preparestacktrace)

#### Defined in

node\_modules/.pnpm/@types+node@20.16.9/node\_modules/@types/node/globals.d.ts:98

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`GenerationResponseError`](GenerationResponseError.md).[`stackTraceLimit`](GenerationResponseError.md#stacktracelimit)

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

[`GenerationResponseError`](GenerationResponseError.md).[`captureStackTrace`](GenerationResponseError.md#capturestacktrace)

#### Defined in

node\_modules/.pnpm/@types+node@20.16.9/node\_modules/@types/node/globals.d.ts:91
