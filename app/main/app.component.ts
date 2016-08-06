import { Component, Input }  from '@angular/core';
import { ROUTER_DIRECTIVES, Router}  from '@angular/router';

import { HomeComponent } from '../home';

// import { User } from '../models'

@Component({
  selector: 'touch-app',
  templateUrl: 'app/main/app.html',
  providers:  [
  ],
  directives: [ROUTER_DIRECTIVES],
  precompile: [HomeComponent]
})

export class AppComponent {
  constructor(private router: Router) {}

}
