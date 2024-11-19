# Type Alias: baseObjectInputType\<Shape\>

```ts
type baseObjectInputType<Shape>: addQuestionMarks<{ [k in keyof Shape]: Shape[k]["_input"] }>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `Shape` *extends* [`ZodRawShape`](ZodRawShape.md) |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:517
