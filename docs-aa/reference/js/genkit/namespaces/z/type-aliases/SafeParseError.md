# Type Alias: SafeParseError\<Input\>

```ts
type SafeParseError<Input>: {
  data: never;
  error: ZodError<Input>;
  success: false;
};
```

## Type Parameters

| Type Parameter |
| ------ |
| `Input` |

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data`? | `never` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:44 |
| `error` | [`ZodError`](../classes/ZodError.md)\<`Input`\> | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:43 |
| `success` | `false` | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:42 |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:41
