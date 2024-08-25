import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAppComponent } from './web-app.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { WebHeroComponent } from './web-hero/web-hero.component';
import { ProcessComponent } from './process/process.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TechComponent } from './tech/tech.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuModule
  ],
  declarations: [				WebAppComponent,
      WebHeroComponent,
      ProcessComponent,
      WhyUsComponent,
      TechComponent
   ]
})
export class WebAppModule { }
