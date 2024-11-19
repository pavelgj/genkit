# Type Alias: ZodStringCheck

```ts
type ZodStringCheck: 
  | {
  kind: "min";
  message: string;
  value: number;
 }
  | {
  kind: "max";
  message: string;
  value: number;
 }
  | {
  kind: "length";
  message: string;
  value: number;
 }
  | {
  kind: "email";
  message: string;
 }
  | {
  kind: "url";
  message: string;
 }
  | {
  kind: "emoji";
  message: string;
 }
  | {
  kind: "uuid";
  message: string;
 }
  | {
  kind: "nanoid";
  message: string;
 }
  | {
  kind: "cuid";
  message: string;
 }
  | {
  kind: "includes";
  message: string;
  position: number;
  value: string;
 }
  | {
  kind: "cuid2";
  message: string;
 }
  | {
  kind: "ulid";
  message: string;
 }
  | {
  kind: "startsWith";
  message: string;
  value: string;
 }
  | {
  kind: "endsWith";
  message: string;
  value: string;
 }
  | {
  kind: "regex";
  message: string;
  regex: RegExp;
 }
  | {
  kind: "trim";
  message: string;
 }
  | {
  kind: "toLowerCase";
  message: string;
 }
  | {
  kind: "toUpperCase";
  message: string;
 }
  | {
  kind: "datetime";
  local: boolean;
  message: string;
  offset: boolean;
  precision: number | null;
 }
  | {
  kind: "date";
  message: string;
 }
  | {
  kind: "time";
  message: string;
  precision: number | null;
 }
  | {
  kind: "duration";
  message: string;
 }
  | {
  kind: "ip";
  message: string;
  version: IpVersion;
 }
  | {
  kind: "base64";
  message: string;
};
```

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:100
