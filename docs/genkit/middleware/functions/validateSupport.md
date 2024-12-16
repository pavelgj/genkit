[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [middleware](../README.md) / validateSupport

# Function: validateSupport()

> **validateSupport**(`options`): [`ModelMiddleware`](../../model/type-aliases/ModelMiddleware.md)

Validates that a GenerateRequest does not include unsupported features.

## Parameters

### options

#### name

`string`

#### supports

\{ `contentType`: `string`[]; `context`: `boolean`; `media`: `boolean`; `multiturn`: `boolean`; `output`: `string`[]; `systemRole`: `boolean`; `tools`: `boolean`; \}

#### supports.contentType

`string`[]

#### supports.context

`boolean`

#### supports.media

`boolean`

#### supports.multiturn

`boolean`

#### supports.output

`string`[]

#### supports.systemRole

`boolean`

#### supports.tools

`boolean`

## Returns

[`ModelMiddleware`](../../model/type-aliases/ModelMiddleware.md)

## Defined in

ai/lib/model/middleware.d.ts:33
