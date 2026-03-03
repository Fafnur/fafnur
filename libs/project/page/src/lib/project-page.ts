import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container } from '@fafnur/ui/container';

@Component({
  selector: 'fafnur-project-page',
  imports: [Container],
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPage {}
