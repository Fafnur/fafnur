import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SeoService } from '@fafnur/core';
import { Container } from '@fafnur/ui/container';

import { AboutExperience } from './about-experience/about-experience';
import { AboutStack } from './about-stack/about-stack';
import { AboutWho } from './about-who/about-who';

@Component({
  selector: 'fafnur-about-page',
  imports: [Container, AboutWho, AboutStack, AboutExperience],
  templateUrl: './about-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  constructor() {
    inject(SeoService).update({
      title: $localize`:About Page|SEO Title:Aleksandr Serenko — Senior frontend, Angular evangelist, Nx apologist & NodeJS warlock.`,
      description: $localize`:About Page|SEO Description:Frontend developer with 9 years of experience specializing in Angular. I build enterprise applications for fintech, write about Angular on Medium, and care about clean, maintainable code.`,
    });
  }
}
