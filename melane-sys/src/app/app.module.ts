import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutModule } from './about/about.module';
import { AiModule } from './ai/ai.module';
import { CareerModule } from './career/career.module';
import { CloudModule } from './cloud/cloud.module';
import { ContactModule } from './contact/contact.module';
import { CustomSoftwareModule } from './custom-software/custom-software.module';
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { MobileAppModule } from './mobile-app/mobile-app.module';
import { WebAppModule } from './web-app/web-app.module';
@NgModule({
  declarations: [										
    AppComponent,
   ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    MenuModule,
    HomeModule,
    AboutModule,
    CareerModule,
    ContactModule,
    WebAppModule,
    MobileAppModule,
    CustomSoftwareModule,
    AiModule,
    CloudModule,
    FormsModule,
    HttpClientModule],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
