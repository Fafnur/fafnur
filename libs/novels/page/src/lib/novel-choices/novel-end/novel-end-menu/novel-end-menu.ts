import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PATHS } from '@fafnur/core';

import { NovelLink } from './novel-link/novel-link';

@Component({
  selector: 'fafnur-novel-end-menu',
  imports: [NovelLink, RouterLink],
  templateUrl: './novel-end-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col gap-1 border-l-2 border-yellow-600 pl-6' },
})
export class NovelEndMenu {
  readonly paths = PATHS;
}
