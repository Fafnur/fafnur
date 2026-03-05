import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Unit } from '@fafnur/ui/unit';

import { AboutTitle } from '../about-title/about-title';

@Component({
  selector: 'fafnur-about-who',
  imports: [Unit, AboutTitle],
  templateUrl: './about-who.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class AboutWho {}
