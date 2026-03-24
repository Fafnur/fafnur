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

  // state
  readonly $lineId = signal<number>(0);
  readonly $blockId = signal<number>(0);
  readonly $lines = signal<InkLine[]>([]);
  readonly $choices = signal<Choice[]>([]);
  readonly $loaded = signal<boolean>(false);
  readonly $currentView = signal<string>('');

  readonly $historyBlocks = computed<InkLine[][]>(() => {
    const lines = this.$lines().filter((line) => line.blockId < this.$blockId());

    const map = new Map<number, InkLine[]>();

    for (const item of lines) {
      if (!map.has(item.blockId)) {
        map.set(item.blockId, []);
      }

      map.get(item.blockId)?.push(item);
    }

    return Array.from(map.values());
  });

  readonly $currentLines = computed(() => this.$lines().filter((line) => line.blockId === this.$blockId()));

  // derived
  readonly $hasChoices = computed(() => this.$choices().length > 0);

  load() {
    const state = this.inkStorage.getState();
    if (state.story) {
      this.story.state.LoadJson(state.story);
    }
    this.$lineId.set(state.lineId);
    this.$blockId.set(state.blockId);
    this.$lines.set(state.lines);
    this.$choices.set(this.story.currentChoices);
    this.$currentView.set(this.story.state.previousPathString?.split('.')[0] ?? '');
    this.flush();
    this.$loaded.set(true);
  }

  choose(index: number) {
    this.$blockId.set(this.$blockId() + 1);
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

    let first = true;
    while (this.story.canContinue) {
      const next = this.story.Continue();

      if (next) {
        this.$lineId.set(this.$lineId() + 1);
        newLines.push({
          id: this.$lineId(),
          text: next.trim(),
          type: first && this.$loaded() ? 'player' : 'narrator',
          blockId: first && this.$loaded() ? this.$blockId() - 1 : this.$blockId(),
        });
      }
      first = false;
    }

    this.$lines.update((lines) => [...lines, ...newLines]);
    this.$choices.set(this.story.currentChoices);
    this.inkStorage.saveState({
      story: this.story.state.toJson(),
      lines: this.$lines(),
      lineId: this.$lineId(),
      blockId: this.$blockId(),
    });
    this.$currentView.set(this.story.state.previousPathString?.split('.')[0] ?? '');
    console.log(this.story.state);
  }
}
