import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiComponent } from './ai.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { AiHeroComponent } from './ai-hero/ai-hero.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    HomeModule
  ],
  declarations: [AiComponent,AiHeroComponent]
})
export class AiModule { }
