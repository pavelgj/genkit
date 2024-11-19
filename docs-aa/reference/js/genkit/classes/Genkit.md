# Class: Genkit

`Genkit` encapsulates a single Genkit instance including the Registry, [ReflectionServer](ReflectionServer.md), [FlowServer](FlowServer.md), and configuration.

Registry keeps track of actions, flows, tools, and many other components. Reflection server exposes an API to inspect the registry and trigger executions of actions in the registry. Flow server exposes flows as HTTP endpoints for production use.

There may be multiple Genkit instances in a single codebase.

## Constructors

### new Genkit()

```ts
new Genkit(options?: GenkitOptions): Genkit
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | [`GenkitOptions`](../interfaces/GenkitOptions.md) |

#### Returns

[`Genkit`](Genkit.md)

#### Defined in

[genkit/src/genkit.ts:181](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L181)

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `configuredEnvs` | `readonly` | `Set`\<`string`\> | Environments that have been configured (at minimum dev). | [genkit/src/genkit.ts:171](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L171) |
| `options` | `readonly` | [`GenkitOptions`](../interfaces/GenkitOptions.md) | Developer-configured options. | [genkit/src/genkit.ts:169](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L169) |
| `registry` | `readonly` | `Registry` | Registry instance that is exclusively modified by this Genkit instance. | [genkit/src/genkit.ts:173](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L173) |

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

#### chat(options)

```ts
chat<I>(options?: ChatOptions<I, any>): Chat
```

Create a chat session with the provided options.

```ts
const chat = ai.chat({
  system: 'talk like a pirate',
})
let response = await chat.send('tell me a joke')
response = await chat.send('another one')
```

##### Type Parameters

| Type Parameter |
| ------ |
| `I` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `ChatOptions`\<`I`, `any`\> |

##### Returns

`Chat`

##### Defined in

[genkit/src/genkit.ts:895](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L895)

#### chat(preamble, options)

```ts
chat<I>(preamble: ExecutablePrompt<I, ZodTypeAny, ZodTypeAny>, options?: ChatOptions<I, any>): Chat
```

Create a chat session with the provided preabmle.

```ts
const triageAgent = ai.definePrompt({
  system: 'help the user triage a problem',
})
const chat = ai.chat(triageAgent)
const { text } = await chat.send('my phone feels hot');
```

##### Type Parameters

| Type Parameter |
| ------ |
| `I` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `preamble` | `ExecutablePrompt`\<`I`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\> |
| `options`? | `ChatOptions`\<`I`, `any`\> |

##### Returns

`Chat`

##### Defined in

[genkit/src/genkit.ts:908](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L908)

***

### createSession()

```ts
createSession<S>(options?: SessionOptions<S>): Session<S>
```

Create a session for this environment.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `S` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `SessionOptions`\<`S`\> |

#### Returns

`Session`\<`S`\>

#### Defined in

[genkit/src/genkit.ts:948](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L948)

***

### currentSession()

```ts
currentSession<S>(): Session<S>
```

Gets the current session from async local storage.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `S` | `any` |

#### Returns

`Session`\<`S`\>

#### Defined in

[genkit/src/genkit.ts:983](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L983)

***

### defineEmbedder()

```ts
defineEmbedder<ConfigSchema>(options: {
  configSchema: ConfigSchema;
  info: {
     dimensions: number;
     label: string;
     supports: {
        input: ("text" | "image")[];
        multilingual: boolean;
       };
    };
  name: string;
}, runner: EmbedderFn<ConfigSchema>): EmbedderAction<ConfigSchema>
```

Creates embedder model for the provided EmbedderFn model implementation.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `ConfigSchema` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `ConfigSchema`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `object` |
| `options.configSchema`? | `ConfigSchema` |
| `options.info`? | `object` |
| `options.info.dimensions`? | `number` |
| `options.info.label`? | `string` |
| `options.info.supports`? | `object` |
| `options.info.supports.input`? | (`"text"` \| `"image"`)[] |
| `options.info.supports.multilingual`? | `boolean` |
| `options.name` | `string` |
| `runner` | `EmbedderFn`\<`ConfigSchema`\> |

#### Returns

[`EmbedderAction`](../type-aliases/EmbedderAction.md)\<`ConfigSchema`\>

#### Defined in

[genkit/src/genkit.ts:591](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L591)

***

### defineEvaluator()

```ts
defineEvaluator<DataPoint, EvalDataPoint, EvaluatorOptions>(options: {
  configSchema: EvaluatorOptions;
  dataPointType: DataPoint;
  definition: string;
  displayName: string;
  isBilled: boolean;
  name: string;
 }, runner: EvaluatorFn<EvalDataPoint, EvaluatorOptions>): EvaluatorAction<ZodObject<{
  context: ZodOptional<ZodArray<ZodUnknown, "many">>;
  input: ZodUnknown;
  output: ZodOptional<ZodUnknown>;
  reference: ZodOptional<ZodUnknown>;
  testCaseId: ZodOptional<ZodString>;
  traceIds: ZodOptional<ZodArray<ZodString, "many">>;
 }, "strip", ZodTypeAny, {
  context: unknown[];
  input: unknown;
  output: unknown;
  reference: unknown;
  testCaseId: string;
  traceIds: string[];
 }, {
  context: unknown[];
  input: unknown;
  output: unknown;
  reference: unknown;
  testCaseId: string;
  traceIds: string[];
}>, ZodTypeAny>
```

Creates evaluator action for the provided EvaluatorFn implementation.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `DataPoint` *extends* [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, `DataPoint`\> | [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}\> |
| `EvalDataPoint` *extends* [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, \{ `testCaseId`: [`ZodString`](../namespaces/z/classes/ZodString.md); \}\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, `EvalDataPoint`\> | [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, \{ `testCaseId`: [`ZodString`](../namespaces/z/classes/ZodString.md); \}\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}\> |
| `EvaluatorOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `EvaluatorOptions`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `object` |
| `options.configSchema`? | `EvaluatorOptions` |
| `options.dataPointType`? | `DataPoint` |
| `options.definition` | `string` |
| `options.displayName` | `string` |
| `options.isBilled`? | `boolean` |
| `options.name` | `string` |
| `runner` | `EvaluatorFn`\<`EvalDataPoint`, `EvaluatorOptions`\> |

