/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortalHeroComponent } from './portal-hero.component';

describe('PortalHeroComponent', () => {
  let component: PortalHeroComponent;
  let fixture: ComponentFixture<PortalHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
