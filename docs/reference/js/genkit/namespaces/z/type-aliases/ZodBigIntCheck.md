# Type Alias: ZodBigIntCheck

```ts
type ZodBigIntCheck: {
  inclusive: boolean;
  kind: "min";
  message: string;
  value: bigint;
 } | {
  inclusive: boolean;
  kind: "max";
  message: string;
  value: bigint;
 } | {
  kind: "multipleOf";
  message: string;
  value: bigint;
};
```

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:328
