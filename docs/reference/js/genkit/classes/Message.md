# Class: Message\<T\>

Message represents a single role's contribution to a generation. Each message
can contain multiple parts (for example text and an image), and each generation
can contain multiple messages.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Implements

- [`MessageData`](../type-aliases/MessageData.md)

## Constructors

### new Message()

```ts
new Message<T>(message: {
  content: (
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: {
        contentType: string;
        url: string;
       };
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: {
        input: unknown;
        name: string;
        ref: string;
       };
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: {
        name: string;
        output: unknown;
        ref: string;
       };
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    })[];
  metadata: Record<string, unknown>;
  role: "model" | "tool" | "system" | "user";
 }, options?: {
  parser: MessageParser<T>;
}): Message<T>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `object` |
| `message.content` | ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[] |
| `message.metadata`? | `Record`\<`string`, `unknown`\> |
| `message.role`? | `"model"` \| `"tool"` \| `"system"` \| `"user"` |
| `options`? | `object` |
| `options.parser`? | `MessageParser`\<`T`\> |

#### Returns

[`Message`](Message.md)\<`T`\>

#### Defined in

ai/lib/message.d.ts:42

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `content` | ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[] | ai/lib/message.d.ts:31 |
| `metadata?` | `Record`\<`string`, `any`\> | ai/lib/message.d.ts:32 |
| `parser?` | `MessageParser`\<`T`\> | ai/lib/message.d.ts:33 |
| `role` | `"model"` \| `"tool"` \| `"system"` \| `"user"` | ai/lib/message.d.ts:30 |

## Accessors

### data

#### Get Signature

```ts
get data(): null | T
```

Returns the first detected `data` part of a message.

##### Returns

`null` \| `T`

The first `data` part detected in the message (if any).

#### Defined in

ai/lib/message.d.ts:72

***

### media

#### Get Signature

```ts
get media(): null | {
  contentType: string;
  url: string;
}
```

Returns the first media part detected in the message. Useful for extracting
(for example) an image from a generation expected to create one.

##### Returns

`null` \| \{
  `contentType`: `string`;
  `url`: `string`;
 \}

The first detected `media` part in the message.

#### Defined in

ai/lib/message.d.ts:64

***

### output

#### Get Signature

```ts
get output(): T
```

Attempts to parse the content of the message according to the supplied
output parser. Without a parser, returns `data` contained in the message or
tries to parse JSON from the text of the message.

##### Returns

`T`

The structured output contained in the message.

#### Defined in

ai/lib/message.d.ts:52

***

### text

#### Get Signature

```ts
get text(): string
```

Concatenates all `text` parts present in the message with no delimiter.

##### Returns

`string`

A string of all concatenated text parts.

#### Defined in

ai/lib/message.d.ts:58

***

### toolRequests

#### Get Signature

```ts
get toolRequests(): {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: {
     input: unknown;
     name: string;
     ref: string;
    };
  toolResponse: undefined;
 }[]
```

Returns all tool request found in this message.

##### Returns

\{
  `custom`: `Record`\<`string`, `unknown`\>;
  `data`: `unknown`;
  `media`: `undefined`;
  `metadata`: `Record`\<`string`, `unknown`\>;
  `text`: `undefined`;
  `toolRequest`: \{
     `input`: `unknown`;
     `name`: `string`;
     `ref`: `string`;
    \};
  `toolResponse`: `undefined`;
 \}[]

Array of all tool request found in this message.

#### Defined in

ai/lib/message.d.ts:77

## Methods

### toJSON()

```ts
toJSON(): {
  content: (
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: {
        contentType: string;
        url: string;
       };
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: {
        input: unknown;
        name: string;
        ref: string;
       };
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: {
        name: string;
        output: unknown;
        ref: string;
       };
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    })[];
  metadata: Record<string, unknown>;
  role: "model" | "tool" | "system" | "user";
}
```

Converts the Message to a plain JS object.

#### Returns

```ts
{
  content: (
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: {
        contentType: string;
        url: string;
       };
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: {
        input: unknown;
        name: string;
        ref: string;
       };
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: {
        name: string;
        output: unknown;
        ref: string;
       };
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    })[];
  metadata: Record<string, unknown>;
  role: "model" | "tool" | "system" | "user";
}
```

Plain JS object representing the data contained in the message.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `content` | ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[] | ai/lib/model.d.ts:708 |
| `metadata`? | `Record`\<`string`, `unknown`\> | ai/lib/model.d.ts:768 |
| `role` | `"model"` \| `"tool"` \| `"system"` \| `"user"` | ai/lib/model.d.ts:707 |

#### Defined in

ai/lib/message.d.ts:82

***

### toolResponseParts()

```ts
toolResponseParts(): {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: {
     name: string;
     output: unknown;
     ref: string;
    };
 }[]
