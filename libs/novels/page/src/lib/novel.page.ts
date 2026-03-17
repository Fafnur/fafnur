import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InkService } from '@fafnur/core';
import { Container } from '@fafnur/ui/container';
import { Unit } from '@fafnur/ui/unit';

import { NovelChoices } from './novel-choices/novel-choices';
import { NovelCurrent } from './novel-current/novel-current';
import { NovelExit } from './novel-exit/novel-exit';
import { NovelHistory } from './novel-history/novel-history';

@Component({
  selector: 'fafnur-novel-page',
  imports: [Container, NovelChoices, NovelCurrent, NovelExit, NovelHistory, Unit],
  templateUrl: './novel.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class NovelPage {
  private readonly inkService = inject(InkService);

  readonly $loaded = this.inkService.$loaded;

  constructor() {
    afterNextRender(() => {
      this.inkService.load();
    });
  }
}
