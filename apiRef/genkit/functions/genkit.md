# Function: genkit()

```ts
function genkit(options: GenkitOptions): Genkit
```

Initializes Genkit with a set of options.

This will create a new Genkit registry, register the provided plugins, stores, and other configuration. This
should be called before any flows are registered.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GenkitOptions`](../interfaces/GenkitOptions.md) |

## Returns

[`Genkit`](../classes/Genkit.md)

## Defined in

[genkit/src/genkit.ts:1074](https://github.com/firebase/genkit/blob/86a563873fbb9affe6f57f066fad8793cf01ed99/js/genkit/src/genkit.ts#L1074)
