import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { TeamComponent } from './team/team.component';
import { MissionComponent } from './mission/mission.component';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    RouterModule
  ],
  declarations: [
    AboutComponent,
    AboutHeroComponent,
    TeamComponent,
   MissionComponent
  ]
})
export class AboutModule { }
