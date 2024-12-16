[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / ModelResponseData

# Type Alias: ModelResponseData

> **ModelResponseData**: `object`

Model response data.

## Type declaration

### custom?

> `optional` **custom**: `unknown`

### finishMessage?

> `optional` **finishMessage**: `string`

### finishReason

> **finishReason**: `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"`

### latencyMs?

> `optional` **latencyMs**: `number`

### message?

> `optional` **message**: `object`

#### message.content

> **message.content**: (\{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]

#### message.metadata?

> `optional` **message.metadata**: `Record`\<`string`, `unknown`\>

#### message.role

> **message.role**: `"model"` \| `"tool"` \| `"system"` \| `"user"`

### raw?

> `optional` **raw**: `unknown`

### request?

> `optional` **request**: `object`

#### request.candidates?

> `optional` **request.candidates**: `number`

#### request.config?

> `optional` **request.config**: `any`

#### request.docs?

> `optional` **request.docs**: `object`[]

#### request.messages

> **request.messages**: `object`[]

#### request.output?

> `optional` **request.output**: `object`

#### request.output.constrained?

> `optional` **request.output.constrained**: `boolean`

#### request.output.contentType?

> `optional` **request.output.contentType**: `string`

#### request.output.format?

> `optional` **request.output.format**: `string`

#### request.output.instructions?

> `optional` **request.output.instructions**: `string`

#### request.output.schema?

> `optional` **request.output.schema**: `Record`\<`string`, `any`\>

#### request.tools?

> `optional` **request.tools**: `object`[]

### usage?

> `optional` **usage**: `object`

#### usage.custom?

> `optional` **usage.custom**: `Record`\<`string`, `number`\>

#### usage.inputAudioFiles?

> `optional` **usage.inputAudioFiles**: `number`

#### usage.inputCharacters?

> `optional` **usage.inputCharacters**: `number`

#### usage.inputImages?

> `optional` **usage.inputImages**: `number`

#### usage.inputTokens?

> `optional` **usage.inputTokens**: `number`

#### usage.inputVideos?

> `optional` **usage.inputVideos**: `number`

#### usage.outputAudioFiles?

> `optional` **usage.outputAudioFiles**: `number`

#### usage.outputCharacters?

> `optional` **usage.outputCharacters**: `number`

#### usage.outputImages?

> `optional` **usage.outputImages**: `number`

#### usage.outputTokens?

> `optional` **usage.outputTokens**: `number`

#### usage.outputVideos?

> `optional` **usage.outputVideos**: `number`

#### usage.totalTokens?

> `optional` **usage.totalTokens**: `number`

## Defined in

ai/lib/model.d.ts:4409
