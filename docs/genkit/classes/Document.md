[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / Document

# Class: Document

Document represents document content along with its metadata that can be embedded, indexed or
retrieved. Each document can contain multiple parts (for example text and an image)

## Extended by

- [`RankedDocument`](RankedDocument.md)

## Implements

- [`DocumentData`](../type-aliases/DocumentData.md)

## Constructors

### new Document()

> **new Document**(`data`): [`Document`](Document.md)

#### Parameters

##### data

###### content

(\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]

###### metadata

`Record`\<`string`, `any`\>

#### Returns

[`Document`](Document.md)

#### Defined in

ai/lib/document.d.ts:181

## Properties

### content

> **content**: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]

#### Implementation of

`DocumentData.content`

#### Defined in

ai/lib/document.d.ts:179

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

#### Implementation of

`DocumentData.metadata`

#### Defined in

ai/lib/document.d.ts:180

## Accessors

### media

#### Get Signature

> **get** **media**(): `null` \| \{ `contentType`: `string`; `url`: `string`; \}

Returns the first media part detected in the document. Useful for extracting
(for example) an image.

##### Returns

`null` \| \{ `contentType`: `string`; `url`: `string`; \}

The first detected `media` part in the document.

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

#### Defined in

ai/lib/document.d.ts:187

## Methods

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### content

> **content**: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[]

##### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

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

#### Defined in

ai/lib/document.d.ts:182
