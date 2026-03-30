import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { PATHS } from '@fafnur/core';

import { NotFoundPage } from './not-found-page';

describe('NotFoundPage', () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    document.querySelector("link[rel='canonical']")?.remove();
    document.querySelectorAll('meta[name], meta[property]').forEach((el) => el.remove());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose PATHS', () => {
    expect(component.paths).toBe(PATHS);
  });

  it('should set page title', () => {
    expect(TestBed.inject(Title).getTitle()).toBe('404 — Page Not Found');
  });

  it('should set description meta tag', () => {
    expect(TestBed.inject(Meta).getTag('name="description"')?.content).toContain("doesn't exist");
  });

  it('should render 404 text', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('404');
  });

  it('should render page title', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h1')?.textContent?.trim()).toBe('Page not found');
  });

  it('should render link to home', () => {
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a[href]');
    const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
    expect(hrefs).toContain(PATHS.home);
  });

  it('should render link to about', () => {
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a[href]');
    const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
    expect(hrefs).toContain(PATHS.about);
  });

  it('should render link to adventure', () => {
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a[href]');
    const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
    expect(hrefs).toContain(PATHS.adventure);
  });

  it('should render link to novels', () => {
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a[href]');
    const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
    expect(hrefs).toContain(PATHS.novels);
  });
});
