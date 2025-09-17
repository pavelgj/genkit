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

import {
  Action,
  action,
  ActionContext,
  GenkitError,
  StreamingCallback,
  z,
} from '@genkit-ai/core';
import { Registry } from '@genkit-ai/core/registry';
import { v4 as uuidv4 } from 'uuid';
import { MAIN_THREAD } from '../chat.js';
import { GenerateResponse } from '../generate.js';
import { Message } from '../message.js';
import {
  GenerateResponseChunkData,
  GenerateResponseData,
  MessageData,
} from '../model.js';
import { Session } from '../session.js';
import { AgentFlowStore, InMemoryAgentFlowStore } from './store.js';
import {
  AgentFlowEventSchema,
  AgentFlowInputSchema,
  AgentFlowOutput,
  AgentFlowOutputSchema,
  ClientState,
} from './types.js';
import { AsyncLazyTaskQueue } from './utils.js';

export interface AgentFlowOptions<
  StateSchema extends z.ZodTypeAny = z.ZodTypeAny,
> {
  name: string;
  // Schema for the state
  stateSchema?: StateSchema;
  // Session store implementatino. If not set, the session is client-managed.
  store?: AgentFlowStore<z.infer<StateSchema>>;
  // Transforms the session state before sending to the client.
  toClient?: ToClientTransformer<z.infer<StateSchema>>;
  // Transforms the session state recieved from the client.
  fromClient?: FromClientTransformer<z.infer<StateSchema>>;
  // Custom send handler. Updates the session and returns void,
  // or returns a GenerateResponse which will override `session.messages`.
  run?: (
    opts: AgentFlowSendOptions<z.infer<StateSchema>>
  ) => Promise<void> | Promise<GenerateResponse>;
}

export interface AgentFlowSendOptions<S> {
  message: Message;
  messages?: Message[];
  //resume: < TODO: add resume
  state: S;
  session: Session<S>;
  sendChunk: StreamingCallback<GenerateResponseChunkData>;
  updateState: (s: S) => Promise<void>;
  streamingRequested: boolean;
  context?: ActionContext;
}

export interface ToClientTransformer<State> {
  // Transforms state. If not specified, state is passed through as is.
  state?: (state: Partial<State>) => Partial<State>;
  // Transforms messages. If not specified, message are passed through as is.
  messages?: (messages: MessageData[]) => MessageData[];
}

export interface FromClientTransformer<CS, SS = CS> {
  // Transforms state patch recieved from the client.
  // If returns `undefined`, the patch is ignored.
  // If not specified the patch is applies as is.
  statePatch?: (state: Partial<CS>) => Partial<SS> | undefined;
  // Transforms the send request. If not specified, request is passed through as is.
  request?: (messages?: ClientState<CS>) => ClientState<SS>;
}

export function defineAgentFlow<S extends z.ZodTypeAny = z.ZodTypeAny>(
  registry: Registry,
  opts: AgentFlowOptions<S>
): Action<
  typeof AgentFlowInputSchema,
  typeof AgentFlowOutputSchema,
  typeof AgentFlowEventSchema
> {
  const a = action(
    {
      actionType: 'agent-flow',
      name: opts.name,
      inputSchema: AgentFlowInputSchema,
      outputSchema: AgentFlowOutputSchema,
      streamSchema: AgentFlowEventSchema,
    },
    async (input, { streamingRequested, sendChunk, abortSignal, context }) => {
      console.log(
        ` - - - - - - -- chat flow `,
        streamingRequested,
        JSON.stringify(input)
      );
      if (input.send) {
        return await handleSend({
          registry,
          opts,
          input,
          streamingRequested,
          sendChunk,
          context,
        });
      }
      if (input.reconnect) {
        return await handleReconnect({
          store: opts.store!,
          input,
          streamingRequested,
          sendChunk,
          abortSignal,
        });
      }
      if (input.state) {
        return await handleState({
          store: opts.store!,
          input,
        });
      }
      throw new GenkitError({
        status: 'UNIMPLEMENTED',
        message: `Unable to handle request: ${input}`,
      });
    }
  ) as Action<
    typeof AgentFlowInputSchema,
    typeof AgentFlowOutputSchema,
    typeof AgentFlowEventSchema
  >;

  registry.registerAction('agent-flow', a);

  return a;
}

