# Interface: ToolConfig\<I, O\>

Configuration for a tool.

## Type Parameters

| Type Parameter |
| ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `description` | `string` | Description of the tool. This is passed to the model to help understand what the tool is used for. | ai/lib/generate-C8Qor0QX.d.ts:134 |
| `inputJsonSchema?` | `any` | Input JSON schema. Mutually exclusive with `inputSchema`. | ai/lib/generate-C8Qor0QX.d.ts:138 |
| `inputSchema?` | `I` | Input Zod schema. Mutually exclusive with `inputJsonSchema`. | ai/lib/generate-C8Qor0QX.d.ts:136 |
| `metadata?` | `Record`\<`string`, `any`\> | Metadata to be passed to the tool. | ai/lib/generate-C8Qor0QX.d.ts:144 |
| `name` | `string` | Unique name of the tool to use as a key in the registry. | ai/lib/generate-C8Qor0QX.d.ts:132 |
| `outputJsonSchema?` | `any` | Output JSON schema. Mutually exclusive with `outputSchema`. | ai/lib/generate-C8Qor0QX.d.ts:142 |
| `outputSchema?` | `O` | Output Zod schema. Mutually exclusive with `outputJsonSchema`. | ai/lib/generate-C8Qor0QX.d.ts:140 |
