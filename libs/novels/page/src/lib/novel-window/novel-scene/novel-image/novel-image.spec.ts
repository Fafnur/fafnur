import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelImage } from './novel-image';

describe('NovelImage', () => {
  let component: NovelImage;
  let fixture: ComponentFixture<NovelImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelImage],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
