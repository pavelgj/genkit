# Type Alias: EvalResponses

```ts
type EvalResponses: {
  evaluation: {
     details: objectOutputType<{
        reasoning: ZodOptional<ZodString>;
       }, ZodTypeAny, "passthrough">;
     error: string;
     id: string;
     score: string | number | boolean;
    } | {
     details: objectOutputType<{
        reasoning: ZodOptional<ZodString>;
       }, ZodTypeAny, "passthrough">;
     error: string;
     id: string;
     score: string | number | boolean;
    }[];
  sampleIndex: number;
  spanId: string;
  testCaseId: string;
  traceId: string;
 }[];
```

## Defined in

ai/lib/evaluator.d.ts:296
