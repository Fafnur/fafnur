import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PATHS } from '@fafnur/core';
import { Container } from '@fafnur/ui/container';

@Component({
  selector: 'fafnur-home-page',
  imports: [RouterLink, Container],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  readonly paths = PATHS;
}
