import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileAppComponent } from './mobile-app.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { MobileHeroComponent } from './mobile-hero/mobile-hero.component';
import { AppComponent } from './app/app.component';
import { MobileProcessComponent } from './mobile-process/mobile-process.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuModule
  ],
  declarations: [			
    MobileAppComponent,
    MobileHeroComponent,
      AppComponent,
      MobileProcessComponent
   ]
})
export class MobileAppModule { }
