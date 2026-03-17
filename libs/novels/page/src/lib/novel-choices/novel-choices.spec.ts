import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { InkService } from '@fafnur/core';

import { NovelChoices } from './novel-choices';

const mockInkService = {
  $choices: signal([] as unknown[]),
  choose: vi.fn(),
  reset: vi.fn(),
};

describe('NovelChoices', () => {
  let component: NovelChoices;
  let fixture: ComponentFixture<NovelChoices>;

  beforeEach(async () => {
    vi.clearAllMocks();
    mockInkService.$choices.set([]);

    await TestBed.configureTestingModule({
      imports: [NovelChoices],
      providers: [
        provideRouter([]),
        { provide: InkService, useValue: mockInkService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelChoices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render choice buttons when choices exist', async () => {
    mockInkService.$choices.set([
      { index: 0, text: 'Choice A' },
      { index: 1, text: 'Choice B' },
    ] as unknown[]);
    fixture.detectChanges();
    await fixture.whenStable();

    const buttons = fixture.nativeElement.querySelectorAll('button[type="button"]');
    expect(buttons.length).toBe(2);
    expect(fixture.nativeElement.textContent).toContain('Choice A');
    expect(fixture.nativeElement.textContent).toContain('Choice B');
  });

  it('should render novel-end when no choices', () => {
    fixture.detectChanges();
    const end = fixture.nativeElement.querySelector('fafnur-novel-end');
    expect(end).toBeTruthy();
  });

  it('should call choose() with correct index on choice click', async () => {
    mockInkService.$choices.set([{ index: 0, text: 'Choice A' }] as unknown[]);
    fixture.detectChanges();
    await fixture.whenStable();

    fixture.nativeElement.querySelector('button[type="button"]').click();
    expect(mockInkService.choose).toHaveBeenCalledWith(0);
  });

  it('should call reset() on reset button click', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const resetBtn = fixture.nativeElement.querySelector('button[fafnurButton]');
    resetBtn.click();
    expect(mockInkService.reset).toHaveBeenCalled();
  });
});
