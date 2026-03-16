import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelChoices } from './novel-choices';

describe('NovelChoices', () => {
  let component: NovelChoices;
  let fixture: ComponentFixture<NovelChoices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelChoices],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelChoices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
