import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovelScroll } from './novel-scroll';

describe('NovelScroll', () => {
  let component: NovelScroll;
  let fixture: ComponentFixture<NovelScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelScroll],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelScroll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
