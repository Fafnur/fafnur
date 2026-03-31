import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Title } from '@fafnur/ui/title';
import { Unit } from '@fafnur/ui/unit';

import { AboutStackLink } from './about-stack-link/about-stack-link';

@Component({
  selector: 'fafnur-about-stack',
  imports: [Title, AboutStackLink, Unit],
  templateUrl: './about-stack.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class AboutStack {}
