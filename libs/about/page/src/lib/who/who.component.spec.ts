import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoComponent } from './who.component';

describe('WhoComponent', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
