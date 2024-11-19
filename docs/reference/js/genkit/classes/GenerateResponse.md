# Class: GenerateResponse\<O\>

GenerateResponse is the result from a `generate()` call and contains one or
more generated candidate messages.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `O` | `unknown` |

## Implements

- [`ModelResponseData`](../type-aliases/ModelResponseData.md)

## Constructors

### new GenerateResponse()

```ts
new GenerateResponse<O>(response: {
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
 }, options?: {
  parser: MessageParser<O>;
  request: GenerateRequest<ZodTypeAny>;
}): GenerateResponse<O>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `response` | `object` |
| `response.candidates`? | \{ `custom`: `unknown`; `finishMessage`: `string`; `finishReason`: \| `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"`; `index`: `number`; `message`: \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}; `usage`: \{ `custom`: `Record`\<`string`, `number`\>; `inputAudioFiles`: `number`; `inputCharacters`: `number`; `inputImages`: `number`; `inputTokens`: `number`; `inputVideos`: `number`; `outputAudioFiles`: `number`; `outputCharacters`: `number`; `outputImages`: `number`; `outputTokens`: `number`; `outputVideos`: `number`; `totalTokens`: `number`; \}; \}[] |
| `response.custom`? | `unknown` |
| `response.finishMessage`? | `string` |
| `response.finishReason`? | \| `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"` |
| `response.latencyMs`? | `number` |
| `response.message`? | `object` |
| `response.message.content`? | ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[] |
| `response.message.metadata`? | `Record`\<`string`, `unknown`\> |
| `response.message.role`? | `"model"` \| `"tool"` \| `"system"` \| `"user"` |
| `response.raw`? | `unknown` |
| `response.request`? | `object` |
| `response.request.candidates`? | `number` |
| `response.request.config`? | `any` |
| `response.request.docs`? | \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: ... \| ...; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}[] |
| `response.request.messages`? | \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}[] |
| `response.request.output`? | `object` |
| `response.request.output.constrained`? | `boolean` |
| `response.request.output.contentType`? | `string` |
| `response.request.output.format`? | `string` |
| `response.request.output.instructions`? | `string` |
| `response.request.output.schema`? | `Record`\<`string`, `any`\> |
| `response.request.tools`? | \{ `description`: `string`; `inputSchema`: `null` \| `Record`\<`string`, `any`\>; `name`: `string`; `outputSchema`: `null` \| `Record`\<`string`, `any`\>; \}[] |
| `response.usage`? | `object` |
| `response.usage.custom`? | `Record`\<`string`, `number`\> |
| `response.usage.inputAudioFiles`? | `number` |
| `response.usage.inputCharacters`? | `number` |
| `response.usage.inputImages`? | `number` |
| `response.usage.inputTokens`? | `number` |
| `response.usage.inputVideos`? | `number` |
| `response.usage.outputAudioFiles`? | `number` |
| `response.usage.outputCharacters`? | `number` |
| `response.usage.outputImages`? | `number` |
| `response.usage.outputTokens`? | `number` |
| `response.usage.outputVideos`? | `number` |
| `response.usage.totalTokens`? | `number` |
| `options`? | `object` |
| `options.parser`? | `MessageParser`\<`O`\> |
| `options.request`? | [`GenerateRequest`](../interfaces/GenerateRequest.md)\<[`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\> |

#### Returns

[`GenerateResponse`](GenerateResponse.md)\<`O`\>

#### Defined in

ai/lib/generate/response.d.ts:41

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `custom` | `unknown` | Provider-specific response data. | ai/lib/generate/response.d.ts:36 |
| `finishMessage?` | `string` | Additional information about why the model stopped generating, if any. | ai/lib/generate/response.d.ts:32 |
| `finishReason` | \| `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"` | The reason generation stopped for this request. | ai/lib/generate/response.d.ts:30 |
| `message?` | [`Message`](Message.md)\<`O`\> | The generated message. | ai/lib/generate/response.d.ts:28 |
| `parser?` | `MessageParser`\<`O`\> | The parser for output parsing of this response. | ai/lib/generate/response.d.ts:40 |
| `request?` | [`GenerateRequest`](../interfaces/GenerateRequest.md)\<[`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\> | The request that generated this response. | ai/lib/generate/response.d.ts:38 |
| `usage` | \{ `custom`: `Record`\<`string`, `number`\>; `inputAudioFiles`: `number`; `inputCharacters`: `number`; `inputImages`: `number`; `inputTokens`: `number`; `inputVideos`: `number`; `outputAudioFiles`: `number`; `outputCharacters`: `number`; `outputImages`: `number`; `outputTokens`: `number`; `outputVideos`: `number`; `totalTokens`: `number`; \} | Usage information. | ai/lib/generate/response.d.ts:34 |
| `usage.custom?` | `Record`\<`string`, `number`\> | - | ai/lib/model.d.ts:2277 |
| `usage.inputAudioFiles?` | `number` | - | ai/lib/model.d.ts:2287 |
| `usage.inputCharacters?` | `number` | - | ai/lib/model.d.ts:2281 |
| `usage.inputImages?` | `number` | - | ai/lib/model.d.ts:2283 |
| `usage.inputTokens?` | `number` | - | ai/lib/model.d.ts:2278 |
| `usage.inputVideos?` | `number` | - | ai/lib/model.d.ts:2285 |
| `usage.outputAudioFiles?` | `number` | - | ai/lib/model.d.ts:2288 |
| `usage.outputCharacters?` | `number` | - | ai/lib/model.d.ts:2282 |
| `usage.outputImages?` | `number` | - | ai/lib/model.d.ts:2284 |
| `usage.outputTokens?` | `number` | - | ai/lib/model.d.ts:2279 |
| `usage.outputVideos?` | `number` | - | ai/lib/model.d.ts:2286 |
| `usage.totalTokens?` | `number` | - | ai/lib/model.d.ts:2280 |

## Accessors

### data

#### Get Signature

```ts
get data(): null | O
```

Returns the first detected `data` part of the selected candidate's message.

##### Returns

`null` \| `O`

The first `data` part detected in the candidate (if any).

#### Defined in

ai/lib/generate/response.d.ts:81

***

### media

#### Get Signature

```ts
get media(): null | {
  contentType: string;
  url: string;
}
```

Returns the first detected media part in the selected candidate's message. Useful for
extracting (for example) an image from a generation expected to create one.

##### Returns

`null` \| \{
  `contentType`: `string`;
  `url`: `string`;
 \}

The first detected `media` part in the candidate.

#### Defined in

ai/lib/generate/response.d.ts:72

***

### messages

#### Get Signature

```ts
get messages(): {
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
 }[]
```

Appends the message generated by the selected candidate to the messages already
present in the generation request. The result of this method can be safely
serialized to JSON for persistence in a database.

##### Returns

\{
  `content`: (
     \| \{
     `custom`: `Record`\<`string`, `unknown`\>;
     `data`: `unknown`;
     `media`: `undefined`;
     `metadata`: `Record`\<`string`, `unknown`\>;
     `text`: `string`;
     `toolRequest`: `undefined`;
     `toolResponse`: `undefined`;
    \}
     \| \{
     `custom`: `Record`\<`string`, `unknown`\>;
     `data`: `unknown`;
     `media`: \{
        `contentType`: `string`;
        `url`: `string`;
       \};
     `metadata`: `Record`\<`string`, `unknown`\>;
     `text`: `undefined`;
     `toolRequest`: `undefined`;
     `toolResponse`: `undefined`;
    \}
     \| \{
     `custom`: `Record`\<`string`, `unknown`\>;
     `data`: `unknown`;
     `media`: `undefined`;
     `metadata`: `Record`\<`string`, `unknown`\>;
     `text`: `undefined`;
     `toolRequest`: \{
        `input`: `unknown`;
        `name`: `string`;
        `ref`: `string`;
       \};
     `toolResponse`: `undefined`;
    \}
     \| \{
     `custom`: `Record`\<`string`, `unknown`\>;
     `data`: `unknown`;
     `media`: `undefined`;
     `metadata`: `Record`\<`string`, `unknown`\>;
     `text`: `undefined`;
     `toolRequest`: `undefined`;
     `toolResponse`: \{
        `name`: `string`;
        `output`: `unknown`;
        `ref`: `string`;
       \};
    \}
     \| \{
     `custom`: `Record`\<`string`, `unknown`\>;
     `data`: `unknown`;
     `media`: `undefined`;
     `metadata`: `Record`\<`string`, `unknown`\>;
     `text`: `undefined`;
     `toolRequest`: `undefined`;
     `toolResponse`: `undefined`;
    \}
     \| \{
     `custom`: `Record`\<`string`, `any`\>;
     `data`: `unknown`;
     `media`: `undefined`;
     `metadata`: `Record`\<`string`, `unknown`\>;
     `text`: `undefined`;
     `toolRequest`: `undefined`;
     `toolResponse`: `undefined`;
    \})[];
  `metadata`: `Record`\<`string`, `unknown`\>;
  `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`;
 \}[]

A serializable list of messages compatible with `generate({history})`.

#### Defined in

ai/lib/generate/response.d.ts:95

***

### output

#### Get Signature

```ts
get output(): null | O
```

If the selected candidate's message contains a `data` part, it is returned. Otherwise,
the `output()` method extracts the first valid JSON object or array from the text
contained in the selected candidate's message and returns it.

##### Returns

`null` \| `O`

The structured output contained in the selected candidate.

#### Defined in

ai/lib/generate/response.d.ts:59

***

### raw

#### Get Signature

```ts
get raw(): unknown
```

##### Returns

`unknown`

#### Implementation of

`ModelResponseData.raw`

#### Defined in

ai/lib/generate/response.d.ts:96

***

### text

#### Get Signature

```ts
get text(): string
```

Concatenates all `text` parts present in the candidate's message with no delimiter.

##### Returns

`string`

A string of all concatenated text parts.

#### Defined in

ai/lib/generate/response.d.ts:65

***

### toolRequests

#### Get Signature

```ts
get toolRequests(): {
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
 }[]
```

Returns all tool request found in the candidate.

##### Returns

\{
  `custom`: `Record`\<`string`, `unknown`\>;
  `data`: `unknown`;
  `media`: `undefined`;
  `metadata`: `Record`\<`string`, `unknown`\>;
  `text`: `undefined`;
  `toolRequest`: \{
     `input`: `unknown`;
     `name`: `string`;
     `ref`: `string`;
    \};
  `toolResponse`: `undefined`;
 \}[]

Array of all tool request found in the candidate.

#### Defined in

ai/lib/generate/response.d.ts:87

## Methods

### assertValid()

```ts
assertValid(request?: GenerateRequest<ZodTypeAny>): void
```

Throws an error if the response does not contain valid output.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request`? | [`GenerateRequest`](../interfaces/GenerateRequest.md)\<[`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\> |

#### Returns

`void`

#### Defined in

ai/lib/generate/response.d.ts:49

***

### isValid()

```ts
isValid(request?: GenerateRequest<ZodTypeAny>): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request`? | [`GenerateRequest`](../interfaces/GenerateRequest.md)\<[`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\> |

#### Returns

`boolean`

#### Defined in

ai/lib/generate/response.d.ts:50

***

### toJSON()

```ts
toJSON(): {
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
}
```

#### Returns

```ts
{
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
}
```

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

#### Defined in

ai/lib/generate/response.d.ts:97
