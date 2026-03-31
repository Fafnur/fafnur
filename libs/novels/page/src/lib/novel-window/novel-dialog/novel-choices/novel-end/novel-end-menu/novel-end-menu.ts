import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PATHS } from '@fafnur/core';
import { POPUP_REF } from '@fafnur/ui/popup';
import { ThemeSwitcher } from '@fafnur/ui/theme-switcher';
import { Unit } from '@fafnur/ui/unit';

import { NovelLink } from './novel-link/novel-link';

@Component({
  selector: 'fafnur-novel-end-menu',
  imports: [NovelLink, RouterLink, ThemeSwitcher, Unit],
  templateUrl: './novel-end-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-1',
  },
})
export class NovelEndMenu {
  private readonly popupRef = inject(POPUP_REF, { optional: true });

  readonly $withThemeSwitcher = input<boolean>(false, { alias: 'withThemeSwitcher' });

  readonly paths = PATHS;

  onClick(): void {
    this.popupRef?.onClose();
  }
}
