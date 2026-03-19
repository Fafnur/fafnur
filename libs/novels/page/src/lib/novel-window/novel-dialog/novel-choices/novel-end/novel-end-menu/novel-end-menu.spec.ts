import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NovelEndMenu } from './novel-end-menu';

describe('NovelEndMenu', () => {
  let component: NovelEndMenu;
  let fixture: ComponentFixture<NovelEndMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelEndMenu],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelEndMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 4 links', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links.length).toBe(4);
  });

  it('should have mailto link', () => {
    const link = fixture.nativeElement.querySelector('a[href="mailto:fafnur@yandex.ru"]');
    expect(link).toBeTruthy();
  });

  it('should have github link', () => {
    const link = fixture.nativeElement.querySelector('a[href="https://github.com/fafnur"]');
    expect(link).toBeTruthy();
  });

  it('should open external links in new tab', () => {
    const externalLinks = fixture.nativeElement.querySelectorAll('a[target="_blank"]');
    expect(externalLinks.length).toBe(2);
  });
});
