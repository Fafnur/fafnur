import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { AsideComponent } from './aside.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { CvComponent } from './cv/cv.component';
import { MatrixComponent } from './matrix/matrix.component';
import { MeComponent } from './me/me.component';
import { SocialComponent } from './socials/social.component';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideComponent, MockComponents(SocialComponent, CollaborationComponent, MatrixComponent, CvComponent, MeComponent)],
    }).compileComponents();

    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
