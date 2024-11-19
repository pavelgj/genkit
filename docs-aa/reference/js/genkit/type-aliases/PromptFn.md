# Type Alias: PromptFn()\<I, CustomOptionsSchema\>

```ts
type PromptFn<I, CustomOptionsSchema>: (input: TypeOf<I>) => Promise<GenerateRequest<CustomOptionsSchema>>;
```

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
| `I` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |
| `CustomOptionsSchema` *extends* [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) | [`ZodTypeAny`](../namespaces/z/type-aliases/ZodTypeAny.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TypeOf`](../namespaces/z/type-aliases/TypeOf.md)\<`I`\> |

## Returns

`Promise`\<[`GenerateRequest`](../interfaces/GenerateRequest.md)\<`CustomOptionsSchema`\>\>

## Defined in

ai/lib/generate-C8Qor0QX.d.ts:24
