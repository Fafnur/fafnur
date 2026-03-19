import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PATHS, SeoService } from '@fafnur/core';
import { Button } from '@fafnur/ui/buttons';
import { Container } from '@fafnur/ui/container';
import { Headline } from '@fafnur/ui/headline';
import { Unit } from '@fafnur/ui/unit';

@Component({
  selector: 'fafnur-not-found-page',
  imports: [RouterLink, Button, Container, Headline, Unit],
  templateUrl: './not-found-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex items-center justify-center min-h-[calc(100vh-4rem)]',
  },
})
export class NotFoundPage {
  readonly paths = PATHS;

  constructor() {
    inject(SeoService).update({
      title: $localize`:Not Found Page|SEO Title:404 — Page Not Found`,
      description: $localize`:Not Found Page|SEO Description:The page you are looking for doesn't exist. It may have been moved, deleted, or the URL might be incorrect. Navigate back to explore the site.`,
    });
  }
}
