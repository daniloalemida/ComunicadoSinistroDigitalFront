import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './form-error.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    FormErrorComponent
  ],
  imports: [
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormErrorComponent]
})
export class FormErrorModule { }
