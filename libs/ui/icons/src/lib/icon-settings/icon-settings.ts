import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-settings',
  templateUrl: './icon-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSettings extends Icon {}
