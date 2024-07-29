/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentHeroComponent } from './student-hero.component';

describe('StudentHeroComponent', () => {
  let component: StudentHeroComponent;
  let fixture: ComponentFixture<StudentHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
