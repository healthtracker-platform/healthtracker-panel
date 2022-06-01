import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {ProfessionalRoutingModule} from './professional-routing.module';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import {PatientCreationUpdatingDialogComponent} from "./patient/patient-creation-updating-dialog.component";
import {
  ProfessionalHealthCreationUpdatingDialogComponent
} from "./professional/professional-health-creation-updating-dialog.component";
import {ProfessionalHealthComponent} from "./professional/professional-health.component";
import {ProfessionalComponent} from "./professional.component";
import {SearchProfessionalByNameComponent} from "./patient/search-professional-by-name.component";
import {NgProgressModule} from "ngx-progressbar";
import {NgProgressHttpModule} from "ngx-progressbar/http";

@NgModule({
  declarations: [
    ProfessionalHealthCreationUpdatingDialogComponent,
    ProfessionalHealthComponent,
    SearchProfessionalByNameComponent,
    AdminComponent,
    PatientComponent,
    PatientCreationUpdatingDialogComponent,
    ProfessionalComponent
  ],
  entryComponents: [],
    imports: [
        ProfessionalRoutingModule,
        SharedModule,
    ],

  providers: []
})
export class ProfessionalModule {

}
