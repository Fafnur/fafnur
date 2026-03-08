import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventureItem } from './adventure-item';

describe('AdventureItem', () => {
  let component: AdventureItem;
  let fixture: ComponentFixture<AdventureItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
