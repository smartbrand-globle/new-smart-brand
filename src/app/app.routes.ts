import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesesComponent } from './pages/serviceses/serviceses.component';
import { WebComponent } from './pages/web/web.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { UiUxComponent } from './pages/ui-ux/ui-ux.component';
import { SeoComponent } from './pages/seo/seo.component';
import { CareersComponent } from './pages/careers/careers.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesesComponent },
  { path: 'web', component: WebComponent },
  { path: 'app', component: MobileComponent },
  { path: 'ui-ux', component: UiUxComponent },
  { path: 'seo', component: SeoComponent },
  { path: 'careers', component: CareersComponent },
];
