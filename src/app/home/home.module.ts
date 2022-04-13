import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
  ],
  entryComponents: [

  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  providers: [

  ]
})
export class HomeModule {

}
