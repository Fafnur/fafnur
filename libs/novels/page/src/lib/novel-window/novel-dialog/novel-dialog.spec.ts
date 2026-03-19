import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovelDialog } from './novel-dialog';

describe('NovelDialog', () => {
  let component: NovelDialog;
  let fixture: ComponentFixture<NovelDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
