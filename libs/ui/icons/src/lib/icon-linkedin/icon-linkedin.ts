import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-linkedin',
  imports: [],
  templateUrl: './icon-linkedin.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLinkedin extends Icon {}
