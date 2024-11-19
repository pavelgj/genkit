# Function: asTool()

```ts
function asTool<I, O>(action: Action<I, O, Record<string, any>>): ToolAction<I, O>
```

Converts an action to a tool action by setting the appropriate metadata.

## Type Parameters

| Type Parameter |
| ------ |
| `I` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | [`Action`](../type-aliases/Action.md)\<`I`, `O`, `Record`\<`string`, `any`\>\> |

## Returns

[`ToolAction`](../type-aliases/ToolAction.md)\<`I`, `O`\>

## Defined in

ai/lib/generate-C8Qor0QX.d.ts:153
