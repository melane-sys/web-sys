import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career.component';
import { SharedModule } from '../shared/shared.module';
import { BenefitsComponent } from './benefits/benefits.component';
import { OpenPositionComponent } from './open-position/open-position.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuModule
  ],
  declarations: [
    CareerComponent,
    BenefitsComponent,
    OpenPositionComponent
  ]
})
export class CareerModule { }
