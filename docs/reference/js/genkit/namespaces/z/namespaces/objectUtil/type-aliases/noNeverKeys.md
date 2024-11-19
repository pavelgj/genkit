# Type Alias: noNeverKeys\<T\>

```ts
type noNeverKeys<T>: { [k in keyof T]: [T[k]] extends [never] ? never : k }[keyof T];
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/util.d.ts:45
