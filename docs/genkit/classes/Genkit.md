[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / Genkit

# Class: Genkit

`Genkit` encapsulates a single Genkit instance including the [Registry](../registry/classes/Registry.md), ReflectionServer, FlowServer, and configuration.

Do not instantiate this class directly. Use [genkit](../functions/genkit.md).

Registry keeps track of actions, flows, tools, and many other components. Reflection server exposes an API to inspect the registry and trigger executions of actions in the registry. Flow server exposes flows as HTTP endpoints for production use.

There may be multiple Genkit instances in a single codebase.

## Implements

- `HasRegistry`

## Constructors

### new Genkit()

> **new Genkit**(`options`?): [`Genkit`](Genkit.md)

#### Parameters

##### options?

[`GenkitOptions`](../interfaces/GenkitOptions.md)

#### Returns

[`Genkit`](Genkit.md)

#### Defined in

[genkit/src/genkit.ts:189](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L189)

## Properties

### configuredEnvs

> `readonly` **configuredEnvs**: `Set`\<`string`\>

Environments that have been configured (at minimum dev).

#### Defined in

[genkit/src/genkit.ts:179](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L179)

***

### flows

> `readonly` **flows**: [`Flow`](Flow.md)\<`any`, `any`, `any`\>[] = `[]`

List of flows that have been registered in this instance.

#### Defined in

[genkit/src/genkit.ts:187](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L187)

***

### options

> `readonly` **options**: [`GenkitOptions`](../interfaces/GenkitOptions.md)

Developer-configured options.

#### Defined in

[genkit/src/genkit.ts:177](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L177)

***

### registry

> `readonly` **registry**: [`Registry`](../registry/classes/Registry.md)

Registry instance that is exclusively modified by this Genkit instance.

#### Implementation of

`HasRegistry.registry`

#### Defined in

[genkit/src/genkit.ts:181](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L181)

## Methods

### chat()

Create a chat session with the provided options.

```ts
const chat = ai.chat({
  system: 'talk like a pirate',
})
let response = await chat.send('tell me a joke')
response = await chat.send('another one')
```

#### Call Signature

> **chat**\<`I`\>(`options`?): `Chat`

Create a chat session with the provided options.

```ts
const chat = ai.chat({
  system: 'talk like a pirate',
})
let response = await chat.send('tell me a joke')
response = await chat.send('another one')
```

##### Type Parameters

• **I**

##### Parameters

###### options?

`ChatOptions`\<`I`, `any`\>

##### Returns

`Chat`

##### Defined in

[genkit/src/genkit.ts:972](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L972)

#### Call Signature

> **chat**\<`I`\>(`preamble`, `options`?): `Chat`

Create a chat session with the provided preabmle.

```ts
const triageAgent = ai.definePrompt({
  system: 'help the user triage a problem',
})
const chat = ai.chat(triageAgent)
const { text } = await chat.send('my phone feels hot');
```

##### Type Parameters

• **I**

##### Parameters

###### preamble

`ExecutablePrompt`\<`I`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\>

###### options?

`ChatOptions`\<`I`, `any`\>

##### Returns

`Chat`

##### Defined in

[genkit/src/genkit.ts:985](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L985)

***

### createSession()

> **createSession**\<`S`\>(`options`?): `Session`\<`S`\>

Create a session for this environment.

#### Type Parameters

• **S** = `any`

#### Parameters

##### options?

`SessionOptions`\<`S`\>

#### Returns

`Session`\<`S`\>

#### Defined in

[genkit/src/genkit.ts:1025](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L1025)

***

### currentSession()

> **currentSession**\<`S`\>(): `Session`\<`S`\>

Gets the current session from async local storage.

#### Type Parameters

• **S** = `any`

#### Returns

`Session`\<`S`\>

#### Defined in

[genkit/src/genkit.ts:1060](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L1060)

***

### defineEmbedder()

> **defineEmbedder**\<`ConfigSchema`\>(`options`, `runner`): [`EmbedderAction`](../type-aliases/EmbedderAction.md)\<`ConfigSchema`\>

Creates embedder model for the provided EmbedderFn model implementation.

#### Type Parameters

• **ConfigSchema** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `ConfigSchema`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

##### options

###### configSchema

`ConfigSchema`

###### info

\{ `dimensions`: `number`; `label`: `string`; `supports`: \{ `input`: (`"text"` \| `"image"`)[]; `multilingual`: `boolean`; \}; \}

###### info.dimensions

`number`

###### info.label

`string`

###### info.supports

\{ `input`: (`"text"` \| `"image"`)[]; `multilingual`: `boolean`; \}

###### info.supports.input

(`"text"` \| `"image"`)[]

###### info.supports.multilingual

`boolean`

###### name

`string`

##### runner

`EmbedderFn`\<`ConfigSchema`\>

#### Returns

[`EmbedderAction`](../type-aliases/EmbedderAction.md)\<`ConfigSchema`\>

#### Defined in

[genkit/src/genkit.ts:668](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L668)

***

### defineEvaluator()

> **defineEvaluator**\<`DataPoint`, `EvalDataPoint`, `EvaluatorOptions`\>(`options`, `runner`): [`EvaluatorAction`](../type-aliases/EvaluatorAction.md)\<[`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}\>, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\>

Creates evaluator action for the provided EvaluatorFn implementation.

#### Type Parameters

• **DataPoint** *extends* [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, `DataPoint`\> = [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}\>

• **EvalDataPoint** *extends* [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, \{ `testCaseId`: [`ZodString`](../namespaces/z/classes/ZodString.md); \}\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, `EvalDataPoint`\> = [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, \{ `testCaseId`: [`ZodString`](../namespaces/z/classes/ZodString.md); \}\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}\>

• **EvaluatorOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `EvaluatorOptions`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

##### options

###### configSchema

`EvaluatorOptions`

###### dataPointType

`DataPoint`

###### definition

`string`

###### displayName

`string`

###### isBilled

`boolean`

###### name

`string`

##### runner

`EvaluatorFn`\<`EvalDataPoint`, `EvaluatorOptions`\>

#### Returns

[`EvaluatorAction`](../type-aliases/EvaluatorAction.md)\<[`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}\>, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\>

#### Defined in

[genkit/src/genkit.ts:646](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L646)

***

### defineFlow()

> **defineFlow**\<`I`, `O`, `S`\>(`config`, `fn`): [`CallableFlow`](../interfaces/CallableFlow.md)\<`I`, `O`, `S`\>

Defines and registers a non-streaming flow.

#### Type Parameters

• **I** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **S** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `S`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

##### config

`string` | [`StreamingFlowConfig`](../interfaces/StreamingFlowConfig.md)\<`I`, `O`, `S`\>

##### fn

[`FlowFn`](../type-aliases/FlowFn.md)\<`I`, `O`, `S`\>

#### Returns

[`CallableFlow`](../interfaces/CallableFlow.md)\<`I`, `O`, `S`\>

#### Todo

TODO: Improve this documentation (show snippets, etc).

#### Defined in

[genkit/src/genkit.ts:206](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L206)

***

### defineFormat()

> **defineFormat**(`options`, `handler`): `object`

Defines and registers a custom model output formatter.

Here's an example of a custom JSON output formatter:

```ts
import { extractJson } from 'genkit/extract';

ai.defineFormat(
  { name: 'customJson' },
  (schema) => {
    let instructions: string | undefined;
    if (schema) {
      instructions = `Output should be in JSON format and conform to the following schema:
\`\`\`
${JSON.stringify(schema)}
\`\`\`
`;
    }
    return {
      parseChunk: (chunk) => extractJson(chunk.accumulatedText),
      parseMessage: (message) => extractJson(message.text),
      instructions,
    };
  }
);

