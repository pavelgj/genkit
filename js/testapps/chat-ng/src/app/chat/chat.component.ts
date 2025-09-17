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

import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from '../safe-html.pipe';
import {
  Session,
  SessionClient,
  defineSessionClient,
} from 'genkit/beta/client';
import {
  type GenerateResponseChunkData,
  type GenerateResponseData,
} from 'genkit/model';

const sessionId = '1234567890112151111121a';
const url = 'http://localhost:3400/generateChatFlow';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  imports: [CommonModule, FormsModule, SafeHtmlPipe],
  styleUrl: './chat.component.scss',
  standalone: true,
})
export class ChatComponent {
  @HostBinding('class.dark-theme')
  isDarkMode = true;
  title = 'chat-ng';
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  sessionClient: SessionClient;
  session?: Session;
  lastResponse?: GenerateResponseData;
  text = 'hi';
  chunks?: GenerateResponseChunkData[] = undefined;

  constructor() {
    this.sessionClient = defineSessionClient({
      url,
    });
    this.loadSession();
  }

  async loadSession() {
    this.session = await this.sessionClient.loadSession(sessionId);
    if (this.session.isRunning) {
      const { stream, output } = this.session.reconnect();
      await this.handleStream(stream, output);
    }
    this.scrollToBottom();
  }

  async sendIt() {
    if (!this.session) return;
    const { stream, output } = this.session.sendStream({
      prompt: [{ text: this.text }],
    });
    await this.handleStream(stream, output);
    this.chunks = undefined;
  }

  private async handleStream(
    stream: AsyncIterable<GenerateResponseChunkData>,
    output: Promise<GenerateResponseData>
  ) {
    this.chunks = [];
    for await (const chunk of stream) {
      this.chunks.push(chunk);
      this.scrollToBottom();
    }
    this.lastResponse = await output;
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.messagesContainer.nativeElement.scrollTop =
          this.messagesContainer.nativeElement.scrollHeight;
      } catch (err) {
        console.error(err);
      }
    }, 0);
  }

}
