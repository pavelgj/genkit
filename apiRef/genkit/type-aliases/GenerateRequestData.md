# Type Alias: GenerateRequestData

```ts
type GenerateRequestData: {
  candidates: number;
  config: any;
  docs: {
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
    }[];
  messages: {
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
    }[];
  output: {
     constrained: boolean;
     contentType: string;
     format: string;
     instructions: string;
     schema: Record<string, any>;
    };
  tools: {
     description: string;
     inputSchema: null | Record<string, any>;
     name: string;
     outputSchema: null | Record<string, any>;
    }[];
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `candidates`? | `number` | ai/lib/model.d.ts:2164 |
| `config`? | `any` | ai/lib/model.d.ts:2156 |
| `docs`? | \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}[] | ai/lib/model.d.ts:2137 |
| `messages` | \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}[] | ai/lib/model.d.ts:2073 |
| `output`? | \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \} | ai/lib/model.d.ts:2157 |
| `output.constrained`? | `boolean` | ai/lib/model.d.ts:2161 |
| `output.contentType`? | `string` | ai/lib/model.d.ts:2158 |
| `output.format`? | `string` | ai/lib/model.d.ts:2159 |
| `output.instructions`? | `string` | ai/lib/model.d.ts:2162 |
| `output.schema`? | `Record`\<`string`, `any`\> | ai/lib/model.d.ts:2160 |
| `tools`? | \{ `description`: `string`; `inputSchema`: `null` \| `Record`\<`string`, `any`\>; `name`: `string`; `outputSchema`: `null` \| `Record`\<`string`, `any`\>; \}[] | ai/lib/model.d.ts:2150 |

## Defined in

ai/lib/model.d.ts:2259
