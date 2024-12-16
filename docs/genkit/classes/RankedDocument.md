[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / RankedDocument

# Class: RankedDocument

Document represents document content along with its metadata that can be embedded, indexed or
retrieved. Each document can contain multiple parts (for example text and an image)

## Extends

- [`Document`](Document.md)

## Implements

- [`RankedDocumentData`](../reranker/type-aliases/RankedDocumentData.md)

## Constructors

### new RankedDocument()

> **new RankedDocument**(`data`): [`RankedDocument`](RankedDocument.md)

#### Parameters

##### data

###### content

(\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]

###### metadata

`object` & `object`

#### Returns

[`RankedDocument`](RankedDocument.md)

#### Overrides

[`Document`](Document.md).[`constructor`](Document.md#constructors)

#### Defined in

ai/lib/reranker.d.ts:107

## Properties

### content

> **content**: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]

#### Implementation of

`RankedDocumentData.content`

#### Overrides

[`Document`](Document.md).[`content`](Document.md#content-1)

#### Defined in

ai/lib/reranker.d.ts:103

***

### metadata

> **metadata**: `object` & `Record`\<`string`, `any`\>

#### Type declaration

##### score

> **score**: `number`

#### Implementation of

`RankedDocumentData.metadata`

#### Overrides

[`Document`](Document.md).[`metadata`](Document.md#metadata-1)

#### Defined in

ai/lib/reranker.d.ts:104

## Accessors

### media

#### Get Signature

> **get** **media**(): `null` \| \{ `contentType`: `string`; `url`: `string`; \}

Returns the first media part detected in the document. Useful for extracting
(for example) an image.

##### Returns

`null` \| \{ `contentType`: `string`; `url`: `string`; \}

The first detected `media` part in the document.

#### Inherited from

[`Document`](Document.md).[`media`](Document.md#media)

#### Defined in

ai/lib/document.d.ts:193

***

### text

#### Get Signature

> **get** **text**(): `string`

Concatenates all `text` parts present in the document with no delimiter.

##### Returns

`string`

A string of all concatenated text parts.

#### Inherited from

[`Document`](Document.md).[`text`](Document.md#text)

#### Defined in

ai/lib/document.d.ts:187

## Methods

### score()

> **score**(): `number`

Returns the score of the document.

#### Returns

`number`

The score of the document.

#### Defined in

ai/lib/reranker.d.ts:112

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### content

> **content**: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]

##### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

#### Inherited from

[`Document`](Document.md).[`toJSON`](Document.md#tojson)

#### Defined in

ai/lib/document.d.ts:197

***

### fromText()

> `static` **fromText**(`text`, `metadata`?): [`Document`](Document.md)

#### Parameters

##### text

`string`

##### metadata?

`Record`\<`string`, `any`\>

#### Returns

[`Document`](Document.md)

#### Inherited from

[`Document`](Document.md).[`fromText`](Document.md#fromtext)

#### Defined in

ai/lib/document.d.ts:182