const { output } = await ai.generate({
  prompt: 'Invent a menu item for a pirate themed restaurant.',
  output: { format: 'customJson', schema: MenuItemSchema },
});
```

#### Parameters

##### options

`object` & `object`

##### handler

(`schema`?) => `object`

#### Returns

`object`

##### config

> **config**: `undefined` \| \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \}

##### handler()

> **handler**: (`schema`?) => `object`

###### Parameters

###### schema?

`any`

###### Returns

`object`

###### instructions?

> `optional` **instructions**: `string`

###### parseChunk()?

> `optional` **parseChunk**: (`chunk`, `cursor`?) => `unknown`

###### Parameters

###### chunk

`GenerateResponseChunk`\<`unknown`\>

###### cursor?

`any`

###### Returns

`unknown`

###### parseMessage()

###### Parameters

###### message

[`Message`](Message.md)\<`unknown`\>

###### Returns

`unknown`

#### Defined in

[genkit/src/genkit.ts:295](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L295)

***

### defineHelper()

> **defineHelper**(`name`, `fn`): `void`

create a handlebards helper (https://handlebarsjs.com/guide/block-helpers.html) to be used in dotpormpt templates.

#### Parameters

##### name

`string`

##### fn

`HelperDelegate`

#### Returns

`void`

#### Defined in

[genkit/src/genkit.ts:682](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L682)

***

### defineIndexer()

> **defineIndexer**\<`IndexerOptions`\>(`options`, `runner`): [`IndexerAction`](../type-aliases/IndexerAction.md)\<`IndexerOptions`\>

Creates an indexer action for the provided [IndexerFn](../retriever/type-aliases/IndexerFn.md) implementation.

#### Type Parameters

• **IndexerOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `IndexerOptions`\>

#### Parameters

##### options

###### configSchema

`IndexerOptions`

###### embedderInfo

\{ `dimensions`: `number`; `label`: `string`; `supports`: \{ `input`: (`"text"` \| `"image"`)[]; `multilingual`: `boolean`; \}; \}

###### embedderInfo.dimensions

`number`

###### embedderInfo.label

`string`

###### embedderInfo.supports

\{ `input`: (`"text"` \| `"image"`)[]; `multilingual`: `boolean`; \}

###### embedderInfo.supports.input

(`"text"` \| `"image"`)[]

###### embedderInfo.supports.multilingual

`boolean`

###### name

`string`

##### runner

[`IndexerFn`](../retriever/type-aliases/IndexerFn.md)\<`IndexerOptions`\>

#### Returns

[`IndexerAction`](../type-aliases/IndexerAction.md)\<`IndexerOptions`\>

#### Defined in

[genkit/src/genkit.ts:632](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L632)

***

### defineJsonSchema()

> **defineJsonSchema**(`name`, `jsonSchema`): `any`

Defines and registers a schema from a JSON schema.

Defined schemas can be referenced by `name` in prompts in place of inline schemas.

#### Parameters

##### name

`string`

##### jsonSchema

`any`

#### Returns

`any`

#### Defined in

[genkit/src/genkit.ts:309](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L309)

***

### defineModel()

> **defineModel**\<`CustomOptionsSchema`\>(`options`, `runner`): [`ModelAction`](../model/type-aliases/ModelAction.md)\<`CustomOptionsSchema`\>

Defines a new model and adds it to the registry.

#### Type Parameters

• **CustomOptionsSchema** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptionsSchema`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

