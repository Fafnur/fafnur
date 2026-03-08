import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventureCard } from './adventure-card';

describe('AdventureCard', () => {
  let component: AdventureCard;
  let fixture: ComponentFixture<AdventureCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
