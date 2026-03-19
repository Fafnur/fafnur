import { ChangeDetectionStrategy, Component, model } from '@angular/core';

import { Tab } from '@fafnur/ui/tabs';

export type NovelTab = 'dialog' | 'history';

@Component({
  selector: 'fafnur-novel-tabs',
  imports: [Tab],
  templateUrl: './novel-tabs.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex md:hidden shrink-0 border-b border-gray-200 dark:border-gray-700',
  },
})
export class NovelTabs {
  readonly $tab = model.required<NovelTab>({ alias: 'tab' });

  onTab(tab: NovelTab): void {
    this.$tab.set(tab);
  }
}
