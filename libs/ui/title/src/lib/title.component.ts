import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'fafnur-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class TitleComponent {
  @Input() level: 'small' | 'medium' | 'large' | undefined;

  @HostBinding('class.is-small') get isSmall() {
    return this.level === 'small';
  }
  @HostBinding('class.is-medium') get isMedium() {
    return !this.level || this.level === 'medium';
  }
  @HostBinding('class.is-large') get isLarge() {
    return this.level === 'large';
  }
}
