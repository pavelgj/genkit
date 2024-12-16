[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / SessionStore

# Interface: SessionStore\<S\>

Session store persists session data such as state and chat messages.

## Type Parameters

• **S** = `any`

## Methods

### get()

> **get**(`sessionId`): `Promise`\<`undefined` \| [`SessionData`](SessionData.md)\<`S`\>\>

#### Parameters

##### sessionId

`string`

#### Returns

`Promise`\<`undefined` \| [`SessionData`](SessionData.md)\<`S`\>\>

#### Defined in

ai/lib/chat-BD8unKFH.d.ts:146

***

### save()

> **save**(`sessionId`, `data`): `Promise`\<`void`\>

#### Parameters

##### sessionId

`string`

##### data

`Omit`\<[`SessionData`](SessionData.md)\<`S`\>, `"id"`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

ai/lib/chat-BD8unKFH.d.ts:147
