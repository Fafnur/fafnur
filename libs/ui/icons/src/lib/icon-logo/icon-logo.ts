import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-logo',
  templateUrl: './icon-logo.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLogo extends Icon {}
