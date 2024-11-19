# Function: makeIssue()

```ts
function makeIssue(params: {
  data: any;
  errorMaps: ZodErrorMap[];
  issueData: IssueData;
  path: (string | number)[];
 }): ZodIssue
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `object` |
| `params.data` | `any` |
| `params.errorMaps` | [`ZodErrorMap`](../type-aliases/ZodErrorMap.md)[] |
| `params.issueData` | [`IssueData`](../type-aliases/IssueData.md) |
| `params.path` | (`string` \| `number`)[] |

## Returns

[`ZodIssue`](../type-aliases/ZodIssue.md)

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/helpers/parseUtil.d.ts:3
