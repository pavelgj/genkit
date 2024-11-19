# Type Alias: Part

```ts
type Part: 
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: string;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: {
     contentType: string;
     url: string;
    };
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: {
     input: unknown;
     name: string;
     ref: string;
    };
  toolResponse: undefined;
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: {
     name: string;
     output: unknown;
     ref: string;
    };
 }
  | {
  custom: Record<string, unknown>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
 }
  | {
  custom: Record<string, any>;
  data: unknown;
  media: undefined;
  metadata: Record<string, unknown>;
  text: undefined;
  toolRequest: undefined;
  toolResponse: undefined;
};
```

## Defined in

ai/lib/model.d.ts:477
