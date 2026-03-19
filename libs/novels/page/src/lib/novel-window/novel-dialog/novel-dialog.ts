import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { NovelChoices } from './novel-choices/novel-choices';
import { NovelCurrent } from './novel-current/novel-current';
import { NovelHistory } from './novel-history/novel-history';
import { NovelScroll } from './novel-scroll/novel-scroll';
import { NovelTab, NovelTabs } from './novel-tabs/novel-tabs';

@Component({
  selector: 'fafnur-novel-dialog',
  imports: [NovelChoices, NovelCurrent, NovelHistory, NovelScroll, NovelTabs],
  templateUrl: './novel-dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'col-span-2 flex flex-col min-h-0 overflow-hidden border-l border-gray-200 dark:border-gray-700',
  },
})
export class NovelDialog {
  readonly $tab = signal<NovelTab>('dialog');
}
