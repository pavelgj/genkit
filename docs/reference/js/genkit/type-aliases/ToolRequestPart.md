# Type Alias: ToolRequestPart

```ts
type ToolRequestPart: {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: {
     input: unknown;
     name: string;
     ref: string;
    };
  toolResponse: undefined;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `custom`? | `Record`\<`string`, `unknown`\> | ai/lib/model.d.ts:126 |
| `data`? | `unknown` | ai/lib/model.d.ts:130 |
| `media`? | `undefined` | ai/lib/model.d.ts:128 |
| `metadata`? | `Record`\<`string`, `unknown`\> | ai/lib/model.d.ts:131 |
| `text`? | `undefined` | ai/lib/model.d.ts:127 |
| `toolRequest` | \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \} | ai/lib/model.d.ts:121 |
| `toolRequest.input`? | `unknown` | ai/lib/model.d.ts:124 |
| `toolRequest.name` | `string` | ai/lib/model.d.ts:122 |
| `toolRequest.ref`? | `string` | ai/lib/model.d.ts:123 |
| `toolResponse`? | `undefined` | ai/lib/model.d.ts:129 |

## Defined in

ai/lib/model.d.ts:145
