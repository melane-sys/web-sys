/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Advert-1Component } from './advert-1.component';

describe('Advert-1Component', () => {
  let component: Advert-1Component;
  let fixture: ComponentFixture<Advert-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advert-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advert-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
