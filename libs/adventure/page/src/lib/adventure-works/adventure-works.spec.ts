import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventureWorks } from './adventure-works';

describe('AdventureWorks', () => {
  let component: AdventureWorks;
  let fixture: ComponentFixture<AdventureWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureWorks],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureWorks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
