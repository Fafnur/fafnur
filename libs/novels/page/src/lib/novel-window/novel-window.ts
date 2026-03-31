import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NovelDialog } from './novel-dialog/novel-dialog';
import { NovelScene } from './novel-scene/novel-scene';

@Component({
  selector: 'fafnur-novel-window',
  imports: [NovelDialog, NovelScene],
  templateUrl: './novel-window.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col flex-1 min-h-0 overflow-hidden md:grid md:grid-cols-5',
  },
})
export class NovelWindow {}
