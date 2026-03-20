import { ChangeDetectionStrategy, Component, DOCUMENT, ElementRef, inject, signal, viewChildren } from '@angular/core';

import { InkService } from '@fafnur/core';
import { Button } from '@fafnur/ui/buttons';

import { NovelEnd } from './novel-end/novel-end';

@Component({
  selector: 'fafnur-novel-choices',
  imports: [Button, NovelEnd],
  templateUrl: './novel-choices.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'onKeydown($event)',
  },
})
export class NovelChoices {
  private readonly inkService = inject(InkService);
  private readonly document = inject(DOCUMENT);

  private readonly choiceButtons = viewChildren<ElementRef<HTMLButtonElement>>('choiceButton');

  readonly $choices = this.inkService.$choices;
  readonly $focusedIndex = signal<number>(0);

  onChoose(index: number): void {
    this.inkService.choose(index);
    this.$focusedIndex.set(0);
  }

  onReset(): void {
    this.inkService.reset();
  }

  onKeydown(event: KeyboardEvent): void {
    const choices = this.$choices();
    if (choices.length === 0) return;

    const { key } = event;
    const isChoiceFocused = this.choiceButtons().some((ref) => ref.nativeElement === this.document.activeElement);

    if (key === 'Enter' && !isChoiceFocused) {
      event.preventDefault();
      this.onChoose(this.$focusedIndex());
      return;
    }

    if (key === 'ArrowDown' || key === ' ') {
      event.preventDefault();
      const next = (this.$focusedIndex() + 1) % choices.length;
      this.$focusedIndex.set(next);
      this.focusButton(next);
      return;
    }

    if (key === 'ArrowUp') {
      event.preventDefault();
      const prev = (this.$focusedIndex() - 1 + choices.length) % choices.length;
      this.$focusedIndex.set(prev);
      this.focusButton(prev);
      return;
    }

    const num = parseInt(key, 10);
    if (!isNaN(num) && num >= 1 && num <= choices.length) {
      event.preventDefault();
      this.onChoose(num - 1);
    }
  }

  private focusButton(index: number): void {
    this.choiceButtons()[index]?.nativeElement.focus();
  }
}