```

#### Returns

\{
  `custom`: `Record`\<`string`, `unknown`\>;
  `data`: `unknown`;
  `media`: `undefined`;
  `metadata`: `Record`\<`string`, `unknown`\>;
  `text`: `undefined`;
  `toolRequest`: `undefined`;
  `toolResponse`: \{
     `name`: `string`;
     `output`: `unknown`;
     `ref`: `string`;
    \};
 \}[]

#### Defined in

ai/lib/message.d.ts:53

***

### parse()

```ts
static parse(lenientMessage: string | {
  content: (
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: {
        contentType: string;
        url: string;
       };
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: {
        input: unknown;
        name: string;
        ref: string;
       };
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: {
        name: string;
        output: unknown;
        ref: string;
       };
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    })[];
  metadata: Record<string, unknown>;
  role: "model" | "tool" | "system" | "user";
 } | {
  content: (
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: {
        contentType: string;
        url: string;
       };
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: {
        input: unknown;
        name: string;
        ref: string;
       };
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: {
        name: string;
        output: unknown;
        ref: string;
       };
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    })[];
  metadata: Record<string, unknown>;
  role: "model" | "tool" | "system" | "user";
 } & {
  content: string;
}): Message<unknown>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `lenientMessage` | `string` \| \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \} \| \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \} & \{ `content`: `string`; \} |

#### Returns

[`Message`](Message.md)\<`unknown`\>

#### Defined in

ai/lib/message.d.ts:38

***

### parseContent()

