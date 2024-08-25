import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolPortalComponent } from './school-portal.component';
import { SharedModule } from '../shared/shared.module';
import { SchoolPortalRoutes } from './school-portal.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SchoolPortalRoutes
  ],
  declarations: [SchoolPortalComponent]
})
export class SchoolPortalModule { }
