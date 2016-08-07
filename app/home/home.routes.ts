import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRoutes: RouterConfig = [
  { path: '', redirectTo: 'patients', pathMatch: 'full'},
  { path: 'home', component: HomeComponent }
];
