# Class: FlowServer

Flow server exposes registered flows as HTTP endpoints.

This is for use in production environments.

## Constructors

### new FlowServer()

```ts
new FlowServer(registry: Registry, options: FlowServerOptions): FlowServer
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `registry` | `Registry` |
| `options` | [`FlowServerOptions`](../interfaces/FlowServerOptions.md) |

#### Returns

[`FlowServer`](FlowServer.md)

#### Defined in

core/lib/flow.d.ts:173

## Methods

### start()

```ts
start(): Promise<void>
```

Starts the server and adds it to the list of running servers to clean up on exit.

#### Returns

`Promise`\<`void`\>

#### Defined in

core/lib/flow.d.ts:177

***

### stop()

```ts
stop(): Promise<void>
```

Stops the server and removes it from the list of running servers to clean up on exit.

#### Returns

`Promise`\<`void`\>

#### Defined in

core/lib/flow.d.ts:181

***

### stopAll()

```ts
static stopAll(): Promise<void[]>
```

Stops all running servers.

#### Returns

`Promise`\<`void`[]\>

#### Defined in

core/lib/flow.d.ts:185
