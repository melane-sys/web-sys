/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Feature-2Component } from './feature-2.component';

describe('Feature-2Component', () => {
  let component: Feature-2Component;
  let fixture: ComponentFixture<Feature-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