```ts
static parseContent(lenientPart: 
  | string
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: string;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: {
     contentType: string;
     url: string;
    };
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: {
     input: unknown;
     name: string;
     ref: string;
    };
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: {
     name: string;
     output: unknown;
     ref: string;
    };
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, any>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | (
  | string
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: string;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: {
     contentType: string;
     url: string;
    };
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: {
     input: unknown;
     name: string;
     ref: string;
    };
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: {
     name: string;
     output: unknown;
     ref: string;
    };
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, any>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
 })[]): (
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: string;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: {
     contentType: string;
     url: string;
    };
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: {
     input: unknown;
     name: string;
     ref: string;
    };
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: {
     name: string;
     output: unknown;
     ref: string;
    };
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, any>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
 })[]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `lenientPart` | \| `string` \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| ( \| `string` \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[] |

#### Returns

(
  \| \{
  `custom`: `Record`\<`string`, `unknown`\>;
  `data`: `unknown`;
  `media`: `undefined`;
  `metadata`: `Record`\<`string`, `unknown`\>;
  `text`: `string`;
  `toolRequest`: `undefined`;
  `toolResponse`: `undefined`;
 \}
  \| \{
  `custom`: `Record`\<`string`, `unknown`\>;
  `data`: `unknown`;
  `media`: \{
     `contentType`: `string`;
     `url`: `string`;
    \};
  `metadata`: `Record`\<`string`, `unknown`\>;
  `text`: `undefined`;
  `toolRequest`: `undefined`;
  `toolResponse`: `undefined`;
 \}
  \| \{
  `custom`: `Record`\<`string`, `unknown`\>;
  `data`: `unknown`;
  `media`: `undefined`;
  `metadata`: `Record`\<`string`, `unknown`\>;
  `text`: `undefined`;
  `toolRequest`: \{
     `input`: `unknown`;
     `name`: `string`;
     `ref`: `string`;
    \};
  `toolResponse`: `undefined`;
 \}
  \| \{
  `custom`: `Record`\<`string`, `unknown`\>;
  `data`: `unknown`;
  `media`: `undefined`;
  `metadata`: `Record`\<`string`, `unknown`\>;
  `text`: `undefined`;
  `toolRequest`: `undefined`;
  `toolResponse`: \{
     `name`: `string`;
     `output`: `unknown`;
     `ref`: `string`;
    \};
 \}
  \| \{
  `custom`: `Record`\<`string`, `unknown`\>;
  `data`: `unknown`;
  `media`: `undefined`;
  `metadata`: `Record`\<`string`, `unknown`\>;
  `text`: `undefined`;
  `toolRequest`: `undefined`;
  `toolResponse`: `undefined`;
 \}
  \| \{
  `custom`: `Record`\<`string`, `any`\>;
  `data`: `unknown`;
  `media`: `undefined`;
  `metadata`: `Record`\<`string`, `unknown`\>;
  `text`: `undefined`;
  `toolRequest`: `undefined`;
  `toolResponse`: `undefined`;
 \})[]

#### Defined in

ai/lib/message.d.ts:41

***

### parseData()

```ts
static parseData(lenientMessage: string | {
  content: (
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: {
        contentType: string;
        url: string;
       };
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: {
        input: unknown;
        name: string;
        ref: string;
       };
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: {
        name: string;
        output: unknown;
        ref: string;
       };
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    })[];
  metadata: Record<string, unknown>;
  role: "model" | "tool" | "system" | "user";
 } | {
  content: (
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: {
        contentType: string;
        url: string;
       };
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: {
        input: unknown;
        name: string;
        ref: string;
       };
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: {
        name: string;
        output: unknown;
        ref: string;
       };
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    })[];
  metadata: Record<string, unknown>;
  role: "model" | "tool" | "system" | "user";
 } & {
  content:   | string
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: {
        contentType: string;
        url: string;
       };
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: {
        input: unknown;
        name: string;
        ref: string;
       };
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: {
        name: string;
        output: unknown;
        ref: string;
       };
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | (
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: {
        contentType: string;
        url: string;
       };
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: {
        input: unknown;
        name: string;
        ref: string;
       };
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: {
        name: string;
        output: unknown;
        ref: string;
       };
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    })[];
  role: string;
 }, defaultRole?: "model" | "tool" | "system" | "user"): {
  content: (
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: {
        contentType: string;
        url: string;
       };
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: {
        input: unknown;
        name: string;
        ref: string;
       };
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: {
        name: string;
        output: unknown;
        ref: string;
       };
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    })[];
  metadata: Record<string, unknown>;
  role: "model" | "tool" | "system" | "user";
}
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `lenientMessage` | `string` \| \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \} \| \{ `content`: ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"tool"` \| `"system"` \| `"user"`; \} & \{ `content`: \| `string` \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `role`: `string`; \} |
| `defaultRole`? | `"model"` \| `"tool"` \| `"system"` \| `"user"` |

#### Returns

```ts
{
  content: (
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: string;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: {
        contentType: string;
        url: string;
       };
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: {
        input: unknown;
        name: string;
        ref: string;
       };
     toolResponse: undefined;
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: {
        name: string;
        output: unknown;
        ref: string;
       };
    }
     | {
     custom: Record<string, unknown>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    }
     | {
     custom: Record<string, any>;
     data: unknown;
     media: undefined;
     metadata: Record<string, unknown>;
     text: undefined;
     toolRequest: undefined;
     toolResponse: undefined;
    })[];
  metadata: Record<string, unknown>;
  role: "model" | "tool" | "system" | "user";
}
```

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `content` | ( \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: \{ `contentType`: `string`; `url`: `string`; \}; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: `string`; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: `string`; \}; \} \| \{ `custom`: `Record`\<`string`, `unknown`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<`string`, `unknown`\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[] | ai/lib/model.d.ts:708 |
| `metadata`? | `Record`\<`string`, `unknown`\> | ai/lib/model.d.ts:768 |
| `role` | `"model"` \| `"tool"` \| `"system"` \| `"user"` | ai/lib/model.d.ts:707 |

#### Defined in

ai/lib/message.d.ts:34
