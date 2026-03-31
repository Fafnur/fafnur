import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-moon',
  templateUrl: './icon-moon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMoon extends Icon {}
