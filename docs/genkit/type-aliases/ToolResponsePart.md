# Type Alias: ToolResponsePart

```ts
type ToolResponsePart: {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: {
     name: string;
     output: unknown;
     ref: string;
    };
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `custom`? | `Record`\<`string`, `unknown`\> | ai/lib/model.d.ts:178 |
| `data`? | `unknown` | ai/lib/model.d.ts:182 |
| `media`? | `undefined` | ai/lib/model.d.ts:180 |
| `metadata`? | `Record`\<`string`, `unknown`\> | ai/lib/model.d.ts:183 |
| `text`? | `undefined` | ai/lib/model.d.ts:179 |
| `toolRequest`? | `undefined` | ai/lib/model.d.ts:181 |
| `toolResponse` | \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \} | ai/lib/model.d.ts:173 |
| `toolResponse.name` | `string` | ai/lib/model.d.ts:174 |
| `toolResponse.output`? | `unknown` | ai/lib/model.d.ts:175 |
| `toolResponse.ref`? | `string` | ai/lib/model.d.ts:176 |

## Defined in

ai/lib/model.d.ts:197
