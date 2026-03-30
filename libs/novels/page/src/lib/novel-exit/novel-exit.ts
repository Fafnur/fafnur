import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { Fab } from '@fafnur/ui/fabs';
import { IconSettings } from '@fafnur/ui/icons';
import { PopupRef, PopupService } from '@fafnur/ui/popup';

import { NovelEndMenu } from '../novel-window/novel-dialog/novel-choices/novel-end/novel-end-menu/novel-end-menu';

@Component({
  selector: 'fafnur-novel-exit',
  imports: [IconSettings, Fab],
  templateUrl: './novel-exit.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'fixed bottom-6 right-6 z-50',
    '(document:keydown.escape)': 'onPopup()',
  },
})
export class NovelExit {
  private readonly popupService = inject(PopupService);

  private readonly $popupRef = signal<PopupRef | undefined>(undefined);

  onPopup(): void {
    const popupRef = this.$popupRef();
    if (popupRef) {
      popupRef.ref.onClose();
      this.$popupRef.set(undefined);
    } else {
      this.$popupRef.set(this.popupService.open(NovelEndMenu));
    }
  }
}
