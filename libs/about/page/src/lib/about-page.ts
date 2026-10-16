import { Component, inject } from '@angular/core';

import { BuildDateService, SeoService } from '@fafnur/core';
import { Container } from '@fafnur/ui/container';

import { AboutExperience } from './about-experience/about-experience';
import { AboutStack } from './about-stack/about-stack';
import { AboutWho } from './about-who/about-who';
import { CAREER_START, experienceDuration } from './experience/experience';

@Component({
  selector: 'fafnur-about-page',
  imports: [Container, AboutWho, AboutStack, AboutExperience],
  templateUrl: './about-page.html',
})
export class AboutPage {
  constructor() {
    const years = experienceDuration(CAREER_START, inject(BuildDateService).month).years;

    inject(SeoService).update({
      title: $localize`:About Page|SEO Title:Aleksandr Serenko — Senior frontend, Angular evangelist, Nx apologist & NodeJS warlock.`,
      description: $localize`:About Page|SEO Description:Frontend team lead with ${years}:years: years of experience specializing in Angular. I build enterprise applications for fintech, write about Angular on Habr, dev.to and Medium, and care about clean, maintainable code.`,
      image: '/images/about.webp',
      imageWidth: '2048',
      imageHeight: '1152',
    });
  }
}
