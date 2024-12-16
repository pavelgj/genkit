[**genkit**](../../../README.md)

***

[Genkit JS API reference](../../../../README.md) / [genkit](../../../README.md) / [/](../../../README.md) / [z](../README.md) / FilterEnum

# Type Alias: FilterEnum\<Values, ToExclude\>

> **FilterEnum**\<`Values`, `ToExclude`\>: `Values` *extends* [] ? [] : `Values` *extends* [infer Head, `...(infer Rest)`] ? `Head` *extends* `ToExclude` ? [`FilterEnum`](FilterEnum.md)\<`Rest`, `ToExclude`\> : [`Head`, `...FilterEnum<Rest, ToExclude>`] : `never`

## Type Parameters

• **Values**

• **ToExclude**

## Defined in

node\_modules/.pnpm/zod@3.23.8/node\_modules/zod/lib/types.d.ts:772
