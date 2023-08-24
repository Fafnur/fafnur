import { DatePipe, NgStyle } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MockDirectives, MockModule, MockPipes } from 'ng-mocks';

import { MetricService } from '@fafnur/core';
import { POST_STUB } from '@fafnur/posts/common';

import { PostCardComponent } from './post-card.component';
import { PostCardImagePipe } from './post-card-image.pipe';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardComponent, MockModule(MatCardModule), MockModule(MatButtonModule)],
      declarations: [MockDirectives(NgStyle), MockPipes(PostCardImagePipe, DatePipe)],
      providers: [
        {
          provide: MetricService,
          useValue: {
            send: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    component.post = POST_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
