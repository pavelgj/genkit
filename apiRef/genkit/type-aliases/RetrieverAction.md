# Type Alias: RetrieverAction\<CustomOptions\>

```ts
type RetrieverAction<CustomOptions>: Action<typeof RetrieverRequestSchema, typeof RetrieverResponseSchema, {
  model: RetrieverInfo;
 }> & {
  __configSchema: CustomOptions;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `__configSchema`? | `CustomOptions` | ai/lib/retriever.d.ts:343 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptions` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Defined in

ai/lib/retriever.d.ts:340
