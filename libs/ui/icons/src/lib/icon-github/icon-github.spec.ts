import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconGithub } from './icon-github';

describe('IconGithub', () => {
  let component: IconGithub;
  let fixture: ComponentFixture<IconGithub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconGithub],
    }).compileComponents();

    fixture = TestBed.createComponent(IconGithub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
