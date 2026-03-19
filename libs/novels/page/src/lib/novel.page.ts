import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InkService, WindowService } from '@fafnur/core';
import { PopupService } from '@fafnur/ui/popup';

import { NovelExit } from './novel-exit/novel-exit';
import { NovelLoading } from './novel-loading/novel-loading';
import { NovelEndMenu } from './novel-window/novel-dialog/novel-choices/novel-end/novel-end-menu/novel-end-menu';
import { NovelWindow } from './novel-window/novel-window';

@Component({
  selector: 'fafnur-novel-page',
  imports: [NovelExit, NovelLoading, NovelWindow],
  templateUrl: './novel.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col h-screen overflow-hidden',
    '(window:popstate)': 'onBack()',
  },
})
export class NovelPage {
  private readonly inkService = inject(InkService);
  private readonly popupService = inject(PopupService);
  private readonly windowService = inject(WindowService);

  readonly $loaded = this.inkService.$loaded;

  constructor() {
    afterNextRender(() => {
      this.inkService.load();
      this.pushState();
    });
  }

  onBack(): void {
    this.pushState();
    this.popupService.open(NovelEndMenu);
  }

  private pushState(): void {
    const { history, location } = this.windowService.window;
    history.pushState(null, '', location.href);
  }
}
