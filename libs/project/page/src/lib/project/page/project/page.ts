import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-project-page',
  imports: [],
  templateUrl: './page.html',
  styleUrl: './page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPage {}
