# Class: GenerationResponseError

Base error class for Genkit errors.

## Extends

- [`GenkitError`](GenkitError.md)

## Extended by

- [`GenerationBlockedError`](GenerationBlockedError.md)

## Constructors

### new GenerationResponseError()

```ts
new GenerationResponseError(
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
   detail?: Record<string, any>): GenerationResponseError
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `response` | [`GenerateResponse`](GenerateResponse.md)\<`any`\> |
| `message` | `string` |
| `status`? | \| `"CANCELLED"` \| `"UNKNOWN"` \| `"INVALID_ARGUMENT"` \| `"DEADLINE_EXCEEDED"` \| `"NOT_FOUND"` \| `"ALREADY_EXISTS"` \| `"PERMISSION_DENIED"` \| `"UNAUTHENTICATED"` \| `"RESOURCE_EXHAUSTED"` \| `"FAILED_PRECONDITION"` \| `"ABORTED"` \| `"OUT_OF_RANGE"` \| `"UNIMPLEMENTED"` \| `"INTERNAL"` \| `"UNAVAILABLE"` \| `"DATA_LOSS"` |
| `detail`? | `Record`\<`string`, `any`\> |

#### Returns

[`GenerationResponseError`](GenerationResponseError.md)

#### Overrides

[`GenkitError`](GenkitError.md).[`constructor`](GenkitError.md#constructors)

#### Defined in

ai/lib/generate-C8Qor0QX.d.ts:225

## Properties

| Property | Modifier | Type | Description | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `detail` | `public` | \{ `[otherDetails: string]`: `any`; `response`: [`GenerateResponse`](GenerateResponse.md)\<`unknown`\>; \} | - | [`GenkitError`](GenkitError.md).`detail` | - | ai/lib/generate-C8Qor0QX.d.ts:221 |
| `detail.response` | `public` | [`GenerateResponse`](GenerateResponse.md)\<`unknown`\> | - | - | - | ai/lib/generate-C8Qor0QX.d.ts:222 |
| `message` | `public` | `string` | - | - | [`GenkitError`](GenkitError.md).`message` | node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1054 |
| `name` | `public` | `string` | - | - | [`GenkitError`](GenkitError.md).`name` | node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1053 |
| `source?` | `public` | `string` | - | - | [`GenkitError`](GenkitError.md).`source` | core/lib/error.d.ts:24 |
| `stack?` | `public` | `string` | - | - | [`GenkitError`](GenkitError.md).`stack` | node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1055 |
| `status` | `public` | \| `"CANCELLED"` \| `"UNKNOWN"` \| `"INVALID_ARGUMENT"` \| `"DEADLINE_EXCEEDED"` \| `"NOT_FOUND"` \| `"ALREADY_EXISTS"` \| `"PERMISSION_DENIED"` \| `"UNAUTHENTICATED"` \| `"RESOURCE_EXHAUSTED"` \| `"FAILED_PRECONDITION"` \| `"ABORTED"` \| `"OUT_OF_RANGE"` \| `"UNIMPLEMENTED"` \| `"INTERNAL"` \| `"UNAVAILABLE"` \| `"DATA_LOSS"` | - | - | [`GenkitError`](GenkitError.md).`status` | core/lib/error.d.ts:25 |
| `prepareStackTrace?` | `static` | (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any` | Optional override for formatting stack traces **See** https://v8.dev/docs/stack-trace-api#customizing-stack-traces | - | [`GenkitError`](GenkitError.md).`prepareStackTrace` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:143 |
| `stackTraceLimit` | `static` | `number` | - | - | [`GenkitError`](GenkitError.md).`stackTraceLimit` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:145 |

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

[`GenkitError`](GenkitError.md).[`captureStackTrace`](GenkitError.md#capturestacktrace)

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:136
