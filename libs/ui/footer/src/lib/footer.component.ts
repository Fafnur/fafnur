import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContainerComponent } from '@fafnur/ui/container';

import { CopyrightComponent } from './copyright/copyright.component';

@Component({
  selector: 'fafnur-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ContainerComponent, CopyrightComponent],
})
export class FooterComponent {}
