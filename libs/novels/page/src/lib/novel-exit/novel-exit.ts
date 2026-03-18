import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PopupService } from '@fafnur/ui/popup';

import { NovelEndMenu } from '../novel-choices/novel-end/novel-end-menu/novel-end-menu';

@Component({
  selector: 'fafnur-novel-exit',
  imports: [],
  templateUrl: './novel-exit.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'fixed bottom-6 right-6 z-50',
    '(document:keydown.escape)': 'onEsc()',
  },
})
export class NovelExit {
  private readonly popupService = inject(PopupService);

  onExit(): void {
    this.popupService.open(NovelEndMenu);
  }

  onEsc(): void {
    this.popupService.open(NovelEndMenu);
  }
}
