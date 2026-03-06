import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Container } from '@fafnur/ui/container';
import { Unit } from '@fafnur/ui/unit';

import { Brand } from './brand/brand';
import { Contacts } from './contacts/contacts';
import { Copyright } from './copyright/copyright';
import { Menu } from './menu/menu';
import { Socials } from './socials/socials';

@Component({
  selector: 'fafnur-footer',
  imports: [Container, Copyright, Unit, Contacts, Menu, Brand, Socials],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'border-t bg-mauve-100 text-mauve-700 border-mauve-200 dark:bg-mauve-950 dark:text-mauve-400 dark:border-mauve-800',
  },
})
export class Footer {}
