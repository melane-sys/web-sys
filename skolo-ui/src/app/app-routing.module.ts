import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { EducatorsComponent } from './educators/educators.component';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolPriceComponent } from './school-price/school-price.component';
import { StudentPriceComponent } from './student-price/student-price.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { StudentGuard } from './shared/guards/student.guard';
import { SchoolGuard } from './shared/guards/school.guard';
import { PrimaryComponent } from './home/primary/primary.component';
import { SecondaryComponent } from './home/secondary/secondary.component';
import { SeniorComponent } from './home/senior/senior.component';
import { CareerComponent } from './home/career/career.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'educators',
    component: EducatorsComponent,
  },
  {
    path: 'schools',
    component: SchoolsComponent,
  },
  {
    path: 'student-pricing',
    component: StudentPriceComponent,
  },
  {
    path: 'school-pricing',
    component: SchoolPriceComponent,
  },
  {
    path: 'primary-subjects',
    component: PrimaryComponent,
  },
  {
    path: 'secondary-subjects',
    component: SecondaryComponent,
  },
  {
    path: 'senior-subjects',
    component: SeniorComponent,
  },
  {
    path: 'career-development',
    component: CareerComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard, StudentGuard],
    children: [
      { path: 'student-portal', loadChildren: () => import('./portal/portal.module').then(module => module.PortalModule) },
    
    ],
  },

  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard, SchoolGuard],
    children: [
      { path: 'school-portal', loadChildren: () => import('./school-portal/school-portal.module').then(module => module.SchoolPortalModule) },
    
    ],
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
