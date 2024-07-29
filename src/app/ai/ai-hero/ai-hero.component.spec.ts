/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AiHeroComponent } from './ai-hero.component';

describe('AiHeroComponent', () => {
  let component: AiHeroComponent;
  let fixture: ComponentFixture<AiHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
