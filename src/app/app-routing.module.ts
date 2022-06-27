import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "@shared/components/login.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'health-professional', loadChildren: () => import('./professional/professional.module').then(module => module.ProfessionalModule)}, // lazy load
  {
    path: 'login',
    component: LoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