##### options

[`DefineModelOptions`](../model/type-aliases/DefineModelOptions.md)\<`CustomOptionsSchema`\>

##### runner

(`request`, `streamingCallback`?) => `Promise`\<\{ `candidates`: `object`[]; `custom`: `unknown`; `finishMessage`: `string`; `finishReason`: `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"`; `latencyMs`: `number`; `message`: \{ `content`: (\{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}; `raw`: `unknown`; `request`: \{ `candidates`: `number`; `config`: `any`; `docs`: `object`[]; `messages`: `object`[]; `output`: \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \}; `tools`: `object`[]; \}; `usage`: \{ `custom`: `Record`\<`string`, `number`\>; `inputAudioFiles`: `number`; `inputCharacters`: `number`; `inputImages`: `number`; `inputTokens`: `number`; `inputVideos`: `number`; `outputAudioFiles`: `number`; `outputCharacters`: `number`; `outputImages`: `number`; `outputTokens`: `number`; `outputVideos`: `number`; `totalTokens`: `number`; \}; \}\>

#### Returns

[`ModelAction`](../model/type-aliases/ModelAction.md)\<`CustomOptionsSchema`\>

#### Defined in

[genkit/src/genkit.ts:316](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L316)

***

### definePartial()

> **definePartial**(`name`, `source`): `void`

Creates a handlebars partial (https://handlebarsjs.com/guide/partials.html) to be used in dotpormpt templates.

#### Parameters

##### name

`string`

##### source

`string`

#### Returns

`void`

#### Defined in

[genkit/src/genkit.ts:689](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L689)

***

### definePrompt()

#### Call Signature

> **definePrompt**\<`I`, `O`, `CustomOptions`\>(`options`, `fn`): `ExecutablePrompt`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>, `O`, `CustomOptions`\>

Defines and registers a prompt based on a function.

This is an alternative to defining and importing a .prompt file, providing
the most advanced control over how the final request to the model is made.

##### Type Parameters

• **I** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **CustomOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

##### Parameters

###### options

[`PromptMetadata`](../type-aliases/PromptMetadata.md)\<`I`, `CustomOptions`\>

Prompt metadata including model, model params,
input/output schemas, etc

###### fn

[`PromptFn`](../type-aliases/PromptFn.md)\<`I`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\>

A function that returns a [GenerateRequest](../interfaces/GenerateRequest.md). Any config
parameters specified by the [GenerateRequest](../interfaces/GenerateRequest.md) will take precedence
over any parameters specified by `options`.

```ts
const hi = ai.definePrompt(
  {
    name: 'hi',
    input: {
      schema: z.object({
        name: z.string(),
      }),
    },
    config: {
      temperature: 1,
    },
  },
  async (input) => {
    return {
      messages: [ { role: 'user', content: [{ text: `hi ${input.name}` }] } ],
    };
  }
);
const { text } = await hi({ name: 'Genkit' });
```

##### Returns

`ExecutablePrompt`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>, `O`, `CustomOptions`\>

##### Defined in

[genkit/src/genkit.ts:399](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L399)

#### Call Signature

> **definePrompt**\<`I`, `O`, `CustomOptions`\>(`options`, `template`): `ExecutablePrompt`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>, `O`, `CustomOptions`\>

Defines and registers a prompt based on a template.

This is an alternative to defining and importing a .prompt file, in
situations where a static definition will not suffice.

##### Type Parameters

• **I** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **CustomOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

##### Parameters

###### options

[`PromptMetadata`](../type-aliases/PromptMetadata.md)\<`I`, `CustomOptions`\>

The first input number

###### template

`string`

##### Returns

`ExecutablePrompt`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>, `O`, `CustomOptions`\>

##### Defined in

[genkit/src/genkit.ts:432](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L432)

***

### defineReranker()

> **defineReranker**\<`OptionsType`\>(`options`, `runner`): [`RerankerAction`](../type-aliases/RerankerAction.md)\<`OptionsType`\>

Creates a reranker action for the provided RerankerFn implementation.

#### Type Parameters

• **OptionsType** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `OptionsType`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

##### options

###### configSchema

`OptionsType`

###### info

\{ `label`: `string`; `supports`: \{ `media`: `boolean`; \}; \}

###### info.label

`string`

###### info.supports

\{ `media`: `boolean`; \}

###### info.supports.media

`boolean`

###### name

`string`

##### runner

`RerankerFn`\<`OptionsType`\>

#### Returns

[`RerankerAction`](../type-aliases/RerankerAction.md)\<`OptionsType`\>

#### Defined in

[genkit/src/genkit.ts:696](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L696)

***

### defineRetriever()

> **defineRetriever**\<`OptionsType`\>(`options`, `runner`): [`RetrieverAction`](../type-aliases/RetrieverAction.md)\<`OptionsType`\>

Creates a retriever action for the provided [RetrieverFn](../retriever/type-aliases/RetrieverFn.md) implementation.

#### Type Parameters

• **OptionsType** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `OptionsType`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

##### options

###### configSchema

`OptionsType`

###### info

\{ `label`: `string`; `supports`: \{ `media`: `boolean`; \}; \}

###### info.label

`string`

###### info.supports

\{ `media`: `boolean`; \}

###### info.supports.media

`boolean`

###### name

`string`

##### runner

[`RetrieverFn`](../retriever/type-aliases/RetrieverFn.md)\<`OptionsType`\>

#### Returns

[`RetrieverAction`](../type-aliases/RetrieverAction.md)\<`OptionsType`\>

#### Defined in

[genkit/src/genkit.ts:603](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L603)

***

### defineSchema()

> **defineSchema**\<`T`\>(`name`, `schema`): `T`

Defines and registers a schema from a Zod schema.

Defined schemas can be referenced by `name` in prompts in place of inline schemas.

#### Type Parameters

• **T** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `T`\>

#### Parameters

##### name

`string`

##### schema

`T`

#### Returns

`T`

#### Defined in

[genkit/src/genkit.ts:258](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L258)

***

### defineSimpleRetriever()

> **defineSimpleRetriever**\<`C`, `R`\>(`options`, `handler`): [`RetrieverAction`](../type-aliases/RetrieverAction.md)\<`C`\>

defineSimpleRetriever makes it easy to map existing data into documents that
can be used for prompt augmentation.

#### Type Parameters

• **C** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `C`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **R** = `any`

#### Parameters

##### options

[`SimpleRetrieverOptions`](../retriever/interfaces/SimpleRetrieverOptions.md)\<`C`, `R`\>

Configuration options for the retriever.

##### handler

(`query`, `config`) => `Promise`\<`R`[]\>

A function that queries a datastore and returns items from which to extract documents.

#### Returns

[`RetrieverAction`](../type-aliases/RetrieverAction.md)\<`C`\>

A Genkit retriever.

#### Defined in

[genkit/src/genkit.ts:622](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L622)

***

### ~~defineStreamingFlow()~~

> **defineStreamingFlow**\<`I`, `O`, `S`\>(`config`, `fn`): [`StreamableFlow`](../interfaces/StreamableFlow.md)\<`I`, `O`, `S`\>

Defines and registers a streaming flow.

#### Type Parameters

• **I** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **S** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `S`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

##### config

`string` | [`StreamingFlowConfig`](../interfaces/StreamingFlowConfig.md)\<`I`, `O`, `S`\>

##### fn

[`FlowFn`](../type-aliases/FlowFn.md)\<`I`, `O`, `S`\>

#### Returns

[`StreamableFlow`](../interfaces/StreamableFlow.md)\<`I`, `O`, `S`\>

#### Deprecated

use [defineFlow](Genkit.md#defineflow)

#### Defined in

[genkit/src/genkit.ts:224](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L224)

***

### defineTool()

> **defineTool**\<`I`, `O`\>(`config`, `fn`): [`ToolAction`](../type-aliases/ToolAction.md)\<`I`, `O`\>

Defines and registers a tool.

Tools can be passed to models by name or value during `generate` calls to be called automatically based on the prompt and situation.

#### Type Parameters

• **I** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\>

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\>

#### Parameters

##### config

[`ToolConfig`](../interfaces/ToolConfig.md)\<`I`, `O`\>

##### fn

(`input`) => `Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>

#### Returns

[`ToolAction`](../type-aliases/ToolAction.md)\<`I`, `O`\>

#### Defined in

[genkit/src/genkit.ts:246](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L246)

***

### embed()

> **embed**\<`CustomOptions`\>(`params`): `Promise`\<`number`[]\>

Embeds the given `content` using the specified `embedder`.

#### Type Parameters

• **CustomOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\>

#### Parameters

##### params

[`EmbedderParams`](../interfaces/EmbedderParams.md)\<`CustomOptions`\>

#### Returns

`Promise`\<`number`[]\>

#### Defined in

[genkit/src/genkit.ts:710](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L710)

***

### embedMany()

> **embedMany**\<`ConfigSchema`\>(`params`): `Promise`\<[`EmbeddingBatch`](../embedder/type-aliases/EmbeddingBatch.md)\>

A veneer for interacting with embedder models in bulk.

#### Type Parameters

• **ConfigSchema** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `ConfigSchema`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

##### params

###### content

`string`[] \| `object`[]

###### embedder

[`EmbedderArgument`](../type-aliases/EmbedderArgument.md)\<`ConfigSchema`\>

###### metadata

`Record`\<`string`, `unknown`\>

###### options

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`ConfigSchema`\>

#### Returns

`Promise`\<[`EmbeddingBatch`](../embedder/type-aliases/EmbeddingBatch.md)\>

#### Defined in

[genkit/src/genkit.ts:719](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L719)

***

### evaluate()

> **evaluate**\<`DataPoint`, `CustomOptions`\>(`params`): `Promise`\<`object`[]\>

Evaluates the given `dataset` using the specified `evaluator`.

#### Type Parameters

• **DataPoint** *extends* [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, `DataPoint`\> = [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}\>

• **CustomOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

##### params

[`EvaluatorParams`](../interfaces/EvaluatorParams.md)\<`DataPoint`, `CustomOptions`\>

#### Returns

`Promise`\<`object`[]\>

#### Defined in

[genkit/src/genkit.ts:731](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L731)

***

### generate()

#### Call Signature

> **generate**\<`O`\>(`strPrompt`): `Promise`\<[`GenerateResponse`](GenerateResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

Make a generate call to the default model with a simple text prompt.

```ts
const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash, // default model
})

const { text } = await ai.generate('hi');
```

##### Type Parameters

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

##### Parameters

###### strPrompt

`string`

##### Returns

`Promise`\<[`GenerateResponse`](GenerateResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:777](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L777)

#### Call Signature

> **generate**\<`O`\>(`parts`): `Promise`\<[`GenerateResponse`](GenerateResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

Make a generate call to the default model with a multipart request.

```ts
const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash, // default model
})

