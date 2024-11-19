# Class: GenerationBlockedError

A GenerationBlockedError is thrown when a generation is blocked.

## Extends

- [`GenerationResponseError`](GenerationResponseError.md)

## Constructors

### new GenerationBlockedError()

```ts
new GenerationBlockedError(
   response: GenerateResponse<any>, 
   message: string, 
   status?: 
  | "CANCELLED"
  | "UNKNOWN"
  | "INVALID_ARGUMENT"
  | "DEADLINE_EXCEEDED"
  | "NOT_FOUND"
  | "ALREADY_EXISTS"
  | "PERMISSION_DENIED"
  | "UNAUTHENTICATED"
  | "RESOURCE_EXHAUSTED"
  | "FAILED_PRECONDITION"
  | "ABORTED"
  | "OUT_OF_RANGE"
  | "UNIMPLEMENTED"
  | "INTERNAL"
  | "UNAVAILABLE"
  | "DATA_LOSS", 
   detail?: Record<string, any>): GenerationBlockedError
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `response` | [`GenerateResponse`](GenerateResponse.md)\<`any`\> |
| `message` | `string` |
| `status`? | \| `"CANCELLED"` \| `"UNKNOWN"` \| `"INVALID_ARGUMENT"` \| `"DEADLINE_EXCEEDED"` \| `"NOT_FOUND"` \| `"ALREADY_EXISTS"` \| `"PERMISSION_DENIED"` \| `"UNAUTHENTICATED"` \| `"RESOURCE_EXHAUSTED"` \| `"FAILED_PRECONDITION"` \| `"ABORTED"` \| `"OUT_OF_RANGE"` \| `"UNIMPLEMENTED"` \| `"INTERNAL"` \| `"UNAVAILABLE"` \| `"DATA_LOSS"` |
| `detail`? | `Record`\<`string`, `any`\> |

#### Returns

[`GenerationBlockedError`](GenerationBlockedError.md)

#### Inherited from

[`GenerationResponseError`](GenerationResponseError.md).[`constructor`](GenerationResponseError.md#constructors)

#### Defined in

ai/lib/generate-C8Qor0QX.d.ts:225

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `detail` | `public` | \{ `[otherDetails: string]`: `any`; `response`: [`GenerateResponse`](GenerateResponse.md)\<`unknown`\>; \} | - | [`GenerationResponseError`](GenerationResponseError.md).`detail` | ai/lib/generate-C8Qor0QX.d.ts:221 |
| `detail.response` | `public` | [`GenerateResponse`](GenerateResponse.md)\<`unknown`\> | - | - | ai/lib/generate-C8Qor0QX.d.ts:222 |
| `message` | `public` | `string` | - | [`GenerationResponseError`](GenerationResponseError.md).`message` | node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1054 |
| `name` | `public` | `string` | - | [`GenerationResponseError`](GenerationResponseError.md).`name` | node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1053 |
| `source?` | `public` | `string` | - | [`GenerationResponseError`](GenerationResponseError.md).`source` | core/lib/error.d.ts:24 |
| `stack?` | `public` | `string` | - | [`GenerationResponseError`](GenerationResponseError.md).`stack` | node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1055 |
| `status` | `public` | \| `"CANCELLED"` \| `"UNKNOWN"` \| `"INVALID_ARGUMENT"` \| `"DEADLINE_EXCEEDED"` \| `"NOT_FOUND"` \| `"ALREADY_EXISTS"` \| `"PERMISSION_DENIED"` \| `"UNAUTHENTICATED"` \| `"RESOURCE_EXHAUSTED"` \| `"FAILED_PRECONDITION"` \| `"ABORTED"` \| `"OUT_OF_RANGE"` \| `"UNIMPLEMENTED"` \| `"INTERNAL"` \| `"UNAVAILABLE"` \| `"DATA_LOSS"` | - | [`GenerationResponseError`](GenerationResponseError.md).`status` | core/lib/error.d.ts:25 |
| `prepareStackTrace?` | `static` | (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any` | Optional override for formatting stack traces **See** https://v8.dev/docs/stack-trace-api#customizing-stack-traces | [`GenerationResponseError`](GenerationResponseError.md).`prepareStackTrace` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:143 |
| `stackTraceLimit` | `static` | `number` | - | [`GenerationResponseError`](GenerationResponseError.md).`stackTraceLimit` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:145 |

## Methods

### captureStackTrace()

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void
```

Create .stack property on a target object

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt`? | `Function` |

#### Returns

`void`

#### Inherited from

[`GenerationResponseError`](GenerationResponseError.md).[`captureStackTrace`](GenerationResponseError.md#capturestacktrace)

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:136