#### Returns

[`EvaluatorAction`](../type-aliases/EvaluatorAction.md)\<[`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{
  `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>;
  `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md);
  `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>;
  `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>;
  `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>;
  `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>;
 \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{
  `context`: `unknown`[];
  `input`: `unknown`;
  `output`: `unknown`;
  `reference`: `unknown`;
  `testCaseId`: `string`;
  `traceIds`: `string`[];
 \}, \{
  `context`: `unknown`[];
  `input`: `unknown`;
  `output`: `unknown`;
  `reference`: `unknown`;
  `testCaseId`: `string`;
  `traceIds`: `string`[];
 \}\>, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\>

#### Defined in

[genkit/src/genkit.ts:569](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L569)

***

### defineFlow()

```ts
defineFlow<I, O>(config: string | FlowConfig<I, O>, fn: FlowFn<I, O, ZodTypeAny>): CallableFlow<I, O>
```

Defines and registers a non-streaming flow.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | `string` \| [`FlowConfig`](../interfaces/FlowConfig.md)\<`I`, `O`\> |
| `fn` | [`FlowFn`](../type-aliases/FlowFn.md)\<`I`, `O`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\> |

#### Returns

[`CallableFlow`](../interfaces/CallableFlow.md)\<`I`, `O`\>

#### Todo

TODO: Improve this documentation (show snippets, etc).

#### Defined in

[genkit/src/genkit.ts:198](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L198)

***

### defineHelper()

```ts
defineHelper(name: string, fn: HelperDelegate): void
```

create a handlebards helper (https://handlebarsjs.com/guide/block-helpers.html) to be used in dotpormpt templates.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `fn` | `HelperDelegate` |

#### Returns

`void`

#### Defined in

[genkit/src/genkit.ts:605](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L605)

***

### defineIndexer()

```ts
defineIndexer<IndexerOptions>(options: {
  configSchema: IndexerOptions;
  embedderInfo: {
     dimensions: number;
     label: string;
     supports: {
        input: ("text" | "image")[];
        multilingual: boolean;
       };
    };
  name: string;
}, runner: IndexerFn<IndexerOptions>): IndexerAction<IndexerOptions>
```

Creates an indexer action for the provided IndexerFn implementation.

#### Type Parameters

| Type Parameter |
| ------ |
| `IndexerOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `IndexerOptions`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `object` |
| `options.configSchema`? | `IndexerOptions` |
| `options.embedderInfo`? | `object` |
| `options.embedderInfo.dimensions`? | `number` |
| `options.embedderInfo.label`? | `string` |
| `options.embedderInfo.supports`? | `object` |
| `options.embedderInfo.supports.input`? | (`"text"` \| `"image"`)[] |
| `options.embedderInfo.supports.multilingual`? | `boolean` |
| `options.name` | `string` |
| `runner` | `IndexerFn`\<`IndexerOptions`\> |

#### Returns

[`IndexerAction`](../type-aliases/IndexerAction.md)\<`IndexerOptions`\>

#### Defined in

[genkit/src/genkit.ts:555](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L555)

***

### defineJsonSchema()

```ts
defineJsonSchema(name: string, jsonSchema: any): any
```

Defines and registers a schema from a JSON schema.

Defined schemas can be referenced by `name` in prompts in place of inline schemas.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `jsonSchema` | `any` |

#### Returns

`any`

#### Defined in

[genkit/src/genkit.ts:255](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L255)

***

### defineModel()

```ts
defineModel<CustomOptionsSchema>(options: DefineModelOptions<CustomOptionsSchema>, runner: (request: GenerateRequest<CustomOptionsSchema>, streamingCallback?: StreamingCallback<{
  aggregated: boolean;
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
  custom: unknown;
  index: number;
 }>) => Promise<{
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
           custom: ... | ...;
           data: unknown;
           media: undefined;
           metadata: ... | ...;
           text: string;
           toolRequest: undefined;
           toolResponse: undefined;
          }
           | {
           custom: ... | ...;
           data: unknown;
           media: {
              contentType: ...;
              url: ...;
             };
           metadata: ... | ...;
           text: undefined;
           toolRequest: undefined;
           toolResponse: undefined;
          }
           | {
           custom: ... | ...;
           data: unknown;
           media: undefined;
           metadata: ... | ...;
           text: undefined;
           toolRequest: {
              input: ...;
              name: ...;
              ref: ...;
             };
           toolResponse: undefined;
          }
           | {
           custom: ... | ...;
           data: unknown;
           media: undefined;
           metadata: ... | ...;
           text: undefined;
           toolRequest: undefined;
           toolResponse: {
              name: ...;
              output: ...;
              ref: ...;
             };
          }
           | {
           custom: ... | ...;
           data: unknown;
           media: undefined;
           metadata: ... | ...;
           text: undefined;
           toolRequest: undefined;
           toolResponse: undefined;
          }
           | {
           custom: Record<..., ...>;
           data: unknown;
           media: undefined;
           metadata: ... | ...;
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
           media: ...;
           text: ...;
          } | {
           media: ...;
           text: ...;
          })[];
        metadata: Record<string, any>;
       }[];
     messages: {
        content: (
           | {
           custom: ... | ...;
           data: unknown;
           media: undefined;
           metadata: ... | ...;
           text: string;
           toolRequest: undefined;
           toolResponse: undefined;
          }
           | {
           custom: ... | ...;
           data: unknown;
           media: {
              contentType: ...;
              url: ...;
             };
           metadata: ... | ...;
           text: undefined;
           toolRequest: undefined;
           toolResponse: undefined;
          }
           | {
           custom: ... | ...;
           data: unknown;
           media: undefined;
           metadata: ... | ...;
           text: undefined;
           toolRequest: {
              input: ...;
              name: ...;
              ref: ...;
             };
           toolResponse: undefined;
          }
           | {
           custom: ... | ...;
           data: unknown;
           media: undefined;
           metadata: ... | ...;
           text: undefined;
           toolRequest: undefined;
           toolResponse: {
              name: ...;
              output: ...;
              ref: ...;
             };
          }
           | {
           custom: ... | ...;
           data: unknown;
           media: undefined;
           metadata: ... | ...;
           text: undefined;
           toolRequest: undefined;
           toolResponse: undefined;
          }
           | {
           custom: Record<..., ...>;
           data: unknown;
           media: undefined;
           metadata: ... | ...;
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
}>): ModelAction<CustomOptionsSchema>
```

Defines a new model and adds it to the registry.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptionsSchema` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptionsSchema`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `DefineModelOptions`\<`CustomOptionsSchema`\> |
| `runner` | (`request`: [`GenerateRequest`](../interfaces/GenerateRequest.md)\<`CustomOptionsSchema`\>, `streamingCallback`?: [`StreamingCallback`](../type-aliases/StreamingCallback.md)\<\{ `aggregated`: `boolean`; `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `custom`: `unknown`; `index`: `number`; \}\>) => `Promise`\<\{ `candidates`: \{ `custom`: `unknown`; `finishMessage`: `string`; `finishReason`: \| `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"`; `index`: `number`; `message`: \{ `content`: ( \| \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: ... \| ...; `data`: `unknown`; `media`: \{ `contentType`: ...; `url`: ...; \}; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: \{ `input`: ...; `name`: ...; `ref`: ...; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: ...; `output`: ...; `ref`: ...; \}; \} \| \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}; `usage`: \{ `custom`: `Record`\<`string`, `number`\>; `inputAudioFiles`: `number`; `inputCharacters`: `number`; `inputImages`: `number`; `inputTokens`: `number`; `inputVideos`: `number`; `outputAudioFiles`: `number`; `outputCharacters`: `number`; `outputImages`: `number`; `outputTokens`: `number`; `outputVideos`: `number`; `totalTokens`: `number`; \}; \}[]; `custom`: `unknown`; `finishMessage`: `string`; `finishReason`: \| `"length"` \| `"unknown"` \| `"stop"` \| `"blocked"` \| `"other"`; `latencyMs`: `number`; `message`: \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}; `raw`: `unknown`; `request`: \{ `candidates`: `number`; `config`: `any`; `docs`: \{ `content`: (\{ `media`: ...; `text`: ...; \} \| \{ `media`: ...; `text`: ...; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}[]; `messages`: \{ `content`: ( \| \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: ... \| ...; `data`: `unknown`; `media`: \{ `contentType`: ...; `url`: ...; \}; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: \{ `input`: ...; `name`: ...; `ref`: ...; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: ...; `output`: ...; `ref`: ...; \}; \} \| \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \}[]; `output`: \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \}; `tools`: \{ `description`: `string`; `inputSchema`: `null` \| `Record`\<`string`, `any`\>; `name`: `string`; `outputSchema`: `null` \| `Record`\<`string`, `any`\>; \}[]; \}; `usage`: \{ `custom`: `Record`\<`string`, `number`\>; `inputAudioFiles`: `number`; `inputCharacters`: `number`; `inputImages`: `number`; `inputTokens`: `number`; `inputVideos`: `number`; `outputAudioFiles`: `number`; `outputCharacters`: `number`; `outputImages`: `number`; `outputTokens`: `number`; `outputVideos`: `number`; `totalTokens`: `number`; \}; \}\> |

#### Returns

`ModelAction`\<`CustomOptionsSchema`\>

#### Defined in

[genkit/src/genkit.ts:262](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L262)

***

### definePartial()

```ts
definePartial(name: string, source: string): void
```

Creates a handlebars partial (https://handlebarsjs.com/guide/partials.html) to be used in dotpormpt templates.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `source` | `string` |

#### Returns

`void`

#### Defined in

[genkit/src/genkit.ts:612](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L612)

***

### definePrompt()

#### definePrompt(options, fn)

```ts
definePrompt<I, O, CustomOptions>(options: PromptMetadata<I, CustomOptions>, fn: PromptFn<I, ZodTypeAny>): ExecutablePrompt<TypeOf<I>, O, CustomOptions>
```

Defines and registers a function-based prompt.

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

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `CustomOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`PromptMetadata`](../type-aliases/PromptMetadata.md)\<`I`, `CustomOptions`\> |
| `fn` | [`PromptFn`](../type-aliases/PromptFn.md)\<`I`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)\> |

##### Returns

`ExecutablePrompt`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>, `O`, `CustomOptions`\>

##### Defined in

[genkit/src/genkit.ts:336](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L336)

#### definePrompt(options, template)

```ts
definePrompt<I, O, CustomOptions>(options: PromptMetadata<I, CustomOptions>, template: string): ExecutablePrompt<TypeOf<I>, O, CustomOptions>
```

Defines and registers a dotprompt.

This is an alternative to defining and importing a .prompt file.

```ts
const hi = ai.definePrompt(
  {
    name: 'hi',
    input: {
      schema: z.object({
        name: z.string(),
      }),
    },
  },
  'hi {{ name }}'
);
const { text } = await hi({ name: 'Genkit' });
```

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `CustomOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`PromptMetadata`](../type-aliases/PromptMetadata.md)\<`I`, `CustomOptions`\> |
| `template` | `string` |

##### Returns

`ExecutablePrompt`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>, `O`, `CustomOptions`\>

##### Defined in

[genkit/src/genkit.ts:365](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L365)

***

### defineReranker()

```ts
defineReranker<OptionsType>(options: {
  configSchema: OptionsType;
  info: {
     label: string;
     supports: {
        media: boolean;
       };
    };
  name: string;
}, runner: RerankerFn<OptionsType>): RerankerAction<OptionsType>
```

Creates a reranker action for the provided RerankerFn implementation.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `OptionsType` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `OptionsType`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `object` |
| `options.configSchema`? | `OptionsType` |
| `options.info`? | `object` |
| `options.info.label`? | `string` |
| `options.info.supports`? | `object` |
| `options.info.supports.media`? | `boolean` |
| `options.name` | `string` |
| `runner` | `RerankerFn`\<`OptionsType`\> |

#### Returns

[`RerankerAction`](../type-aliases/RerankerAction.md)\<`OptionsType`\>

#### Defined in

[genkit/src/genkit.ts:619](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L619)

***

### defineRetriever()

```ts
defineRetriever<OptionsType>(options: {
  configSchema: OptionsType;
  info: {
     label: string;
     supports: {
        media: boolean;
       };
    };
  name: string;
}, runner: RetrieverFn<OptionsType>): RetrieverAction<OptionsType>
```

Creates a retriever action for the provided RetrieverFn implementation.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `OptionsType` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `OptionsType`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `object` |
| `options.configSchema`? | `OptionsType` |
| `options.info`? | `object` |
| `options.info.label`? | `string` |
| `options.info.supports`? | `object` |
| `options.info.supports.media`? | `boolean` |
| `options.name` | `string` |
| `runner` | `RetrieverFn`\<`OptionsType`\> |

#### Returns

[`RetrieverAction`](../type-aliases/RetrieverAction.md)\<`OptionsType`\>

#### Defined in

[genkit/src/genkit.ts:526](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L526)

***

### defineSchema()

```ts
defineSchema<T>(name: string, schema: T): T
```

Defines and registers a schema from a Zod schema.

Defined schemas can be referenced by `name` in prompts in place of inline schemas.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `T`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `schema` | `T` |

#### Returns

`T`

#### Defined in

[genkit/src/genkit.ts:246](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L246)

***

### defineSimpleRetriever()

```ts
defineSimpleRetriever<C, R>(options: SimpleRetrieverOptions<C, R>, handler: (query: Document, config: TypeOf<C>) => Promise<R[]>): RetrieverAction<C>
```

defineSimpleRetriever makes it easy to map existing data into documents that
can be used for prompt augmentation.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `C` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `C`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `R` | `any` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `SimpleRetrieverOptions`\<`C`, `R`\> | Configuration options for the retriever. |
| `handler` | (`query`: [`Document`](Document.md), `config`: [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`C`\>) => `Promise`\<`R`[]\> | A function that queries a datastore and returns items from which to extract documents. |

#### Returns

[`RetrieverAction`](../type-aliases/RetrieverAction.md)\<`C`\>

A Genkit retriever.

#### Defined in

[genkit/src/genkit.ts:545](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L545)

***

### defineStreamingFlow()

```ts
defineStreamingFlow<I, O, S>(config: string | StreamingFlowConfig<I, O, S>, fn: FlowFn<I, O, S>): StreamableFlow<I, O, S>
```

Defines and registers a streaming flow.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `S` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `S`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | `string` \| [`StreamingFlowConfig`](../interfaces/StreamingFlowConfig.md)\<`I`, `O`, `S`\> |
| `fn` | [`FlowFn`](../type-aliases/FlowFn.md)\<`I`, `O`, `S`\> |

#### Returns

[`StreamableFlow`](../interfaces/StreamableFlow.md)\<`I`, `O`, `S`\>

#### Todo

TODO: Improve this documentation (show snippetss, etc).

#### Defined in

[genkit/src/genkit.ts:212](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L212)

***

### defineTool()

```ts
defineTool<I, O>(config: ToolConfig<I, O>, fn: (input: TypeOf<I>) => Promise<TypeOf<O>>): ToolAction<I, O>
```

Defines and registers a tool.

Tools can be passed to models by name or value during `generate` calls to be called automatically based on the prompt and situation.

#### Type Parameters

| Type Parameter |
| ------ |
| `I` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`ToolConfig`](../interfaces/ToolConfig.md)\<`I`, `O`\> |
| `fn` | (`input`: [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>) => `Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\> |

#### Returns

[`ToolAction`](../type-aliases/ToolAction.md)\<`I`, `O`\>

#### Defined in

[genkit/src/genkit.ts:234](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L234)

***

### embed()

```ts
embed<CustomOptions>(params: EmbedderParams<CustomOptions>): Promise<number[]>
```

Embeds the given `content` using the specified `embedder`.

#### Type Parameters

| Type Parameter |
| ------ |
| `CustomOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`EmbedderParams`](../interfaces/EmbedderParams.md)\<`CustomOptions`\> |

#### Returns

`Promise`\<`number`[]\>

#### Defined in

[genkit/src/genkit.ts:633](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L633)

***

### embedMany()

```ts
embedMany<ConfigSchema>(params: {
  content: string[] | {
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
  embedder: EmbedderArgument<ConfigSchema>;
  metadata: Record<string, unknown>;
  options: TypeOf<ConfigSchema>;
}): Promise<EmbeddingBatch>
```

A veneer for interacting with embedder models in bulk.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `ConfigSchema` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `ConfigSchema`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `object` |
| `params.content` | `string`[] \| \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}[] |
| `params.embedder` | [`EmbedderArgument`](../type-aliases/EmbedderArgument.md)\<`ConfigSchema`\> |
| `params.metadata`? | `Record`\<`string`, `unknown`\> |
| `params.options`? | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`ConfigSchema`\> |

#### Returns

`Promise`\<`EmbeddingBatch`\>

#### Defined in

[genkit/src/genkit.ts:642](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L642)

***

### evaluate()

```ts
evaluate<DataPoint, CustomOptions>(params: EvaluatorParams<DataPoint, CustomOptions>): Promise<{
  evaluation: {
     details: objectOutputType<{
        reasoning: ZodOptional<ZodString>;
       }, ZodTypeAny, "passthrough">;
     error: string;
     id: string;
     score: string | number | boolean;
    } | {
     details: objectOutputType<{
        reasoning: ZodOptional<ZodString>;
       }, ZodTypeAny, "passthrough">;
     error: string;
     id: string;
     score: string | number | boolean;
    }[];
  sampleIndex: number;
  spanId: string;
  testCaseId: string;
  traceId: string;
}[]>
```

Evaluates the given `dataset` using the specified `evaluator`.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `DataPoint` *extends* [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, `DataPoint`\> | [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `context`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md), `"many"`\>\>; `input`: [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md); `output`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `reference`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>; `testCaseId`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `traceIds`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}, \{ `context`: `unknown`[]; `input`: `unknown`; `output`: `unknown`; `reference`: `unknown`; `testCaseId`: `string`; `traceIds`: `string`[]; \}\> |
| `CustomOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`EvaluatorParams`](../interfaces/EvaluatorParams.md)\<`DataPoint`, `CustomOptions`\> |

#### Returns

`Promise`\<\{
  `evaluation`: \{
     `details`: [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<\{
        `reasoning`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>;
       \}, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), `"passthrough"`\>;
     `error`: `string`;
     `id`: `string`;
     `score`: `string` \| `number` \| `boolean`;
    \} \| \{
     `details`: [`objectOutputType`](../namespaces/z/type-aliases/objectOutputType.md)\<\{
        `reasoning`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>;
       \}, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), `"passthrough"`\>;
     `error`: `string`;
     `id`: `string`;
     `score`: `string` \| `number` \| `boolean`;
    \}[];
  `sampleIndex`: `number`;
  `spanId`: `string`;
  `testCaseId`: `string`;
  `traceId`: `string`;
 \}[]\>

#### Defined in

[genkit/src/genkit.ts:654](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L654)

***

### generate()

#### generate(strPrompt)

```ts
generate<O>(strPrompt: string): Promise<GenerateResponse<TypeOf<O>>>
```

Make a generate call to the default model with a simple text prompt.

```ts
const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash, // default model
})

