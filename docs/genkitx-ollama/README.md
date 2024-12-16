**genkitx-ollama**

***

[Genkit JS API reference](../README.md) / genkitx-ollama

# Ollama plugin for Genkit

## Installing the plugin

```bash
npm i --save genkitx-ollama
```

## Using the plugin

```ts
import { genkit } from 'genkit';
import { ollama } from 'genkitx-ollama';

const ai = genkit({
  plugins: [
    ollama({
      models: [{ name: 'gemma' }],
      serverAddress: 'http://127.0.0.1:11434', // default local address
    }),
  ],
});

(async () => {
  const { text } = ai.generate({prompt: 'hi Gemini!', model: 'ollama/gemma');
  console.log(text);
});
```

The sources for this package are in the main [Genkit](https://github.com/firebase/genkit) repo. Please file issues and pull requests against that repo.

Usage information and reference details can be found in [Genkit documentation](https://firebase.google.com/docs/genkit).

License: Apache 2.0

## Interfaces

- [OllamaPluginParams](interfaces/OllamaPluginParams.md)

## Functions

- [ollama](functions/ollama.md)