const { text } = await ai.generate([
  { media: {url: 'http://....'} },
  { text: 'describe this image' }
]);
```

##### Type Parameters

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

##### Parameters

###### parts

(\{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]

##### Returns

`Promise`\<[`GenerateResponse`](GenerateResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:796](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L796)

#### Call Signature

> **generate**\<`O`, `CustomOptions`\>(`opts`): `Promise`\<[`GenerateResponse`](GenerateResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

Generate calls a generative model based on the provided prompt and configuration. If
`messages` is provided, the generation will include a conversation history in its
request. If `tools` are provided, the generate method will automatically resolve
tool calls returned from the model unless `returnToolRequests` is set to `true`.

See [GenerateOptions](../interfaces/GenerateOptions.md) for detailed information about available options.

```ts
const ai = genkit({
  plugins: [googleAI()],
})

const { text } = await ai.generate({
  system: 'talk like a pirate',
  prompt: [
    { media: { url: 'http://....' } },
    { text: 'describe this image' }
  ],
  messages: conversationHistory,
  tools: [ userInfoLookup ],
  model: gemini15Flash,
});
```

##### Type Parameters

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **CustomOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> = [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `maxOutputTokens`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `stopSequences`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; `temperature`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `topK`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `topP`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `version`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `maxOutputTokens`: `number`; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}, \{ `maxOutputTokens`: `number`; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}\>

##### Parameters

###### opts

[`GenerateOptions`](../interfaces/GenerateOptions.md)\<`O`, `CustomOptions`\> | `PromiseLike`\<[`GenerateOptions`](../interfaces/GenerateOptions.md)\<`O`, `CustomOptions`\>\>

##### Returns

`Promise`\<[`GenerateResponse`](GenerateResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:825](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L825)

***

### generateStream()

#### Call Signature

> **generateStream**\<`O`\>(`strPrompt`): `Promise`\<[`GenerateStreamResponse`](../interfaces/GenerateStreamResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

Make a streaming generate call to the default model with a simple text prompt.

```ts
const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash, // default model
})

