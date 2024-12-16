[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [client](../README.md) / streamFlow

# Function: streamFlow()

> **streamFlow**\<`O`, `S`\>(`__namedParameters`): `object`

Invoke and stream response from a deployed flow.

For example:

```js
import { streamFlow } from '@genkit-ai/core/flow-client';

const response = streamFlow({
  url: 'https://my-flow-deployed-url',
  input: 'foo',
});
for await (const chunk of response.stream) {
  console.log(chunk);
}
console.log(await response.output);
```

## Type Parameters

• **O** = `any`

• **S** = `any`

## Parameters

### \_\_namedParameters

#### headers

`Record`\<`string`, `string`\>

#### input

`any`

#### url

`string`

## Returns

`object`

### output()

#### Returns

`Promise`\<`O`\>

### stream()

#### Returns

`AsyncIterable`\<`S`\>

## Defined in

[genkit/src/client/client.ts:37](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/client/client.ts#L37)
