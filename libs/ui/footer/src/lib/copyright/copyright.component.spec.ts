import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightComponent } from './copyright.component';

describe('CopyrightComponent', () => {
  let component: CopyrightComponent;
  let fixture: ComponentFixture<CopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CopyrightComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
