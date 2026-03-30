import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PATHS, SeoService } from '@fafnur/core';
import { Button } from '@fafnur/ui/buttons';
import { Container } from '@fafnur/ui/container';
import { Unit } from '@fafnur/ui/unit';

import { AdventureHero } from './adventure-hero/adventure-hero';
import { AdventureQuest } from './adventure-quest/adventure-quest';
import { AdventureWhom } from './adventure-whom/adventure-whom';
import { AdventureWorks } from './adventure-works/adventure-works';

@Component({
  selector: 'fafnur-adventure-page',
  imports: [Container, RouterLink, Unit, Button, AdventureHero, AdventureQuest, AdventureWhom, AdventureWorks],
  templateUrl: './adventure-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventurePage {
  readonly paths = PATHS;

  constructor() {
    inject(SeoService).update({
      title: $localize`:Adventure Page|SEO Title:Interactive Quest — Choose Your Path and Discover Who You Are`,
      description: $localize`:Adventure Page|SEO Description:An interactive text quest written in Ink. Instead of a boring about-me section — a dialogue where you choose answers and receive a personalized developer profile.`,
      image: '/images/adventure.webp',
      imageWidth: '2048',
      imageHeight: '1152',
    });
  }
}
