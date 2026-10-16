import { Component, inject } from '@angular/core';

import { BuildDateService } from '@fafnur/core';
import { IconPdf } from '@fafnur/ui/icons';
import { Title } from '@fafnur/ui/title';
import { Unit } from '@fafnur/ui/unit';

import { CAREER_START, experienceDuration } from '../experience/experience';

@Component({
  selector: 'fafnur-about-who',
  imports: [Unit, Title, IconPdf],
  templateUrl: './about-who.html',
  host: {
    class: 'flex flex-col gap-8',
  },
})
export class AboutWho {
  readonly years = experienceDuration(CAREER_START, inject(BuildDateService).month).years;
}
