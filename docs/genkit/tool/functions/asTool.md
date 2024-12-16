[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [tool](../README.md) / asTool

# Function: asTool()

> **asTool**\<`I`, `O`\>(`registry`, `action`): [`ToolAction`](../../type-aliases/ToolAction.md)\<`I`, `O`\>

Converts an action to a tool action by setting the appropriate metadata.

## Type Parameters

• **I** *extends* [`ZodType`](../../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\>

• **O** *extends* [`ZodType`](../../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\>

## Parameters

### registry

[`Registry`](../../registry/classes/Registry.md)

### action

[`Action`](../../type-aliases/Action.md)\<`I`, `O`, [`ZodTypeAny`](../../namespaces/z/type-aliases/ZodTypeAny.md)\>

## Returns

[`ToolAction`](../../type-aliases/ToolAction.md)\<`I`, `O`\>

## Defined in

ai/lib/generate-OYA442tG.d.ts:168
