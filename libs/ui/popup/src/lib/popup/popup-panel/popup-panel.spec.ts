import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupPanel } from './popup-panel';

describe('PopupPanel', () => {
  let component: PopupPanel;
  let fixture: ComponentFixture<PopupPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
