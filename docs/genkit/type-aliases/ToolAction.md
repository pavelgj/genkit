# Type Alias: ToolAction\<I, O\>

```ts
type ToolAction<I, O>: Action<I, O> & {
  __action: {
     metadata: {
        type: "tool";
       };
    };
};
```

An action with a `tool` type.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `__action` | \{ `metadata`: \{ `type`: `"tool"`; \}; \} | ai/lib/generate-C8Qor0QX.d.ts:121 |
| `__action.metadata` | \{ `type`: `"tool"`; \} | ai/lib/generate-C8Qor0QX.d.ts:122 |
| `__action.metadata.type` | `"tool"` | ai/lib/generate-C8Qor0QX.d.ts:123 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Defined in

ai/lib/generate-C8Qor0QX.d.ts:120
