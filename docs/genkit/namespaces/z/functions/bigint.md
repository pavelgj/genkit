# Function: bigint()

```ts
function bigint(params?: {
  description: string;
  errorMap: ZodErrorMap;
  invalid_type_error: string;
  message: string;
  required_error: string;
 } & {
  coerce: boolean;
 }): ZodBigInt
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params`? | \{ `description`: `string`; `errorMap`: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md); `invalid_type_error`: `string`; `message`: `string`; `required_error`: `string`; \} & \{ `coerce`: `boolean`; \} |

## Returns

[`ZodBigInt`](../classes/ZodBigInt.md)

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1021
