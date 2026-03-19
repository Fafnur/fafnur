import { afterRenderEffect, ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';

import { InkService } from '@fafnur/core';

import { NovelActor } from '../novel-actor/novel-actor';
import { NovelText } from '../novel-text/novel-text';

@Component({
  selector: 'fafnur-novel-history',
  imports: [NovelActor, NovelText],
  templateUrl: './novel-history.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-full overflow-y-auto',
  },
})
export class NovelHistory {
  private readonly inkService = inject(InkService);
  private readonly elementRef = inject(ElementRef);

  readonly $historyBlocks = this.inkService.$historyBlocks;

  constructor() {
    afterRenderEffect(() => {
      this.$historyBlocks();

      this.elementRef.nativeElement.scrollTo({
        top: this.elementRef.nativeElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  }
}
