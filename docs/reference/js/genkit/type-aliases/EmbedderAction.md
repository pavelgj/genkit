# Type Alias: EmbedderAction\<CustomOptions\>

```ts
type EmbedderAction<CustomOptions>: Action<typeof EmbedRequestSchema, typeof EmbedResponseSchema> & {
  __configSchema: CustomOptions;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `__configSchema`? | `CustomOptions` | ai/lib/embedder.d.ts:144 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptions` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Defined in

ai/lib/embedder.d.ts:143
