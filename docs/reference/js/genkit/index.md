# Genkit

The sources for this package are in the main [Genkit](https://github.com/firebase/genkit) repo. Please file issues and pull requests against that repo.

Usage information and reference details can be found in [Genkit documentation](https://firebase.google.com/docs/genkit).

License: Apache 2.0

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [z](namespaces/z/index.md) | - |

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [StatusCodes](enumerations/StatusCodes.md) | Copyright 2024 Google LLC |

## Classes

| Class | Description |
| ------ | ------ |
| [Document](classes/Document.md) | Document represents document content along with its metadata that can be embedded, indexed or retrieved. Each document can contain multiple parts (for example text and an image) |
| [Flow](classes/Flow.md) | - |
| [FlowServer](classes/FlowServer.md) | Flow server exposes registered flows as HTTP endpoints. |
| [GenerateResponse](classes/GenerateResponse.md) | GenerateResponse is the result from a `generate()` call and contains one or more generated candidate messages. |
| [GenerationBlockedError](classes/GenerationBlockedError.md) | A GenerationBlockedError is thrown when a generation is blocked. |
| [GenerationResponseError](classes/GenerationResponseError.md) | Base error class for Genkit errors. |
| [Genkit](classes/Genkit.md) | `Genkit` encapsulates a single Genkit instance including the Registry, [ReflectionServer](classes/ReflectionServer.md), [FlowServer](classes/FlowServer.md), and configuration. |
| [GenkitError](classes/GenkitError.md) | Base error class for Genkit errors. |
| [Message](classes/Message.md) | Message represents a single role's contribution to a generation. Each message can contain multiple parts (for example text and an image), and each generation can contain multiple messages. |
| [RankedDocument](classes/RankedDocument.md) | Document represents document content along with its metadata that can be embedded, indexed or retrieved. Each document can contain multiple parts (for example text and an image) |
| [ReflectionServer](classes/ReflectionServer.md) | Reflection server exposes an API for inspecting and interacting with Genkit in development. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [\_\_RequestWithAuth](interfaces/RequestWithAuth.md) | For express-based flows, req.auth should contain the value to bepassed into the flow context. |
| [ActionMetadata](interfaces/ActionMetadata.md) | Copyright 2024 Google LLC |
| [CallableFlow](interfaces/CallableFlow.md) | Non-streaming flow that can be called directly like a function. |
| [EmbedderParams](interfaces/EmbedderParams.md) | - |
| [EmbedderReference](interfaces/EmbedderReference.md) | - |
| [EvaluatorParams](interfaces/EvaluatorParams.md) | - |
| [EvaluatorReference](interfaces/EvaluatorReference.md) | - |
| [FlowAuthPolicy](interfaces/FlowAuthPolicy.md) | Flow Auth policy. Consumes the authorization context of the flow and performs checks before the flow runs. If this throws, the flow will not be executed. |
| [FlowConfig](interfaces/FlowConfig.md) | Configuration for a flow. |
| [FlowServerOptions](interfaces/FlowServerOptions.md) | Options to configure the flow server. |
| [GenerateOptions](interfaces/GenerateOptions.md) | - |
| [GenerateRequest](interfaces/GenerateRequest.md) | - |
| [GenerateStreamResponse](interfaces/GenerateStreamResponse.md) | - |
| [GenkitOptions](interfaces/GenkitOptions.md) | Options for initializing Genkit. |
| [IndexerParams](interfaces/IndexerParams.md) | - |
| [IndexerReference](interfaces/IndexerReference.md) | - |
| [Middleware](interfaces/Middleware.md) | - |
| [ModelReference](interfaces/ModelReference.md) | - |
| [ModelRequest](interfaces/ModelRequest.md) | ModelRequest represents the parameters that are passed to a model when generating content. |
| [PromptConfig](interfaces/PromptConfig.md) | Configuration for a prompt action. |
| [ReflectionServerOptions](interfaces/ReflectionServerOptions.md) | - |
| [RerankerParams](interfaces/RerankerParams.md) | - |
| [RerankerReference](interfaces/RerankerReference.md) | - |
| [RetrieverParams](interfaces/RetrieverParams.md) | - |
| [RetrieverReference](interfaces/RetrieverReference.md) | - |
| [SessionData](interfaces/SessionData.md) | - |
| [SessionStore](interfaces/SessionStore.md) | Session store persists session data such as state and chat messages. |
| [StreamableFlow](interfaces/StreamableFlow.md) | Streaming flow that can be called directly like a function. |
| [StreamingFlowConfig](interfaces/StreamingFlowConfig.md) | Configuration for a streaming flow. |
| [ToolConfig](interfaces/ToolConfig.md) | Configuration for a tool. |

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [Action](type-aliases/Action.md) | - |
| [DocumentData](type-aliases/DocumentData.md) | - |
| [EmbedderAction](type-aliases/EmbedderAction.md) | - |
| [EmbedderArgument](type-aliases/EmbedderArgument.md) | - |
| [EmbedderInfo](type-aliases/EmbedderInfo.md) | - |
| [Embedding](type-aliases/Embedding.md) | - |
| [EvalResponses](type-aliases/EvalResponses.md) | - |
| [EvaluatorAction](type-aliases/EvaluatorAction.md) | - |
| [EvaluatorInfo](type-aliases/EvaluatorInfo.md) | - |
| [FlowActionInput](type-aliases/FlowActionInput.md) | Used by the flow action. |
| [FlowError](type-aliases/FlowError.md) | - |
| [FlowFn](type-aliases/FlowFn.md) | Function to be executed in the flow. |
| [FlowInvokeEnvelopeMessage](type-aliases/FlowInvokeEnvelopeMessage.md) | Used for flow control. |
| [GenerateRequestData](type-aliases/GenerateRequestData.md) | - |
| [GenerateResponseData](type-aliases/GenerateResponseData.md) | - |
| [GenerateStreamOptions](type-aliases/GenerateStreamOptions.md) | - |
| [GenerationUsage](type-aliases/GenerationUsage.md) | - |
| [IndexerAction](type-aliases/IndexerAction.md) | - |
| [IndexerArgument](type-aliases/IndexerArgument.md) | - |
| [IndexerInfo](type-aliases/IndexerInfo.md) | - |
| [JSONSchema](type-aliases/JSONSchema.md) | Copyright 2024 Google LLC |
| [LlmResponse](type-aliases/LlmResponse.md) | - |
| [LlmStats](type-aliases/LlmStats.md) | - |
| [MediaPart](type-aliases/MediaPart.md) | - |
| [MessageData](type-aliases/MessageData.md) | - |
| [ModelArgument](type-aliases/ModelArgument.md) | - |
| [ModelId](type-aliases/ModelId.md) | Copyright 2024 Google LLC |
| [ModelResponseData](type-aliases/ModelResponseData.md) | - |
| [Part](type-aliases/Part.md) | - |
| [PromptAction](type-aliases/PromptAction.md) | - |
| [PromptFn](type-aliases/PromptFn.md) | Copyright 2024 Google LLC |
| [PromptMetadata](type-aliases/PromptMetadata.md) | Metadata for a prompt. |
| [RerankerAction](type-aliases/RerankerAction.md) | - |
| [RerankerArgument](type-aliases/RerankerArgument.md) | - |
| [RerankerInfo](type-aliases/RerankerInfo.md) | - |
| [RetrieverAction](type-aliases/RetrieverAction.md) | - |
| [RetrieverArgument](type-aliases/RetrieverArgument.md) | - |
| [RetrieverInfo](type-aliases/RetrieverInfo.md) | - |
| [Role](type-aliases/Role.md) | - |
| [RunActionResponse](type-aliases/RunActionResponse.md) | Copyright 2024 Google LLC |
| [SideChannelData](type-aliases/SideChannelData.md) | - |
| [Status](type-aliases/Status.md) | - |
| [StreamingCallback](type-aliases/StreamingCallback.md) | - |
| [TelemetryConfig](type-aliases/TelemetryConfig.md) | Provides a {NodeSDKConfiguration} configuration for use with the Open-Telemetry SDK. This configuration allows plugins to specify how and where open telemetry data will be exported. |
| [Tool](type-aliases/Tool.md) | - |
| [ToolAction](type-aliases/ToolAction.md) | An action with a `tool` type. |
| [ToolArgument](type-aliases/ToolArgument.md) | A reference to a tool in the form of a name, definition, or the action itself. |
| [ToolCall](type-aliases/ToolCall.md) | - |
| [ToolRequestPart](type-aliases/ToolRequestPart.md) | - |
| [ToolResponsePart](type-aliases/ToolResponsePart.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [BaseDataPointSchema](variables/BaseDataPointSchema.md) | - |
| [CommonLlmOptions](variables/CommonLlmOptions.md) | - |
| [DocumentDataSchema](variables/DocumentDataSchema.md) | - |
| [FlowActionInputSchema](variables/FlowActionInputSchema.md) | Used by the flow action. |
| [FlowErrorSchema](variables/FlowErrorSchema.md) | - |
| [FlowInvokeEnvelopeMessageSchema](variables/FlowInvokeEnvelopeMessageSchema.md) | Used for flow control. |
| [FlowResponseSchema](variables/FlowResponseSchema.md) | Copyright 2024 Google LLC |
| [FlowResultSchema](variables/FlowResultSchema.md) | - |
| [GenerationCommonConfigSchema](variables/GenerationCommonConfigSchema.md) | - |
| [GENKIT\_CLIENT\_HEADER](variables/GENKIT_CLIENT_HEADER.md) | - |
| [GENKIT\_VERSION](variables/GENKIT_VERSION.md) | Copyright 2024 Google LLC |
| [JSONSchema7](variables/JSONSchema7.md) | - |
| [LlmResponseSchema](variables/LlmResponseSchema.md) | - |
| [LlmStatsSchema](variables/LlmStatsSchema.md) | - |
| [MessageSchema](variables/MessageSchema.md) | - |
| [ModelIdSchema](variables/ModelIdSchema.md) | Copyright 2024 Google LLC |
| [ModelRequestSchema](variables/ModelRequestSchema.md) | ModelRequestSchema represents the parameters that are passed to a model when generating content. |
| [ModelResponseSchema](variables/ModelResponseSchema.md) | - |
| [PartSchema](variables/PartSchema.md) | - |
| [RoleSchema](variables/RoleSchema.md) | - |
| [RunActionResponseSchema](variables/RunActionResponseSchema.md) | Copyright 2024 Google LLC |
| [StatusSchema](variables/StatusSchema.md) | - |
| [ToolCallSchema](variables/ToolCallSchema.md) | - |
| [ToolSchema](variables/ToolSchema.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [\_\_disableReflectionApi](functions/disableReflectionApi.md) | - |
| [asTool](functions/asTool.md) | Converts an action to a tool action by setting the appropriate metadata. |
| [defineFlow](functions/defineFlow.md) | Defines a non-streaming flow. This operates on the currently active registry. |
| [defineJsonSchema](functions/defineJsonSchema.md) | - |
| [defineSchema](functions/defineSchema.md) | - |
| [defineStreamingFlow](functions/defineStreamingFlow.md) | Defines a streaming flow. This operates on the currently active registry. |
| [deleteUndefinedProps](functions/deleteUndefinedProps.md) | Deletes any properties with `undefined` values in the provided object. Modifies the provided object. |
| [embedderRef](functions/embedderRef.md) | Helper method to configure a [EmbedderReference](interfaces/EmbedderReference.md) to a plugin. |
| [evaluatorRef](functions/evaluatorRef.md) | Helper method to configure a [EvaluatorReference](interfaces/EvaluatorReference.md) to a plugin. |
| [flowMetadataPrefix](functions/flowMetadataPrefix.md) | Adds flow-specific prefix for OpenTelemetry span attributes. |
| [genkit](functions/genkit.md) | Initializes Genkit with a set of options. |
| [getCurrentEnv](functions/getCurrentEnv.md) | Returns the current environment that the app code is running in. |
| [getFlowAuth](functions/getFlowAuth.md) | Gets the auth object from the current context. |
| [getStreamingCallback](functions/getStreamingCallback.md) | Retrieves the [StreamingCallback](type-aliases/StreamingCallback.md) previously set by [runWithStreamingCallback](functions/runWithStreamingCallback.md) |
| [indexerRef](functions/indexerRef.md) | Helper method to configure a [IndexerReference](interfaces/IndexerReference.md) to a plugin. |
| [isDevEnv](functions/isDevEnv.md) | Whether the current environment is `dev`. |
| [loadPromptFile](functions/loadPromptFile.md) | - |
| [rerankerRef](functions/rerankerRef.md) | Helper method to configure a [RerankerReference](interfaces/RerankerReference.md) to a plugin. |
| [retrieverRef](functions/retrieverRef.md) | Helper method to configure a [RetrieverReference](interfaces/RetrieverReference.md) to a plugin. |
| [run](functions/run.md) | - |
| [runWithStreamingCallback](functions/runWithStreamingCallback.md) | Executes provided function with streaming callback in async local storage which can be retrieved using [getStreamingCallback](functions/getStreamingCallback.md). |
| [toGenerateRequest](functions/toGenerateRequest.md) | - |
| [toToolWireFormat](functions/toToolWireFormat.md) | Converts actions to tool definition sent to model inputs. |
