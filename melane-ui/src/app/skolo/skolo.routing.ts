import { Routes, RouterModule } from '@angular/router';
import { SkoloPriceComponent } from './skolo-price/skolo-price.component';
import { SkoloComponent } from './skolo.component';
import { PackagesComponent } from './packages/packages.component';




export const SkoloRoutes: Routes = [
  { path: '', component: SkoloComponent },
  { path: 'price', component: SkoloPriceComponent },
  { path: 'categories', component: PackagesComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
