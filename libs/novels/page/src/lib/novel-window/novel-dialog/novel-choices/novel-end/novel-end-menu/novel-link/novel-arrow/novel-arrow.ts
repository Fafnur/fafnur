import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-novel-arrow',
  template: '›',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity select-none shrink-0',
  },
})
export class NovelArrow {}
