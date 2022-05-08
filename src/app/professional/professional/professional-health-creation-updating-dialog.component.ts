import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {User} from "@shared/models/user.model";
import {UserService} from "@shared/services/user.service";
import {Role} from "@core/role.model";
import {Sex} from "@shared/models/sex.model";
import {PatientService} from "@shared/services/patient.service";
import {Patient} from "@shared/models/patient.model";

@Component({
  templateUrl: 'professional-health-creation-updating-dialog.component.html',
  styleUrls: ['professional-health-dialog.component.css']
})

export class ProfessionalHealthCreationUpdatingDialogComponent {
  user: User;
  title: string;
  oldId: string;
  role: string;
  sexGroup= ["Male","Female"];
  roleGroup= ["Health Professional","Admin"];

  constructor(@Inject(MAT_DIALOG_DATA) data: User, private userService: UserService,  private dialog: MatDialog, private patientService: PatientService) {
    this.title = data ? 'Update Professional' : 'Create Professional';
    this.user = data ? data : {id: undefined, firstName: undefined, familyName: undefined, role: undefined, sex:"Male", active:true, email:undefined, password:undefined};
    this.oldId = data ? data.id : undefined;
    this.role = "Health Professional"
  }

  isCreated(): boolean{
    return this.oldId === undefined;
  }

  create(): void {
    if(this.user.sex == "Male"){
      this.user.sex = Sex.MALE
    }
    if(this.user.sex == "Female"){
      this.user.sex = Sex.FEMALE
    }

    if(this.role == "Admin"){
      this.user.role = Role.ADMIN
    }
    if(this.role == "Health Professional"){
      this.user.role = Role.PROFESSIONAL
    }

    const patient = new Patient();
    patient.firstName = this.user.firstName;
    patient.familyName = this.user.familyName;
    patient.email = this.user.email;
    patient.gender = this.user.sex;

    this.userService
      .create(this.user)
      .subscribe(() => this.patientService.create(patient).subscribe(()=> this.dialog.closeAll()));
  }

  update(): void{
    this.userService
      .update(this.oldId, this.user)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    return this.check(this.user.sex) || this.check(this.user.password) || this.check(this.user.familyName) || this.check(this.user.firstName) || this.check(this.user.email);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}
