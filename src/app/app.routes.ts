import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesesComponent } from './pages/serviceses/serviceses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesesComponent },
  { path: 'web-development', component: HomeComponent },
  { path: 'mobile-app', component: HomeComponent },
  { path: 'ui-ux-design', component: HomeComponent },
  { path: 'sco', component: HomeComponent },
];
