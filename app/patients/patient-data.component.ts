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
      <tr *ngFor="let p of performances; let i = index">
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
  styles: [],
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
