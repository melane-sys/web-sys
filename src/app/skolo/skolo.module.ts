import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkoloComponent } from './skolo.component';
import { RouterModule } from '@angular/router';
import { SkoloHeaderComponent } from './skolo-header/skolo-header.component';
import { SkoloHeroComponent } from './skolo-hero/skolo-hero.component';
import { StepComponent } from './step/step.component';
import { SchoolPriceComponent } from './school-price/school-price.component';
import { StudentPriceComponent } from './student-price/student-price.component';
import { SkoloRoutes } from './skolo.routing';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { SkoloPriceComponent } from './skolo-price/skolo-price.component';
import { MenuModule } from '../menu/menu.module';
import { SharedModule } from '../shared/shared.module';
import { TeacherComponent } from './teacher/teacher.component';
import { SchoolHeroComponent } from './school/school-hero/school-hero.component';
import { TeacherHeroComponent } from './teacher/teacher-hero/teacher-hero.component';
import { StudentHeroComponent } from './student/student-hero/student-hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { JourneyComponent } from './journey/journey.component';
import { TransformComponent } from './transform/transform.component';
import { PackagesComponent } from './packages/packages.component';
import { PackHeroComponent } from './packages/pack-hero/pack-hero.component';
import { RegisterComponent } from './register/register.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassListComponent } from './classes/class-list/class-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(SkoloRoutes),
    SharedModule,
    MenuModule
  ],
  declarations: [
    SkoloComponent,
    SkoloHeaderComponent,
    SkoloHeroComponent,
    StepComponent ,
    SchoolPriceComponent,
    StudentPriceComponent,
    SchoolComponent,
    StudentComponent,
    SkoloPriceComponent,
    TeacherComponent,
    SchoolHeroComponent,
    TeacherHeroComponent,
    StudentHeroComponent,
    CategoriesComponent,
    JourneyComponent,
    TransformComponent,
    PackagesComponent,
    PackHeroComponent,
    RegisterComponent,
    ClassesComponent,
    ClassListComponent

  ]
})
export class SkoloModule { }