async function handleSend<S extends z.ZodTypeAny>({
  registry,
  opts,
  input,
  streamingRequested,
  sendChunk,
  context,
}: {
  registry: Registry;
  opts: AgentFlowOptions<S>;
  input: z.infer<typeof AgentFlowInputSchema>;
  streamingRequested: boolean;
  sendChunk: StreamingCallback<z.infer<typeof AgentFlowEventSchema>>;
  context?: ActionContext;
}): Promise<z.infer<typeof AgentFlowOutputSchema>> {
  if (!input.send) throw new Error('send envelope message not set');

  const sessionId = input.send.sessionId ?? uuidv4();

  const store = opts.store ?? new InMemoryAgentFlowStore();
  if (opts.store) {
    await opts.store.resetStream(sessionId!);
  }

  const session = await getSession<S>(registry, store, sessionId);
  await store.setStatus(sessionId, { running: true });
  sendChunk({
    status: {
      running: true,
    },
  });

  let genResp: GenerateResponseData;
  let finalMessages: MessageData[];
  let successfullyUpdatedState = false;
  try {
    if (opts.run) {
      const message = new Message({
        role: 'user',
        content: input.send.prompt,
      });
      const taskQueue = new AsyncLazyTaskQueue();

      const runResponse = await session.run(() =>
        opts.run!({
          message,
          state: session.state,
          session,
          messages: (session.getMessages() ?? []).map((m) => new Message(m)),
          sendChunk: (chunk: GenerateResponseChunkData) => {
            taskQueue.enqueueLazy(async () => {
              if (store) {
                await store.appendEvent(input!.send!.sessionId!, {
                  chunk,
                });
              }
              sendChunk({
                chunk,
              });
            });
          },
          async updateState(s) {
            sendChunk({
              statePatch: s,
            });
            return store.patchState(sessionId, s);
          },
          context,
          streamingRequested,
        })
      );
      await taskQueue.merge();

      console.log(' - - - 1 ' + !!runResponse);

      if (runResponse && runResponse instanceof GenerateResponse) {
        genResp = runResponse.toJSON();
        finalMessages = runResponse.messages;
        console.log(
          ' - - - - finalMessages: ',
          JSON.stringify(finalMessages, undefined, 2)
        );

        if (store) {
          await store.setMessages(sessionId, MAIN_THREAD, finalMessages);
        }
      } else {
        const lastMessages = session.toJSON()?.threads?.[MAIN_THREAD];
        if (!lastMessages) {
          throw new Error('oops... session does not have messages...');
        }
        genResp = { message: lastMessages.at(-1) };
        finalMessages = lastMessages;
      }
    } else {
      const streamingCallback = streamingRequested
        ? (chunk: GenerateResponseChunkData) => {
            if (store) {
              store.appendEvent(input!.send!.sessionId!, {
                chunk,
              });
            }
            sendChunk({
              chunk,
            });
          }
        : undefined;
      const sendResp = await session.chat().send({
        prompt: input.send.prompt,
        onChunk: streamingCallback,
      });
      genResp = sendResp.toJSON();
      finalMessages = sendResp.messages;
    }
    const response = {
      sessionId: sessionId,
      response: genResp,
      state: session.state,
      messages: finalMessages,
    } as AgentFlowOutput;
    await store.setStatus(sessionId, { running: false });
    sendChunk({
      status: {
        running: false,
      },
    });
    successfullyUpdatedState = true;
    return response;
  } finally {
    if (!successfullyUpdatedState) {
      await store.setStatus(sessionId, { running: false });
    }
  }
}

async function handleReconnect<S extends z.ZodTypeAny>({
  store,
  input,
  streamingRequested,
  sendChunk,
  abortSignal,
}: {
  store: AgentFlowStore<S>;
  input: z.infer<typeof AgentFlowInputSchema>;
  streamingRequested: boolean;
  sendChunk: StreamingCallback<z.infer<typeof AgentFlowEventSchema>>;
  abortSignal: AbortSignal;
}): Promise<z.infer<typeof AgentFlowOutputSchema>> {
  if (!input.reconnect) throw new Error('reconnect envelope message not set');
  if (!streamingRequested)
    throw new GenkitError({
      status: 'INVALID_ARGUMENT',
      message: 'reconnect only works in streaming mode',
    });

  if (!store)
    throw new GenkitError({
      status: 'FAILED_PRECONDITION',
      message:
        'reconnect is only supported for server managed session (`store` options not set on chat flow)',
    });

  if (abortSignal.aborted) return { sessionId: input.reconnect.sessionId };

  let resolver;
  const p = new Promise<z.infer<typeof AgentFlowOutputSchema>>((r) => {
    resolver = r;
    return { sessionId: input.reconnect!.sessionId };
  });

  const unsbscr = store.subscribe(
    input.reconnect.sessionId,
    (event) => {
      if (event.messages) {
        sendChunk({ messages: event.messages[MAIN_THREAD] });
      } else if (event.chunk) {
        sendChunk({ chunk: event.chunk });
      } else if (event.statePatch) {
        sendChunk({ statePatch: event.statePatch });
      } else if (event.status) {
        sendChunk({ status: event.status });
      }
      if (event.status?.running === false) {
        unsbscr();
        // TODO: this needs to resolve with a response as well.
        resolver({ sessionId: input.reconnect!.sessionId });
      }
    },
    {
      after: input.reconnect.after,
    }
  );

  abortSignal.onabort = () => {
    unsbscr();
    resolver();
  };
  await p;
  return {
    sessionId: input.reconnect.sessionId,
  };
}

async function handleState<S extends z.ZodTypeAny>({
  store,
  input,
}: {
  store: AgentFlowStore<S>;
  input: z.infer<typeof AgentFlowInputSchema>;
}): Promise<z.infer<typeof AgentFlowOutputSchema>> {
  if (!input.state) throw new Error('subscribe envelope message not set');
  if (!store)
    throw new GenkitError({
      status: 'FAILED_PRECONDITION',
      message:
        'state request only supported for server managed session (`store` options not set on chat flow)',
    });

  const state = await store.get(input.state.sessionId);

  return {
    sessionId: input.state.sessionId,
    state: state?.state,
    messages: state?.threads?.[MAIN_THREAD],
    status: {
      running: state?.status?.running === true,
    },
  };
}

async function getSession<S extends z.ZodTypeAny = z.ZodTypeAny>(
  registry: Registry,
  store: AgentFlowStore<S>,
  sessionId: string
): Promise<Session<z.infer<S>>> {
  return await Session.load(registry, {
    sessionId,
    store,
  });
}
