import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorModule } from '../form-error/form-error.module';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SnackbarModule } from '../snack-bar/snack-bar.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingDotsModule } from '../loading-dots/loading-dots.module';
import { ConfirmationPageComponent } from './confirmation-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationPageComponent,
  }
];

@NgModule({
  declarations: [
    ConfirmationPageComponent,
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    LoadingDotsModule,
    SnackbarModule,
    MatSnackBarModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormErrorModule,
    NgxMaskModule.forRoot({
      validation: true,
    }),
    RouterModule.forChild(routes),
  ],
  providers: [
    MatDatepickerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConfirmationPageModule { }
