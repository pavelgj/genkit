# Type Alias: Action\<I, O, M\>

```ts
type Action<I, O, M>: (input: TypeOf<I>) => Promise<TypeOf<O>> & {
  __action: ActionMetadata<I, O, M>;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `__action` | [`ActionMetadata`](../interfaces/ActionMetadata.md)\<`I`, `O`, `M`\> | core/lib/action-BLstGZbj.d.ts:219 |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `M` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

## Defined in

core/lib/action-BLstGZbj.d.ts:218
