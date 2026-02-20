import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contacts {}
