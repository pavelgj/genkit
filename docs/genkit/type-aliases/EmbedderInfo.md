# Type Alias: EmbedderInfo

```ts
type EmbedderInfo: {
  dimensions: number;
  label: string;
  supports: {
     input: ("text" | "image")[];
     multilingual: boolean;
    };
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `dimensions`? | `number` | ai/lib/embedder.d.ts:198 |
| `label`? | `string` | ai/lib/embedder.d.ts:193 |
| `supports`? | \{ `input`: (`"text"` \| `"image"`)[]; `multilingual`: `boolean`; \} | ai/lib/embedder.d.ts:194 |
| `supports.input`? | (`"text"` \| `"image"`)[] | ai/lib/embedder.d.ts:195 |
| `supports.multilingual`? | `boolean` | ai/lib/embedder.d.ts:196 |

## Defined in

ai/lib/embedder.d.ts:207
