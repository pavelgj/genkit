# Type Alias: ToolArgument\<I, O\>

```ts
type ToolArgument<I, O>: 
  | string
  | ToolAction<I, O>
  | Action<I, O>
  | ToolDefinition
| ExecutablePrompt<any, any, any>;
```

A reference to a tool in the form of a name, definition, or the action itself.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Defined in

ai/lib/generate-C8Qor0QX.d.ts:149
