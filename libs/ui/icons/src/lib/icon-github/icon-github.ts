import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-github',
  templateUrl: './icon-github.html',
  styleUrl: './icon-github.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGithub extends Icon {}
