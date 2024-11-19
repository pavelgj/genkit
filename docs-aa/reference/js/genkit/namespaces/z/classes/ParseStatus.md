# Class: ParseStatus

## Constructors

### new ParseStatus()

```ts
new ParseStatus(): ParseStatus
```

#### Returns

[`ParseStatus`](ParseStatus.md)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `value` | `"valid"` \| `"dirty"` \| `"aborted"` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:40 |

## Methods

### abort()

```ts
abort(): void
```

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:42

***

### dirty()

```ts
dirty(): void
```

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:41

***

### mergeArray()

```ts
static mergeArray(status: ParseStatus, results: SyncParseReturnType<any>[]): SyncParseReturnType<any>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`ParseStatus`](ParseStatus.md) |
| `results` | [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>[] |

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:43

***

### mergeObjectAsync()

```ts
static mergeObjectAsync(status: ParseStatus, pairs: {
  key: ParseReturnType<any>;
  value: ParseReturnType<any>;
}[]): Promise<SyncParseReturnType<any>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`ParseStatus`](ParseStatus.md) |
| `pairs` | \{ `key`: [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`any`\>; `value`: [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`any`\>; \}[] |

#### Returns

`Promise`\<[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:44

***

### mergeObjectSync()

```ts
static mergeObjectSync(status: ParseStatus, pairs: {
  alwaysSet: boolean;
  key: SyncParseReturnType<any>;
  value: SyncParseReturnType<any>;
}[]): SyncParseReturnType<any>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`ParseStatus`](ParseStatus.md) |
| `pairs` | \{ `alwaysSet`: `boolean`; `key`: [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>; `value`: [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>; \}[] |

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>

#### Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:48
