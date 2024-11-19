# Variable: coerce

```ts
const coerce: {
  bigint: (params?: {
     description: string;
     errorMap: ZodErrorMap;
     invalid_type_error: string;
     message: string;
     required_error: string;
    } & {
     coerce: boolean;
    }) => ZodBigInt;
  boolean: (params?: {
     description: string;
     errorMap: ZodErrorMap;
     invalid_type_error: string;
     message: string;
     required_error: string;
    } & {
     coerce: boolean;
    }) => ZodBoolean;
  date: (params?: {
     description: string;
     errorMap: ZodErrorMap;
     invalid_type_error: string;
     message: string;
     required_error: string;
    } & {
     coerce: boolean;
    }) => ZodDate;
  number: (params?: {
     description: string;
     errorMap: ZodErrorMap;
     invalid_type_error: string;
     message: string;
     required_error: string;
    } & {
     coerce: boolean;
    }) => ZodNumber;
  string: (params?: {
     description: string;
     errorMap: ZodErrorMap;
     invalid_type_error: string;
     message: string;
     required_error: string;
    } & {
     coerce: true;
    }) => ZodString;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `bigint` | (`params`?: \{ `description`: `string`; `errorMap`: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md); `invalid_type_error`: `string`; `message`: `string`; `required_error`: `string`; \} & \{ `coerce`: `boolean`; \}) => [`ZodBigInt`](../classes/ZodBigInt.md) | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1107 |
| `boolean` | (`params`?: \{ `description`: `string`; `errorMap`: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md); `invalid_type_error`: `string`; `message`: `string`; `required_error`: `string`; \} & \{ `coerce`: `boolean`; \}) => [`ZodBoolean`](../classes/ZodBoolean.md) | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1098 |
| `date` | (`params`?: \{ `description`: `string`; `errorMap`: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md); `invalid_type_error`: `string`; `message`: `string`; `required_error`: `string`; \} & \{ `coerce`: `boolean`; \}) => [`ZodDate`](../classes/ZodDate.md) | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1116 |
| `number` | (`params`?: \{ `description`: `string`; `errorMap`: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md); `invalid_type_error`: `string`; `message`: `string`; `required_error`: `string`; \} & \{ `coerce`: `boolean`; \}) => [`ZodNumber`](../classes/ZodNumber.md) | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1089 |
| `string` | (`params`?: \{ `description`: `string`; `errorMap`: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md); `invalid_type_error`: `string`; `message`: `string`; `required_error`: `string`; \} & \{ `coerce`: `true`; \}) => [`ZodString`](../classes/ZodString.md) | node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1080 |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:1079
