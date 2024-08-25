/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EducatorsComponent } from './educators.component';

describe('EducatorsComponent', () => {
  let component: EducatorsComponent;
  let fixture: ComponentFixture<EducatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