const { text } = await ai.generate('hi');
```

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `strPrompt` | `string` |

##### Returns

`Promise`\<[`GenerateResponse`](GenerateResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:700](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L700)

#### generate(parts)

```ts
generate<O>(parts: (
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
})[]): Promise<GenerateResponse<TypeOf<O>>>
```

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

| Type Parameter | Default type |
| ------ | ------ |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parts` | ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[] |

##### Returns

`Promise`\<[`GenerateResponse`](GenerateResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:719](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L719)

#### generate(opts)

```ts
generate<O, CustomOptions>(opts: GenerateOptions<O, CustomOptions> | PromiseLike<GenerateOptions<O, CustomOptions>>): Promise<GenerateResponse<TypeOf<O>>>
```

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

| Type Parameter | Default type |
| ------ | ------ |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `CustomOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> | [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `maxOutputTokens`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `stopSequences`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; `temperature`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `topK`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `topP`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `version`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `maxOutputTokens`: `number`; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}, \{ `maxOutputTokens`: `number`; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | [`GenerateOptions`](../interfaces/GenerateOptions.md)\<`O`, `CustomOptions`\> \| `PromiseLike`\<[`GenerateOptions`](../interfaces/GenerateOptions.md)\<`O`, `CustomOptions`\>\> |

##### Returns

`Promise`\<[`GenerateResponse`](GenerateResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:748](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L748)

***

### generateStream()

#### generateStream(strPrompt)

```ts
generateStream<O>(strPrompt: string): Promise<GenerateStreamResponse<TypeOf<O>>>
```

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

| Type Parameter | Default type |
| ------ | ------ |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `strPrompt` | `string` |

##### Returns

`Promise`\<[`GenerateStreamResponse`](../interfaces/GenerateStreamResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:796](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L796)

#### generateStream(parts)

```ts
generateStream<O>(parts: (
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
})[]): Promise<GenerateStreamResponse<TypeOf<O>>>
```

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

| Type Parameter | Default type |
| ------ | ------ |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parts` | ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[] |

