import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PATHS } from '@fafnur/core';
import { POPUP_REF } from '@fafnur/ui/popup';

import { NovelLink } from './novel-link/novel-link';

@Component({
  selector: 'fafnur-novel-end-menu',
  imports: [NovelLink, RouterLink],
  templateUrl: './novel-end-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-1',
  },
})
export class NovelEndMenu {
  private readonly popupRef = inject(POPUP_REF, { optional: true });

  readonly paths = PATHS;

  onClick(): void {
    this.popupRef?.onClose();
  }
}
