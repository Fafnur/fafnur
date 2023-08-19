import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContainerComponent } from '@fafnur/ui/container';

@Component({
  selector: 'fafnur-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ContainerComponent],
})
export class HomePageComponent {}
