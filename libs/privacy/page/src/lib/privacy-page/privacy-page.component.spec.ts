import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLink } from '@angular/router';
import { MockComponents, MockDirectives } from 'ng-mocks';

import { TitleComponent } from '@fafnur/ui/title';

import { PrivacyPageComponent } from './privacy-page.component';

describe('PrivacyPageComponent', () => {
  let component: PrivacyPageComponent;
  let fixture: ComponentFixture<PrivacyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPageComponent, MockComponents(TitleComponent), MockDirectives(RouterLink)],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
