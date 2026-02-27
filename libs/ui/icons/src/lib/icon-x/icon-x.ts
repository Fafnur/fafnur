import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-x',
  templateUrl: './icon-x.html',
  styleUrl: './icon-x.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconX extends Icon {}
