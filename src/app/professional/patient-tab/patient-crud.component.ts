import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from "rxjs";
import {AuthService} from "@core/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";
import {PatientService} from "@shared/services/patient.service";
import {Patient} from "@shared/models/patient.model";
import {PatientReadDetailDialogComponent} from "@shared/dialogs/patient-read-detail.dialog.component";
import {RegisterService} from "@shared/services/register.service";
import {Register} from "@shared/models/register.model";

@Component({
  selector: 'app-patient-tab-crud',
  templateUrl: './patient-crud.component.html',
  styleUrls: ['./patient-crud.component.css']
})
export class PatientCrudComponent implements OnInit {

  title = 'Patient';
  @Input ()
  patients = of([]);
  columnsHeader: Array<string> = ["name", "actions"];
  weight: Observable<Register>[];
  waist: Observable<Register>[];
  emotion: Observable<Register>[];
  @Output() create = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();


  constructor(private dialog: MatDialog, private patientService: PatientService, private auth: AuthService, private registerService: RegisterService) { }

  ngOnInit(): void {

  }

  // isClosed(complaint: Complaint): boolean{
  //   return ComplaintState.CLOSED == complaint.state;
  // }

  onCreate(): void{
    this.create.emit();
  }

  read(patient: Patient): void{
    this.dialog.open(PatientReadDetailDialogComponent, {
      data: {
        title: patient.firstName + " " + patient.familyName,
        patient: of(patient),
        weight: this.registerService.searchWeightByName(patient.firstName + " " + patient.familyName),
        waist: this.registerService.searchWaistByName(patient.firstName + " " + patient.familyName),
        emotion: this.registerService.searchEmotionByName(patient.firstName + " " + patient.familyName),
      }
    });
  }

  delete(patient: Patient): void {
    // this.patientService.delete(String(complaint.id));
  }

  onUpdate(item: Patient){
    // this.update.emit(item);
  }

  isProfessional(): boolean {
    console.log(this.isProfessional())
    return this.auth.isProfessional();
  }
}
