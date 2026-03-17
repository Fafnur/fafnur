import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NovelEndMenu } from './novel-end-menu/novel-end-menu';

@Component({
  selector: 'fafnur-novel-end',
  imports: [NovelEndMenu],
  templateUrl: './novel-end.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col gap-3' },
})
export class NovelEnd {}
