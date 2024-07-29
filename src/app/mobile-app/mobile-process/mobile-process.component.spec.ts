/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MobileProcessComponent } from './mobile-process.component';

describe('MobileProcessComponent', () => {
  let component: MobileProcessComponent;
  let fixture: ComponentFixture<MobileProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
