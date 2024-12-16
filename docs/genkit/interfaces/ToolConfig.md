[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / ToolConfig

# Interface: ToolConfig\<I, O\>

Configuration for a tool.

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Properties

### description

> **description**: `string`

Description of the tool. This is passed to the model to help understand what the tool is used for.

#### Defined in

ai/lib/generate-OYA442tG.d.ts:149

***

### inputJsonSchema?

> `optional` **inputJsonSchema**: `any`

Input JSON schema. Mutually exclusive with `inputSchema`.

#### Defined in

ai/lib/generate-OYA442tG.d.ts:153

***

### inputSchema?

> `optional` **inputSchema**: `I`

Input Zod schema. Mutually exclusive with `inputJsonSchema`.

#### Defined in

ai/lib/generate-OYA442tG.d.ts:151

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

Metadata to be passed to the tool.

#### Defined in

ai/lib/generate-OYA442tG.d.ts:159

***

### name

> **name**: `string`

Unique name of the tool to use as a key in the registry.

#### Defined in

ai/lib/generate-OYA442tG.d.ts:147

***

### outputJsonSchema?

> `optional` **outputJsonSchema**: `any`

Output JSON schema. Mutually exclusive with `outputSchema`.

#### Defined in

ai/lib/generate-OYA442tG.d.ts:157

***

### outputSchema?

> `optional` **outputSchema**: `O`

Output Zod schema. Mutually exclusive with `outputJsonSchema`.

#### Defined in

ai/lib/generate-OYA442tG.d.ts:155
