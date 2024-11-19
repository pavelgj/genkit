# Interface: GenerateStreamResponse\<O\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Accessors

### response

#### Get Signature

```ts
get response(): Promise<GenerateResponse<O>>
```

##### Returns

`Promise`\<[`GenerateResponse`](../classes/GenerateResponse.md)\<`O`\>\>

#### Defined in

ai/lib/generate-C8Qor0QX.d.ts:245

***

### stream

#### Get Signature

```ts
get stream(): AsyncIterable<GenerateResponseChunk<unknown>>
```

##### Returns

`AsyncIterable`\<`GenerateResponseChunk`\<`unknown`\>\>

#### Defined in

ai/lib/generate-C8Qor0QX.d.ts:244
