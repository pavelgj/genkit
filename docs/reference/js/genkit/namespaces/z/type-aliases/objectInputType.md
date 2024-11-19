# Type Alias: objectInputType\<Shape, Catchall, UnknownKeys\>

```ts
type objectInputType<Shape, Catchall, UnknownKeys>: flatten<baseObjectInputType<Shape>> & CatchallInput<Catchall> & PassthroughType<UnknownKeys>;
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Shape` *extends* [`ZodRawShape`](ZodRawShape.md) | - |
| `Catchall` *extends* [`ZodTypeAny`](ZodTypeAny.md) | - |
| `UnknownKeys` *extends* [`UnknownKeysParam`](UnknownKeysParam.md) | [`UnknownKeysParam`](UnknownKeysParam.md) |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:516
