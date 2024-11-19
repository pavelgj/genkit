# Function: toToolWireFormat()

```ts
function toToolWireFormat(actions?: Action<any, any, Record<string, any>>[]): TypeOf<typeof ToolSchema>[] | undefined
```

Converts actions to tool definition sent to model inputs.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `actions`? | [`Action`](../type-aliases/Action.md)\<`any`, `any`, `Record`\<`string`, `any`\>\>[] |

## Returns

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<*typeof* [`ToolSchema`](../variables/ToolSchema.md)\>[] \| `undefined`

## Defined in

ai/lib/types.d.ts:121
