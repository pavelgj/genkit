# Function: runWithStreamingCallback()

```ts
function runWithStreamingCallback<S, O>(streamingCallback: undefined | StreamingCallback<S>, fn: () => O): O
```

Executes provided function with streaming callback in async local storage which can be retrieved
using [getStreamingCallback](getStreamingCallback.md).

## Type Parameters

| Type Parameter |
| ------ |
| `S` |
| `O` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `streamingCallback` | `undefined` \| [`StreamingCallback`](../type-aliases/StreamingCallback.md)\<`S`\> |
| `fn` | () => `O` |

## Returns

`O`

## Defined in

core/lib/action-BLstGZbj.d.ts:254
