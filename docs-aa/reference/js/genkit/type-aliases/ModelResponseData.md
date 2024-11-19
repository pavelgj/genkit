# Type Alias: ModelResponseData

```ts
type ModelResponseData: {
  custom: unknown;
  finishMessage: string;
  finishReason:   | "length"
     | "unknown"
     | "stop"
     | "blocked"
     | "other";
  latencyMs: number;
  message: {
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
  raw: unknown;
  request: {
     candidates: number;
     config: any;
     docs: {
        content: ({
           media: undefined;
           text: string;
          } | {
           media: {
              contentType: ... | ...;
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
  usage: {
     custom: Record<string, number>;
     inputAudioFiles: number;
     inputCharacters: number;
     inputImages: number;
     inputTokens: number;
     inputVideos: number;
     outputAudioFiles: number;
     outputCharacters: number;
     outputImages: number;
     outputTokens: number;
     outputVideos: number;
     totalTokens: number;
    };
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `custom`? | `unknown` | ai/lib/model.d.ts:3999 |
| `finishMessage`? | `string` | ai/lib/model.d.ts:4000 |
| `finishReason` | \| `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"` | ai/lib/model.d.ts:3934 |
| `latencyMs`? | `number` | ai/lib/model.d.ts:4001 |
| `message`? | \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \} | ai/lib/model.d.ts:3935 |
| `message.content` | ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[] | ai/lib/model.d.ts:3937 |
| `message.metadata`? | `Record`\<`string`, `unknown`\> | ai/lib/model.d.ts:3997 |
| `message.role` | `"model"` \| `"tool"` \| `"system"` \| `"user"` | ai/lib/model.d.ts:3936 |
| `raw`? | `unknown` | ai/lib/model.d.ts:4016 |
| `request`? | \{ `candidates`: `number`; `config`: `any`; `docs`: \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: ... \| ...; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}[]; `messages`: \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}[]; `output`: \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \}; `tools`: \{ `description`: `string`; `inputSchema`: `null` \| `Record`\<`string`, `any`\>; `name`: `string`; `outputSchema`: `null` \| `Record`\<`string`, `any`\>; \}[]; \} | ai/lib/model.d.ts:4017 |
| `request.candidates`? | `number` | ai/lib/model.d.ts:4109 |
| `request.config`? | `any` | ai/lib/model.d.ts:4101 |
| `request.docs`? | \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: ... \| ...; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}[] | ai/lib/model.d.ts:4082 |
| `request.messages` | \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}[] | ai/lib/model.d.ts:4018 |
| `request.output`? | \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \} | ai/lib/model.d.ts:4102 |
| `request.output.constrained`? | `boolean` | ai/lib/model.d.ts:4106 |
| `request.output.contentType`? | `string` | ai/lib/model.d.ts:4103 |
| `request.output.format`? | `string` | ai/lib/model.d.ts:4104 |
| `request.output.instructions`? | `string` | ai/lib/model.d.ts:4107 |
| `request.output.schema`? | `Record`\<`string`, `any`\> | ai/lib/model.d.ts:4105 |
| `request.tools`? | \{ `description`: `string`; `inputSchema`: `null` \| `Record`\<`string`, `any`\>; `name`: `string`; `outputSchema`: `null` \| `Record`\<`string`, `any`\>; \}[] | ai/lib/model.d.ts:4095 |
| `usage`? | \{ `custom`: `Record`\<`string`, `number`\>; `inputAudioFiles`: `number`; `inputCharacters`: `number`; `inputImages`: `number`; `inputTokens`: `number`; `inputVideos`: `number`; `outputAudioFiles`: `number`; `outputCharacters`: `number`; `outputImages`: `number`; `outputTokens`: `number`; `outputVideos`: `number`; `totalTokens`: `number`; \} | ai/lib/model.d.ts:4002 |
| `usage.custom`? | `Record`\<`string`, `number`\> | ai/lib/model.d.ts:4003 |
| `usage.inputAudioFiles`? | `number` | ai/lib/model.d.ts:4013 |
| `usage.inputCharacters`? | `number` | ai/lib/model.d.ts:4007 |
| `usage.inputImages`? | `number` | ai/lib/model.d.ts:4009 |
| `usage.inputTokens`? | `number` | ai/lib/model.d.ts:4004 |
| `usage.inputVideos`? | `number` | ai/lib/model.d.ts:4011 |
| `usage.outputAudioFiles`? | `number` | ai/lib/model.d.ts:4014 |
| `usage.outputCharacters`? | `number` | ai/lib/model.d.ts:4008 |
| `usage.outputImages`? | `number` | ai/lib/model.d.ts:4010 |
| `usage.outputTokens`? | `number` | ai/lib/model.d.ts:4005 |
| `usage.outputVideos`? | `number` | ai/lib/model.d.ts:4012 |
| `usage.totalTokens`? | `number` | ai/lib/model.d.ts:4006 |

## Defined in

ai/lib/model.d.ts:4290
