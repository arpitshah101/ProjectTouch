import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home.component';
// import {UserListComponent} from '../users';

export const HomeRoutes: RouterConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent }
  // { path: 'users', component: UserListComponent },
];
