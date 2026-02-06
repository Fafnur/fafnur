import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelPage } from './novel.page';

describe('NovelPage', () => {
  let component: NovelPage;
  let fixture: ComponentFixture<NovelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
