# Interface: EmbedderReference\<CustomOptions\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptions` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `config?` | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\> | ai/lib/embedder.d.ts:212 |
| `configSchema?` | `CustomOptions` | ai/lib/embedder.d.ts:210 |
| `info?` | \{ `dimensions`: `number`; `label`: `string`; `supports`: \{ `input`: (`"text"` \| `"image"`)[]; `multilingual`: `boolean`; \}; \} | ai/lib/embedder.d.ts:211 |
| `info.dimensions?` | `number` | ai/lib/embedder.d.ts:198 |
| `info.label?` | `string` | ai/lib/embedder.d.ts:193 |
| `info.supports?` | \{ `input`: (`"text"` \| `"image"`)[]; `multilingual`: `boolean`; \} | ai/lib/embedder.d.ts:194 |
| `info.supports.input?` | (`"text"` \| `"image"`)[] | ai/lib/embedder.d.ts:195 |
| `info.supports.multilingual?` | `boolean` | ai/lib/embedder.d.ts:196 |
| `name` | `string` | ai/lib/embedder.d.ts:209 |
| `version?` | `string` | ai/lib/embedder.d.ts:213 |
