import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelScene } from './novel-scene';

describe('NovelScene', () => {
  let component: NovelScene;
  let fixture: ComponentFixture<NovelScene>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelScene],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelScene);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render image placeholder', () => {
    expect(fixture.nativeElement.querySelector('fafnur-novel-image')).toBeTruthy();
  });

  it('should have overflow-hidden class', () => {
    expect(fixture.nativeElement.classList).toContain('overflow-hidden');
  });
});
