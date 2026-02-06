import { computed, Injectable, signal } from '@angular/core';
import { Story } from 'inkjs';
import { Choice } from 'inkjs/engine/Choice';

import { InkLine } from './ink.interface';

@Injectable({
  providedIn: 'root',
})
export class InkService {
  private story!: Story;
  private lineId!: number;

  // state
  readonly $lines = signal<InkLine[]>([]);
  readonly $choices = signal<Choice[]>([]);

  // derived
  readonly $hasChoices = computed(() => this.$choices().length > 0);

  init(storyContent: string) {
    this.story = new Story(storyContent);
    this.$lines.set([]);
    this.$choices.set([]);
    this.lineId = 0;
    this.flush();
  }

  choose(index: number) {
    this.story.ChooseChoiceIndex(index);
    this.flush();
  }

  save(): string {
    return this.story.state.toJson();
  }

  load(json: string) {
    this.story.state.LoadJson(json);
    this.flush();
  }

  private flush() {
    const newLines: InkLine[] = [];

    while (this.story.canContinue) {
      const next = this.story.Continue();
      if (next) {
        newLines.push({
          id: ++this.lineId,
          text: next.trim(),
        });
      }
    }

    this.$lines.update((lines) => [...lines, ...newLines]);
    this.$choices.set(this.story.currentChoices);
  }
}
