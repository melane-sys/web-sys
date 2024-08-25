import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalRoutes } from './portal.routing';
import { PortalHeroComponent } from './portal-hero/portal-hero.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentComponent } from './payment/payment.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { SwiperModule } from 'swiper/angular';
import { DownloadComponent } from './download/download.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import { StudentClassComponent } from './student-class/student-class.component';
import { StudentEnrollComponent } from './student-enroll/student-enroll.component';


@NgModule({
  imports: [
    CommonModule,
    PortalRoutes,
    SharedModule,
    SwiperModule
    
  ],
  declarations: [
    PortalComponent,
    PortalHeroComponent,
    PaymentComponent,
    TeachersListComponent,
    DownloadComponent,
    TeacherDetailsComponent,
    SubjectsListComponent,
    StudentClassComponent,
    StudentEnrollComponent
  ]
})
export class PortalModule { }
