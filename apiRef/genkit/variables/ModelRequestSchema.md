# Variable: ModelRequestSchema

```ts
const ModelRequestSchema: ZodObject<{
  config: ZodOptional<ZodAny>;
  docs: ZodOptional<ZodArray<ZodObject<{
     content: ZodArray<ZodUnion<[ZodObject<extendShape<..., ...>, "strip", ZodTypeAny, {
        media: ...;
        text: ...;
       }, {
        media: ...;
        text: ...;
       }>, ZodObject<extendShape<..., ...>, "strip", ZodTypeAny, {
        media: ...;
        text: ...;
       }, {
        media: ...;
        text: ...;
       }>]>, "many">;
     metadata: ZodOptional<ZodRecord<ZodString, ZodAny>>;
    }, "strip", ZodTypeAny, {
     content: ({
        media: undefined;
        text: string;
       } | {
        media: {
           contentType: ...;
           url: ...;
          };
        text: undefined;
       })[];
     metadata: Record<string, any>;
    }, {
     content: ({
        media: undefined;
        text: string;
       } | {
        media: {
           contentType: ...;
           url: ...;
          };
        text: undefined;
       })[];
     metadata: Record<string, any>;
    }>, "many">>;
  messages: ZodArray<ZodObject<{
     content: ZodArray<ZodUnion<[ZodObject<extendShape<{
        custom: ...;
        data: ...;
        media: ...;
        metadata: ...;
        text: ...;
        toolRequest: ...;
        toolResponse: ...;
       }, {
        text: ...;
       }>, "strip", ZodTypeAny, {
        custom: ... | ...;
        data: unknown;
        media: undefined;
        metadata: ... | ...;
        text: string;
        toolRequest: undefined;
        toolResponse: undefined;
       }, {
        custom: ... | ...;
        data: unknown;
        media: undefined;
        metadata: ... | ...;
        text: string;
        toolRequest: undefined;
        toolResponse: undefined;
       }>, ZodObject<extendShape<{
        custom: ...;
        data: ...;
        media: ...;
        metadata: ...;
        text: ...;
        toolRequest: ...;
        toolResponse: ...;
       }, {
        media: ...;
       }>, "strip", ZodTypeAny, {
        custom: ... | ...;
        data: unknown;
        media: {
           contentType: ...;
           url: ...;
          };
        metadata: ... | ...;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       }, {
        custom: ... | ...;
        data: unknown;
        media: {
           contentType: ...;
           url: ...;
          };
        metadata: ... | ...;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       }>, ZodObject<extendShape<{
        custom: ...;
        data: ...;
        media: ...;
        metadata: ...;
        text: ...;
        toolRequest: ...;
        toolResponse: ...;
       }, {
        toolRequest: ...;
       }>, "strip", ZodTypeAny, {
        custom: ... | ...;
        data: unknown;
        media: undefined;
        metadata: ... | ...;
        text: undefined;
        toolRequest: {
           input: ...;
           name: ...;
           ref: ...;
          };
        toolResponse: undefined;
       }, {
        custom: ... | ...;
        data: unknown;
        media: undefined;
        metadata: ... | ...;
        text: undefined;
        toolRequest: {
           input: ...;
           name: ...;
           ref: ...;
          };
        toolResponse: undefined;
       }>, ZodObject<extendShape<{
        custom: ...;
        data: ...;
        media: ...;
        metadata: ...;
        text: ...;
        toolRequest: ...;
        toolResponse: ...;
       }, {
        toolResponse: ...;
       }>, "strip", ZodTypeAny, {
        custom: ... | ...;
        data: unknown;
        media: undefined;
        metadata: ... | ...;
        text: undefined;
        toolRequest: undefined;
        toolResponse: {
           name: ...;
           output: ...;
           ref: ...;
          };
       }, {
        custom: ... | ...;
        data: unknown;
        media: undefined;
        metadata: ... | ...;
        text: undefined;
        toolRequest: undefined;
        toolResponse: {
           name: ...;
           output: ...;
           ref: ...;
          };
       }>, ZodObject<extendShape<{
        custom: ...;
        data: ...;
        media: ...;
        metadata: ...;
        text: ...;
        toolRequest: ...;
        toolResponse: ...;
       }, {
        data: ...;
       }>, "strip", ZodTypeAny, {
        custom: ... | ...;
        data: unknown;
        media: undefined;
        metadata: ... | ...;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       }, {
        custom: ... | ...;
        data: unknown;
        media: undefined;
        metadata: ... | ...;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       }>, ZodObject<extendShape<{
        custom: ...;
        data: ...;
        media: ...;
        metadata: ...;
        text: ...;
        toolRequest: ...;
        toolResponse: ...;
       }, {
        custom: ...;
       }>, "strip", ZodTypeAny, {
        custom: Record<..., ...>;
        data: unknown;
        media: undefined;
        metadata: ... | ...;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       }, {
        custom: Record<..., ...>;
        data: unknown;
        media: undefined;
        metadata: ... | ...;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       }>]>, "many">;
     metadata: ZodOptional<ZodRecord<ZodString, ZodUnknown>>;
     role: ZodEnum<["system", "user", "model", "tool"]>;
    }, "strip", ZodTypeAny, {
     content: (
        | {
        custom: Record<..., ...>;
        data: unknown;
        media: undefined;
        metadata: Record<..., ...>;
        text: string;
        toolRequest: undefined;
        toolResponse: undefined;
       }
        | {
        custom: Record<..., ...>;
        data: unknown;
        media: {
           contentType: ... | ...;
           url: string;
          };
        metadata: Record<..., ...>;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       }
        | {
        custom: Record<..., ...>;
        data: unknown;
        media: undefined;
        metadata: Record<..., ...>;
        text: undefined;
        toolRequest: {
           input: unknown;
           name: string;
           ref: ... | ...;
          };
        toolResponse: undefined;
       }
        | {
        custom: Record<..., ...>;
        data: unknown;
        media: undefined;
        metadata: Record<..., ...>;
        text: undefined;
        toolRequest: undefined;
        toolResponse: {
           name: string;
           output: unknown;
           ref: ... | ...;
          };
       }
        | {
        custom: Record<..., ...>;
        data: unknown;
        media: undefined;
        metadata: Record<..., ...>;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       }
        | {
        custom: Record<string, any>;
        data: unknown;
        media: undefined;
        metadata: Record<..., ...>;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       })[];
     metadata: Record<string, unknown>;
     role: "model" | "system" | "user" | "tool";
    }, {
     content: (
        | {
        custom: Record<..., ...>;
        data: unknown;
        media: undefined;
        metadata: Record<..., ...>;
        text: string;
        toolRequest: undefined;
        toolResponse: undefined;
       }
        | {
        custom: Record<..., ...>;
        data: unknown;
        media: {
           contentType: ... | ...;
           url: string;
          };
        metadata: Record<..., ...>;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       }
        | {
        custom: Record<..., ...>;
        data: unknown;
        media: undefined;
        metadata: Record<..., ...>;
        text: undefined;
        toolRequest: {
           input: unknown;
           name: string;
           ref: ... | ...;
          };
        toolResponse: undefined;
       }
        | {
        custom: Record<..., ...>;
        data: unknown;
        media: undefined;
        metadata: Record<..., ...>;
        text: undefined;
        toolRequest: undefined;
        toolResponse: {
           name: string;
           output: unknown;
           ref: ... | ...;
          };
       }
        | {
        custom: Record<..., ...>;
        data: unknown;
        media: undefined;
        metadata: Record<..., ...>;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       }
        | {
        custom: Record<string, any>;
        data: unknown;
        media: undefined;
        metadata: Record<..., ...>;
        text: undefined;
        toolRequest: undefined;
        toolResponse: undefined;
       })[];
     metadata: Record<string, unknown>;
     role: "model" | "system" | "user" | "tool";
    }>, "many">;
  output: ZodOptional<ZodObject<{
     constrained: ZodOptional<ZodBoolean>;
     contentType: ZodOptional<ZodString>;
     format: ZodOptional<ZodString>;
     instructions: ZodOptional<ZodString>;
     schema: ZodOptional<ZodRecord<ZodString, ZodAny>>;
    }, "strip", ZodTypeAny, {
     constrained: boolean;
     contentType: string;
     format: string;
     instructions: string;
     schema: Record<string, any>;
    }, {
     constrained: boolean;
     contentType: string;
     format: string;
     instructions: string;
     schema: Record<string, any>;
    }>>;
  tools: ZodOptional<ZodArray<ZodObject<{
     description: ZodString;
     inputSchema: ZodOptional<ZodNullable<ZodRecord<ZodString, ZodAny>>>;
     name: ZodString;
     outputSchema: ZodOptional<ZodNullable<ZodRecord<ZodString, ZodAny>>>;
    }, "strip", ZodTypeAny, {
     description: string;
     inputSchema: Record<string, any> | null;
     name: string;
     outputSchema: Record<string, any> | null;
    }, {
     description: string;
     inputSchema: Record<string, any> | null;
     name: string;
     outputSchema: Record<string, any> | null;
    }>, "many">>;
 }, "strip", ZodTypeAny, {
  config: any;
  docs: {
     content: ({
        media: undefined;
        text: string;
       } | {
        media: {
           contentType: ... | ...;
           url: string;
          };
        text: undefined;
       })[];
     metadata: Record<string, any>;
    }[];
  messages: {
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
     role: "model" | "system" | "user" | "tool";
    }[];
  output: {
     constrained: boolean;
     contentType: string;
     format: string;
     instructions: string;
     schema: Record<string, any>;
    };
  tools: {
     description: string;
     inputSchema: Record<string, any> | null;
     name: string;
     outputSchema: Record<string, any> | null;
    }[];
 }, {
  config: any;
  docs: {
     content: ({
        media: undefined;
        text: string;
       } | {
        media: {
           contentType: ... | ...;
           url: string;
          };
        text: undefined;
       })[];
     metadata: Record<string, any>;
    }[];
  messages: {
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
     role: "model" | "system" | "user" | "tool";
    }[];
  output: {
     constrained: boolean;
     contentType: string;
     format: string;
     instructions: string;
     schema: Record<string, any>;
    };
  tools: {
     description: string;
     inputSchema: Record<string, any> | null;
     name: string;
     outputSchema: Record<string, any> | null;
    }[];
}>;
```

