import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InkService } from '@fafnur/core';
import { Button } from '@fafnur/ui/buttons';

@Component({
  selector: 'fafnur-novel-choices',
  imports: [Button],
  templateUrl: './novel-choices.html',
  styleUrl: './novel-choices.scss',
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
