# Interface: IndexerParams\<CustomOptions\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptions` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `documents` | \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}[] | ai/lib/retriever.d.ts:377 |
| `indexer` | [`IndexerArgument`](../type-aliases/IndexerArgument.md)\<`CustomOptions`\> | ai/lib/retriever.d.ts:376 |
| `options?` | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\> | ai/lib/retriever.d.ts:378 |
