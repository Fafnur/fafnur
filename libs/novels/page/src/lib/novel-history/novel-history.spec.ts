import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelHistory } from './novel-history';

describe('NovelHistory', () => {
  let component: NovelHistory;
  let fixture: ComponentFixture<NovelHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
