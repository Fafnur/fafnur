import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkService } from '@fafnur/core';

import { NovelScroll } from './novel-scroll';

const mockInkService = {
  $historyBlocks: signal([] as unknown[][]),
};

describe('NovelScroll', () => {
  let component: NovelScroll;
  let fixture: ComponentFixture<NovelScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelScroll],
      providers: [{ provide: InkService, useValue: mockInkService }],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelScroll);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('active', false);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be visible when active is false', () => {
    expect(fixture.nativeElement.classList).not.toContain('hidden');
  });

  it('should be hidden on mobile when active is true', async () => {
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.classList).toContain('hidden');
  });

  it('should have overflow-y-auto class', () => {
    expect(fixture.nativeElement.classList).toContain('overflow-y-auto');
  });
});
