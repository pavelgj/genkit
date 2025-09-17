/**
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { rtdbSessionStore } from '@genkit-ai/firebase';
import { getDatabaseWithUrl } from 'firebase-admin/database';
import { GenerateResponse, Message, z } from 'genkit/beta';
import { ai } from './genkit.js';

export const rtdbStore = rtdbSessionStore({
  db: getDatabaseWithUrl(
    'https://pavelj-genkit-test1-default-rtdb.firebaseio.com/'
  ),
  refPrefix: 'fitness',
});

export const FitnessState = z.object({
  questionnaire: z
    .record(
      z.string(),
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .optional(),
  fitnessPlan: z
    .object({
      dietPlan: z
        .object({
          breakfast: z.string().optional(),
          lunch: z.string().optional(),
          dinner: z.string().optional(),
          snacks: z.string().optional(),
        })
        .optional(),
      workoutPlan: z
        .object({
          monday: z
            .object({
              description: z.string().optional(),
              focus: z.string().optional(),
            })
            .optional(),
          tuesday: z
            .object({
              description: z.string().optional(),
              focus: z.string().optional(),
            })
            .optional(),
          wednesday: z
            .object({
              description: z.string().optional(),
              focus: z.string().optional(),
            })
            .optional(),
          thursday: z
            .object({
              description: z.string().optional(),
              focus: z.string().optional(),
            })
            .optional(),
          friday: z
            .object({
              description: z.string().optional(),
              focus: z.string().optional(),
            })
            .optional(),
          saturday: z
            .object({
              description: z.string().optional(),
              focus: z.string().optional(),
            })
            .optional(),
          sunday: z
            .object({
              description: z.string().optional(),
              focus: z.string().optional(),
            })
            .optional(),
        })
        .optional(),
    })
    .optional(),
});

ai.defineSchema('FitnessState', FitnessState);

const questionnaire = ai.prompt('questionnaire');
const router = ai.prompt('router');
const generator = ai.prompt('generator');

export const fitnessAdvisor = ai.defineAgentFlow({
  name: 'fitnessAdvisor',
  store: rtdbStore,
  stateSchema: FitnessState,
  async run({ messages, message, sendChunk, state }) {
    const choice = await runRouter(messages ?? [], message);

    switch (choice) {
      case 'questionnaire':
        return runQuestionnaire({
          messages: messages ?? [],
          message,
          sendChunk,
        });
      case 'generator':
        return runGenerator({
          messages: messages ?? [],
          message,
          sendChunk,
          state,
        });
      default:
        return new GenerateResponse({
          request: {
            messages: [...(messages ?? []), message],
          },
          message: {
            role: 'model',
            content: [{ text: 'Please clarify your request' }],
          },
        });
    }
  },
});

const patchStateTool = ai.defineTool(
  {
    name: 'patchStateTool',
    inputSchema: FitnessState.partial(),
    description:
      'Can be used to patch the current fitness advisor state. To remove a field, set undefined value. When updating questions, include full question object, not just the answer.',
  },
  async (input) => {
    const session = ai.currentSession();
    const currentState = session.state || {};
    const patch = {} as any;
    for (const key in input) {
      if (
        isObject((input as any)[key]) &&
        key in currentState &&
        isObject((currentState as any)[key])
      ) {
        patch[key] = mergeDeep((currentState as any)[key], (input as any)[key]);
      } else {
        patch[key] = (input as any)[key];
      }
    }
    await session.updateState(patch);
    return session.state;
  }
);

function filterToolMessages(messages: Message[]): Message[] {
  return messages.filter(
    (m) => m.role !== 'tool' && !m.content.find((c) => c.toolRequest)
  );
}

function filterInstructionMessages(messages: Message[]): Message[] {
  return messages.filter(
    (m) => !m.content.some((c) => c.text?.startsWith('<instructions>'))
  );
}

async function runRouter(messages: Message[], message: Message) {
  const routed = await router(
    {},
    {
      messages: [
        ...filterInstructionMessages(filterToolMessages(messages)),
        message,
      ],
    }
  );
  return routed.output?.choice;
}

async function runQuestionnaire({
  messages,
  message,
  sendChunk,
}: {
  messages: Message[];
  message: Message;
  sendChunk: (chunk: any) => void;
}) {
  const response = await questionnaire(
    {},
    {
      messages: [...filterInstructionMessages(messages), message],
      onChunk: sendChunk,
    }
  );
  response.messages.splice(response.messages.length - 2, 1);
  return response;
}

async function runGenerator({
  messages,
  message,
  sendChunk,
  state,
}: {
  messages: Message[];
  message: Message;
  sendChunk: (chunk: any) => void;
  state: z.infer<typeof FitnessState>;
}) {
  const response = await generator(
    {
      state,
    },
    {
      messages: [...filterInstructionMessages(messages), message],
      tools: [patchStateTool],
      onChunk: sendChunk,
    }
  );

  response.messages.splice(response.messages.length - 2, 1);

  return response;
}

const isObject = (item: any): item is Record<string, any> =>
  item && typeof item === 'object' && !Array.isArray(item);

function mergeDeep<T extends Record<string, any>>(
  target: T,
  source: Record<string, any>
): T {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          (output as Record<string, any>)[key] = mergeDeep(
            target[key],
            source[key]
          );
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}
