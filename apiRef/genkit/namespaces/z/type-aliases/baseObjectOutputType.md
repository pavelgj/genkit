# Type Alias: baseObjectOutputType\<Shape\>

```ts
type baseObjectOutputType<Shape>: { [k in keyof Shape]: Shape[k]["_output"] };
```

## Type Parameters

| Type Parameter |
| ------ |
| `Shape` *extends* [`ZodRawShape`](ZodRawShape.md) |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:513
