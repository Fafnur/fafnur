import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PATHS } from '@fafnur/core';
import { Unit } from '@fafnur/ui/unit';

@Component({
  selector: 'fafnur-home-card',
  imports: [RouterLink, Unit],
  templateUrl: './home-card.html',
  styleUrl: './home-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'm-auto px-6 py-24 text-center',
  },
})
export class HomeCard {
  readonly paths = PATHS;
}
