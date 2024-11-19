# Type Alias: MessageData

```ts
type MessageData: {
  content: (
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
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
    }
     | {
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
    }
     | {
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
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    })[];
  metadata: Record<string, unknown>;
  role: "model" | "tool" | "system" | "user";
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `content` | ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[] | ai/lib/model.d.ts:708 |
| `metadata`? | `Record`\<`string`, `unknown`\> | ai/lib/model.d.ts:768 |
| `role` | `"model"` \| `"tool"` \| `"system"` \| `"user"` | ai/lib/model.d.ts:707 |

## Defined in

ai/lib/model.d.ts:833
