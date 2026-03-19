import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InkService } from '@fafnur/core';

import { NovelExit } from './novel-exit/novel-exit';
import { NovelLoading } from './novel-loading/novel-loading';
import { NovelWindow } from './novel-window/novel-window';

@Component({
  selector: 'fafnur-novel-page',
  imports: [NovelExit, NovelLoading, NovelWindow],
  templateUrl: './novel.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col h-screen overflow-hidden',
  },
})
export class NovelPage {
  private readonly inkService = inject(InkService);

  readonly $loaded = this.inkService.$loaded;

  constructor() {
    afterNextRender(() => {
      this.inkService.load();
    });
  }
}
