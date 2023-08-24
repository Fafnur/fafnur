import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { TitleComponent } from '@fafnur/ui/title';

import { StackComponent } from './stack.component';

describe('StackComponent', () => {
  let component: StackComponent;
  let fixture: ComponentFixture<StackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackComponent, MockComponents(TitleComponent)],
    }).compileComponents();

    fixture = TestBed.createComponent(StackComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
