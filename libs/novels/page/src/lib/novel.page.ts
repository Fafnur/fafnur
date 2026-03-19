import { afterNextRender, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { InkService } from '@fafnur/core';

import { NovelChoices } from './novel-choices/novel-choices';
import { NovelCurrent } from './novel-current/novel-current';
import { NovelExit } from './novel-exit/novel-exit';
import { NovelHistory } from './novel-history/novel-history';

@Component({
  selector: 'fafnur-novel-page',
  imports: [NovelChoices, NovelCurrent, NovelExit, NovelHistory],
  templateUrl: './novel.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col h-screen overflow-hidden',
  },
})
export class NovelPage {
  private readonly inkService = inject(InkService);

  readonly $loaded = this.inkService.$loaded;
  readonly $activeTab = signal<'current' | 'history'>('current');

  constructor() {
    afterNextRender(() => {
      this.inkService.load();
    });
  }

  onTabChange(tab: 'current' | 'history'): void {
    this.$activeTab.set(tab);
  }
}
