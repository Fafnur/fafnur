import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconTelegram } from './icon-telegram';

describe('IconTelegram', () => {
  let component: IconTelegram;
  let fixture: ComponentFixture<IconTelegram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconTelegram],
    }).compileComponents();

    fixture = TestBed.createComponent(IconTelegram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
