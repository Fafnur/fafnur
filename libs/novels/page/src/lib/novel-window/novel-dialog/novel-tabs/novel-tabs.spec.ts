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
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
