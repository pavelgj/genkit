# Type Alias: PromptMetadata\<Input, Options\>

```ts
type PromptMetadata<Input, Options>: Omit<DotpromptPromptMetadata<Input, Options>, "name"> & {
  name: string;
};
```

Metadata for a prompt.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `name` | `string` | The name of the prompt. | [genkit/src/genkit.ts:157](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L157) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Input` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `Options` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Defined in

[genkit/src/genkit.ts:152](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L152)
