import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { TitleComponent } from '@fafnur/ui/title';

import { WhoComponent } from './who.component';

describe('WhoComponent', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoComponent, MockComponents(TitleComponent)],
    }).compileComponents();

    fixture = TestBed.createComponent(WhoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
