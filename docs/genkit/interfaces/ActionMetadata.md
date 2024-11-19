# Interface: ActionMetadata\<I, O, M\>

Copyright 2024 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | - |
| `O` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | - |
| `M` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `actionType?` | `ActionType` | core/lib/action-BLstGZbj.d.ts:209 |
| `description?` | `string` | core/lib/action-BLstGZbj.d.ts:211 |
| `inputJsonSchema?` | `any` | core/lib/action-BLstGZbj.d.ts:213 |
| `inputSchema?` | `I` | core/lib/action-BLstGZbj.d.ts:212 |
| `metadata?` | `M` | core/lib/action-BLstGZbj.d.ts:216 |
| `name` | `string` | core/lib/action-BLstGZbj.d.ts:210 |
| `outputJsonSchema?` | `any` | core/lib/action-BLstGZbj.d.ts:215 |
| `outputSchema?` | `O` | core/lib/action-BLstGZbj.d.ts:214 |
