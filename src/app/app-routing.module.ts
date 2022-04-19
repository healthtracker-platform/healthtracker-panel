import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'professional'},
  {path: 'professional', loadChildren: () => import('./professional/professional.module').then(module => module.ProfessionalModule)}, // lazy load
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
