import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {Patient} from "@shared/models/patient.model";
import {Register} from "@shared/models/register.model";

@Component({
  templateUrl: 'patient-read-detail.dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class PatientReadDetailDialogComponent {
  title: string;
  patient: Observable<Patient>;
  weight: Observable<Register>[];
  waist: Observable<Register>[];
  emotion: Observable<Register>[];
  columnsHeaderWeight: Array<string> = ["date", "weight"];
  columnsHeaderWaist: Array<string> = ["date", "waist"];
  columnsHeaderEmotion: Array<string> = ["date", "emotion"];

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.title = data.title;
    this.patient = data.patient;
    this.weight = data.weight;
    this.waist = data.waist;
    this.emotion = data.emotion;
  }
}