##### Returns

`Promise`\<[`GenerateStreamResponse`](../interfaces/GenerateStreamResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:819](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L819)

#### generateStream(parts)

```ts
generateStream<O, CustomOptions>(parts: GenerateOptions<O, CustomOptions> | PromiseLike<GenerateOptions<O, CustomOptions>>): Promise<GenerateStreamResponse<TypeOf<O>>>
```

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

| Type Parameter | Default type |
| ------ | ------ |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `CustomOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> | [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `maxOutputTokens`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `stopSequences`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), `"many"`\>\>; `temperature`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `topK`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `topP`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNumber`](../namespaces/z/classes/ZodNumber.md)\>; `version`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `maxOutputTokens`: `number`; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}, \{ `maxOutputTokens`: `number`; `stopSequences`: `string`[]; `temperature`: `number`; `topK`: `number`; `topP`: `number`; `version`: `string`; \}\> |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parts` | [`GenerateOptions`](../interfaces/GenerateOptions.md)\<`O`, `CustomOptions`\> \| `PromiseLike`\<[`GenerateOptions`](../interfaces/GenerateOptions.md)\<`O`, `CustomOptions`\>\> |

##### Returns

`Promise`\<[`GenerateStreamResponse`](../interfaces/GenerateStreamResponse.md)\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

##### Defined in

[genkit/src/genkit.ts:852](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L852)

***

### index()

```ts
index<CustomOptions>(params: IndexerParams<CustomOptions>): Promise<void>
```

Indexes `documents` using the provided `indexer`.

#### Type Parameters

| Type Parameter |
| ------ |
| `CustomOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`IndexerParams`](../interfaces/IndexerParams.md)\<`CustomOptions`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[genkit/src/genkit.ts:673](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L673)

