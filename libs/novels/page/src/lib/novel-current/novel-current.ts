import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InkService } from '@fafnur/core';
import { Unit } from '@fafnur/ui/unit';
import { NovelActor } from '../novel-actor/novel-actor';
import { NovelText } from '../novel-text/novel-text';

@Component({
  selector: 'fafnur-novel-current',
  imports: [Unit, NovelActor, NovelText],
  templateUrl: './novel-current.html',
  styleUrl: './novel-current.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-3',
  },
})
export class NovelCurrent {
  private readonly inkService = inject(InkService);

  readonly $lines = this.inkService.$currentLines;
}
