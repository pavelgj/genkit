# Interface: SessionStore\<S\>

Session store persists session data such as state and chat messages.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `S` | `any` |

## Methods

### get()

```ts
get(sessionId: string): Promise<undefined | SessionData<S>>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

`Promise`\<`undefined` \| [`SessionData`](SessionData.md)\<`S`\>\>

#### Defined in

ai/lib/chat-B4kXEZdZ.d.ts:146

***

### save()

```ts
save(sessionId: string, data: Omit<SessionData<S>, "id">): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |
| `data` | `Omit`\<[`SessionData`](SessionData.md)\<`S`\>, `"id"`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

ai/lib/chat-B4kXEZdZ.d.ts:147
