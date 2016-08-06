import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, AppRouterProviders } from './main';

enableProdMode();

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  AppRouterProviders
])
.catch((err: any) => console.error(err));
