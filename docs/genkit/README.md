**genkit**

***

[Genkit JS API reference](../README.md) / [genkit](README.md) / /

# /

Main genkit import.

```ts
import { genkit } from 'genkit';
```

## Index

### Namespaces

- [z](namespaces/z/README.md)

### Enumerations

- [StatusCodes](enumerations/StatusCodes.md)

### Classes

- [Document](classes/Document.md)
- [Flow](classes/Flow.md)
- [GenerateResponse](classes/GenerateResponse.md)
- [GenerationBlockedError](classes/GenerationBlockedError.md)
- [GenerationResponseError](classes/GenerationResponseError.md)
- [Genkit](classes/Genkit.md)
- [GenkitError](classes/GenkitError.md)
- [Message](classes/Message.md)
- [RankedDocument](classes/RankedDocument.md)

### Interfaces

- [ActionMetadata](interfaces/ActionMetadata.md)
- [CallableFlow](interfaces/CallableFlow.md)
- [EmbedderParams](interfaces/EmbedderParams.md)
- [EmbedderReference](interfaces/EmbedderReference.md)
- [EvaluatorParams](interfaces/EvaluatorParams.md)
- [EvaluatorReference](interfaces/EvaluatorReference.md)
- [FlowAuthPolicy](interfaces/FlowAuthPolicy.md)
- [FlowConfig](interfaces/FlowConfig.md)
- [FlowServerOptions](interfaces/FlowServerOptions.md)
- [GenerateOptions](interfaces/GenerateOptions.md)
- [GenerateRequest](interfaces/GenerateRequest.md)
- [GenerateStreamResponse](interfaces/GenerateStreamResponse.md)
- [GenkitOptions](interfaces/GenkitOptions.md)
- [IndexerParams](interfaces/IndexerParams.md)
- [IndexerReference](interfaces/IndexerReference.md)
- [ModelReference](interfaces/ModelReference.md)
- [ModelRequest](interfaces/ModelRequest.md)
- [PromptConfig](interfaces/PromptConfig.md)
- [ReflectionServerOptions](interfaces/ReflectionServerOptions.md)
- [RerankerParams](interfaces/RerankerParams.md)
- [RerankerReference](interfaces/RerankerReference.md)
- [RetrieverParams](interfaces/RetrieverParams.md)
- [RetrieverReference](interfaces/RetrieverReference.md)
- [SessionData](interfaces/SessionData.md)
- [SessionStore](interfaces/SessionStore.md)
- [StreamableFlow](interfaces/StreamableFlow.md)
- [StreamingFlowConfig](interfaces/StreamingFlowConfig.md)
- [ToolConfig](interfaces/ToolConfig.md)

### Type Aliases

- [Action](type-aliases/Action.md)
- [DocumentData](type-aliases/DocumentData.md)
- [EmbedderAction](type-aliases/EmbedderAction.md)
- [EmbedderArgument](type-aliases/EmbedderArgument.md)
- [EmbedderInfo](type-aliases/EmbedderInfo.md)
- [Embedding](type-aliases/Embedding.md)
- [EvalResponses](type-aliases/EvalResponses.md)
- [EvaluatorAction](type-aliases/EvaluatorAction.md)
- [EvaluatorInfo](type-aliases/EvaluatorInfo.md)
- [FlowFn](type-aliases/FlowFn.md)
- [GenerateRequestData](type-aliases/GenerateRequestData.md)
- [GenerateResponseData](type-aliases/GenerateResponseData.md)
- [GenerateStreamOptions](type-aliases/GenerateStreamOptions.md)
- [GenerationUsage](type-aliases/GenerationUsage.md)
- [IndexerAction](type-aliases/IndexerAction.md)
- [IndexerArgument](type-aliases/IndexerArgument.md)
- [IndexerInfo](type-aliases/IndexerInfo.md)
- [JSONSchema](type-aliases/JSONSchema.md)
- [LlmResponse](type-aliases/LlmResponse.md)
- [LlmStats](type-aliases/LlmStats.md)
- [MediaPart](type-aliases/MediaPart.md)
- [MessageData](type-aliases/MessageData.md)
- [Middleware](type-aliases/Middleware.md)
- [ModelArgument](type-aliases/ModelArgument.md)
- [ModelResponseData](type-aliases/ModelResponseData.md)
- [Part](type-aliases/Part.md)
- [PromptAction](type-aliases/PromptAction.md)
- [PromptFn](type-aliases/PromptFn.md)
- [PromptMetadata](type-aliases/PromptMetadata.md)
- [RerankerAction](type-aliases/RerankerAction.md)
- [RerankerArgument](type-aliases/RerankerArgument.md)
- [RerankerInfo](type-aliases/RerankerInfo.md)
- [RetrieverAction](type-aliases/RetrieverAction.md)
- [RetrieverArgument](type-aliases/RetrieverArgument.md)
- [RetrieverInfo](type-aliases/RetrieverInfo.md)
- [Role](type-aliases/Role.md)
- [RunActionResponse](type-aliases/RunActionResponse.md)
- [Status](type-aliases/Status.md)
- [StreamingCallback](type-aliases/StreamingCallback.md)
- [TelemetryConfig](type-aliases/TelemetryConfig.md)
- [Tool](type-aliases/Tool.md)
- [ToolAction](type-aliases/ToolAction.md)
- [ToolArgument](type-aliases/ToolArgument.md)
- [ToolCall](type-aliases/ToolCall.md)
- [ToolRequestPart](type-aliases/ToolRequestPart.md)
- [ToolResponsePart](type-aliases/ToolResponsePart.md)

### Variables

- [BaseDataPointSchema](variables/BaseDataPointSchema.md)
- [DocumentDataSchema](variables/DocumentDataSchema.md)
- [GenerationCommonConfigSchema](variables/GenerationCommonConfigSchema.md)
- [GENKIT\_CLIENT\_HEADER](variables/GENKIT_CLIENT_HEADER.md)
- [GENKIT\_VERSION](variables/GENKIT_VERSION.md)
- [JSONSchema7](variables/JSONSchema7.md)
- [LlmResponseSchema](variables/LlmResponseSchema.md)
- [LlmStatsSchema](variables/LlmStatsSchema.md)
- [MessageSchema](variables/MessageSchema.md)
- [ModelRequestSchema](variables/ModelRequestSchema.md)
- [ModelResponseSchema](variables/ModelResponseSchema.md)
- [PartSchema](variables/PartSchema.md)
- [RoleSchema](variables/RoleSchema.md)
- [StatusSchema](variables/StatusSchema.md)
- [ToolCallSchema](variables/ToolCallSchema.md)
- [ToolSchema](variables/ToolSchema.md)

### Functions

- [embedderRef](functions/embedderRef.md)
- [evaluatorRef](functions/evaluatorRef.md)
- [genkit](functions/genkit.md)
- [getFlowAuth](functions/getFlowAuth.md)
- [indexerRef](functions/indexerRef.md)
- [isDevEnv](functions/isDevEnv.md)
- [loadPromptFile](functions/loadPromptFile.md)
- [rerankerRef](functions/rerankerRef.md)
- [retrieverRef](functions/retrieverRef.md)
- [run](functions/run.md)
- [runWithStreamingCallback](functions/runWithStreamingCallback.md)
