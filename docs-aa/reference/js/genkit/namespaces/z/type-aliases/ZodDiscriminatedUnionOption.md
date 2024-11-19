# Type Alias: ZodDiscriminatedUnionOption\<Discriminator\>

```ts
type ZodDiscriminatedUnionOption<Discriminator>: ZodObject<{ [key in Discriminator]: ZodTypeAny } & ZodRawShape, UnknownKeysParam, ZodTypeAny>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `Discriminator` *extends* `string` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:611
