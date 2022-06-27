import { Component, OnInit } from '@angular/core';
import {UserService} from "@shared/services/user.service";
import {MatDialog} from "@angular/material/dialog";
import { of } from 'rxjs';
import {ProfessionalService} from "@shared/services/professional.service";
import {
  ProfessionalHealthCreationUpdatingDialogComponent
} from "./professional-health-creation-updating-dialog.component";

@Component({
  selector: 'app-professional-health-tab',
  templateUrl: './professional-health.component.html',
  styleUrls: ['./professional-health.component.css']
})
export class ProfessionalHealthComponent implements OnInit {
  professionals = of([]);
  constructor(private userService: UserService, private dialog: MatDialog, private professionalService: ProfessionalService) { }

  ngOnInit(): void {
    this.updateTable();
  }

  create() {
    this.dialog
      .open(ProfessionalHealthCreationUpdatingDialogComponent)
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
    this.professionals= of([]);
    this.professionals = this.professionalService.searchAll();
  }
}
