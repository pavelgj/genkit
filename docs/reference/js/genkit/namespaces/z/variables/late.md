# Variable: late

```ts
const late: {
  object: <T>(shape: () => T, params?: RawCreateParams) => ZodObject<T, "strip", ZodTypeAny, { [k in keyof addQuestionMarks<baseObjectOutputType<T>, any>]: addQuestionMarks<baseObjectOutputType<T>, any>[k] }, { [k_1 in keyof baseObjectInputType<T>]: baseObjectInputType<T>[k_1] }>;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `object` | \<`T`\>(`shape`: () => `T`, `params`?: [`RawCreateParams`](../type-aliases/RawCreateParams.md)) => [`ZodObject`](../classes/ZodObject.md)\<`T`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `{ [k in keyof addQuestionMarks<baseObjectOutputType<T>, any>]: addQuestionMarks<baseObjectOutputType<T>, any>[k] }`, `{ [k_1 in keyof baseObjectInputType<T>]: baseObjectInputType<T>[k_1] }`\> | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:957 |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:956
