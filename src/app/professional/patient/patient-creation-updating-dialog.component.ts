import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {AuthService} from '@core/auth.service';
import {User} from "@shared/models/user.model";
import {UserService} from "@shared/services/user.service";
import {Role} from "@core/role.model";
import {Sex} from "@shared/models/sex.model";
import {PatientService} from "@shared/services/patient.service";
import {Patient} from "@shared/models/patient.model";
import {Observable, of} from "rxjs";
import {ProfessionalService} from "@shared/services/professional.service";
import {ProfessionalName} from "@shared/models/professional-name.model";
import {Professional} from "@shared/models/professional.model";
import {NgProgressHttpModule} from "ngx-progressbar/http";

@Component({
  templateUrl: 'patient-creation-updating-dialog.component.html',
  styleUrls: ['patient-dialog.component.css']
})

export class PatientCreationUpdatingDialogComponent {
  user: User;
  title: string;
  oldId: string;
  sexGroup= ["Male","Female"];
  professionalName: string;
  overlay = false;

  constructor(@Inject(MAT_DIALOG_DATA) data: User, private userService: UserService,  private dialog: MatDialog, private patientService: PatientService, private professionalService : ProfessionalService) {
    this.title = data ? 'Update Patient' : 'Create Patient';
    this.user = data ? data : {id: undefined, firstName: undefined, familyName: undefined, role: Role.PATIENT, sex:"Male", active:true, email:undefined, password:undefined};
    this.oldId = data ? data.id : undefined;
  }


  isCreated(): boolean{
    return this.oldId === undefined;
  }

  create(): void {
    this.overlay = true;
    if(this.user.sex == "Male"){
      this.user.sex = Sex.MALE
    }
    if(this.user.sex == "Female"){
      this.user.sex = Sex.FEMALE
    }

    const patient = new Patient();
    patient.firstName = this.user.firstName;
    patient.familyName = this.user.familyName;
    patient.email = this.user.email;
    patient.gender = this.user.sex;

    this.professionalService.searchProfessionalByName(this.professionalName).subscribe(professional=>{
      patient.professional = professional.id;
      this.userService
        .create(this.user)
        .subscribe(() => this.patientService.create(patient).subscribe(()=> {
          this.overlay = false;
          this.dialog.closeAll()}));
    });



  }

  update(): void{
    this.userService
      .update(this.oldId, this.user)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    return this.check(this.user.sex) || this.check(this.user.password) || this.check(this.user.familyName) || this.check(this.user.firstName) || this.check(this.user.email) || this.check(this.professionalName);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }

}
