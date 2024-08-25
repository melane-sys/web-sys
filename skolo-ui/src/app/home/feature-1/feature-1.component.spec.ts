/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Feature-1Component } from './feature-1.component';

describe('Feature-1Component', () => {
  let component: Feature-1Component;
  let fixture: ComponentFixture<Feature-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
