import { Routes, RouterModule } from '@angular/router';
import { SchoolPortalComponent } from './school-portal.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: SchoolPortalComponent },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SchoolPortalRoutes {}
