import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Header } from '../header/header';

@Component({
  selector: 'fafnur-contacts',
  imports: [Header],
  templateUrl: './contacts.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contacts {}
