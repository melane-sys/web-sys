import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CustomSoftwareComponent } from './custom-software/custom-software.component';
import { WebAppComponent } from './web-app/web-app.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { CloudComponent } from './cloud/cloud.component';
import { AiComponent } from './ai/ai.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'skolo',
    loadChildren: () => import('./skolo/skolo.module').then(m => m.SkoloModule)
  },
  { path: 'about', component: AboutComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'software-engineering', component: CustomSoftwareComponent },
  { path: 'web-development', component: WebAppComponent },
  { path: 'mobile-development', component: MobileAppComponent},
  { path: 'cloud-engineering', component: CloudComponent},
  { path: 'ai-technology', component: AiComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
