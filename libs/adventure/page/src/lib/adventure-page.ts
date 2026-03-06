import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PATHS } from '@fafnur/core';
import { Container } from '@fafnur/ui/container';
import { Unit } from '@fafnur/ui/unit';

@Component({
  selector: 'fafnur-adventure-page',
  imports: [Container, RouterLink, Unit],
  templateUrl: './adventure-page.html',
  styleUrl: './adventure-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventurePage {
  readonly paths = PATHS;
}
