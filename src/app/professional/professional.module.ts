import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {ProfessionalComponent} from './professional.component';
import {ProfessionalRoutingModule} from './professional-routing.module';
import {LoginComponent} from '@shared/components/login.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import {PatientCreationUpdatingDialogComponent} from "./patient/patient-creation-updating-dialog.component";

@NgModule({
  declarations: [
    ProfessionalComponent,
    AdminComponent,
    PatientComponent,
    PatientCreationUpdatingDialogComponent
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
