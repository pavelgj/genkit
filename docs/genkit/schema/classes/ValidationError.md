[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [schema](../README.md) / ValidationError

# Class: ValidationError

Schema validation error.

## Extends

- [`GenkitError`](../../classes/GenkitError.md)

## Constructors

### new ValidationError()

> **new ValidationError**(`__namedParameters`): [`ValidationError`](ValidationError.md)

#### Parameters

##### \_\_namedParameters

###### data

`any`

###### errors

[`ValidationErrorDetail`](../interfaces/ValidationErrorDetail.md)[]

###### schema

`any`

#### Returns

[`ValidationError`](ValidationError.md)

#### Overrides

[`GenkitError`](../../classes/GenkitError.md).[`constructor`](../../classes/GenkitError.md#constructors)

#### Defined in

core/lib/action-Bp720DPN.d.ts:83

## Properties

### detail?

> `optional` **detail**: `any`

#### Inherited from

[`GenkitError`](../../classes/GenkitError.md).[`detail`](../../classes/GenkitError.md#detail-1)

#### Defined in

core/lib/error.d.ts:26

***

### message

> **message**: `string`

#### Inherited from

[`GenkitError`](../../classes/GenkitError.md).[`message`](../../classes/GenkitError.md#message-1)

#### Defined in

node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1054

***

### name

> **name**: `string`

#### Inherited from

[`GenkitError`](../../classes/GenkitError.md).[`name`](../../classes/GenkitError.md#name)

#### Defined in

node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1053

***

### source?

> `optional` **source**: `string`

#### Inherited from

[`GenkitError`](../../classes/GenkitError.md).[`source`](../../classes/GenkitError.md#source-1)

#### Defined in

core/lib/error.d.ts:24

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`GenkitError`](../../classes/GenkitError.md).[`stack`](../../classes/GenkitError.md#stack)

#### Defined in

node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1055

***

### status

> **status**: `"CANCELLED"` \| `"UNKNOWN"` \| `"INVALID_ARGUMENT"` \| `"DEADLINE_EXCEEDED"` \| `"NOT_FOUND"` \| `"ALREADY_EXISTS"` \| `"PERMISSION_DENIED"` \| `"UNAUTHENTICATED"` \| `"RESOURCE_EXHAUSTED"` \| `"FAILED_PRECONDITION"` \| `"ABORTED"` \| `"OUT_OF_RANGE"` \| `"UNIMPLEMENTED"` \| `"INTERNAL"` \| `"UNAVAILABLE"` \| `"DATA_LOSS"`

#### Inherited from

[`GenkitError`](../../classes/GenkitError.md).[`status`](../../classes/GenkitError.md#status-1)

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

[`GenkitError`](../../classes/GenkitError.md).[`prepareStackTrace`](../../classes/GenkitError.md#preparestacktrace)

#### Defined in

node\_modules/.pnpm/@types+node@20.16.9/node\_modules/@types/node/globals.d.ts:98

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`GenkitError`](../../classes/GenkitError.md).[`stackTraceLimit`](../../classes/GenkitError.md#stacktracelimit)

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

[`GenkitError`](../../classes/GenkitError.md).[`captureStackTrace`](../../classes/GenkitError.md#capturestacktrace)

#### Defined in

node\_modules/.pnpm/@types+node@20.16.9/node\_modules/@types/node/globals.d.ts:91
