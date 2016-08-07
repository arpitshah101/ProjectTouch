import { Injectable } from '@angular/core';

export interface Patient {
  firstName: string;
  lastName: string;
  birthday: Date;
  diagnosis: string[];
  startDate: Date;
  [anyProp: string] : any;
}

export interface Performance {
  patientId: number;
  date: Date;
  texture: string;
  intensity: string;
  goalFrequency: number;
  actualFrequency: number;
  pass: boolean;
  [anyProp: string]: any;
}

@Injectable()
export class PatientService {

  private patients: Patient[] = [];
  private performances: Performance[] = [];

  constructor() {
    this.patients = [
        {
            "id": "0",
            "firstName": "John",
            "lastName": "Smith",
            "birthday": new Date("Aug 10 2003 23:07:53"),
            "diagnosis": ["Autism", "ADD", "ADHD"],
            "startDate": new Date("Oct 13 2009 00:04:20")
        },
        {
            "id": "1",
            "firstName": "Joe",
            "lastName": "Schmoe",
            "birthday": new Date("Jun 28 2009 02:34:24"),
            "diagnosis": ["Seizure Disorder"],
            "startDate": new Date("Jan 21 2014 19:01:05")
        },
        {
            "id": "2",
            "firstName": "Ben",
            "lastName": "Warner",
            "birthday": new Date("Jul 28 2005 00:29:40"),
            "diagnosis": ["Autism, OCD"],
            "startDate": new Date("Jul 24 2010 17:29:18")
        },
        {
            "id": "3",
            "firstName": "Nicole",
            "lastName": "Johnson",
            "birthday": new Date("Jun 05 2004 09:48:55"),
            "diagnosis": ["ADD, PWS"],
            "startDate": new Date("Sep 06 2006 09:08:59")
        },
        {
            "id": "4",
            "firstName": "Brittany",
            "lastName": "Pak",
            "birthday": new Date("May 29 2005 09:03:55"),
            "diagnosis": ["Autism"],
            "startDate": new Date("Jan 10 2008 04:54:00")
        }
    ];

    this.performances = [
      {
        "patientId": 0,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 4,
        "pass": false
      },
      {
        "patientId": 0,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 5,
        "pass": true
      },
      {
        "patientId": 0,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "medium",
        "goalFrequency": 5,
        "actualFrequency": 3,
        "pass": false
      },
      {
        "patientId": 0,
        "date": new Date(1459738269 * 1000),
        "texture": "stuffed dog",
        "intensity": "medium",
        "goalFrequency": 5,
        "actualFrequency": 4,
        "pass": false
      },
      {
        "patientId": 1,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 4,
        "pass": false
      },
      {
        "patientId": 1,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 5,
        "pass": true
      },
      {
        "patientId": 1,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "medium",
        "goalFrequency": 5,
        "actualFrequency": 3,
        "pass": false
      },
      {
        "patientId": 1,
        "date": new Date(1459738269 * 1000),
        "texture": "stuffed dog",
        "intensity": "medium",
        "goalFrequency": 5,
        "actualFrequency": 4,
        "pass": false
      },
      {
        "patientId": 2,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 5,
        "pass": true
      },
      {
        "patientId": 2,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "medium",
        "goalFrequency": 5,
        "actualFrequency": 4,
        "pass": false
      },
      {
        "patientId": 2,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "medium",
        "goalFrequency": 5,
        "actualFrequency": 5,
        "pass": true
      },
      {
        "patientId": 2,
        "date": new Date(1459824669 * 1000),
        "texture": "stuffed dog",
        "intensity": "high",
        "goalFrequency": 5,
        "actualFrequency": 2,
        "pass": false
      },
      {
        "patientId": 3,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 3,
        "pass": false
      },
      {
        "patientId": 3,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 3,
        "pass": false
      },
      {
        "patientId": 3,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 4,
        "pass": false
      },
      {
        "patientId": 3,
        "date": new Date(1459738269 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 5,
        "pass": true
      },
      {
        "patientId": 4,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 1,
        "pass": false
      },
      {
        "patientId": 4,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 1,
        "pass": false
      },
      {
        "patientId": 4,
        "date": new Date(1459651869 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 2,
        "pass": false
      },
      {
        "patientId": 4,
        "date": new Date(1459738269 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 3,
        "pass": false
      },
      {
        "patientId": 4,
        "date": new Date(1459738269 * 1000),
        "texture": "stuffed dog",
        "intensity": "low",
        "goalFrequency": 5,
        "actualFrequency": 4,
        "pass": false
      }
    ];

  }

  getPatients() : Patient[] {
    return this.patients;
  }

  getPatient(id: number): Promise<Patient> {
    return Promise.resolve(this.patients[id]);
  }

  getPerformance(id: number): Promise<Performance[]> {
    return Promise.resolve(this.performances.filter((p: Performance) => p.patientId == id));
  }
}
