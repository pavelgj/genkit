# Type Alias: ZodNumberCheck

```ts
type ZodNumberCheck: 
  | {
  inclusive: boolean;
  kind: "min";
  message: string;
  value: number;
 }
  | {
  inclusive: boolean;
  kind: "max";
  message: string;
  value: number;
 }
  | {
  kind: "int";
  message: string;
 }
  | {
  kind: "multipleOf";
  message: string;
  value: number;
 }
  | {
  kind: "finite";
  message: string;
};
```

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:269
