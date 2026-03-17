import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PATHS } from '@fafnur/core';
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
}
