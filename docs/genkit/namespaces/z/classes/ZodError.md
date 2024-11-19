# Class: ZodError\<T\>

## Extends

- `Error`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Constructors

### new ZodError()

```ts
new ZodError<T>(issues: ZodIssue[]): ZodError<T>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `issues` | [`ZodIssue`](../type-aliases/ZodIssue.md)[] |

#### Returns

[`ZodError`](ZodError.md)\<`T`\>

#### Overrides

`Error.constructor`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:138

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `addIssue` | `public` | (`sub`: [`ZodIssue`](../type-aliases/ZodIssue.md)) => `void` | - | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:146 |
| `addIssues` | `public` | (`subs`?: [`ZodIssue`](../type-aliases/ZodIssue.md)[]) => `void` | - | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:147 |
| `issues` | `public` | [`ZodIssue`](../type-aliases/ZodIssue.md)[] | - | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:136 |
| `name` | `public` | `string` | - | `Error.name` | node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1053 |
| `stack?` | `public` | `string` | - | `Error.stack` | node\_modules/.pnpm/typescript@4.9.5/node\_modules/typescript/lib/lib.es5.d.ts:1055 |
| `create` | `static` | (`issues`: [`ZodIssue`](../type-aliases/ZodIssue.md)[]) => [`ZodError`](ZodError.md)\<`any`\> | - | - | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:141 |
| `prepareStackTrace?` | `static` | (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any` | Optional override for formatting stack traces **See** https://v8.dev/docs/stack-trace-api#customizing-stack-traces | `Error.prepareStackTrace` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:143 |
| `stackTraceLimit` | `static` | `number` | - | `Error.stackTraceLimit` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/globals.d.ts:145 |

## Accessors

### errors

#### Get Signature

```ts
get errors(): ZodIssue[]
```

##### Returns

[`ZodIssue`](../type-aliases/ZodIssue.md)[]

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:137

***

### formErrors

#### Get Signature

```ts
get formErrors(): typeToFlattenedError<T, string>
```

##### Returns

[`typeToFlattenedError`](../type-aliases/typeToFlattenedError.md)\<`T`, `string`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:150

***

### isEmpty

#### Get Signature

```ts
get isEmpty(): boolean
```

##### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:145

***

### message

#### Get Signature

```ts
get message(): string
```

##### Returns

`string`

#### Overrides

`Error.message`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:144

## Methods

### flatten()

#### flatten(undefined)

```ts
flatten(): typeToFlattenedError<T, string>
```

##### Returns

[`typeToFlattenedError`](../type-aliases/typeToFlattenedError.md)\<`T`, `string`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:148

#### flatten(mapper)

```ts
flatten<U>(mapper?: (issue: ZodIssue) => U): typeToFlattenedError<T, U>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `U` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `mapper`? | (`issue`: [`ZodIssue`](../type-aliases/ZodIssue.md)) => `U` |

##### Returns

[`typeToFlattenedError`](../type-aliases/typeToFlattenedError.md)\<`T`, `U`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:149

***

### format()

#### format(undefined)

```ts
format(): ZodFormattedError<T, string>
```

##### Returns

[`ZodFormattedError`](../type-aliases/ZodFormattedError.md)\<`T`, `string`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:139

#### format(mapper)

```ts
format<U>(mapper: (issue: ZodIssue) => U): ZodFormattedError<T, U>
```

##### Type Parameters

| Type Parameter |
| ------ |
| `U` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `mapper` | (`issue`: [`ZodIssue`](../type-aliases/ZodIssue.md)) => `U` |

##### Returns

[`ZodFormattedError`](../type-aliases/ZodFormattedError.md)\<`T`, `U`\>

##### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:140

***

### toString()

```ts
toString(): string
```

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:143

***

### assert()

```ts
static assert(value: unknown): asserts value is ZodError<any>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`asserts value is ZodError<any>`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/ZodError.d.ts:142

***

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
