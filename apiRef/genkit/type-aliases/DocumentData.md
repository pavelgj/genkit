# Type Alias: DocumentData

```ts
type DocumentData: {
  content: ({
     media: undefined;
     text: string;
    } | {
     media: {
        contentType: string;
        url: string;
       };
     text: undefined;
    })[];
  metadata: Record<string, any>;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `content` | (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[] | ai/lib/document.d.ts:149 |
| `metadata`? | `Record`\<`string`, `any`\> | ai/lib/document.d.ts:159 |

## Defined in

ai/lib/document.d.ts:173
