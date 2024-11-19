# Type Alias: RerankerAction\<CustomOptions\>

```ts
type RerankerAction<CustomOptions>: Action<typeof RerankerRequestSchema, typeof RerankerResponseSchema, {
  model: RerankerInfo;
 }> & {
  __configSchema: CustomOptions;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `__configSchema`? | `CustomOptions` | ai/lib/reranker.d.ts:447 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CustomOptions` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Defined in

ai/lib/reranker.d.ts:444
