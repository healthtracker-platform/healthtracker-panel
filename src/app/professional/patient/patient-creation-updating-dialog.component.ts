import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {AuthService} from '@core/auth.service';
import {User} from "@shared/models/user.model";
import {UserService} from "@shared/services/user.service";
import {Role} from "@core/role.model";
import {Sex} from "@shared/models/sex.model";

@Component({
  templateUrl: 'patient-creation-updating-dialog.component.html',
  styleUrls: ['patient-dialog.component.css']
})

export class PatientCreationUpdatingDialogComponent {
  user: User;
  title: string;
  oldId: string;
  sexGroup= ["Male","Female"];

  constructor(@Inject(MAT_DIALOG_DATA) data: User, private userService: UserService, private dialog: MatDialog, private authService: AuthService) {
    this.title = data ? 'Update Patient' : 'Create Patient';
    this.user = data ? data : {id: undefined, firstName: undefined, familyName: undefined, role: Role.PATIENT, sex:"Male", active:true, email:undefined, password:undefined};
    this.oldId = data ? data.id : undefined;
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
    this.userService
      .create(this.user)
      .subscribe(() => this.dialog.closeAll());
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
