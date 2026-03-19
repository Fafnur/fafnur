import {
  afterRenderEffect,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
} from '@angular/core';

import { InkService } from '@fafnur/core';

@Component({
  selector: 'fafnur-novel-scroll',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-1 overflow-y-auto p-6 min-h-0',
    '[class.hidden]': '$active()',
    '[class.md:flex]': '$active()',
  },
})
export class NovelScroll {
  private readonly inkService = inject(InkService);
  private readonly elementRef = inject(ElementRef);

  readonly $historyBlocks = this.inkService.$historyBlocks;

  readonly $active = input.required({ alias: 'active', transform: booleanAttribute });

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