ModelRequestSchema represents the parameters that are passed to a model when generating content.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `config` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodAny`](../namespaces/z/classes/ZodAny.md)\> | ai/lib/model.d.ts:1324 |
| `docs` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `content`: [`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnion`](../namespaces/z/classes/ZodUnion.md)\<[[`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<..., ...\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `media`: ...; `text`: ...; \}, \{ `media`: ...; `text`: ...; \}\>, [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<..., ...\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `media`: ...; `text`: ...; \}, \{ `media`: ...; `text`: ...; \}\>]\>, `"many"`\>; `metadata`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodRecord`](../namespaces/z/classes/ZodRecord.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), [`ZodAny`](../namespaces/z/classes/ZodAny.md)\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: ...; `url`: ...; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}, \{ `content`: (\{ `media`: `undefined`; `text`: `string`; \} \| \{ `media`: \{ `contentType`: ...; `url`: ...; \}; `text`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `any`\>; \}\>, `"many"`\>\> | ai/lib/model.d.ts:1360 |
| `messages` | [`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `content`: [`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodUnion`](../namespaces/z/classes/ZodUnion.md)\<[[`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `custom`: ...; `data`: ...; `media`: ...; `metadata`: ...; `text`: ...; `toolRequest`: ...; `toolResponse`: ...; \}, \{ `text`: ...; \}\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \}, \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \}\>, [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `custom`: ...; `data`: ...; `media`: ...; `metadata`: ...; `text`: ...; `toolRequest`: ...; `toolResponse`: ...; \}, \{ `media`: ...; \}\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `custom`: ... \| ...; `data`: `unknown`; `media`: \{ `contentType`: ...; `url`: ...; \}; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \}, \{ `custom`: ... \| ...; `data`: `unknown`; `media`: \{ `contentType`: ...; `url`: ...; \}; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \}\>, [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `custom`: ...; `data`: ...; `media`: ...; `metadata`: ...; `text`: ...; `toolRequest`: ...; `toolResponse`: ...; \}, \{ `toolRequest`: ...; \}\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: \{ `input`: ...; `name`: ...; `ref`: ...; \}; `toolResponse`: `undefined`; \}, \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: \{ `input`: ...; `name`: ...; `ref`: ...; \}; `toolResponse`: `undefined`; \}\>, [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `custom`: ...; `data`: ...; `media`: ...; `metadata`: ...; `text`: ...; `toolRequest`: ...; `toolResponse`: ...; \}, \{ `toolResponse`: ...; \}\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: ...; `output`: ...; `ref`: ...; \}; \}, \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: ...; `output`: ...; `ref`: ...; \}; \}\>, [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `custom`: ...; `data`: ...; `media`: ...; `metadata`: ...; `text`: ...; `toolRequest`: ...; `toolResponse`: ...; \}, \{ `data`: ...; \}\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \}, \{ `custom`: ... \| ...; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \}\>, [`ZodObject`](../namespaces/z/classes/ZodObject.md)\<[`extendShape`](../namespaces/z/namespaces/objectUtil/type-aliases/extendShape.md)\<\{ `custom`: ...; `data`: ...; `media`: ...; `metadata`: ...; `text`: ...; `toolRequest`: ...; `toolResponse`: ...; \}, \{ `custom`: ...; \}\>, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \}, \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: ... \| ...; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \}\>]\>, `"many"`\>; `metadata`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodRecord`](../namespaces/z/classes/ZodRecord.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), [`ZodUnknown`](../namespaces/z/classes/ZodUnknown.md)\>\>; `role`: [`ZodEnum`](../namespaces/z/classes/ZodEnum.md)\<[`"system"`, `"user"`, `"model"`, `"tool"`]\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `content`: ( \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<..., ...\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: \{ `contentType`: ... \| ...; `url`: `string`; \}; `metadata`: `Record`\<..., ...\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<..., ...\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: ... \| ...; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<..., ...\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: ... \| ...; \}; \} \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<..., ...\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<..., ...\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"system"` \| `"user"` \| `"tool"`; \}, \{ `content`: ( \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<..., ...\>; `text`: `string`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: \{ `contentType`: ... \| ...; `url`: `string`; \}; `metadata`: `Record`\<..., ...\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<..., ...\>; `text`: `undefined`; `toolRequest`: \{ `input`: `unknown`; `name`: `string`; `ref`: ... \| ...; \}; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<..., ...\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: \{ `name`: `string`; `output`: `unknown`; `ref`: ... \| ...; \}; \} \| \{ `custom`: `Record`\<..., ...\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<..., ...\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \} \| \{ `custom`: `Record`\<`string`, `any`\>; `data`: `unknown`; `media`: `undefined`; `metadata`: `Record`\<..., ...\>; `text`: `undefined`; `toolRequest`: `undefined`; `toolResponse`: `undefined`; \})[]; `metadata`: `Record`\<`string`, `unknown`\>; `role`: `"model"` \| `"system"` \| `"user"` \| `"tool"`; \}\>, `"many"`\> | ai/lib/model.d.ts:971 |
| `output` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `constrained`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodBoolean`](../namespaces/z/classes/ZodBoolean.md)\>; `contentType`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `format`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `instructions`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md)\>; `schema`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodRecord`](../namespaces/z/classes/ZodRecord.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), [`ZodAny`](../namespaces/z/classes/ZodAny.md)\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \}, \{ `constrained`: `boolean`; `contentType`: `string`; `format`: `string`; `instructions`: `string`; `schema`: `Record`\<`string`, `any`\>; \}\>\> | ai/lib/model.d.ts:1341 |
| `tools` | [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodArray`](../namespaces/z/classes/ZodArray.md)\<[`ZodObject`](../namespaces/z/classes/ZodObject.md)\<\{ `description`: [`ZodString`](../namespaces/z/classes/ZodString.md); `inputSchema`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNullable`](../namespaces/z/classes/ZodNullable.md)\<[`ZodRecord`](../namespaces/z/classes/ZodRecord.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), [`ZodAny`](../namespaces/z/classes/ZodAny.md)\>\>\>; `name`: [`ZodString`](../namespaces/z/classes/ZodString.md); `outputSchema`: [`ZodOptional`](../namespaces/z/classes/ZodOptional.md)\<[`ZodNullable`](../namespaces/z/classes/ZodNullable.md)\<[`ZodRecord`](../namespaces/z/classes/ZodRecord.md)\<[`ZodString`](../namespaces/z/classes/ZodString.md), [`ZodAny`](../namespaces/z/classes/ZodAny.md)\>\>\>; \}, `"strip"`, [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md), \{ `description`: `string`; `inputSchema`: `Record`\<`string`, `any`\> \| `null`; `name`: `string`; `outputSchema`: `Record`\<`string`, `any`\> \| `null`; \}, \{ `description`: `string`; `inputSchema`: `Record`\<`string`, `any`\> \| `null`; `name`: `string`; `outputSchema`: `Record`\<`string`, `any`\> \| `null`; \}\>, `"many"`\>\> | ai/lib/model.d.ts:1325 |

## Defined in

ai/lib/model.d.ts:970
