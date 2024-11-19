# Interface: RetrieverParams\<CustomOptions\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptions` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `options?` | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\> | ai/lib/retriever.d.ts:367 |
| `query` | `string` \| \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \} | ai/lib/retriever.d.ts:366 |
| `retriever` | [`RetrieverArgument`](../type-aliases/RetrieverArgument.md)\<`CustomOptions`\> | ai/lib/retriever.d.ts:365 |
