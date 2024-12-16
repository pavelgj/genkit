**@genkit-ai/googleai**

***

[Genkit JS API reference](../../README.md) / @genkit-ai/googleai

# Google Gemini Developer API plugin for Genkit

## Installing the plugin

```bash
npm i --save @genkit-ai/googleai
```

## Using the plugin

```ts
import { genkit } from 'genkit';
import { googleAI, gemini } from '@genkit-ai/googleai';

const ai = genkit({
  plugins: [googleAI()],
  model: gemini('gemini-1.5-flash'),
});

async () => {
  const { text } = ai.generate('hi Gemini!');
  console.log(text);
};
```

The sources for this package are in the main [Genkit](https://github.com/firebase/genkit) repo. Please file issues and pull requests against that repo.

Usage information and reference details can be found in [Genkit documentation](https://firebase.google.com/docs/genkit).

License: Apache 2.0

## References

### default

Renames and re-exports [googleAI](functions/googleAI.md)

## Interfaces

- [PluginOptions](interfaces/PluginOptions.md)

## Type Aliases

- [GeminiConfig](type-aliases/GeminiConfig.md)

## Variables

- [gemini10Pro](variables/gemini10Pro.md)
- [gemini15Flash](variables/gemini15Flash.md)
- [gemini15Flash8b](variables/gemini15Flash8b.md)
- [gemini15Pro](variables/gemini15Pro.md)
- [gemini20FlashExp](variables/gemini20FlashExp.md)
- [textEmbeddingGecko001](variables/textEmbeddingGecko001.md)

## Functions

- [gemini](functions/gemini.md)
- [googleAI](functions/googleAI.md)
