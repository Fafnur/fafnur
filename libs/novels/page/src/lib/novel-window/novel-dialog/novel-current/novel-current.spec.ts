import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelCurrent } from './novel-current';

describe('NovelCurrent', () => {
  let component: NovelCurrent;
  let fixture: ComponentFixture<NovelCurrent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelCurrent],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelCurrent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
