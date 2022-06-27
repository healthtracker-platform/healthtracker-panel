import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {ProfessionalRoutingModule} from './professional-routing.module';
import {
  ProfessionalHealthCreationUpdatingDialogComponent
} from "./professional-health-tab/professional-health-creation-updating-dialog.component";
import {ProfessionalHealthComponent} from "./professional-health-tab/professional-health.component";
import {PatientCrudComponent} from "./patient-tab/patient-crud.component";
import {PatientCreationUpdatingDialogComponent} from "./patient-tab/patient-creation-updating-dialog.component";
import {PatientComponent} from "./patient-tab/patient.component";
import {AdminComponent} from "./admin/admin.component";
import {SearchProfessionalByNameComponent} from "./patient-tab/search-professional-by-name.component";
import {HomeComponent} from "./home.component";
import {ProfessionalComponent} from "./professional/professional.component";
import {ProfessionalHealthCrudComponent} from "./professional-health-tab/professional-health-crud.component";


@NgModule({
  declarations: [
    ProfessionalHealthCreationUpdatingDialogComponent,
    ProfessionalHealthComponent,
    SearchProfessionalByNameComponent,
    AdminComponent,
    PatientComponent,
    PatientCreationUpdatingDialogComponent,
    PatientCrudComponent,
    HomeComponent,
    ProfessionalComponent,
    ProfessionalHealthCrudComponent
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
