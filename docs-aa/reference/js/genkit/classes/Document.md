# Class: Document

Document represents document content along with its metadata that can be embedded, indexed or
retrieved. Each document can contain multiple parts (for example text and an image)

## Extended by

- [`RankedDocument`](RankedDocument.md)

## Implements

- [`DocumentData`](../type-aliases/DocumentData.md)

## Constructors

### new Document()

```ts
new Document(data: {
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
 }): Document
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `object` |
| `data.content` | (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[] |
| `data.metadata`? | `Record`\<`string`, `any`\> |

#### Returns

[`Document`](Document.md)

#### Defined in

ai/lib/document.d.ts:181

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `content` | (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: `string`; `url`: `string`; \}; `text`: `undefined`; \})[] | ai/lib/document.d.ts:179 |
| `metadata?` | `Record`\<`string`, `any`\> | ai/lib/document.d.ts:180 |

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

#### Defined in

ai/lib/document.d.ts:187

## Methods

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

#### Defined in

ai/lib/document.d.ts:182
