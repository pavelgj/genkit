[**genkit**](../../README.md)

***

[Genkit JS API reference](../../../README.md) / [genkit](../../README.md) / [registry](../README.md) / Registry

# Class: Registry

The registry is used to store and lookup actions, trace stores, flow state stores, plugins, and schemas.

## Constructors

### new Registry()

> **new Registry**(`parent`?): [`Registry`](Registry.md)

#### Parameters

##### parent?

[`Registry`](Registry.md)

#### Returns

[`Registry`](Registry.md)

#### Defined in

core/lib/action-Bp720DPN.d.ts:161

## Properties

### asyncStore

> `readonly` **asyncStore**: `AsyncStore`

#### Defined in

core/lib/action-Bp720DPN.d.ts:160

***

### parent?

> `optional` **parent**: [`Registry`](Registry.md)

#### Defined in

core/lib/action-Bp720DPN.d.ts:154

## Methods

### initializeAllPlugins()

> **initializeAllPlugins**(): `Promise`\<`void`\>

Initializes all plugins in the registry.

#### Returns

`Promise`\<`void`\>

#### Defined in

core/lib/action-Bp720DPN.d.ts:188

***

### initializePlugin()

> **initializePlugin**(`name`): `Promise`\<`void` \| `InitializedPlugin`\>

Initializes a plugin already registered with [registerPluginProvider](Registry.md#registerpluginprovider).

#### Parameters

##### name

`string`

The name of the plugin to initialize.

#### Returns

`Promise`\<`void` \| `InitializedPlugin`\>

The plugin.

#### Defined in

core/lib/action-Bp720DPN.d.ts:206

***

### listActions()

> **listActions**(): `Promise`\<`ActionsRecord`\>

Returns all actions in the registry.

#### Returns

`Promise`\<`ActionsRecord`\>

All actions in the registry.

#### Defined in

core/lib/action-Bp720DPN.d.ts:184

***

### listValues()

> **listValues**\<`T`\>(`type`): `Promise`\<`Record`\<`string`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### type

`string`

#### Returns

`Promise`\<`Record`\<`string`, `T`\>\>

#### Defined in

core/lib/action-Bp720DPN.d.ts:215

***

### lookupAction()

> **lookupAction**\<`I`, `O`, `R`\>(`key`): `Promise`\<`R`\>

Looks up an action in the registry.

#### Type Parameters

• **I** *extends* [`ZodType`](../../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\>

• **O** *extends* [`ZodType`](../../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\>

• **R** *extends* [`Action`](../../type-aliases/Action.md)\<`I`, `O`, [`ZodTypeAny`](../../namespaces/z/type-aliases/ZodTypeAny.md)\>

#### Parameters

##### key

`string`

The key of the action to lookup.

#### Returns

`Promise`\<`R`\>

The action.

#### Defined in

core/lib/action-Bp720DPN.d.ts:173

***

### lookupPlugin()

> **lookupPlugin**(`name`): `undefined` \| `PluginProvider`

Looks up a plugin.

#### Parameters

##### name

`string`

The name of the plugin to lookup.

#### Returns

`undefined` \| `PluginProvider`

The plugin provider.

#### Defined in

core/lib/action-Bp720DPN.d.ts:200

***

### lookupSchema()

> **lookupSchema**(`name`): `undefined` \| [`Schema`](../interfaces/Schema.md)

Looks up a schema.

#### Parameters

##### name

`string`

The name of the schema to lookup.

#### Returns

`undefined` \| [`Schema`](../interfaces/Schema.md)

The schema.

#### Defined in

core/lib/action-Bp720DPN.d.ts:221

***

### lookupValue()

> **lookupValue**\<`T`\>(`type`, `key`): `Promise`\<`undefined` \| `T`\>

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### type

`string`

##### key

`string`

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Defined in

core/lib/action-Bp720DPN.d.ts:214

***

### registerAction()

> **registerAction**\<`I`, `O`\>(`type`, `action`): `void`

Registers an action in the registry.

#### Type Parameters

• **I** *extends* [`ZodType`](../../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `I`\>

• **O** *extends* [`ZodType`](../../namespaces/z/classes/ZodType.md)\<`any`, `any`, `any`, `O`\>

#### Parameters

##### type

[`ActionType`](../type-aliases/ActionType.md)

The type of the action to register.

##### action

[`Action`](../../type-aliases/Action.md)\<`I`, `O`, [`ZodTypeAny`](../../namespaces/z/type-aliases/ZodTypeAny.md)\>

The action to register.

#### Returns

`void`

#### Defined in

core/lib/action-Bp720DPN.d.ts:179

***

### registerPluginProvider()

> **registerPluginProvider**(`name`, `provider`): `void`

Registers a plugin provider. This plugin must be initialized before it can be used by calling [initializePlugin](Registry.md#initializeplugin) or [initializeAllPlugins](Registry.md#initializeallplugins).

#### Parameters

##### name

`string`

The name of the plugin to register.

##### provider

`PluginProvider`

The plugin provider.

#### Returns

`void`

#### Defined in

core/lib/action-Bp720DPN.d.ts:194

***

### registerSchema()

> **registerSchema**(`name`, `data`): `void`

Registers a schema.

#### Parameters

##### name

`string`

The name of the schema to register.

##### data

[`Schema`](../interfaces/Schema.md)

The schema to register (either a Zod schema or a JSON schema).

#### Returns

`void`

#### Defined in

core/lib/action-Bp720DPN.d.ts:212

***

### registerValue()

> **registerValue**(`type`, `name`, `value`): `void`

#### Parameters

##### type

`string`

##### name

`string`

##### value

`any`

#### Returns

`void`

#### Defined in

core/lib/action-Bp720DPN.d.ts:213

***

### withParent()

> `static` **withParent**(`parent`): [`Registry`](Registry.md)

Creates a new registry overlaid onto the provided registry.

#### Parameters

##### parent

[`Registry`](Registry.md)

The parent registry.

#### Returns

[`Registry`](Registry.md)

The new overlaid registry.

#### Defined in

core/lib/action-Bp720DPN.d.ts:167