***

### loadSession()

```ts
loadSession(sessionId: string, options: SessionOptions<any>): Promise<Session<any>>
```

Loads a session from the store.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |
| `options` | `SessionOptions`\<`any`\> |

#### Returns

`Promise`\<`Session`\<`any`\>\>

#### Defined in

[genkit/src/genkit.ts:964](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L964)

***

### prompt()

```ts
prompt<I, O, CustomOptions>(name: string, options?: {
  variant: string;
}): ExecutablePrompt<TypeOf<I>, O, CustomOptions>
```

Looks up a prompt by `name` and optional `variant`.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `CustomOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `options`? | `object` |
| `options.variant`? | `string` |

#### Returns

`ExecutablePrompt`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>, `O`, `CustomOptions`\>

#### Todo

TODO: Show an example of a name and variant.

#### Defined in

[genkit/src/genkit.ts:277](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L277)

***

### rerank()

```ts
rerank<CustomOptions>(params: RerankerParams<CustomOptions>): Promise<RankedDocument[]>
```

Reranks documents from a [RerankerArgument](../type-aliases/RerankerArgument.md) based on the provided query.

#### Type Parameters

| Type Parameter |
| ------ |
| `CustomOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`RerankerParams`](../interfaces/RerankerParams.md)\<`CustomOptions`\> |

#### Returns

`Promise`\<[`RankedDocument`](RankedDocument.md)[]\>

#### Defined in

[genkit/src/genkit.ts:664](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L664)

***

### retrieve()

```ts
retrieve<CustomOptions>(params: RetrieverParams<CustomOptions>): Promise<Document[]>
```

Retrieves documents from the `retriever` based on the provided `query`.

#### Type Parameters

| Type Parameter |
| ------ |
| `CustomOptions` *extends* [`ZodType`](../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `CustomOptions`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`RetrieverParams`](../interfaces/RetrieverParams.md)\<`CustomOptions`\> |

#### Returns

`Promise`\<[`Document`](Document.md)[]\>

#### Defined in

[genkit/src/genkit.ts:682](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L682)

***

### startFlowServer()

```ts
startFlowServer(options: FlowServerOptions): FlowServer
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`FlowServerOptions`](../interfaces/FlowServerOptions.md) |

#### Returns

[`FlowServer`](FlowServer.md)

#### Defined in

[genkit/src/genkit.ts:1061](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L1061)

***

### stopServers()

```ts
stopServers(): Promise<void>
```

Stops all servers.

#### Returns

`Promise`\<`void`\>

#### Defined in

[genkit/src/genkit.ts:1032](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L1032)
