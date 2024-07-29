import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { FaqComponent } from './faq/faq.component';
import { ServiceComponent } from './service/service.component';
import { CtaComponent } from './cta/cta.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    RouterModule,
  ],
  declarations: [
    HomeComponent,
    HeroComponent,
    WhoWeAreComponent,
    FaqComponent,
    ServiceComponent,
    CtaComponent,
  ],exports:[
    WhoWeAreComponent,
  ]
})
export class HomeModule { }
