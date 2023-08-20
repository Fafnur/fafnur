import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponent } from './aside.component';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
