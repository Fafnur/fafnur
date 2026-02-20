import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-copyright',
  templateUrl: './copyright.html',
  styleUrl: './copyright.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'block mt-10 border-t pt-6 text-center text-sm border-gray-200 text-gray-500 dark:border-gray-800 dark:text-gray-500',
  },
})
export class Copyright {
  readonly year = new Date().getFullYear();
}
