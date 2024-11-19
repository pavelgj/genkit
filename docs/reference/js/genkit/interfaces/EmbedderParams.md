# Interface: EmbedderParams\<CustomOptions\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptions` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `content` | `string` \| \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \} | ai/lib/embedder.d.ts:148 |
| `embedder` | [`EmbedderArgument`](../type-aliases/EmbedderArgument.md)\<`CustomOptions`\> | ai/lib/embedder.d.ts:147 |
| `metadata?` | `Record`\<`string`, `unknown`\> | ai/lib/embedder.d.ts:149 |
| `options?` | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\> | ai/lib/embedder.d.ts:150 |
