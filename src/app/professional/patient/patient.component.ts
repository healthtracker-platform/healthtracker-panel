import { Component, OnInit } from '@angular/core';
import {UserService} from "@shared/services/user.service";
import {MatDialog} from "@angular/material/dialog";
import { of } from 'rxjs';
import {PatientCreationUpdatingDialogComponent} from "./patient-creation-updating-dialog.component";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients = of([]);
  title: "Patients";
  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  create() {
      this.dialog
        .open(PatientCreationUpdatingDialogComponent)
        // .afterClosed()
        // .subscribe(() => this.searchAll());
    }

  // delete($event: any) {
  //
  // }
  //
  // update($event: any) {
  //
  // }
  //
  // read($event: any) {
  //
  // }
}
