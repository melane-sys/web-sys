import { Routes, RouterModule } from '@angular/router';
import { SkoloPriceComponent } from './skolo-price/skolo-price.component';
import { SkoloComponent } from './skolo.component';
import { PackagesComponent } from './packages/packages.component';
import { RegisterComponent } from './register/register.component';
import { SkoloContactComponent } from './skolo-contact/skolo-contact.component';




export const SkoloRoutes: Routes = [
  { path: '', component: SkoloComponent },
  { path: 'price', component: SkoloPriceComponent },
  { path: 'categories', component: PackagesComponent },
  { path: 'enroll', component: RegisterComponent },
  { path: 'contact', component: SkoloContactComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
