import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface AdventureHuman {
  readonly icon: string;
  readonly label: string;
  readonly description: string;
}

@Component({
  selector: 'fafnur-adventure-card',
  imports: [],
  templateUrl: './adventure-card.html',
  styleUrl: './adventure-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col gap-2',
  },
})
export class AdventureCard {
  readonly $human = input.required<AdventureHuman>({ alias: 'human' });
}
