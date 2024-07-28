import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudComponent } from './cloud.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { CloudHeroComponent } from './cloud-hero/cloud-hero.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    HomeModule
  ],
  declarations: [CloudComponent,CloudHeroComponent]
})
export class CloudModule { }
