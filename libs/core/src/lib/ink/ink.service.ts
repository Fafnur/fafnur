import { computed, inject, Injectable, signal } from '@angular/core';
import { Story } from 'inkjs';
import { Choice } from 'inkjs/engine/Choice';

import { InkLine } from './ink.interface';
import { InkStorage } from './ink.storage';
import store from './story.ink.json';

@Injectable({
  providedIn: 'root',
})
export class InkService {
  private readonly inkStorage = inject(InkStorage);

  private story = new Story(store);
  private lineId = 0;

  // state
  readonly $lines = signal<InkLine[]>([]);
  readonly $choices = signal<Choice[]>([]);
  readonly $loaded = signal<boolean>(false);

  // derived
  readonly $hasChoices = computed(() => this.$choices().length > 0);

  load() {
    const state = this.inkStorage.getState();
    if (state.story) {
      this.story.state.LoadJson(state.story);
    }
    this.lineId = state.lineId;
    this.$lines.set(state.lines);
    this.$choices.set(this.story.currentChoices);
    this.flush();
    this.$loaded.set(true);
  }

  choose(index: number) {
    this.story.ChooseChoiceIndex(index);
    this.flush();
  }

  reset(): void {
    this.$loaded.set(false);
    void this.inkStorage.resetState();
    this.story = new Story(store);
    this.load();
  }

  flush(): void {
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
    this.inkStorage.saveState({ story: this.story.state.toJson(), lines: this.$lines(), lineId: this.lineId });
  }
}