const { response, stream } = await ai.generateStream('hi');
for await (const chunk of stream) {
  console.log(chunk.text);
}
console.log((await response).text);
```

##### Type Parameters

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

##### Parameters

###### strPrompt

`string`

##### Returns

`Promise`\<[`GenerateStreamResponse`](../interfaces/GenerateStreamResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:873](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L873)

#### Call Signature

> **generateStream**\<`O`\>(`parts`): `Promise`\<[`GenerateStreamResponse`](../interfaces/GenerateStreamResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

Make a streaming generate call to the default model with a multipart request.

```ts
const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash, // default model
})

const { response, stream } = await ai.generateStream([
  { media: {url: 'http://....'} },
  { text: 'describe this image' }
]);
for await (const chunk of stream) {
  console.log(chunk.text);
}
console.log((await response).text);
```

##### Type Parameters

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

##### Parameters

###### parts

(\{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]

##### Returns

`Promise`\<[`GenerateStreamResponse`](../interfaces/GenerateStreamResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:896](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L896)

#### Call Signature

> **generateStream**\<`O`, `CustomOptions`\>(`parts`): `Promise`\<[`GenerateStreamResponse`](../interfaces/GenerateStreamResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

Streaming generate calls a generative model based on the provided prompt and configuration. If
`messages` is provided, the generation will include a conversation history in its
request. If `tools` are provided, the generate method will automatically resolve
tool calls returned from the model unless `returnToolRequests` is set to `true`.

See [GenerateOptions](../interfaces/GenerateOptions.md) for detailed information about available options.

```ts
const ai = genkit({
  plugins: [googleAI()],
})

