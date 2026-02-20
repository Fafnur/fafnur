import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from '@fafnur/core';

@Component({
  imports: [RouterOutlet],
  selector: 'fafnur-root',
  template: '<router-outlet/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  private readonly themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.init();
  }
}
