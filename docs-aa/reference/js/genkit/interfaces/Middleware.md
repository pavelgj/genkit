# Interface: Middleware()\<I, O\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` | `any` |
| `O` | `any` |

```ts
interface Middleware(req: I, next: (req?: I) => Promise<O>): Promise<O>
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `req` | `I` |
| `next` | (`req`?: `I`) => `Promise`\<`O`\> |

## Returns

`Promise`\<`O`\>

## Defined in

core/lib/action-BLstGZbj.d.ts:236
