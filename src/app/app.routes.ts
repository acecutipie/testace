import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
];
