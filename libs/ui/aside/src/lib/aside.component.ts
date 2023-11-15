import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AmpComponent } from './amp/amp.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { CvComponent } from './cv/cv.component';
import { MatrixComponent } from './matrix/matrix.component';
import { MeComponent } from './me/me.component';
import { SocialComponent } from './socials/social.component';

@Component({
  selector: 'fafnur-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SocialComponent, CollaborationComponent, MatrixComponent, CvComponent, MeComponent, AmpComponent],
})
export class AsideComponent {}
