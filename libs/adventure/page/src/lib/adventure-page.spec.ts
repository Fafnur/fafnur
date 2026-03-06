import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventurePage } from './adventure-page';

describe('AdventurePage', () => {
  let component: AdventurePage;
  let fixture: ComponentFixture<AdventurePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventurePage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventurePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
