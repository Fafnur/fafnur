import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Container } from '@fafnur/ui/container';

import { AboutExperience } from './about-experience/about-experience';
import { AboutStack } from './about-stack/about-stack';
import { AboutWho } from './about-who/about-who';

@Component({
  selector: 'fafnur-about-page',
  imports: [Container, AboutWho, AboutStack, AboutExperience],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {}
