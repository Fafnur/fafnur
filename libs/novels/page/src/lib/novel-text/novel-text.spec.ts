import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovelText } from './novel-text';

describe('NovelText', () => {
  let component: NovelText;
  let fixture: ComponentFixture<NovelText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelText],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
