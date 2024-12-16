[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [middleware](../README.md) / downloadRequestMedia

# Function: downloadRequestMedia()

> **downloadRequestMedia**(`options`?): [`ModelMiddleware`](../../model/type-aliases/ModelMiddleware.md)

Preprocess a GenerateRequest to download referenced http(s) media URLs and
inline them as data URIs.

## Parameters

### options?

#### filter

(`part`) => `boolean`

#### maxBytes

`number`

## Returns

[`ModelMiddleware`](../../model/type-aliases/ModelMiddleware.md)

## Defined in

ai/lib/model/middleware.d.ts:26
