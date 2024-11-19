# Type Alias: noUnrecognized\<Obj, Shape\>

```ts
type noUnrecognized<Obj, Shape>: { [k in keyof Obj]: k extends keyof Shape ? Obj[k] : never };
```

## Type Parameters

| Type Parameter |
| ------ |
| `Obj` *extends* `object` |
| `Shape` *extends* `object` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:531
