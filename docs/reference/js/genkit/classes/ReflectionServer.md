# Class: ReflectionServer

Reflection server exposes an API for inspecting and interacting with Genkit in development.

This is for use in development environments.

## Constructors

### new ReflectionServer()

```ts
new ReflectionServer(registry: Registry, options?: ReflectionServerOptions): ReflectionServer
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `registry` | `Registry` |
| `options`? | [`ReflectionServerOptions`](../interfaces/ReflectionServerOptions.md) |

#### Returns

[`ReflectionServer`](ReflectionServer.md)

#### Defined in

core/lib/reflection.d.ts:74

## Methods

### findPort()

```ts
findPort(): Promise<number>
```

Finds a free port to run the server on based on the original chosen port and environment.

#### Returns

`Promise`\<`number`\>

#### Defined in

core/lib/reflection.d.ts:78

***

### start()

```ts
start(): Promise<void>
```

Starts the server.

The server will be registered to be shut down on process exit.

#### Returns

`Promise`\<`void`\>

#### Defined in

core/lib/reflection.d.ts:84

***

### stop()

```ts
stop(): Promise<void>
```

Stops the server and removes it from the list of running servers to clean up on exit.

#### Returns

`Promise`\<`void`\>

#### Defined in

core/lib/reflection.d.ts:88

***

### stopAll()

```ts
static stopAll(): Promise<void[]>
```

Stops all running reflection servers.

#### Returns

`Promise`\<`void`[]\>

#### Defined in

core/lib/reflection.d.ts:100
