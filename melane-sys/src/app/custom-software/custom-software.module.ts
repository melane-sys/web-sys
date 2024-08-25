import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSoftwareComponent } from './custom-software.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { CustomHeroComponent } from './custom-hero/custom-hero.component';
import { TypesComponent } from './types/types.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    RouterModule,
    HomeModule
  ],
  declarations: [CustomSoftwareComponent,CustomHeroComponent,TypesComponent]
})
export class CustomSoftwareModule { }
