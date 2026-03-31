import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-image',
  templateUrl: './icon-image.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconImage extends Icon {}
