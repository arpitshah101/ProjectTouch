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
        "patientId":0,
        "date": new Date(1460260800000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460260800000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460347200000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460347200000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460347200000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460433600000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460520000000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460520000000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460606400000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460692800000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460692800000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460779200000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460865600000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460865600000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1460865600000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1460952000000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1460952000000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1461038400000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1461124800000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1461124800000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1461124800000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1461211200000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1461211200000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1461211200000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1461297600000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1461384000000),
        "texture":"food",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1461470400000),
        "texture":"food",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1461556800000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1461556800000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1461643200000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1461729600000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1461816000000),
        "texture":"fabric",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1461902400000),
        "texture":"fabric",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462075200000),
        "texture":"fabric",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1462075200000),
        "texture":"apple",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1462075200000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462161600000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462248000000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462334400000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462420800000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462420800000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462420800000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462507200000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1462507200000),
        "texture":"apple",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462507200000),
        "texture":"apple",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462507200000),
        "texture":"apple",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1462593600000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462593600000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462680000000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462766400000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462852800000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462939200000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1462939200000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463025600000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463025600000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463112000000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463198400000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463198400000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463284800000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463371200000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463371200000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1463371200000),
        "texture":"orange",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463457600000),
        "texture":"orange",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1463544000000),
        "texture":"orange",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463544000000),
        "texture":"orange",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463544000000),
        "texture":"orange",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463630400000),
        "texture":"orange",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1463716800000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463716800000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463803200000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463803200000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463803200000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463889600000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1463976000000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1464062400000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1464148800000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1464235200000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1464321600000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1464408000000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1464408000000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1464494400000),
        "texture":"water bottle",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1464753600000),
        "texture":"water bottle",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1464753600000),
        "texture":"water bottle",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1464840000000),
        "texture":"soda can",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1464840000000),
        "texture":"soda can",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1464926400000),
        "texture":"soda can",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":0,
        "date": new Date(1464926400000),
        "texture":"soda can",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1465012800000),
        "texture":"soda can",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1465099200000),
        "texture":"soda can",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1465185600000),
        "texture":"soda can",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":0,
        "date": new Date(1465185600000),
        "texture":"soda can",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465444800000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":1,
        "date": new Date(1465444800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465444800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465444800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465444800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465444800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465531200000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465531200000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465617600000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465704000000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465704000000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465790400000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465790400000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465790400000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465876800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465876800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1465963200000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466049600000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":1,
        "date": new Date(1466136000000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466136000000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466136000000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466222400000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":1,
        "date": new Date(1466308800000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":1,
        "date": new Date(1466395200000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466395200000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466481600000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466568000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466568000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466654400000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466654400000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466740800000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466827200000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1466913600000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467000000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467000000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467000000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467000000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467000000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467086400000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467172800000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467345600000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467432000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467432000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467432000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467432000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467432000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467518400000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467604800000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467691200000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467777600000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467864000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467864000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467864000000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467950400000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467950400000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1467950400000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468036800000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":1,
        "date": new Date(1468036800000),
        "texture":"food",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468036800000),
        "texture":"food",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468123200000),
        "texture":"food",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":1,
        "date": new Date(1468123200000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468123200000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468123200000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468123200000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":1,
        "date": new Date(1468123200000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468123200000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468123200000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468209600000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468296000000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":1,
        "date": new Date(1468296000000),
        "texture":"fabric",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468382400000),
        "texture":"fabric",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468382400000),
        "texture":"fabric",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468468800000),
        "texture":"fabric",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468555200000),
        "texture":"fabric",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":1,
        "date": new Date(1468641600000),
        "texture":"apple",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468728000000),
        "texture":"apple",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":1,
        "date": new Date(1468728000000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468728000000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468814400000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":1,
        "date": new Date(1468814400000),
        "texture":"apple",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468814400000),
        "texture":"apple",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":1,
        "date": new Date(1468814400000),
        "texture":"apple",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1456808400000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1456894800000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":2,
        "date": new Date(1456981200000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1456981200000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1456981200000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457067600000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457067600000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457067600000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457067600000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":2,
        "date": new Date(1457154000000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457154000000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457240400000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457326800000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457413200000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457499600000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457586000000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457672400000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457758800000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":2,
        "date": new Date(1457758800000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":2,
        "date": new Date(1457845200000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1457845200000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":2,
        "date": new Date(1457928000000),
        "texture":"food",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1458014400000),
        "texture":"food",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1458014400000),
        "texture":"food",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1458014400000),
        "texture":"food",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1458100800000),
        "texture":"food",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":2,
        "date": new Date(1458187200000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":2,
        "date": new Date(1458273600000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1458360000000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":2,
        "date": new Date(1458360000000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":2,
        "date": new Date(1458360000000),
        "texture":"fabric",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":3,
        "date": new Date(1462680000000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":3,
        "date": new Date(1462680000000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":3,
        "date": new Date(1462766400000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":3,
        "date": new Date(1462852800000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":3,
        "date": new Date(1462852800000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":3,
        "date": new Date(1462852800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":3,
        "date": new Date(1462852800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":3,
        "date": new Date(1462852800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":3,
        "date": new Date(1462852800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":3,
        "date": new Date(1462852800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":3,
        "date": new Date(1462852800000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":3,
        "date": new Date(1462939200000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":3,
        "date": new Date(1463025600000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":3,
        "date": new Date(1463025600000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459310400000),
        "texture":"stuffed dog",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1459396800000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459483200000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459483200000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459569600000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459569600000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459569600000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459569600000),
        "texture":"stuffed dog",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1459569600000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459569600000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459569600000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459656000000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459742400000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459828800000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1459915200000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460001600000),
        "texture":"stuffed dog",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1460001600000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460001600000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460001600000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460001600000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460088000000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460174400000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460260800000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460260800000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460347200000),
        "texture":"food",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1460347200000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460347200000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460433600000),
        "texture":"food",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1460433600000),
        "texture":"food",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1460520000000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460606400000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460606400000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460606400000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460692800000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460692800000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460779200000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460779200000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460865600000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460865600000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460865600000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460865600000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460865600000),
        "texture":"fabric",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1460865600000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460865600000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460952000000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1460952000000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1461038400000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1461124800000),
        "texture":"fabric",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1461211200000),
        "texture":"fabric",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1461211200000),
        "texture":"apple",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1461297600000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1461384000000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1461384000000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1461470400000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1461470400000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":4,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1461556800000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1461643200000),
        "texture":"apple",
        "intensity":"medium",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1461729600000),
        "texture":"apple",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1461816000000),
        "texture":"apple",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1461902400000),
        "texture":"apple",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":1,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1461988800000),
        "texture":"apple",
        "intensity":"high",
        "goalFrequency":5,
        "actualFrequency":5,
        "pass":true
      },
      {
        "patientId":4,
        "date": new Date(1461988800000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":3,
        "pass":false
      },
      {
        "patientId":4,
        "date": new Date(1462075200000),
        "texture":"orange",
        "intensity":"low",
        "goalFrequency":5,
        "actualFrequency":2,
        "pass":false
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
