import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovelWindow } from './novel-window';

describe('NovelWindow', () => {
  let component: NovelWindow;
  let fixture: ComponentFixture<NovelWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelWindow],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelWindow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
