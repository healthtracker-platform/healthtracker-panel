import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {ProfessionalRoutingModule} from './professional-routing.module';
import {LoginComponent} from '@shared/components/login.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import {PatientCreationUpdatingDialogComponent} from "./patient/patient-creation-updating-dialog.component";
import {
  ProfessionalHealthCreationUpdatingDialogComponent
} from "./professional/professional-health-creation-updating-dialog.component";
import {ProfessionalHealthComponent} from "./professional/professional-health.component";
import {ProfessionalComponent} from "./professional.component";

@NgModule({
  declarations: [
    ProfessionalHealthCreationUpdatingDialogComponent,
    ProfessionalHealthComponent,
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
  exports: [
    LoginComponent
  ],
  providers: []
})
export class ProfessionalModule {

}
