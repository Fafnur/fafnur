import { Meta, Title } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let title: Title;
  let meta: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoService);
    title = TestBed.inject(Title);
    meta = TestBed.inject(Meta);
  });

  afterEach(() => {
    document.querySelector("link[rel='canonical']")?.remove();
    document.querySelectorAll('meta[name], meta[property]').forEach((el) => el.remove());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('update()', () => {
    it('should set page title', () => {
      service.update({ title: 'Test Page', description: 'Test desc' });
      expect(title.getTitle()).toBe('Test Page');
    });

    it('should set description meta tag', () => {
      service.update({ title: 'Test', description: 'My description' });
      expect(meta.getTag('name="description"')?.content).toBe('My description');
    });

    it('should set og:title and og:description', () => {
      service.update({ title: 'OG Title', description: 'OG Desc' });
      expect(meta.getTag('property="og:title"')?.content).toBe('OG Title');
      expect(meta.getTag('property="og:description"')?.content).toBe('OG Desc');
    });

    it('should default og:type to website', () => {
      service.update({ title: 'Test', description: 'Desc' });
      expect(meta.getTag('property="og:type"')?.content).toBe('website');
    });

    it('should set og:type to article when specified', () => {
      service.update({ title: 'Test', description: 'Desc', type: 'article' });
      expect(meta.getTag('property="og:type"')?.content).toBe('article');
    });

    it('should set og:url when provided', () => {
      service.update({ title: 'Test', description: 'Desc', url: 'https://example.com/page' });
      expect(meta.getTag('property="og:url"')?.content).toBe('https://example.com/page');
    });

    it('should set og:image when provided', () => {
      service.update({ title: 'Test', description: 'Desc', image: 'https://example.com/img.jpg' });
      expect(meta.getTag('property="og:image"')?.content).toBe('https://example.com/img.jpg');
    });

    it('should set og:image:width and og:image:height when provided', () => {
      service.update({
        title: 'Test',
        description: 'Desc',
        image: 'https://example.com/img.jpg',
        imageWidth: '1200',
        imageHeight: '630',
      });
      expect(meta.getTag('property="og:image:width"')?.content).toBe('1200');
      expect(meta.getTag('property="og:image:height"')?.content).toBe('630');
    });

    it('should not set og:image:width/height without image', () => {
      service.update({ title: 'Test', description: 'Desc', imageWidth: '1200', imageHeight: '630' });
      expect(meta.getTag('property="og:image:width"')).toBeNull();
      expect(meta.getTag('property="og:image:height"')).toBeNull();
    });

    it('should set twitter:card, twitter:title, twitter:description', () => {
      service.update({ title: 'TW Title', description: 'TW Desc' });
      expect(meta.getTag('name="twitter:card"')?.content).toBe('summary_large_image');
      expect(meta.getTag('name="twitter:title"')?.content).toBe('TW Title');
      expect(meta.getTag('name="twitter:description"')?.content).toBe('TW Desc');
    });

    it('should set twitter:image when image provided', () => {
      service.update({ title: 'Test', description: 'Desc', image: 'https://example.com/img.jpg' });
      expect(meta.getTag('name="twitter:image"')?.content).toBe('https://example.com/img.jpg');
    });
  });

  describe('setCanonical()', () => {
    it('should create canonical link on first call', () => {
      service.update({ title: 'Test', description: 'Desc', url: 'https://example.com/' });
      const link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
      expect(link).toBeTruthy();
      expect(link?.href).toBe('https://example.com/');
    });

    it('should update existing canonical link on second call', () => {
      service.update({ title: 'Test', description: 'Desc', url: 'https://example.com/page1' });
      service.update({ title: 'Test 2', description: 'Desc 2', url: 'https://example.com/page2' });
      const links = document.querySelectorAll("link[rel='canonical']");
      expect(links.length).toBe(1);
      expect((links[0] as HTMLLinkElement).href).toBe('https://example.com/page2');
    });
  });
});
