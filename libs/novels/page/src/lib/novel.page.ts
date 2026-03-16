import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InkService } from '@fafnur/core';
import { Button } from '@fafnur/ui/buttons';
import { Container } from '@fafnur/ui/container';

@Component({
  selector: 'fafnur-novel-page',
  imports: [Button, Container],
  templateUrl: './novel.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class NovelPage {
  private readonly inkService = inject(InkService);

  readonly $choices = this.inkService.$choices;
  readonly $loaded = this.inkService.$loaded;
  readonly $historyBlocks = this.inkService.$historyBlocks;
  readonly $currentLines = this.inkService.$currentLines;

  constructor() {
    afterNextRender(() => {
      this.inkService.load();
    });
  }

  onChoose(index: number) {
    this.inkService.choose(index);
  }

  onReset(): void {
    this.inkService.reset();
  }
}
