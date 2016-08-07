import { provideRouter, RouterConfig } from '@angular/router';
import { PatientDataComponent, PatientListComponent } from '../patients';

export const PatientRoutes: RouterConfig = [
  { path: 'patients', component: PatientListComponent },
  { path: 'details/:id', component: PatientDataComponent },
  // { path: 'notes/:id', component: PatientNotesComponent }
];
