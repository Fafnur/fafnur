import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventureHero } from './adventure-hero';

describe('AdventureHero', () => {
  let component: AdventureHero;
  let fixture: ComponentFixture<AdventureHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureHero],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
