[**@genkit-ai/google-cloud**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/google-cloud](../README.md) / GcpTelemetryConfigOptions

# Interface: GcpTelemetryConfigOptions

Configuration options for the Google Cloud plugin.

## Properties

### autoInstrumentation?

> `optional` **autoInstrumentation**: `boolean`

Include OpenTelemetry autoInstrumentation. Defaults to true.

#### Defined in

[types.ts:34](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L34)

***

### autoInstrumentationConfig?

> `optional` **autoInstrumentationConfig**: `InstrumentationConfigMap`

#### Defined in

[types.ts:35](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L35)

***

### credentials?

> `optional` **credentials**: `JWTInput`

Credentials must be provided to export telemetry, if not available through the environment.

#### Defined in

[types.ts:28](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L28)

***

### disableLoggingIO?

> `optional` **disableLoggingIO**: `boolean`

When true, inputs and outputs are not logged to GCP

#### Defined in

[types.ts:49](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L49)

***

### disableMetrics?

> `optional` **disableMetrics**: `boolean`

When true, metrics are not exported.

#### Defined in

[types.ts:43](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L43)

***

### disableTraces?

> `optional` **disableTraces**: `boolean`

When true, traces are not exported.

#### Defined in

[types.ts:46](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L46)

***

### forceDevExport?

> `optional` **forceDevExport**: `boolean`

When true, telemetry data will be exported, even for local runs. Defaults to not exporting development traces.

#### Defined in

[types.ts:52](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L52)

***

### instrumentations?

> `optional` **instrumentations**: `Instrumentation`\<`InstrumentationConfig`\>[]

#### Defined in

[types.ts:36](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L36)

***

### metricExportIntervalMillis?

> `optional` **metricExportIntervalMillis**: `number`

Metric export intervals, minimum is 5000ms.

#### Defined in

[types.ts:39](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L39)

***

### metricExportTimeoutMillis?

> `optional` **metricExportTimeoutMillis**: `number`

#### Defined in

[types.ts:40](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L40)

***

### projectId?

> `optional` **projectId**: `string`

Cloud projectId is required, either passed here, through GCLOUD_PROJECT or application default credentials.

#### Defined in

[types.ts:25](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L25)

***

### sampler?

> `optional` **sampler**: `Sampler`

Trace sampler, defaults to always on which exports all traces.

#### Defined in

[types.ts:31](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/types.ts#L31)
