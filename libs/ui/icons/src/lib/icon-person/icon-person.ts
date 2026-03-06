import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-person',
  templateUrl: './icon-person.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPerson extends Icon {}
