import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventureList } from './adventure-list';

describe('AdventureList', () => {
  let component: AdventureList;
  let fixture: ComponentFixture<AdventureList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureList],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
