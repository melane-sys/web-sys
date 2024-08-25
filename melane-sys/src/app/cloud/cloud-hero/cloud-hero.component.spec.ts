/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CloudHeroComponent } from './cloud-hero.component';

describe('CloudHeroComponent', () => {
  let component: CloudHeroComponent;
  let fixture: ComponentFixture<CloudHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
