import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutTitle } from '../about-title/about-title';

import { AboutStackLink } from './about-stack-link/about-stack-link';
import { Unit } from '@fafnur/ui/unit';

@Component({
  selector: 'fafnur-about-stack',
  imports: [AboutTitle, AboutStackLink, Unit],
  templateUrl: './about-stack.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class AboutStack {}
