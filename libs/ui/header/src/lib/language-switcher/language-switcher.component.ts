import { Platform } from '@angular/cdk/platform';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { tap } from 'rxjs';

import { CookieService, MetricService, WindowService } from '@fafnur/core';

@Component({
  selector: 'fafnur-language-switcher',
  standalone: true,
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatButtonModule, NgIf],
})
export class LanguageSwitcherComponent implements OnInit {
  control!: FormControl<boolean>;
  isRussian = true;

  constructor(
    private readonly platform: Platform,
    private readonly windowService: WindowService,
    private readonly cookieService: CookieService,
    private readonly destroyRef: DestroyRef,
    private readonly metricService: MetricService
  ) {}

  get lang(): string {
    return this.isRussian ? 'ru' : 'en';
  }

  ngOnInit(): void {
    if (this.platform.isBrowser) {
      const prefersRussian = /^ru\b/.test(this.windowService.window.navigator.language);
      const themeLang = this.cookieService.get('themeLang');

      this.isRussian = themeLang ? themeLang === 'ru' : prefersRussian ?? true;
      this.control = new FormControl<boolean>(this.isRussian, { nonNullable: true });

      this.control.valueChanges
        .pipe(
          tap((isRussian) => {
            this.isRussian = isRussian;
            this.cookieService.set('themeLang', this.lang);
          }),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe();
    }
  }

  onToggle(): void {
    this.control.patchValue(!this.isRussian);
    this.metricService.send('toggle-lang');
    this.windowService.window.location.href = `${this.windowService.window.location.origin}/${this.lang}`;
  }
}
