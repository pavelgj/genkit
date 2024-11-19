# Type Alias: GenerateResponseData

```ts
type GenerateResponseData: {
  candidates: {
     custom: unknown;
     finishMessage: string;
     finishReason:   | "length"
        | "unknown"
        | "stop"
        | "blocked"
        | "other";
     index: number;
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
    }[];
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
| `candidates`? | \{ `custom`: `unknown`; `finishMessage`: `string`; `finishReason`: \| `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"`; `index`: `number`; `message`: \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}; `usage`: \{ `custom`: `Record`\<`string`, `number`\>; `inputAudioFiles`: `number`; `inputCharacters`: `number`; `inputImages`: `number`; `inputTokens`: `number`; `inputVideos`: `number`; `outputAudioFiles`: `number`; `outputCharacters`: `number`; `outputImages`: `number`; `outputTokens`: `number`; `outputVideos`: `number`; `totalTokens`: `number`; \}; \}[] | ai/lib/model.d.ts:5970 |
| `custom`? | `unknown` | ai/lib/model.d.ts:5969 |
| `finishMessage`? | `string` | ai/lib/model.d.ts:6055 |
| `finishReason`? | \| `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"` | ai/lib/model.d.ts:6054 |
| `latencyMs`? | `number` | ai/lib/model.d.ts:6056 |
| `message`? | \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \} | ai/lib/model.d.ts:5905 |
| `message.content` | ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[] | ai/lib/model.d.ts:5907 |
| `message.metadata`? | `Record`\<`string`, `unknown`\> | ai/lib/model.d.ts:5967 |
| `message.role` | `"model"` \| `"tool"` \| `"system"` \| `"user"` | ai/lib/model.d.ts:5906 |
| `raw`? | `unknown` | ai/lib/model.d.ts:6071 |
| `request`? | \{ `candidates`: `number`; `config`: `any`; `docs`: \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: ... \| ...; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}[]; `messages`: \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}[]; `output`: \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \}; `tools`: \{ `description`: `string`; `inputSchema`: `null` \| `Record`\<`string`, `any`\>; `name`: `string`; `outputSchema`: `null` \| `Record`\<`string`, `any`\>; \}[]; \} | ai/lib/model.d.ts:6072 |
| `request.candidates`? | `number` | ai/lib/model.d.ts:6164 |
| `request.config`? | `any` | ai/lib/model.d.ts:6156 |
| `request.docs`? | \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: ... \| ...; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}[] | ai/lib/model.d.ts:6137 |
| `request.messages` | \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}[] | ai/lib/model.d.ts:6073 |
| `request.output`? | \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \} | ai/lib/model.d.ts:6157 |
| `request.output.constrained`? | `boolean` | ai/lib/model.d.ts:6161 |
| `request.output.contentType`? | `string` | ai/lib/model.d.ts:6158 |
| `request.output.format`? | `string` | ai/lib/model.d.ts:6159 |
| `request.output.instructions`? | `string` | ai/lib/model.d.ts:6162 |
| `request.output.schema`? | `Record`\<`string`, `any`\> | ai/lib/model.d.ts:6160 |
| `request.tools`? | \{ `description`: `string`; `inputSchema`: `null` \| `Record`\<`string`, `any`\>; `name`: `string`; `outputSchema`: `null` \| `Record`\<`string`, `any`\>; \}[] | ai/lib/model.d.ts:6150 |
| `usage`? | \{ `custom`: `Record`\<`string`, `number`\>; `inputAudioFiles`: `number`; `inputCharacters`: `number`; `inputImages`: `number`; `inputTokens`: `number`; `inputVideos`: `number`; `outputAudioFiles`: `number`; `outputCharacters`: `number`; `outputImages`: `number`; `outputTokens`: `number`; `outputVideos`: `number`; `totalTokens`: `number`; \} | ai/lib/model.d.ts:6057 |
| `usage.custom`? | `Record`\<`string`, `number`\> | ai/lib/model.d.ts:6058 |
| `usage.inputAudioFiles`? | `number` | ai/lib/model.d.ts:6068 |
| `usage.inputCharacters`? | `number` | ai/lib/model.d.ts:6062 |
| `usage.inputImages`? | `number` | ai/lib/model.d.ts:6064 |
| `usage.inputTokens`? | `number` | ai/lib/model.d.ts:6059 |
| `usage.inputVideos`? | `number` | ai/lib/model.d.ts:6066 |
| `usage.outputAudioFiles`? | `number` | ai/lib/model.d.ts:6069 |
| `usage.outputCharacters`? | `number` | ai/lib/model.d.ts:6063 |
| `usage.outputImages`? | `number` | ai/lib/model.d.ts:6065 |
| `usage.outputTokens`? | `number` | ai/lib/model.d.ts:6060 |
| `usage.outputVideos`? | `number` | ai/lib/model.d.ts:6067 |
| `usage.totalTokens`? | `number` | ai/lib/model.d.ts:6061 |

## Defined in

ai/lib/model.d.ts:6429
