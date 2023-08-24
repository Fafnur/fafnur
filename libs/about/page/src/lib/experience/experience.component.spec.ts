import { NgForOf } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, MockDirectives, MockPipes } from 'ng-mocks';

import { ColumnComponent, RowComponent, TabletDirective, WebDirective } from '@fafnur/ui/grid';
import { TitleComponent } from '@fafnur/ui/title';

import { ExperienceComponent } from './experience.component';
import { ReplaceSpacesPipe } from './replace-spaces.pipe';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ExperienceComponent,
        NgForOf,
        MockComponents(ColumnComponent, RowComponent, TitleComponent),
        MockDirectives(TabletDirective, WebDirective),
        MockPipes(ReplaceSpacesPipe),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
