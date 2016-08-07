import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, AppRouterProviders } from './main';

import { PatientService } from './patients';

enableProdMode();

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  AppRouterProviders,
  PatientService
])
.catch((err: any) => console.error(err));
