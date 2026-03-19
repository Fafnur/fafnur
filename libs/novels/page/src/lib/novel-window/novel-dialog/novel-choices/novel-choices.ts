import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InkService } from '@fafnur/core';
import { Button } from '@fafnur/ui/buttons';

import { NovelEnd } from './novel-end/novel-end';

@Component({
  selector: 'fafnur-novel-choices',
  imports: [Button, NovelEnd],
  templateUrl: './novel-choices.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovelChoices {
  private readonly inkService = inject(InkService);

  readonly $choices = this.inkService.$choices;

  onChoose(index: number): void {
    this.inkService.choose(index);
  }

  onReset(): void {
    this.inkService.reset();
  }
}
