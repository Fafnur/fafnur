import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-gamepad',
  templateUrl: './icon-gamepad.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGamepad extends Icon {}
