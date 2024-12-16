[**genkit**](../README.md)

***

[Genkit JS API reference](../../README.md) / [genkit](../README.md) / [/](../README.md) / Action

# Type Alias: Action\<I, O, S\>

> **Action**\<`I`, `O`, `S`\>: (`input`, `options`?) => `Promise`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\> & `object`

Self-describing, validating, observable, locally and remotely callable function.

## Type declaration

### \_\_action

> **\_\_action**: [`ActionMetadata`](../interfaces/ActionMetadata.md)\<`I`, `O`, `S`\>

### \_\_registry

> **\_\_registry**: [`Registry`](../registry/classes/Registry.md)

### run()

#### Parameters

##### input

[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\>

##### options?

`ActionRunOptions`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`S`\>\>

#### Returns

`Promise`\<`ActionResult`\<[`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`O`\>\>\>

## Type Parameters

• **I** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **O** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

• **S** *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md)

## Defined in

core/lib/action-Bp720DPN.d.ts:311
