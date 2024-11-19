# Type Alias: LlmResponse

```ts
type LlmResponse: {
  completion: string;
  stats: {
     inputTokenCount: number;
     latencyMs: number;
     outputTokenCount: number;
    };
  toolCalls: {
     arguments: any;
     toolName: string;
    }[];
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `completion` | `string` | ai/lib/types.d.ts:95 |
| `stats` | \{ `inputTokenCount`: `number`; `latencyMs`: `number`; `outputTokenCount`: `number`; \} | ai/lib/types.d.ts:96 |
| `stats.inputTokenCount`? | `number` | ai/lib/types.d.ts:98 |
| `stats.latencyMs`? | `number` | ai/lib/types.d.ts:97 |
| `stats.outputTokenCount`? | `number` | ai/lib/types.d.ts:99 |
| `toolCalls`? | \{ `arguments`: `any`; `toolName`: `string`; \}[] | ai/lib/types.d.ts:101 |

## Defined in

ai/lib/types.d.ts:117
