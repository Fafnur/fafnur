import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent],
})
export class AboutPageComponent {}
