[**@genkit-ai/google-cloud**](../README.md)

***

[Genkit JS API reference](../../../README.md) / [@genkit-ai/google-cloud](../README.md) / GcpLogger

# Class: GcpLogger

Provides a logger for exporting Genkit debug logs to GCP Cloud
logs.

## Constructors

### new GcpLogger()

> **new GcpLogger**(`config`): [`GcpLogger`](GcpLogger.md)

#### Parameters

##### config

`GcpTelemetryConfig`

#### Returns

[`GcpLogger`](GcpLogger.md)

#### Defined in

[gcpLogger.ts:34](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/gcpLogger.ts#L34)

## Methods

### getLogger()

> **getLogger**(`env`): `Promise`\<`Logger`\>

#### Parameters

##### env

`string`

#### Returns

`Promise`\<`Logger`\>

#### Defined in

[gcpLogger.ts:36](https://github.com/firebase/genkit/blob/286538acadb0c266800cfa4edc099546226d5af8/js/plugins/google-cloud/src/gcpLogger.ts#L36)
