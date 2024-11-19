# Interface: ModelReference\<CustomOptions\>

## Type Parameters

| Type Parameter |
| ------ |
| `CustomOptions` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `config?` | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\> | ai/lib/model.d.ts:7178 |
| `configSchema?` | `CustomOptions` | ai/lib/model.d.ts:7175 |
| `info?` | \{ `label`: `string`; `stage`: \| `"featured"` \| `"stable"` \| `"unstable"` \| `"legacy"` \| `"deprecated"`; `supports`: \{ `contentType`: `string`[]; `context`: `boolean`; `media`: `boolean`; `multiturn`: `boolean`; `output`: `string`[]; `systemRole`: `boolean`; `tools`: `boolean`; \}; `versions`: `string`[]; \} | ai/lib/model.d.ts:7176 |
| `info.label?` | `string` | ai/lib/model.d.ts:882 |
| `info.stage?` | \| `"featured"` \| `"stable"` \| `"unstable"` \| `"legacy"` \| `"deprecated"` | ai/lib/model.d.ts:892 |
| `info.supports?` | \{ `contentType`: `string`[]; `context`: `boolean`; `media`: `boolean`; `multiturn`: `boolean`; `output`: `string`[]; `systemRole`: `boolean`; `tools`: `boolean`; \} | ai/lib/model.d.ts:883 |
| `info.supports.contentType?` | `string`[] | ai/lib/model.d.ts:887 |
| `info.supports.context?` | `boolean` | ai/lib/model.d.ts:890 |
| `info.supports.media?` | `boolean` | ai/lib/model.d.ts:886 |
| `info.supports.multiturn?` | `boolean` | ai/lib/model.d.ts:888 |
| `info.supports.output?` | `string`[] | ai/lib/model.d.ts:885 |
| `info.supports.systemRole?` | `boolean` | ai/lib/model.d.ts:889 |
| `info.supports.tools?` | `boolean` | ai/lib/model.d.ts:884 |
| `info.versions?` | `string`[] | ai/lib/model.d.ts:881 |
| `name` | `string` | ai/lib/model.d.ts:7174 |
| `version?` | `string` | ai/lib/model.d.ts:7177 |

## Methods

### withConfig()

```ts
withConfig(cfg: TypeOf<CustomOptions>): ModelReference<CustomOptions>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cfg` | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`CustomOptions`\> |

#### Returns

[`ModelReference`](ModelReference.md)\<`CustomOptions`\>

#### Defined in

ai/lib/model.d.ts:7179

***

### withVersion()

```ts
withVersion(version: string): ModelReference<CustomOptions>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `version` | `string` |

#### Returns

[`ModelReference`](ModelReference.md)\<`CustomOptions`\>

#### Defined in

ai/lib/model.d.ts:7180
