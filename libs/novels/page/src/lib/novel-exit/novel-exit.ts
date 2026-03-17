import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';

import { PopupService } from '@fafnur/ui/popup';

import { NovelEndMenu } from '../novel-choices/novel-end/novel-end-menu/novel-end-menu';

@Component({
  selector: 'fafnur-novel-exit',
  imports: [],
  templateUrl: './novel-exit.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'fixed bottom-6 right-6 z-50' },
})
export class NovelExit {
  private readonly popupService = inject(PopupService);

  onExitClick(): void {
    this.popupService.open(NovelEndMenu);
  }

  @HostListener('document:keydown.escape')
  onEscKey(): void {
    this.popupService.open(NovelEndMenu);
  }
}
