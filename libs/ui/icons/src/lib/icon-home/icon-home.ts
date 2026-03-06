import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-home',
  templateUrl: './icon-home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHome extends Icon {}
