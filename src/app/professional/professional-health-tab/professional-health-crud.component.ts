import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";
import {Patient} from "@shared/models/patient.model";
import {Professional} from "@shared/models/professional.model";

@Component({
  selector: 'app-professional-health-crud',
  templateUrl: './professional-health-crud.component.html',
  styleUrls: ['./professional-health-crud.component.css']
})
export class ProfessionalHealthCrudComponent implements OnInit {

  title = 'Professional';
  @Input ()
  professionals = of([]);
  columnsHeader: Array<string> = ["name", "actions"];
  @Output() create = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // isClosed(complaint: Complaint): boolean{
  //   return ComplaintState.CLOSED == complaint.state;
  // }

  onCreate(): void{
    this.create.emit();
  }

  read(professional: Professional): void{
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Health Professional Details',
        object: of(professional)
      }
    });
  }

  delete(professional: Professional): void {
    // this.patientService.delete(String(complaint.id));
  }

  onUpdate(item: Professional){
    // this.update.emit(item);
  }

}
