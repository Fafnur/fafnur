import { Platform } from '@angular/cdk/platform';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, LOCALE_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MetricService, WindowService } from '@fafnur/core';

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
    private readonly platform: Platform,
    private readonly windowService: WindowService,
    private readonly metricService: MetricService,
    @Inject(LOCALE_ID) public readonly localeId: string
  ) {}

  onToggle(): void {
    if (this.platform.isBrowser) {
      const lang = this.localeId === 'ru' ? 'en' : 'ru';
      this.metricService.send('toggle-lang', { ga: { value: lang }, ym: { lang } });
      this.windowService.window.location.href = `${this.windowService.window.location.origin}/${lang}`;
    }
  }
}
