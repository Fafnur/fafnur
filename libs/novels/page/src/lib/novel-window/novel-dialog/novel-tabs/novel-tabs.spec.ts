import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelTabs } from './novel-tabs';

describe('NovelTabs', () => {
  let component: NovelTabs;
  let fixture: ComponentFixture<NovelTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelTabs);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tab', 'dialog');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two tab buttons', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  it('should switch to history tab on second button click', async () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons[1].click();
    await fixture.whenStable();
    expect(component.$tab()).toBe('history');
  });

  it('should switch to dialog tab on first button click', async () => {
    fixture.componentRef.setInput('tab', 'history');
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons[0].click();
    await fixture.whenStable();
    expect(component.$tab()).toBe('dialog');
  });
});
