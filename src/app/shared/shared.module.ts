import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

import {MaterialModule} from '@shared/material.module';

import {CancelYesDialogComponent} from '@shared/dialogs/cancel-yes-dialog.component';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';

import {UppercaseWords} from '@shared/pipes/UppercaseWordsPipe';

import {CrudComponent} from '@shared/components/crud.component';
import {DateComponent} from '@shared/components/date.component';
import {SearchComponent} from '@shared/components/search.component';
import {LoginComponent} from "@shared/components/login.component";
import {PatientReadDetailDialogComponent} from "@shared/dialogs/patient-read-detail.dialog.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule
  ],
  declarations: [
    CancelYesDialogComponent,
    CrudComponent,
    DateComponent,
    ReadDetailDialogComponent,
    PatientReadDetailDialogComponent,
    SearchComponent,
    UppercaseWords,
    LoginComponent
  ],
  exports: [
    CancelYesDialogComponent,
    CommonModule,
    CrudComponent,
    DateComponent,
    FlexLayoutModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReadDetailDialogComponent,
    PatientReadDetailDialogComponent,
    SearchComponent,
    UppercaseWords,
    LoginComponent
  ],
  entryComponents: [
    CancelYesDialogComponent,
    ReadDetailDialogComponent,
    PatientReadDetailDialogComponent
  ]
})
export class SharedModule {
}
