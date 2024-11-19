# Function: run()

## run(name, func)

```ts
function run<T>(name: string, func: () => Promise<T>): Promise<T>
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `func` | () => `Promise`\<`T`\> |

### Returns

`Promise`\<`T`\>

### Defined in

core/lib/flow.d.ts:195

## run(name, input, func)

```ts
function run<T>(
   name: string, 
   input: any, 
func: (input?: any) => Promise<T>): Promise<T>
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `input` | `any` |
| `func` | (`input`?: `any`) => `Promise`\<`T`\> |

### Returns

`Promise`\<`T`\>

### Defined in

core/lib/flow.d.ts:196
