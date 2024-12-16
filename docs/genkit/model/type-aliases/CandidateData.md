[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [model](../README.md) / CandidateData

# Type Alias: ~~CandidateData~~

> **CandidateData**: `object`

## Type declaration

### ~~custom?~~

> `optional` **custom**: `unknown`

### ~~finishMessage?~~

> `optional` **finishMessage**: `string`

### ~~finishReason~~

> **finishReason**: `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"`

### ~~index~~

> **index**: `number`

### ~~message~~

> **message**: `object`

#### message.content

> **message.content**: (\{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]

#### message.metadata?

> `optional` **message.metadata**: `Record`\<`string`, `unknown`\>

#### message.role

> **message.role**: `"model"` \| `"tool"` \| `"system"` \| `"user"`

### ~~usage?~~

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

## Deprecated

All responses now return a single candidate. Only the first candidate will be used if supplied.

## Defined in

ai/lib/model.d.ts:2977
