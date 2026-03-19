import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab } from './tab';

describe('UiTabs', () => {
  let component: Tab;
  let fixture: ComponentFixture<Tab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
