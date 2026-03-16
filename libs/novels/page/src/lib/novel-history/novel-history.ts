import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InkService } from '@fafnur/core';

import { NovelActor } from '../novel-actor/novel-actor';
import { NovelText } from '../novel-text/novel-text';

@Component({
  selector: 'fafnur-novel-history',
  imports: [NovelActor, NovelText],
  templateUrl: './novel-history.html',
  styleUrl: './novel-history.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovelHistory {
  private readonly inkService = inject(InkService);

  readonly $historyBlocks = this.inkService.$historyBlocks;
}
