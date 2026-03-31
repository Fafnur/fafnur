import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InkService } from '@fafnur/core';

import { NovelActor } from '../novel-actor/novel-actor';
import { NovelText } from '../novel-text/novel-text';

@Component({
  selector: 'fafnur-novel-current',
  imports: [NovelActor, NovelText],
  templateUrl: './novel-current.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-3',
  },
})
export class NovelCurrent {
  private readonly inkService = inject(InkService);

  readonly $lines = this.inkService.$currentLines;
}
