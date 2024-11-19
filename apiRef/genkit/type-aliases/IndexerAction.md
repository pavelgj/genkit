# Type Alias: IndexerAction\<IndexerOptions\>

```ts
type IndexerAction<IndexerOptions>: Action<typeof IndexerRequestSchema, ZodVoid> & {
  __configSchema: IndexerOptions;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `__configSchema`? | `IndexerOptions` | ai/lib/retriever.d.ts:346 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `IndexerOptions` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Defined in

ai/lib/retriever.d.ts:345
