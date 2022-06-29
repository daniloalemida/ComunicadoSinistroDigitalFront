import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorModule } from '../form-error/form-error.module';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SnackbarModule } from '../snack-bar/snack-bar.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegisterClaimComponent } from './register-claim.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { InfoStepComponent } from './steps/info-step/info-step.component';
import { ResponsibleInfoStepComponent } from './steps/responsible-info-step/responsible-info-step.component';
import { ClaimInfoStepComponent } from './steps/claim-info-step/claim-info-step.component';
import { ThirdPartyStepComponent } from './steps/third-party-step/third-party-step.component';
import { ClaimLocationStepComponent } from './steps/claim-location-step/claim-location-step.component';
import { IncidentReportStepComponent } from './steps/incident-report-step/incident-report-step.component';
import { VehiclePhotosStepComponent } from './steps/vehicle-photos-step/vehicle-photos-step.component';
import { ScheduleStepComponent } from './steps/schedule-step/schedule-step.component';
import { ResponsibilityStatementStepComponent } from './steps/responsibility-statement-step/responsibility-statement-step.component';



const routes: Routes = [
  {
    path: '',
    component: RegisterClaimComponent,
  }
];

@NgModule({
  declarations: [
    RegisterClaimComponent,
    InfoStepComponent,
    ResponsibleInfoStepComponent,
    ClaimInfoStepComponent,
    ThirdPartyStepComponent,
    ClaimLocationStepComponent,
    IncidentReportStepComponent,
    VehiclePhotosStepComponent,
    ScheduleStepComponent,
    ResponsibilityStatementStepComponent
  ],
  imports: [
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatExpansionModule,
    MatRadioModule,
    SnackbarModule,
    MatSnackBarModule,
    CommonModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCardModule,
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
  exports: [RegisterClaimComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterClaimModule { }
