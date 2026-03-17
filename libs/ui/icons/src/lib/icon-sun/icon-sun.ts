import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-sun',
  templateUrl: './icon-sun.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSun extends Icon {}
