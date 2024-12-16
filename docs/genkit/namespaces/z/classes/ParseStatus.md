[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / ParseStatus

# Class: ParseStatus

## Constructors

### new ParseStatus()

> **new ParseStatus**(): [`ParseStatus`](ParseStatus.md)

#### Returns

[`ParseStatus`](ParseStatus.md)

## Properties

### value

> **value**: `"valid"` \| `"dirty"` \| `"aborted"`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:40

## Methods

### abort()

> **abort**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:42

***

### dirty()

> **dirty**(): `void`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:41

***

### mergeArray()

> `static` **mergeArray**(`status`, `results`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>

#### Parameters

##### status

[`ParseStatus`](ParseStatus.md)

##### results

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>[]

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:43

***

### mergeObjectAsync()

> `static` **mergeObjectAsync**(`status`, `pairs`): `Promise`\<[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>\>

#### Parameters

##### status

[`ParseStatus`](ParseStatus.md)

##### pairs

`object`[]

#### Returns

`Promise`\<[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:44

***

### mergeObjectSync()

> `static` **mergeObjectSync**(`status`, `pairs`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>

#### Parameters

##### status

[`ParseStatus`](ParseStatus.md)

##### pairs

`object`[]

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:48
