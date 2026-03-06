import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Unit } from '@fafnur/ui/unit';

/**
 * Декоративный blur
 */
@Component({
  selector: 'fafnur-home-blur',
  imports: [Unit],
  templateUrl: './home-blur.html',
  styleUrl: './home-blur.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl',
  },
})
export class HomeBlur {}
