import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient, PatientService } from './patients.service';

@Component({
  selector: 'touch-student-list',
  template: `
  <div class="pull-right button blue raised" (click)="addNewPatient()">
    <div class="text-center" fit>New Patient</div>
  </div>
  <br>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Date of Birth</th>
        <th>Start Date</th>
        <th>Diagnosis</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let p of patients; let i = index">
        <td>{{ p.lastName }}</td>
        <td>{{ p.firstName }}</td>
        <td>{{ p.birthday | date }}</td>
        <td>{{ p.startDate | date }}</td>
        <td>{{ p.diagnosis }}</td>
        <td>
          <div class="button dull-blue raised" (click)="editRecord(p.id)">
            <div class="text-center" fit>Edit</div>
          </div>
        </td>
        <td>
          <div class="button blue raised" (click)="viewRecord(p.id)">
            <div class="text-center" fit>Details</div>
          </div>
        </td>
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

      .button {
        display: block;

      }
    `
  ],
  providers: [
    PatientService
  ]
})
export class PatientListComponent {

  patients: Patient[] = [];

  constructor(private router: Router, private patientService: PatientService) {
    this.patients = patientService.getPatients();
  }

  addNewPatient() {
    console.log("new patient needs to be entered.");
  }

  viewRecord(id: number) {
    console.log(`requesting to view ${this.patients[id].firstName} ${this.patients[id].lastName}`);
    let link = ['/details', id];
    this.router.navigate(link);
  }

  editRecord(id: number) {
    console.log(`requesting to edit ${this.patients[id].firstName} ${this.patients[id].lastName}`);
  }
}
