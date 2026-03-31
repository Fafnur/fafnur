import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InkService, SeoService, WindowService } from '@fafnur/core';
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
    class: 'flex flex-col h-screen bg-white dark:bg-mauve-900',
    '(window:popstate)': 'onBack()',
  },
})
export class NovelPage {
  private readonly inkService = inject(InkService);
  private readonly popupService = inject(PopupService);
  private readonly windowService = inject(WindowService);

  readonly $loaded = this.inkService.$loaded;

  constructor() {
    inject(SeoService).update({
      title: $localize`:Novels Page|SEO Title:Quest — Start the Interactive Story`,
      description: $localize`:Novels Page|SEO Description:Play through an interactive text quest. Choose your path as HR, developer, blog reader or curious visitor, and discover the developer behind the portfolio.`,
      image: '/images/game.webp',
      imageWidth: '2048',
      imageHeight: '1152',
    });

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
