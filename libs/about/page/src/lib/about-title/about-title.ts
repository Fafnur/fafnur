import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-title',
  templateUrl: './about-title.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutTitle {}