import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Container } from '@fafnur/ui/container';
import { Unit } from '@fafnur/ui/unit';

import { Brand } from './brand/brand';
import { Contacts } from './contacts/contacts';
import { Copyright } from './copyright/copyright';
import { Menu } from './menu/menu';

@Component({
  selector: 'fafnur-footer',
  imports: [Container, Copyright, Unit, Contacts, Menu, Brand],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'border-t bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-400 dark:border-gray-800',
  },
})
export class Footer {}
