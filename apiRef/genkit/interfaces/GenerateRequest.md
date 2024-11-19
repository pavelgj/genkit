# Interface: GenerateRequest\<CustomOptionsSchema\>

## Extends

- [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<*typeof* `GenerateRequestSchema`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptionsSchema` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `candidates?` | `number` | - | `z.infer.candidates` | ai/lib/model.d.ts:2164 |
| `config?` | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptionsSchema`\> | `z.infer.config` | - | ai/lib/model.d.ts:2261 |
| `docs?` | \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}[] | - | `z.infer.docs` | ai/lib/model.d.ts:2137 |
| `messages` | \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}[] | - | `z.infer.messages` | ai/lib/model.d.ts:2073 |
| `output?` | \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \} | - | `z.infer.output` | ai/lib/model.d.ts:2157 |
| `output.constrained?` | `boolean` | - | - | ai/lib/model.d.ts:2161 |
| `output.contentType?` | `string` | - | - | ai/lib/model.d.ts:2158 |
| `output.format?` | `string` | - | - | ai/lib/model.d.ts:2159 |
| `output.instructions?` | `string` | - | - | ai/lib/model.d.ts:2162 |
| `output.schema?` | `Record`\<`string`, `any`\> | - | - | ai/lib/model.d.ts:2160 |
| `tools?` | \{ `description`: `string`; `inputSchema`: `null` \| `Record`\<`string`, `any`\>; `name`: `string`; `outputSchema`: `null` \| `Record`\<`string`, `any`\>; \}[] | - | `z.infer.tools` | ai/lib/model.d.ts:2150 |
