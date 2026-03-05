import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'fafnur-about-stack-link',
  templateUrl: './about-stack-link.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutStackLink {
  readonly $href = input.required<string>({ alias: 'href' });
}
