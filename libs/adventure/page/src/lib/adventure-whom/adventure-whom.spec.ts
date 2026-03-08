import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventureWhom } from './adventure-whom';

describe('AdventureWhom', () => {
  let component: AdventureWhom;
  let fixture: ComponentFixture<AdventureWhom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureWhom],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureWhom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
