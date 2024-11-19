# Type Alias: PromptAction\<I\>

```ts
type PromptAction<I>: Action<I, typeof GenerateRequestSchema> & {
  __action: {
     metadata: {
        type: "prompt";
       };
    };
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `__action` | \{ `metadata`: \{ `type`: `"prompt"`; \}; \} | ai/lib/generate-C8Qor0QX.d.ts:26 |
| `__action.metadata` | \{ `type`: `"prompt"`; \} | ai/lib/generate-C8Qor0QX.d.ts:27 |
| `__action.metadata.type` | `"prompt"` | ai/lib/generate-C8Qor0QX.d.ts:28 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Defined in

ai/lib/generate-C8Qor0QX.d.ts:25
