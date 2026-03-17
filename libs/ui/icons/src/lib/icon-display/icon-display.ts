import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-display',
  templateUrl: './icon-display.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDisplay extends Icon {}
