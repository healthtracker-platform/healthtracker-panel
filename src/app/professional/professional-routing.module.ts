import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfessionalComponent} from './professional.component';
const routes: Routes = [
  {
    path: '',
    component: ProfessionalComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule {
}
