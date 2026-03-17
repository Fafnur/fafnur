import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-telegram',
  imports: [],
  templateUrl: './icon-telegram.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTelegram extends Icon {}
