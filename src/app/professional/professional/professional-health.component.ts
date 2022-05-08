import { Component, OnInit } from '@angular/core';
import {UserService} from "@shared/services/user.service";
import {MatDialog} from "@angular/material/dialog";
import { of } from 'rxjs';
import {ProfessionalHealthCreationUpdatingDialogComponent} from "./professional-health-creation-updating-dialog.component";

@Component({
  selector: 'app-professional',
  templateUrl: './professional-health.component.html',
  styleUrls: ['./professional-health.component.css']
})
export class ProfessionalHealthComponent implements OnInit {
  patients = of([]);
  title: "Professionals";
  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  create() {
      this.dialog
        .open(ProfessionalHealthCreationUpdatingDialogComponent)
    }
}
