# Variable: FlowResultSchema

```ts
const FlowResultSchema: ZodIntersection<ZodObject<{
  response: ZodNullable<ZodUnknown>;
 }, "strip", ZodTypeAny, {
  response: unknown;
 }, {
  response: unknown;
 }>, ZodObject<{
  error: ZodOptional<ZodString>;
  stacktrace: ZodOptional<ZodString>;
 }, "strip", ZodTypeAny, {
  error: string;
  stacktrace: string;
 }, {
  error: string;
  stacktrace: string;
}>>;
```

## Defined in

core/lib/flowTypes.d.ts:37
