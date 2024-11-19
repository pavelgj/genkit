# Type Alias: MediaPart

```ts
type MediaPart: {
  custom: Record<string, unknown>;
  data: unknown;
  media: {
     contentType: string;
     url: string;
    };
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `custom`? | `Record`\<`string`, `unknown`\> | ai/lib/model.d.ts:75 |
| `data`? | `unknown` | ai/lib/model.d.ts:79 |
| `media` | \{ `contentType`: `string`; `url`: `string`; \} | ai/lib/model.d.ts:71 |
| `media.contentType`? | `string` | ai/lib/model.d.ts:73 |
| `media.url` | `string` | ai/lib/model.d.ts:72 |
| `metadata`? | `Record`\<`string`, `unknown`\> | ai/lib/model.d.ts:80 |
| `text`? | `undefined` | ai/lib/model.d.ts:76 |
| `toolRequest`? | `undefined` | ai/lib/model.d.ts:77 |
| `toolResponse`? | `undefined` | ai/lib/model.d.ts:78 |

## Defined in

ai/lib/model.d.ts:93
