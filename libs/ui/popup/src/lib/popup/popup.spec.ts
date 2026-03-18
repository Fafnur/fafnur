import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { Popup } from './popup';

@Component({ template: '<p>Content</p>' })
class TestContentComponent {}

describe('Popup', () => {
  let component: Popup;
  let fixture: ComponentFixture<Popup>;

  const mockPopupRef = {
    close: vi.fn(),
  } as unknown;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Popup],
    }).compileComponents();

    fixture = TestBed.createComponent(Popup);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('content', TestContentComponent);
    fixture.componentRef.setInput('popupRef', mockPopupRef);
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
