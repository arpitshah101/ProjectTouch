import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { Patient, PatientService } from './patients.service';

@Component({
  selector: 'touch-patient-data',
  template: `
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Date</th>
        <th>Texture</th>
        <th>Intensity</th>
        <th>Goal Frequency</th>
        <th>Actual Frequency</th>
        <th>Pass</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let p of performances.reverse(); let i = index" [ngClass]="{'success': p.pass, 'error': !p.pass}">
        <td>{{ p.date | date }}</td>
        <td>{{ p.texture }}</td>
        <td>{{ p.intensity }}</td>
        <td>{{ p.goalFrequency }}</td>
        <td>{{ p.actualFrequency }}</td>
        <td>{{ p.pass }}</td>
      </tr>
    </tbody>
  </table>
  `,
  styles: [
    `
      :host {
        width: 90%;
        margin: 0 auto;
        display: block;
        padding: 20px;
        margin-top: 20px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        background: white;
      }
      table {
        margin: 0 auto;
        padding: 20px;
      }
    `
  ],
  providers: []
})
export class PatientDataComponent {

  patient: Patient;
  patientSub: Subscription;

  performances: Performance[] = [];

  constructor(private patientService: PatientService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.patientSub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.patientService.getPatient(id)
        .then((patient:Patient) => this.patient = patient);
      this.patientService.getPerformance(id).then(
        (performances:Performance[]) => this.performances = performances
      );
    });

  }

  ngOnDestroy() {
    this.patientSub.unsubscribe();
  }
}
