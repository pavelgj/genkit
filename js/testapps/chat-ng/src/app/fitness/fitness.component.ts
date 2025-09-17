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
  type MessageData,
} from 'genkit/model';

const sessionId = '12345678';
const url = 'http://localhost:3400/fitnessAdvisor';

interface FitnessState {
  questionnaire?: Record<string, { question: string; answer: string }>;
  fitnessPlan?: {
    dietPlan?: {
      breakfast?: string;
      lunch?: string;
      dinner?: string;
      snacks?: string;
    };
    workoutPlan?: {
      [day: string]: {
        description?: string;
        focus?: string;
      };
    };
  };
}

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  imports: [CommonModule, FormsModule, SafeHtmlPipe],
  styleUrl: './fitness.component.scss',
  standalone: true,
})
export class FitnessComponent {
  @HostBinding('class.dark-theme')
  isDarkMode = true;
  title = 'fitness-ng';
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  sessionClient: SessionClient;
  session?: Session;
  text = 'I want to get in shape';
  chunks?: GenerateResponseChunkData[] = undefined;
  state?: FitnessState;

  constructor() {
    this.sessionClient = defineSessionClient({
      url,
    });
    this.loadSession();
  }

  async loadSession() {
    this.session = await this.sessionClient.loadSession(sessionId);
    this.state = this.session.state as FitnessState;
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
    this.text = '';
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
    this.state = this.session?.state as FitnessState;
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

  // Helper to get questionnaire items as an array
  get questionnaireItems() {
    if (!this.state?.questionnaire) {
      return [];
    }
    return Object.entries(this.state.questionnaire).map(([key, value]) => ({
      key,
      question: value.question,
      answer: value.answer,
    }));
  }

  // Helper to get workout plan items as an array
  get workoutPlanItems() {
    if (!this.state?.fitnessPlan?.workoutPlan) {
      return [];
    }
    const daysOfWeek = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ];
    const workoutPlan = this.state.fitnessPlan.workoutPlan;
    return daysOfWeek.map((day) => ({
      day,
      plan: workoutPlan[day],
    }));
  }

  get filteredMessages(): MessageData[] {
    if (!this.session?.messages) {
      return [];
    }
    return this.session.messages.filter((message) => {
      if (message.role === 'tool') return false;
      if (message.content.some((part) => part.toolRequest)) return false;
      if (
        message.content.some((part) => part.text?.startsWith('<instructions'))
      )
        return false;
      return true;
    });
  }
}
