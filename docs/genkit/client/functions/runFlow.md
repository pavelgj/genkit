[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [client](../README.md) / runFlow

# Function: runFlow()

> **runFlow**\<`O`\>(`__namedParameters`): `Promise`\<`O`\>

Invoke a deployed flow over HTTP(s).

For example:

```js
import { runFlow } from '@genkit-ai/core/flow-client';

const response = await runFlow({
  url: 'https://my-flow-deployed-url',
  input: 'foo',
});
console.log(await response);
```

## Type Parameters

• **O** = `any`

## Parameters

### \_\_namedParameters

#### headers

`Record`\<`string`, `string`\>

#### input

`any`

#### url

`string`

## Returns

`Promise`\<`O`\>

## Defined in

[genkit/src/client/client.ts:173](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/client/client.ts#L173)
