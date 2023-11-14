import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { tap } from 'rxjs';

import { CookieService, MetricService } from '@fafnur/core';

@Component({
  selector: 'fafnur-theme-switcher',
  standalone: true,
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatButtonModule],
})
export class ThemeSwitcherComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly cookieService = inject(CookieService);
  private readonly metricService = inject(MetricService);
  private readonly document = inject(DOCUMENT);

  control!: FormControl<boolean>;
  isDark = true;

  get mode(): string {
    return this.isDark ? 'dark' : 'light';
  }

  ngOnInit(): void {
    const themePreference = this.cookieService.get('themePreference');
    this.isDark = themePreference ? themePreference === 'dark' : false;
    this.control = new FormControl<boolean>(this.isDark, { nonNullable: true });

    this.control.valueChanges
      .pipe(
        tap((dark) => {
          this.isDark = dark;
          this.cookieService.set('themePreference', this.mode);
          this.document.documentElement.setAttribute('data-theme', this.mode);
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  onToggle(): void {
    this.control.patchValue(!this.isDark);
    this.metricService.send('toggle-theme');
  }
}
