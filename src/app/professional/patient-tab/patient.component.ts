import { Component, OnInit } from '@angular/core';
import {UserService} from "@shared/services/user.service";
import {MatDialog} from "@angular/material/dialog";
import { of } from 'rxjs';
import {PatientCreationUpdatingDialogComponent} from "./patient-creation-updating-dialog.component";
import {PatientService} from "@shared/services/patient.service";
import {AuthService} from "@core/auth.service";

@Component({
  selector: 'app-patient-tab',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients = of([]);
  title: "Patients";
  constructor(private userService: UserService, private dialog: MatDialog, private patientService: PatientService, private auth: AuthService) { }

  ngOnInit(): void {
    this.updateTable();
  }

  create() {
      this.dialog
        .open(PatientCreationUpdatingDialogComponent)
         .afterClosed()
         .subscribe(() => {
           this.updateTable();
         });
    }

  // delete($event: any) {
  //
  // }
  //
  update($event: any) {

  }
  //
  // read($event: any) {
  //
  // }

  updateTable(){
    this.patients= of([]);
    if(this.auth.isProfessional()){
      this.patients = this.patientService.searchByProfessional(String(this.auth.getName()));
    }else{
      this.patients = this.patientService.searchAll();
    }
  }
}
