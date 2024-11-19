# Function: discriminatedUnion()

```ts
function discriminatedUnion<Discriminator, Types>(
   discriminator: Discriminator, 
   options: Types, 
params?: RawCreateParams): ZodDiscriminatedUnion<Discriminator, Types>
```

The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
However, it only allows a union of objects, all of which need to share a discriminator property. This property must
have a different value for each object in the union.

## Type Parameters

| Type Parameter |
| ------ |
| `Discriminator` *extends* `string` |
| `Types` *extends* [[`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`Discriminator`\>, `...ZodDiscriminatedUnionOption<Discriminator>[]`] |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `discriminator` | `Discriminator` | the name of the discriminator property |
| `options` | `Types` | - |
| `params`? | [`RawCreateParams`](../type-aliases/RawCreateParams.md) | - |

## Returns

[`ZodDiscriminatedUnion`](../classes/ZodDiscriminatedUnion.md)\<`Discriminator`, `Types`\>

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1059
