# Class: RankedDocument

Document represents document content along with its metadata that can be embedded, indexed or
retrieved. Each document can contain multiple parts (for example text and an image)

## Extends

- [`Document`](Document.md)

## Implements

- `RankedDocumentData`

## Constructors

### new RankedDocument()

```ts
new RankedDocument(data: {
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
  metadata: {
     score: number;
    } & {};
 }): RankedDocument
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `object` |
| `data.content` | (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[] |
| `data.metadata` | \{ `score`: `number`; \} & \{\} |

#### Returns

[`RankedDocument`](RankedDocument.md)

#### Overrides

[`Document`](Document.md).[`constructor`](Document.md#constructors)

#### Defined in

ai/lib/reranker.d.ts:107

## Properties

| Property | Type | Overrides | Defined in |
| ------ | ------ | ------ | ------ |
| `content` | (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[] | `RankedDocumentData.content` [`Document`](Document.md).`content` | ai/lib/reranker.d.ts:103 |
| `metadata` | \{ `score`: `number`; \} & `Record`\<`string`, `any`\> | `RankedDocumentData.metadata` [`Document`](Document.md).`metadata` | ai/lib/reranker.d.ts:104 |

## Accessors

### media

#### Get Signature

```ts
get media(): null | {
  contentType: string;
  url: string;
}
```

Returns the first media part detected in the document. Useful for extracting
(for example) an image.

##### Returns

`null` \| \{
  `contentType`: `string`;
  `url`: `string`;
 \}

The first detected `media` part in the document.

#### Inherited from

[`Document`](Document.md).[`media`](Document.md#media)

#### Defined in

ai/lib/document.d.ts:193

***

### text

#### Get Signature

```ts
get text(): string
```

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

```ts
score(): number
```

Returns the score of the document.

#### Returns

`number`

The score of the document.

#### Defined in

ai/lib/reranker.d.ts:112

***

### toJSON()

```ts
toJSON(): {
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
}
```

#### Returns

```ts
{
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
}
```

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `content` | (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[] | ai/lib/document.d.ts:149 |
| `metadata`? | `Record`\<`string`, `any`\> | ai/lib/document.d.ts:159 |

#### Inherited from

[`Document`](Document.md).[`toJSON`](Document.md#tojson)

#### Defined in

ai/lib/document.d.ts:197

***

### fromText()

```ts
static fromText(text: string, metadata?: Record<string, any>): Document
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `metadata`? | `Record`\<`string`, `any`\> |

#### Returns

[`Document`](Document.md)

#### Inherited from

[`Document`](Document.md).[`fromText`](Document.md#fromtext)

#### Defined in

ai/lib/document.d.ts:182
