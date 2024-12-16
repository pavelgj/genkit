[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [middleware](../README.md) / AugmentWithContextOptions

# Interface: AugmentWithContextOptions

## Properties

### citationKey?

> `optional` **citationKey**: `null` \| `string`

The metadata key to use for citation reference. Pass `null` to provide no citations.

#### Defined in

ai/lib/model/middleware.d.ts:50

***

### itemTemplate()?

> `optional` **itemTemplate**: (`d`, `options`?) => `string`

A function to render a document into a text part to be included in the message.

#### Parameters

##### d

[`Document`](../../classes/Document.md)

##### options?

[`AugmentWithContextOptions`](AugmentWithContextOptions.md)

#### Returns

`string`

#### Defined in

ai/lib/model/middleware.d.ts:48

***

### preface?

> `optional` **preface**: `null` \| `string`

Preceding text to place before the rendered context documents.

#### Defined in

ai/lib/model/middleware.d.ts:46
