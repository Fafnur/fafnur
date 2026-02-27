import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-medium',
  templateUrl: './icon-medium.html',
  styleUrl: './icon-medium.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMedium extends Icon {}
