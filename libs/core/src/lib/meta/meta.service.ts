import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, InjectionToken, LOCALE_ID, Optional } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

/**
 * Config meta tags.
 * @publicApi
 */
export interface MetaConfig {
  /**
   * Page title
   */
  readonly title: string;

  /**
   * Page description
   */
  readonly description: string;

  /**
   * Page canonical url
   */
  readonly url?: string;

  /**
   * hostname for canonical
   */
  readonly hostname?: string;

  /**
   * OG type
   */
  readonly type: string;

  /**
   * OG locale
   */
  readonly locale?: string;

  /**
   * OG site name, brand
   */
  readonly siteName: string;

  /**
   * OG image
   */
  readonly image: string;

  /**
   * OG image type
   */
  readonly imageType: string;

  /**
   * OG image width
   */
  readonly imageWidth: string;

  /**
   * OG image height
   */
  readonly imageHeight: string;
}

/**
 * InjectionToken for meta config.
 * @publicApi
 */
export const META_CONFIG = new InjectionToken<Partial<MetaConfig>>('MetaConfig');

/**
 * Default meta config.
 * @publicApi
 */
export const META_CONFIG_DEFAULT: MetaConfig = {
  title: 'Fafnur',
  description: 'Fafnur website',
  hostname: 'https://fafn,ru',
  siteName: 'Fafnur',
  type: 'website',
  image: '/assets/images/site.jpg',
  imageType: 'image/jpeg',
  imageWidth: '1920',
  imageHeight: '1024',
};

export const ROBOT_NO_INDEX: MetaDefinition = {
  name: 'robots',
  id: 'robots',
  content: 'noindex',
};

/**
 * Service for setting meta tags.
 * @publicApi
 *
 * @usageNotes
 * ### Example
 * Service will be change meta tags after NavigationEnd. You should add information in your route on data:
 *
 * ```
 * import { Route } from '@angular/router';
 *
 * export const routes: Route[] = [
 *   {
 *     path: '',
 *     component: YourComponent,
 *     data: {
 *       meta: {
 *         title: 'Title for page',
 *         description: 'Description for page',
 *         keywords: 'your,keys',
 *       },
 *     },
 *   },
 * ];
 *
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private readonly metaConfig: MetaConfig;

  constructor(
    private readonly titleService: Title,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(LOCALE_ID) private readonly localeId: string,
    @Optional() @Inject(META_CONFIG) metaConfig: Partial<MetaConfig> | null
  ) {
    this.metaConfig = { ...META_CONFIG_DEFAULT, ...metaConfig };

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap(() => this.update())
      )
      .subscribe();
  }

  init(): void {
    /* empty */
  }

  /**
   * Update meta tags
   */
  update(): void {
    const config: MetaConfig = { ...this.metaConfig, ...this.getCurrent() };
    this.setCanonicalUrl();
    this.titleService.setTitle(config.title);
    this.setMetaProperty('description', config.description);
    this.setMetaProperty('og:title', config.title ?? config.title);
    this.setMetaProperty('og:description', config.description);
    this.setMetaProperty('og:type', config.type);
    this.setMetaProperty('og:locale', config.locale ?? this.localeId);
    this.setMetaProperty('og:site_name', config.siteName);
    this.setMetaProperty('og:image', config.image);
    this.setMetaProperty('og:image:type', config.imageType);
    this.setMetaProperty('og:image:width', config.imageWidth);
    this.setMetaProperty('og:image:height', config.imageHeight);
  }

  /**
   * Set canonical url
   * @private
   */
  private setCanonicalUrl(): void {
    const link = (this.document.getElementById('canonical') ?? this.document.createElement('link')) as HTMLLinkElement;
    link.setAttribute('rel', 'canonical');
    link.setAttribute('id', 'canonical');
    link.setAttribute('href', this.getCanonicalURL());
    if (!this.document.getElementById('canonical')) {
      this.document.head.appendChild(link);
    }
  }

  /**
   * Return canonical url
   * @private
   */
  private getCanonicalURL(): string {
    const appHost = this.metaConfig.hostname ?? this.document.defaultView?.location.origin ?? '';
    const path = this.router.url.length > 1 ? this.router.url : '';

    return `${appHost}${path}`;
  }

  /**
   * Set meta tag
   * @param name Name meta
   * @param content Context for tag
   * @private
   */
  private setMetaProperty(name: string, content: string): void {
    const id = `meta-${name}`;
    const has = !!this.document.getElementById(id);

    const meta: MetaDefinition = { id, name, content };

    if (has) {
      this.meta.updateTag(meta);
    } else {
      this.meta.addTag(meta);
    }
  }

  private getCurrent() {
    let route = this.activatedRoute.snapshot;

    while (route.firstChild) {
      route = route.firstChild;
    }

    return {
      url: this.router.url,
      ...route.data['meta'],
    };
  }
}
