import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeRoutes }   from '../home';

export const routes: RouterConfig = [
  //...LoginRoutes,
  ...HomeRoutes
];

export const AppRouterProviders = [
  provideRouter(routes)
];
