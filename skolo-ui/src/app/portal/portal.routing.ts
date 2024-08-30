import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { PaymentComponent } from './payment/payment.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { StudentClassComponent } from './student-class/student-class.component';
import { StudentEnrollComponent } from './student-enroll/student-enroll.component';

const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'teacher/:id', component: TeacherDetailsComponent },
  { path: 'class', component: StudentClassComponent },
  { path: 'student-enroll', component: StudentEnrollComponent },
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
export class PortalRoutes {}
