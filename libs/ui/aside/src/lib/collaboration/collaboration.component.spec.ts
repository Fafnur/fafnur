import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationComponent } from './collaboration.component';

describe('CollaborationComponent', () => {
  let component: CollaborationComponent;
  let fixture: ComponentFixture<CollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CollaborationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
