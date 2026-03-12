import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Title } from '@fafnur/ui/title';
import { Unit } from '@fafnur/ui/unit';

import { AdventureCard } from './adventure-card/adventure-card';

@Component({
  selector: 'fafnur-adventure-whom',
  imports: [Unit, AdventureCard, Title],
  templateUrl: './adventure-whom.html',
  styleUrl: './adventure-whom.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-6',
  },
})
export class AdventureWhom {
  readonly humans = [
    {
      icon: '🧑‍💼',
      label: $localize`:Adventure Whom|:HR`,
      description: $localize`:Adventure Whom|:Find out how I approach processes, teams, and hiring. No cookie-cutter answers—only honest, engaging dialogue.`,
    },
    {
      icon: '👨‍💻',
      label: $localize`:Adventure Whom|:Developers`,
      description: $localize`:Adventure Whom|:You'll cover several technical questions with a specific focus. Frontend, backend, DevOps, QA, Data Science—each with its own branch.`,
    },
    {
      icon: '📖',
      label: $localize`:Adventure Whom|:Blog readers`,
      description: $localize`:Adventure Whom|:If you're coming from Medium or Habr, this one's for you too. Five minutes, a bit of irony, and an unexpected ending.`,
    },
  ];
}
