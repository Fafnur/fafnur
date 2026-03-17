import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-devto',
  templateUrl: './icon-devto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDevto extends Icon {}
