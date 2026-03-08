import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventureQuest } from './adventure-quest';

describe('AdventureQuest', () => {
  let component: AdventureQuest;
  let fixture: ComponentFixture<AdventureQuest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureQuest],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureQuest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