const { response, stream } = await ai.generateStream({
  system: 'talk like a pirate',
  prompt: [
    { media: { url: 'http://....' } },
    { text: 'describe this image' }
  ],
  messages: conversationHistory,
  tools: [ userInfoLookup ],
  model: gemini15Flash,
});
for await (const chunk of stream) {
  console.log(chunk.text);
}
console.log((await response).text);
```

##### Type Parameters

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **CustomOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> = [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `maxOutputTokens`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `stopSequences`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; `temperature`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `topK`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `topP`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `version`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `maxOutputTokens`: `number`; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}, \{ `maxOutputTokens`: `number`; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}\>

##### Parameters

###### parts

[`GenerateOptions`](../interfaces/GenerateOptions.md)\<`O`, `CustomOptions`\> | `PromiseLike`\<[`GenerateOptions`](../interfaces/GenerateOptions.md)\<`O`, `CustomOptions`\>\>

##### Returns

`Promise`\<[`GenerateStreamResponse`](../interfaces/GenerateStreamResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:929](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L929)

***

### index()

> **index**\<`CustomOptions`\>(`params`): `Promise`\<`void`\>

Indexes `documents` using the provided `indexer`.

#### Type Parameters

• **CustomOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\>

#### Parameters

##### params

[`IndexerParams`](../interfaces/IndexerParams.md)\<`CustomOptions`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[genkit/src/genkit.ts:750](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L750)

***

### loadSession()

> **loadSession**(`sessionId`, `options`): `Promise`\<`Session`\<`any`\>\>

Loads a session from the store.

#### Parameters

##### sessionId

`string`

##### options

`SessionOptions`\<`any`\>

#### Returns

`Promise`\<`Session`\<`any`\>\>

#### Defined in

[genkit/src/genkit.ts:1041](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L1041)

***

### prompt()

> **prompt**\<`I`, `O`, `CustomOptions`\>(`name`, `options`?): `ExecutablePrompt`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>, `O`, `CustomOptions`\>

Looks up a prompt by `name` and optional `variant`.

#### Type Parameters

• **I** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **CustomOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

#### Parameters

##### name

`string`

##### options?

###### variant

`string`

#### Returns

`ExecutablePrompt`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>, `O`, `CustomOptions`\>

#### Todo

TODO: Show an example of a name and variant.

#### Defined in

[genkit/src/genkit.ts:331](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L331)

***

### rerank()

> **rerank**\<`CustomOptions`\>(`params`): `Promise`\<[`RankedDocument`](RankedDocument.md)[]\>

Reranks documents from a [RerankerArgument](../type-aliases/RerankerArgument.md) based on the provided query.

#### Type Parameters

• **CustomOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\>

#### Parameters

##### params

[`RerankerParams`](../interfaces/RerankerParams.md)\<`CustomOptions`\>

#### Returns

`Promise`\<[`RankedDocument`](RankedDocument.md)[]\>

#### Defined in

[genkit/src/genkit.ts:741](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L741)

***

### retrieve()

> **retrieve**\<`CustomOptions`\>(`params`): `Promise`\<[`Document`](Document.md)[]\>

Retrieves documents from the `retriever` based on the provided `query`.

#### Type Parameters

• **CustomOptions** *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\>

#### Parameters

##### params

[`RetrieverParams`](../interfaces/RetrieverParams.md)\<`CustomOptions`\>

#### Returns

`Promise`\<[`Document`](Document.md)[]\>

#### Defined in

[genkit/src/genkit.ts:759](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L759)

***

### startFlowServer()

> **startFlowServer**(`options`): `FlowServer`

#### Parameters

##### options

[`FlowServerOptions`](../interfaces/FlowServerOptions.md)

#### Returns

`FlowServer`

#### Defined in

[genkit/src/genkit.ts:1138](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L1138)

***

### stopServers()

> **stopServers**(): `Promise`\<`void`\>

Stops all servers.

#### Returns

`Promise`\<`void`\>

#### Defined in

[genkit/src/genkit.ts:1109](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/genkit/src/genkit.ts#L1109)
