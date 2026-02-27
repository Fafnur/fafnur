import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-habr',
  templateUrl: './icon-habr.html',
  styleUrl: './icon-habr.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHabr extends Icon {}
