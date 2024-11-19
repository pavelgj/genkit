# Class: GenkitError

Base error class for Genkit errors.

## Extends

- `Error`

## Extended by

- [`GenerationResponseError`](GenerationResponseError.md)

## Constructors

### new GenkitError()

```ts
new GenkitError(__namedParameters: {
  detail: any;
  message: string;
  source: string;
  status:   | "CANCELLED"
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
     | "DATA_LOSS";
 }): GenkitError
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.detail`? | `any` |
| `__namedParameters.message` | `string` |
| `__namedParameters.source`? | `string` |
| `__namedParameters.status` | \| `"CANCELLED"` \| `"UNKNOWN"` \| `"INVALID_ARGUMENT"` \| `"DEADLINE_EXCEEDED"` \| `"NOT_FOUND"` \| `"ALREADY_EXISTS"` \| `"PERMISSION_DENIED"` \| `"UNAUTHENTICATED"` \| `"RESOURCE_EXHAUSTED"` \| `"FAILED_PRECONDITION"` \| `"ABORTED"` \| `"OUT_OF_RANGE"` \| `"UNIMPLEMENTED"` \| `"INTERNAL"` \| `"UNAVAILABLE"` \| `"DATA_LOSS"` |

#### Returns

[`GenkitError`](GenkitError.md)

#### Overrides

`Error.constructor`

#### Defined in

core/lib/error.d.ts:27

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `detail?` | `public` | `any` | - | - | core/lib/error.d.ts:26 |
| `message` | `public` | `string` | - | `Error.message` | node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1054 |
| `name` | `public` | `string` | - | `Error.name` | node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1053 |
| `source?` | `public` | `string` | - | - | core/lib/error.d.ts:24 |
| `stack?` | `public` | `string` | - | `Error.stack` | node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1055 |
| `status` | `public` | \| `"CANCELLED"` \| `"UNKNOWN"` \| `"INVALID_ARGUMENT"` \| `"DEADLINE_EXCEEDED"` \| `"NOT_FOUND"` \| `"ALREADY_EXISTS"` \| `"PERMISSION_DENIED"` \| `"UNAUTHENTICATED"` \| `"RESOURCE_EXHAUSTED"` \| `"FAILED_PRECONDITION"` \| `"ABORTED"` \| `"OUT_OF_RANGE"` \| `"UNIMPLEMENTED"` \| `"INTERNAL"` \| `"UNAVAILABLE"` \| `"DATA_LOSS"` | - | - | core/lib/error.d.ts:25 |
| `prepareStackTrace?` | `static` | (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any` | Optional override for formatting stack traces **See** https://v8.dev/docs/stack-trace-api#customizing-stack-traces | `Error.prepareStackTrace` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:143 |
| `stackTraceLimit` | `static` | `number` | - | `Error.stackTraceLimit` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:145 |

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

`Error.captureStackTrace`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:136
