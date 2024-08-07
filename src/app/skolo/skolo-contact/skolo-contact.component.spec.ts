/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkoloContactComponent } from './skolo-contact.component';

describe('SkoloContactComponent', () => {
  let component: SkoloContactComponent;
  let fixture: ComponentFixture<SkoloContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkoloContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkoloContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
