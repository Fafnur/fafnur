import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelActor } from './novel-actor';

describe('NovelActor', () => {
  let component: NovelActor;
  let fixture: ComponentFixture<NovelActor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelActor],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelActor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
