import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeRoutes }   from '../home';
import { PatientRoutes } from '../patients';

export const routes: RouterConfig = [
  //...LoginRoutes,
  ...HomeRoutes,
  ...PatientRoutes
];

export const AppRouterProviders = [
  provideRouter(routes)
];
