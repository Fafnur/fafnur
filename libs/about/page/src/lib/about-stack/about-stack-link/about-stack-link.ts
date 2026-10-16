import { Component, input } from '@angular/core';

@Component({
  selector: 'fafnur-about-stack-link',
  templateUrl: './about-stack-link.html',
})
export class AboutStackLink {
  readonly $href = input.required<string>({ alias: 'href' });
}
