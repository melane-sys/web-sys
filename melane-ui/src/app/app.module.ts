import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { CareerModule } from './career/career.module';
import { ContactModule } from './contact/contact.module';
import { SkoloModule } from './skolo/skolo.module';
import { BlogModule } from './blog/blog.module';
import { WebAppModule } from './web-app/web-app.module';
import { MobileAppModule } from './mobile-app/mobile-app.module';
import { CustomSoftwareModule } from './custom-software/custom-software.module';
import { AiModule } from './ai/ai.module';
import { CloudModule } from './cloud/cloud.module';
import { SwiperModule } from 'swiper/angular';
import { ChatbotPopupComponent } from './chatbot-popup/chatbot-popup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [								
    AppComponent,
      ChatbotPopupComponent
   ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    MenuModule,
    HomeModule,
    AboutModule,
    CareerModule,
    ContactModule,
    SkoloModule,
    BlogModule,
    WebAppModule,
    MobileAppModule,
    CustomSoftwareModule,
    AiModule,
    CloudModule,
    SwiperModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
