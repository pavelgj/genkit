[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / GenerateResponse

# Class: GenerateResponse\<O\>

GenerateResponse is the result from a `generate()` call and contains one or
more generated candidate messages.

## Type Parameters

• **O** = `unknown`

## Implements

- [`ModelResponseData`](../type-aliases/ModelResponseData.md)

## Constructors

### new GenerateResponse()

> **new GenerateResponse**\<`O`\>(`response`, `options`?): [`GenerateResponse`](GenerateResponse.md)\<`O`\>

#### Parameters

##### response

###### candidates

`object`[]

###### custom

`unknown`

###### finishMessage

`string`

###### finishReason

`"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"`

###### latencyMs

`number`

###### message

\{ `content`: (\{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}

###### message.content

(\{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]

###### message.metadata

`Record`\<`string`, `unknown`\>

###### message.role

`"model"` \| `"tool"` \| `"system"` \| `"user"`

###### raw

`unknown`

###### request

\{ `candidates`: `number`; `config`: `any`; `docs`: `object`[]; `messages`: `object`[]; `output`: \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \}; `tools`: `object`[]; \}

###### request.candidates

`number`

###### request.config

`any`

###### request.docs

`object`[]

###### request.messages

`object`[]

###### request.output

\{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \}

###### request.output.constrained

`boolean`

###### request.output.contentType

`string`

###### request.output.format

`string`

###### request.output.instructions

`string`

###### request.output.schema

`Record`\<`string`, `any`\>

###### request.tools

`object`[]

###### usage

\{ `custom`: `Record`\<`string`, `number`\>; `inputAudioFiles`: `number`; `inputCharacters`: `number`; `inputImages`: `number`; `inputTokens`: `number`; `inputVideos`: `number`; `outputAudioFiles`: `number`; `outputCharacters`: `number`; `outputImages`: `number`; `outputTokens`: `number`; `outputVideos`: `number`; `totalTokens`: `number`; \}

###### usage.custom

`Record`\<`string`, `number`\>

###### usage.inputAudioFiles

`number`

###### usage.inputCharacters

`number`

###### usage.inputImages

`number`

###### usage.inputTokens

`number`

###### usage.inputVideos

`number`

###### usage.outputAudioFiles

`number`

###### usage.outputCharacters

`number`

###### usage.outputImages

`number`

###### usage.outputTokens

`number`

###### usage.outputVideos

`number`

###### usage.totalTokens

`number`

##### options?

###### parser

`MessageParser`\<`O`\>

###### request

[`GenerateRequest`](../interfaces/GenerateRequest.md)\<[`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\>

#### Returns

[`GenerateResponse`](GenerateResponse.md)\<`O`\>

#### Defined in

ai/lib/generate/response.d.ts:41

## Properties

### custom

> **custom**: `unknown`

Provider-specific response data.

#### Implementation of

`ModelResponseData.custom`

#### Defined in

ai/lib/generate/response.d.ts:36

***

### finishMessage?

> `optional` **finishMessage**: `string`

Additional information about why the model stopped generating, if any.

#### Implementation of

`ModelResponseData.finishMessage`

#### Defined in

ai/lib/generate/response.d.ts:32

***

### finishReason

> **finishReason**: `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"`

The reason generation stopped for this request.

#### Implementation of

`ModelResponseData.finishReason`

#### Defined in

ai/lib/generate/response.d.ts:30

***

### message?

> `optional` **message**: [`Message`](Message.md)\<`O`\>

The generated message.

#### Implementation of

`ModelResponseData.message`

#### Defined in

ai/lib/generate/response.d.ts:28

***

### parser?

> `optional` **parser**: `MessageParser`\<`O`\>

The parser for output parsing of this response.

#### Defined in

ai/lib/generate/response.d.ts:40

***

### request?

> `optional` **request**: [`GenerateRequest`](../interfaces/GenerateRequest.md)\<[`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\>

The request that generated this response.

#### Implementation of

`ModelResponseData.request`

#### Defined in

ai/lib/generate/response.d.ts:38

***

### usage

> **usage**: `object`

Usage information.

#### custom?

> `optional` **custom**: `Record`\<`string`, `number`\>

#### inputAudioFiles?

> `optional` **inputAudioFiles**: `number`

#### inputCharacters?

> `optional` **inputCharacters**: `number`

#### inputImages?

> `optional` **inputImages**: `number`

#### inputTokens?

> `optional` **inputTokens**: `number`

#### inputVideos?

> `optional` **inputVideos**: `number`

#### outputAudioFiles?

> `optional` **outputAudioFiles**: `number`

#### outputCharacters?

> `optional` **outputCharacters**: `number`

#### outputImages?

> `optional` **outputImages**: `number`

#### outputTokens?

> `optional` **outputTokens**: `number`

#### outputVideos?

> `optional` **outputVideos**: `number`

#### totalTokens?

> `optional` **totalTokens**: `number`

#### Implementation of

`ModelResponseData.usage`

#### Defined in

ai/lib/generate/response.d.ts:34

## Accessors

### data

#### Get Signature

> **get** **data**(): `null` \| `O`

Returns the first detected `data` part of the selected candidate's message.

##### Returns

`null` \| `O`

The first `data` part detected in the candidate (if any).

#### Defined in

ai/lib/generate/response.d.ts:81

***

### media

#### Get Signature

> **get** **media**(): `null` \| \{ `contentType`: `string`; `url`: `string`; \}

Returns the first detected media part in the selected candidate's message. Useful for
extracting (for example) an image from a generation expected to create one.

##### Returns

`null` \| \{ `contentType`: `string`; `url`: `string`; \}

The first detected `media` part in the candidate.

#### Defined in

ai/lib/generate/response.d.ts:72

***

### messages

#### Get Signature

> **get** **messages**(): `object`[]

Appends the message generated by the selected candidate to the messages already
present in the generation request. The result of this method can be safely
serialized to JSON for persistence in a database.

##### Returns

`object`[]

A serializable list of messages compatible with `generate({history})`.

#### Defined in

ai/lib/generate/response.d.ts:95

***

### output

#### Get Signature

> **get** **output**(): `null` \| `O`

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

> **get** **raw**(): `unknown`

##### Returns

`unknown`

#### Implementation of

`ModelResponseData.raw`

#### Defined in

ai/lib/generate/response.d.ts:96

***

### text

#### Get Signature

> **get** **text**(): `string`

Concatenates all `text` parts present in the candidate's message with no delimiter.

##### Returns

`string`

A string of all concatenated text parts.

#### Defined in

ai/lib/generate/response.d.ts:65

***

### toolRequests

#### Get Signature

> **get** **toolRequests**(): `object`[]

Returns all tool request found in the candidate.

##### Returns

`object`[]

Array of all tool request found in the candidate.

#### Defined in

ai/lib/generate/response.d.ts:87

## Methods

### assertValid()

> **assertValid**(`request`?): `void`

Throws an error if the response does not contain valid output.

#### Parameters

##### request?

[`GenerateRequest`](../interfaces/GenerateRequest.md)\<[`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\>

#### Returns

`void`

#### Defined in

ai/lib/generate/response.d.ts:49

***

### isValid()

> **isValid**(`request`?): `boolean`

#### Parameters

##### request?

[`GenerateRequest`](../interfaces/GenerateRequest.md)\<[`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\>

#### Returns

`boolean`

#### Defined in

ai/lib/generate/response.d.ts:50

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### custom?

> `optional` **custom**: `unknown`

##### finishMessage?

> `optional` **finishMessage**: `string`

##### finishReason

> **finishReason**: `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"`

##### latencyMs?

> `optional` **latencyMs**: `number`

##### message?

> `optional` **message**: `object`

###### message.content

> **message.content**: (\{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]

###### message.metadata?

> `optional` **message.metadata**: `Record`\<`string`, `unknown`\>

###### message.role

> **message.role**: `"model"` \| `"tool"` \| `"system"` \| `"user"`

##### raw?

> `optional` **raw**: `unknown`

##### request?

> `optional` **request**: `object`

###### request.candidates?

> `optional` **request.candidates**: `number`

###### request.config?

> `optional` **request.config**: `any`

###### request.docs?

> `optional` **request.docs**: `object`[]

###### request.messages

> **request.messages**: `object`[]

###### request.output?

> `optional` **request.output**: `object`

###### request.output.constrained?

> `optional` **request.output.constrained**: `boolean`

###### request.output.contentType?

> `optional` **request.output.contentType**: `string`

###### request.output.format?

> `optional` **request.output.format**: `string`

###### request.output.instructions?

> `optional` **request.output.instructions**: `string`

###### request.output.schema?

> `optional` **request.output.schema**: `Record`\<`string`, `any`\>

###### request.tools?

> `optional` **request.tools**: `object`[]

##### usage?

> `optional` **usage**: `object`

###### usage.custom?

> `optional` **usage.custom**: `Record`\<`string`, `number`\>

###### usage.inputAudioFiles?

> `optional` **usage.inputAudioFiles**: `number`

###### usage.inputCharacters?

> `optional` **usage.inputCharacters**: `number`

###### usage.inputImages?

> `optional` **usage.inputImages**: `number`

###### usage.inputTokens?

> `optional` **usage.inputTokens**: `number`

###### usage.inputVideos?

> `optional` **usage.inputVideos**: `number`

###### usage.outputAudioFiles?

> `optional` **usage.outputAudioFiles**: `number`

###### usage.outputCharacters?

> `optional` **usage.outputCharacters**: `number`

###### usage.outputImages?

> `optional` **usage.outputImages**: `number`

###### usage.outputTokens?

> `optional` **usage.outputTokens**: `number`

###### usage.outputVideos?

> `optional` **usage.outputVideos**: `number`

###### usage.totalTokens?

> `optional` **usage.totalTokens**: `number`

#### Defined in

ai/lib/generate/response.d.ts:97
