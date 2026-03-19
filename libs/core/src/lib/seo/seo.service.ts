import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export type SeoType = 'website' | 'article';

export interface SeoMeta {
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly imageWidth?: string;
  readonly imageHeight?: string;
  readonly url?: string;
  readonly type?: SeoType;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(data: SeoMeta): void {
    const type = data.type ?? 'website';
    const url = data.url ?? this.document.defaultView?.location.href ?? '';

    this.title.setTitle(data.title);

    this.meta.updateTag({ name: 'description', content: data.description });

    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.setCanonical(url);

    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
      if (data.imageWidth) {
        this.meta.updateTag({ property: 'og:image:width', content: data.imageWidth });
      }
      if (data.imageHeight) {
        this.meta.updateTag({ property: 'og:image:height', content: data.imageHeight });
      }
    }

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });

    if (data.image) {
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
    }
  }

  private setCanonical(url: string) {
    let link = this.document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }
}
