import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconPdf } from '@fafnur/ui/icons';
import { Title } from '@fafnur/ui/title';
import { Unit } from '@fafnur/ui/unit';

@Component({
  selector: 'fafnur-about-who',
  imports: [Unit, Title, IconPdf],
  templateUrl: './about-who.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-8',
  },
})
export class AboutWho {}
