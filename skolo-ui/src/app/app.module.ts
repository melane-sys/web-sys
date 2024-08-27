import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { Feature1Component } from './home/feature-1/feature-1.component';
import { Feature2Component } from './home/feature-2/feature-2.component';
import { CtaComponent } from './home/cta/cta.component';
import { PromoComponent } from './home/promo/promo.component';
import { StudentsComponent } from './students/students.component';
import { EducatorsComponent } from './educators/educators.component';
import { SchoolsComponent } from './schools/schools.component';
import { HeroEducatorComponent } from './educators/hero-educator/hero-educator.component';
import { HeroStudentComponent } from './students/hero-student/hero-student.component';
import { HeroSchoolComponent } from './schools/hero-school/hero-school.component';
import { SchoolPriceComponent } from './school-price/school-price.component';
import { StudentPriceComponent } from './student-price/student-price.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './shared/core/loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
import { PortalModule } from './portal/portal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { ErrorHandlerService } from './shared/service/error-handler.service';
import { SchoolPortalModule } from './school-portal/school-portal.module';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [										
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeroComponent,
    Feature1Component,
    Feature2Component,
    CtaComponent,
    PromoComponent,
    StudentsComponent,
    EducatorsComponent,
    SchoolsComponent,
    HeroEducatorComponent,
    HeroStudentComponent,
    HeroSchoolComponent,
    SchoolPriceComponent,
    StudentPriceComponent,
    RegisterComponent,
    ChatbotComponent,
    
   ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    PortalModule,
    SchoolPortalModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    })],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
