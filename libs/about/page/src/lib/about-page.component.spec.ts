import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { ContainerComponent } from '@fafnur/ui/container';

import { AboutPageComponent } from './about-page.component';
import { ExperienceComponent } from './experience/experience.component';
import { StackComponent } from './stack/stack.component';
import { WhoComponent } from './who/who.component';

describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageComponent, MockComponents(ContainerComponent, WhoComponent, ExperienceComponent, StackComponent)],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
