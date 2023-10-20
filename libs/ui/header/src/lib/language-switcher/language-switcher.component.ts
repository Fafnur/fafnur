import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, LOCALE_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MetricService } from '@fafnur/core';

@Component({
  selector: 'fafnur-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule, MatButtonModule, NgIf],
})
export class LanguageSwitcherComponent {
  constructor(
    private readonly metricService: MetricService,
    @Inject(LOCALE_ID) private readonly localeId: string,
  ) {}

  get lang(): string {
    return this.localeId === 'ru' ? 'en' : 'ru';
  }

  get path(): string {
    return `/${this.lang}/`;
  }

  onToggle(): void {
    this.metricService.send('toggle-lang');
  }
}
