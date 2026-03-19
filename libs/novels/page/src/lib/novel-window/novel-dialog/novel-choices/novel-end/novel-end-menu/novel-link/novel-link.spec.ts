import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelLink } from './novel-link';

@Component({
  template: `<a fafnurNovelLink>Link text</a>`,
  imports: [NovelLink],
})
class TestHostComponent {}

describe('NovelLink', () => {
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelLink],
    }).compileComponents();

    hostFixture = TestBed.createComponent(TestHostComponent);
    await hostFixture.whenStable();
  });

  it('should create', () => {
    expect(hostFixture.componentInstance).toBeTruthy();
  });

  it('should render projected content', () => {
    expect(hostFixture.nativeElement.textContent).toContain('Link text');
  });

  it('should render arrow', () => {
    expect(hostFixture.nativeElement.textContent).toContain('›');
  });

  it('should have group class on host', () => {
    const link: HTMLElement = hostFixture.nativeElement.querySelector('a');
    expect(link.classList).toContain('group');
  });
});
